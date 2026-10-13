import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';

const fail = (message) => { throw new Error(message); };
const read = (file) => fs.readFileSync(file, 'utf8');
const parse = (text, pattern, label) => { const match = text.match(pattern); if (!match) fail(`cannot parse ${label}`); return JSON.parse(match[1]); };
const manifest = JSON.parse(read('publishing/2026-10-13/manifest.json'));
const blogSource = read('app/blog/october13-batch.ts');
const researchSource = read('app/research/october13-research-batch.ts');
const blogs = parse(blogSource, /export const october13BlogPosts = ([\s\S]*?) as const;/, 'Blog registry');
const rich = parse(blogSource, /export const october13BlogArticles: Record<string, RichArticle> = ([\s\S]*?);\n$/, 'Blog articles');
const research = parse(researchSource, /export const october13ResearchPosts: readonly ResearchPost\[\] = ([\s\S]*?);\n$/, 'Research articles');
const all = [...blogs.map((item) => ({ ...item, kind: 'Blog', article: rich[item.slug] })), ...research.map((item) => ({ ...item, kind: 'Research', article: item }))];

if (manifest.site !== 'HumanResourcesOutsourced.com' || manifest.canonicalDomain !== 'https://humanresourcesoutsourced.com') fail('site identity mismatch');
if (manifest.date !== '2026-10-13' || manifest.baseSha !== '12f2d6bc89749d97e19a5e12d5f55cc2c7d685ac') fail('date or immutable base mismatch');
if (blogs.length !== 12 || Object.keys(rich).length !== 12 || research.length !== 5 || manifest.items.length !== 17) fail('expected exactly 12 Blog and 5 Research');
if (all.some((item) => !item.article)) fail('registry item lacks article');
if (new Set(all.map((item) => item.slug)).size !== 17 || new Set(all.map((item) => item.title)).size !== 17) fail('duplicate slug or title');
if (all.some((item) => /\b(?:2026|oct(?:ober)?\s+13|10[-/]13)\b/i.test(item.title))) fail('date-bearing title');

const wiring = {
  blogRegistry: read('app/data.ts'), blogDetails: read('app/blog/article-data.ts'), researchRegistry: read('app/fleet-data.ts'),
  blogIndex: read('app/blog/page.tsx'), blogPages: read('app/blog/page/[page]/page.tsx'), blogDetail: read('app/blog/[slug]/page.tsx'),
  researchIndex: read('app/research/page.tsx'), researchDetail: read('app/research/[slug]/page.tsx'), sitemap: read('app/sitemap.xml/route.ts')
};
if (!wiring.blogRegistry.includes('...october13BlogPosts') || !wiring.blogDetails.includes('...october13BlogArticles') || !wiring.researchRegistry.includes('...october13ResearchPosts')) fail('separate registries missing');
for (const key of ['blogIndex', 'blogPages', 'blogDetail', 'researchIndex', 'researchDetail']) if (!wiring[key].includes('Published <time')) fail(`visible date missing: ${key}`);
if (!wiring.blogDetail.includes('article.related') || !wiring.researchDetail.includes('Related Research')) fail('family-specific related behavior missing');
if (!wiring.blogDetail.includes('takeaways') || !wiring.researchIndex.includes('research-hero-card')) fail('family-specific sidebar/panel behavior missing');
if (!wiring.sitemap.includes('blogs.map') || !wiring.sitemap.includes('allResearchPosts.map')) fail('sitemap registry routes missing');

const imageHashes = new Set();
const paragraphs = [];
for (const item of all) {
  if (item.article.published !== '2026-10-13' || (item.kind === 'Blog' ? item.article.updated !== '2026-10-13' : item.article.modified !== '2026-10-13')) fail(`publication fields mismatch: ${item.slug}`);
  const entry = manifest.items.find((value) => value.slug === item.slug && value.title === item.title && value.kind === item.kind);
  if (!entry || entry.wordCount < (item.kind === 'Research' ? 3000 : 2500)) fail(`depth or manifest entry failed: ${item.slug} (${entry?.wordCount})`);
  const collision = spawnSync('git', ['grep', '-F', item.slug, manifest.baseSha, '--', 'app', 'content'], { encoding: 'utf8' });
  if (collision.status === 0) fail(`slug collision with immutable base: ${item.slug}`);
  if (!fs.existsSync(entry.thumbnailPath)) fail(`missing thumbnail: ${entry.thumbnailPath}`);
  const svg = read(entry.thumbnailPath);
  if (!svg.includes('width="1200" height="630"') || !svg.includes(`<title id="title">${item.title.replaceAll('&', '&amp;')}</title>`)) fail(`thumbnail contract failed: ${item.slug}`);
  if (/October 13|2026-10-13/i.test(svg)) fail(`dated thumbnail: ${item.slug}`);
  imageHashes.add(crypto.createHash('sha256').update(svg).digest('hex'));
  if (item.kind === 'Blog') for (const section of item.article.sections) for (const paragraph of section.paragraphs) paragraphs.push({ slug: item.slug, raw: paragraph });
  if (item.kind === 'Research') for (const section of item.article.sections) paragraphs.push({ slug: item.slug, raw: section.body });
}
if (imageHashes.size !== 17) fail('thumbnails are not 17 unique native files');

const allowed = new Set(['www.nist.gov','csrc.nist.gov','www.gao.gov','www.eeoc.gov','www.dol.gov','www.ftc.gov','www.cisa.gov','www.archives.gov','privacy.gov.ph']);
for (const item of research) {
  if (item.sources?.length !== 10 || new Set(item.sources.map((source) => source.url)).size !== 10) fail(`Research source depth failed: ${item.slug}`);
  for (const source of item.sources) { const url = new URL(source.url); if (url.protocol !== 'https:' || !allowed.has(url.hostname)) fail(`non-authoritative source: ${source.url}`); }
  if (!item.sections.some((section) => section.body.startsWith('Limitations.'))) fail(`Research limitations missing: ${item.slug}`);
}

const seen = new Map();
for (const paragraph of paragraphs) {
  const normalized = paragraph.raw.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  if (normalized.split(' ').length < 25) continue;
  if (seen.has(normalized)) fail(`duplicate substantive paragraph: ${seen.get(normalized)} and ${paragraph.slug}`);
  seen.set(normalized, paragraph.slug);
}
const priorFiles = execFileSync('git', ['ls-tree', '-r', '--name-only', manifest.baseSha, '--', 'app', 'content'], { encoding: 'utf8' }).trim().split('\n').filter(Boolean);
const priorCorpus = priorFiles.map((file) => { try { return execFileSync('git', ['show', `${manifest.baseSha}:${file}`], { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 }); } catch { return ''; } }).join('\n');
for (const paragraph of paragraphs) if (priorCorpus.includes(paragraph.raw)) fail(`paragraph duplicates immutable base: ${paragraph.slug}`);

console.log(JSON.stringify({ status:'PASS', date:manifest.date, blog:12, research:5, minBlogWords:Math.min(...manifest.items.filter((x)=>x.kind==='Blog').map((x)=>x.wordCount)), minResearchWords:Math.min(...manifest.items.filter((x)=>x.kind==='Research').map((x)=>x.wordCount)), researchHttpsSources:50, uniqueExactTitleThumbnails:17, duplicateSubstantiveParagraphs:0, immutableBaseCollisions:0, visibleDates:true, separateSystems:true, registryRoutesSidebarRelatedSitemap:true }, null, 2));
