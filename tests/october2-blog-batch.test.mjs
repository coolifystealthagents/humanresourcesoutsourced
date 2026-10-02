import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import ts from 'typescript';

const cache = new Map();
const load = (file) => {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const javascript = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  cache.set(file, module);
  const localRequire = (id) => id.startsWith('.') ? load(path.resolve(path.dirname(file), `${id}.ts`)) : require(id);
  new Function('require', 'module', 'exports', javascript)(localRequire, module, module.exports);
  return module.exports;
};

const root = path.resolve(new URL('..', import.meta.url).pathname);
const { october2Articles, october2BlogPosts } = load(path.join(root, 'app/blog/october2-batch.ts'));
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/daily-content/2026-10-02/blog.json'), 'utf8'));
const normalize = (value) => String(value).toLowerCase().replace(/https?:\/\/\S+/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();
const body = (article) => normalize([
  ...article.directAnswer, ...article.takeaways,
  ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
  ...article.taskRows.flatMap((row) => Object.values(row)),
  ...article.scripts.flatMap((script) => Object.values(script)),
  ...article.workflow.flatMap((step) => Object.values(step)),
  ...article.faqs.flatMap((faq) => Object.values(faq)),
].join(' '));
const shingles = (text) => { const words = text.split(/\s+/), result = new Set(); for (let i = 0; i + 4 < words.length; i += 1) result.add(words.slice(i, i + 5).join(' ')); return result; };

test('October 2 Blog inventory and manifest contain exactly twelve new routes', () => {
  assert.equal(october2BlogPosts.length, 12);
  assert.equal(Object.keys(october2Articles).length, 12);
  assert.equal(manifest.entries.length, 12);
  assert.equal(new Set(october2BlogPosts.map((post) => post.slug)).size, 12);
  assert.deepEqual(october2BlogPosts.map((post) => post.slug), manifest.entries.map((entry) => entry.slug));
  for (const [slug, article] of Object.entries(october2Articles)) {
    const text = body(article), entry = manifest.entries.find((item) => item.slug === slug);
    assert.equal(article.published, '2026-10-02');
    assert.equal(article.updated, article.published);
    assert.equal(article.heroImage, '/hr-team.jpg');
    assert.ok(entry);
    assert.ok(text.split(/\s+/).length >= 900);
    assert.equal(text.split(/\s+/).length, entry.substantiveWordCount);
    assert.equal(crypto.createHash('sha256').update(text).digest('hex'), entry.contentHash);
    assert.match(entry.liveUrl, new RegExp(`/blog/${slug}$`));
  }
});

test('October 2 Blog originality gates pass', () => {
  const rows = Object.entries(october2Articles).map(([slug, article]) => ({ slug, text: body(article) }));
  const paragraphs = rows.flatMap(({ slug }) => october2Articles[slug].sections.map((section) => section.paragraphs).flat());
  assert.equal(new Set(paragraphs.map(normalize)).size, paragraphs.length);
  let maximum = 0;
  for (let left = 0; left < rows.length; left += 1) for (let right = left + 1; right < rows.length; right += 1) {
    const a = shingles(rows[left].text), b = shingles(rows[right].text);
    let intersection = 0;
    for (const item of a) if (b.has(item)) intersection += 1;
    maximum = Math.max(maximum, intersection / (a.size + b.size - intersection));
  }
  assert.ok(maximum < 0.5);
  assert.equal(Number(maximum.toFixed(6)), manifest.quality.maximumPairwiseFiveWordShingleJaccard);
  assert.equal(manifest.quality.identicalParagraphsAcrossArticles, 0);
  assert.match(manifest.quality.qualitativeSharedArgumentCheck, /^pass:/);
});

test('October 2 Blog routes inherit canonical, schema, sitemap, and image handling', () => {
  const page = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
  const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
  assert.match(page, /alternates: \{ canonical: url \}/);
  assert.match(page, /'@type': 'BlogPosting'/);
  assert.match(page, /datePublished: article\.published/);
  assert.match(page, /article\.heroImage \? <img/);
  assert.match(sitemap, /blog\.updated/);
  assert.match(sitemap, /<lastmod>\$\{lastModified\}<\/lastmod>/);
});
