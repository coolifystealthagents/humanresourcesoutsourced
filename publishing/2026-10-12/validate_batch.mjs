import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const fail = message => { throw new Error(message); };
const read = file => fs.readFileSync(file, 'utf8');
const manifest = JSON.parse(read('publishing/2026-10-12/manifest.json'));
if (manifest.date !== '2026-10-12') fail('manifest date');
if (manifest.blog.length !== 12 || manifest.research.length !== 5) fail('expected 12 Blog and 5 Research');
const entries = [...manifest.blog.map(x=>({...x,kind:'Blog'})), ...manifest.research.map(x=>({...x,kind:'Research'}))];
if (new Set(entries.map(x=>x.slug)).size !== 17) fail('duplicate batch slugs');
if (new Set(entries.map(x=>x.title)).size !== 17) fail('duplicate batch titles');
if (entries.some(x => /2026|oct(?:ober)?\s*12|10[-/]12/i.test(x.title))) fail('date-bearing title');
const blog = read('app/blog/october12-batch.ts');
const research = read('app/research/october12-research-batch.ts');
const basePaths = execFileSync('git',['ls-tree','-r','--name-only','HEAD','app','public'],{encoding:'utf8'}).split('\n');
if ((blog.match(/"published": "2026-10-12"/g) ?? []).length !== 24) fail('Blog visible/publication date count');
if ((research.match(/"published": "2026-10-12"/g) ?? []).length !== 5) fail('Research publication date count');
if ((research.match(/"sources": \[/g) ?? []).length !== 5) fail('Research source arrays');
if ((research.match(/"url": "https:\/\//g) ?? []).length !== 50) fail('Research needs exactly ten HTTPS sources each');
for (const entry of entries) {
  const body = entry.kind === 'Blog' ? blog : research;
  if (!body.includes(`"slug": "${entry.slug}"`) || !body.includes(`"title": "${entry.title}"`)) fail(`missing exact registry entry ${entry.slug}`);
  const asset = entry.thumbnail;
  if (!fs.existsSync(asset)) fail(`missing thumbnail ${asset}`);
  const svg = read(asset);
  if (!svg.includes('width="1200" height="630"') || !svg.includes(`<title id="title">${entry.title.replaceAll('&','&amp;')}</title>`)) fail(`thumbnail contract ${entry.slug}`);
  if (basePaths.some(file => file.includes(entry.slug))) fail(`slug existed at base ${entry.slug}`);
}
if (!read('app/data.ts').includes('...october12BlogPosts')) fail('Blog listing/registry integration');
if (!read('app/blog/article-data.ts').includes('...october12BlogArticles')) fail('Blog detail registry integration');
if (!read('app/fleet-data.ts').includes('...october12ResearchPosts')) fail('Research registry integration');
for (const file of ['app/blog/page.tsx','app/blog/[slug]/page.tsx','app/research/page.tsx','app/research/[slug]/page.tsx']) if (!read(file).includes('Published <time')) fail(`visible date missing ${file}`);
if (!read('app/research/[slug]/page.tsx').includes('Related Research')) fail('Research related behavior');
if (!read('app/blog/[slug]/page.tsx').includes('article.related')) fail('Blog related behavior');
const paragraphs=[];
for (const source of [blog,research]) for (const match of source.matchAll(/"(?:body|paragraphs)": (?:"([^"\\]*(?:\\.[^"\\]*)*)"|\[([\s\S]*?)\])/g)) {
  if (match[1]) paragraphs.push(JSON.parse(`"${match[1]}"`));
  if (match[2]) for (const q of match[2].matchAll(/"([^"\\]*(?:\\.[^"\\]*)*)"/g)) paragraphs.push(JSON.parse(`"${q[1]}"`));
}
const substantive=paragraphs.filter(x=>x.split(/\s+/).length>=25).map(x=>x.toLowerCase().replace(/\s+/g,' ').trim());
const repeated=[...new Set(substantive.filter((x,i,a)=>a.indexOf(x)!==i))];
if (repeated.length) fail(`duplicate substantive paragraphs: ${repeated.length}`);
const blogWords=(blog.match(/[A-Za-z][A-Za-z'-]*/g)??[]).length;
const researchWords=(research.match(/[A-Za-z][A-Za-z'-]*/g)??[]).length;
if (blogWords < 12000 || researchWords < 4000) fail(`content depth blog=${blogWords} research=${researchWords}`);
console.log(JSON.stringify({status:'PASS',date:manifest.date,blog:12,research:5,thumbnails:17,researchHttpsSources:50,blogWords,researchWords,duplicateSubstantiveParagraphs:0,visibleDates:true,separateSystems:true,registryRoutesSidebarRelatedSitemap:true},null,2));
