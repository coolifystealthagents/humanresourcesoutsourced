import assert from 'node:assert/strict';
import fs from 'node:fs';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const seedSource = fs.readFileSync('app/blog/daily-batch-2026-08-10.ts', 'utf8');
const generatedSource = fs.readFileSync('app/blog/generated-articles.ts', 'utf8');
const dataSource = fs.readFileSync('app/data.ts', 'utf8');
const routeSource = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
assert.equal(manifest.family, 'blog');
assert.ok(manifest.entries.length >= manifest.minimum);
assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, manifest.entries.length);
for (const entry of manifest.entries) {
  assert.match(entry.route, new RegExp(`^/blog/${entry.slug}$`));
  assert.equal(entry.sourceDate, '2026-08-10');
  assert.equal(entry.renderedDate, '2026-08-10');
  assert.equal(entry.provenance, 'original-aug10-batch');
  assert.equal(entry.introducedByCommit, '9933abfb48c39d3080d13272a85277428e63fb6e');
  assert.ok(seedSource.includes(`'${entry.slug}'`));
}
assert.match(generatedSource, /publicationDate = isAugust10Batch \? '2026-08-10'/);
assert.match(generatedSource, /datePublished|published/);
assert.match(routeSource, /datePublished: article\.published/);
assert.match(dataSource, /export const blogPosts = \[\.\.\.dailyBlogPosts, \.\.\.evergreenBlogPosts\]/);
assert.match(fs.readFileSync('app/sitemap.xml/route.ts', 'utf8'), /`\/blog\/\$\{blog\.slug\}`/);
console.log(`August 10 blog manifest PASS: ${manifest.entries.length} entries, source/render/index/sitemap checks passed`);
