import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const seedSource = fs.readFileSync('app/blog/daily-batch-2026-08-10.ts', 'utf8');
const generatedSource = fs.readFileSync('app/blog/generated-articles.ts', 'utf8');
const dataSource = fs.readFileSync('app/data.ts', 'utf8');
const routeSource = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const sitemapSource = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const builtSitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
const gitFile = (commit, path) => {
  try { return execFileSync('git', ['show', `${commit}:${path}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); }
  catch (error) { if (error.status === 128) return ''; throw error; }
};
assert.equal(manifest.family, 'blog');
assert.equal(manifest.entries.length, 25);
assert.ok(manifest.entries.length >= manifest.minimum);
assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, manifest.entries.length);
for (const entry of manifest.entries) {
  assert.match(entry.route, new RegExp(`^/blog/${entry.slug}$`));
  assert.equal(entry.sourceDate, '2026-08-10');
  assert.equal(entry.renderedDate, '2026-08-10');
  assert.equal(entry.provenance, 'repair-replacement');
  assert.equal(entry.introducedByCommit, '26b7236c6332eb6f4c3d8833831f8627d69e646d');
  assert.equal(entry.sourcePath, 'app/blog/daily-batch-2026-08-10.ts');
  assert.equal(entry.sourceDateField, 'dailyBlogSourceDates[slug]');
  assert.match(seedSource, new RegExp(`['"]${entry.slug}['"]\\s*:\\s*['"]2026-08-10['"]`));
  assert.doesNotMatch(gitFile(`${entry.introducedByCommit}^`, entry.sourcePath), new RegExp(`['"]${entry.slug}['"]\\s*:\\s*['"]2026-08-10['"]`));
  assert.doesNotMatch(gitFile(`${entry.introducedByCommit}^`, entry.sourcePath), /dailyBlogSourceDates/);
  assert.match(gitFile(entry.introducedByCommit, entry.sourcePath), new RegExp(`['"]${entry.slug}['"]\\s*:\\s*['"]2026-08-10['"]`));
  const builtArticle = fs.readFileSync(`.next/server/app/blog/${entry.slug}.html`, 'utf8');
  assert.match(builtArticle, /2026-08-10/);
  assert.match(builtArticle, /datePublished/);
  assert.match(builtArticle, new RegExp(`canonical[^>]*blog/${entry.slug}`));
  assert.match(builtSitemap, new RegExp(`/blog/${entry.slug}`));
}
assert.match(generatedSource, /publicationDate = seed\.sourceDate/);
assert.match(generatedSource, /datePublished|published/);
assert.match(routeSource, /datePublished: article\.published/);
assert.match(dataSource, /export const blogPosts = \[\.\.\.dailyBlogPosts, \.\.\.evergreenBlogPosts\]/);
assert.match(sitemapSource, /`\/blog\/\$\{blog\.slug\}`/);
const blogIndex = fs.readFileSync('.next/server/app/blog.html', 'utf8');
let previous = -1;
for (const entry of manifest.entries.slice(0, 20)) {
  const position = blogIndex.indexOf(`/blog/${entry.slug}`);
  assert.ok(position > previous, `blog index is not newest-first at ${entry.slug}`);
  previous = position;
}
console.log(`August 10 blog manifest PASS: ${manifest.entries.length} entries, source/render/index/sitemap checks passed`);
