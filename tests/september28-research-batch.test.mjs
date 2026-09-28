import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const source = fs.readFileSync(new URL('../app/research/september28-research-batch.ts', import.meta.url), 'utf8');
const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const module = { exports: {} };
vm.runInNewContext(javascript, { exports: module.exports, module, require: () => ({}) });
const posts = module.exports.september28ResearchPosts;
const manifest = JSON.parse(fs.readFileSync(new URL('../.paperclip/daily-content/2026-09-28/research.json', import.meta.url), 'utf8'));

const shingles = (text) => {
  const words = text.toLowerCase().match(/[a-z0-9]+/g) ?? [];
  const result = new Set();
  for (let index = 0; index + 4 < words.length; index += 1) result.add(words.slice(index, index + 5).join(' '));
  return result;
};

test('September 28 research batch has exactly five distinct decision-grade records', () => {
  assert.equal(posts.length, 5);
  assert.equal(new Set(posts.map((post) => post.slug)).size, 5);
  assert.equal(JSON.stringify(posts.map((post) => post.slug)), JSON.stringify(manifest.entries.map((entry) => entry.slug)));
  for (const post of posts) {
    const body = post.sections.map((section) => section.body).join(' ');
    const count = body.trim().split(/\s+/).length;
    const entry = manifest.entries.find((item) => item.slug === post.slug);
    assert.equal(post.published, '2026-09-28');
    assert.ok(count >= 1200, `${post.slug} has only ${count} substantive words`);
    assert.equal(count, entry.substantiveWordCount);
    assert.equal(crypto.createHash('sha256').update(body).digest('hex'), entry.contentHash);
    assert.ok(post.sources.length >= 8);
    assert.match(post.serviceLink.href, /^\/services\//);
  }
});

test('five-word-shingle overlap stays below the rewrite threshold', () => {
  let maximum = 0;
  for (let left = 0; left < posts.length; left += 1) for (let right = left + 1; right < posts.length; right += 1) {
    const a = shingles(posts[left].sections.map((section) => section.body).join(' '));
    const b = shingles(posts[right].sections.map((section) => section.body).join(' '));
    let intersection = 0;
    for (const item of a) if (b.has(item)) intersection += 1;
    maximum = Math.max(maximum, intersection / (a.size + b.size - intersection));
  }
  assert.ok(maximum < 0.5);
  assert.equal(Number(maximum.toFixed(6)), manifest.quality.maximumPairwiseFiveWordShingleJaccard);
});

test('Research sitemap entries carry the truthful publication or modification date', () => {
  const sitemap = fs.readFileSync(new URL('../app/sitemap.xml/route.ts', import.meta.url), 'utf8');
  assert.match(sitemap, /post\.modified \?\? post\.published/);
  assert.match(sitemap, /<lastmod>\$\{lastModified\}<\/lastmod>/);
});
