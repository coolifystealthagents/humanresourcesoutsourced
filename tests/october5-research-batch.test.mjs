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
const posts = load(path.join(root, 'app/research/october5-research-batch.ts')).october5ResearchPosts;
const manifest = JSON.parse(fs.readFileSync(new URL('../.paperclip/daily-content/2026-10-05/research.json', import.meta.url), 'utf8'));
const shingles = (text) => { const words = text.toLowerCase().match(/[a-z0-9]+/g) ?? [], out = new Set(); for (let i = 0; i + 4 < words.length; i++) out.add(words.slice(i, i + 5).join(' ')); return out; };

test('October 5 stages exactly five substantive, sourced Research articles', () => {
  assert.equal(posts.length, 5);
  assert.equal(new Set(posts.map((post) => post.slug)).size, 5);
  for (const post of posts) {
    const body = post.sections.map((section) => section.body).join(' ');
    const entry = manifest.entries.find((candidate) => candidate.slug === post.slug);
    assert.equal(post.published, '2026-10-05');
    assert.ok(entry);
    assert.ok(body.trim().split(/\s+/).length >= 1200);
    assert.equal(body.trim().split(/\s+/).length, entry.substantiveWordCount);
    assert.equal(crypto.createHash('sha256').update(body).digest('hex'), entry.contentHash);
    assert.ok(post.sources.length >= 3);
    assert.ok(post.serviceLink.href.startsWith('/services/'));
  }
});

test('October 5 originality and independent-structure gates pass', () => {
  const paragraphs = posts.flatMap((post) => post.sections.map((section) => section.body));
  assert.equal(new Set(paragraphs).size, paragraphs.length);
  let max = 0;
  for (let i = 0; i < posts.length; i++) for (let j = i + 1; j < posts.length; j++) {
    const a = shingles(posts[i].sections.map((section) => section.body).join(' '));
    const b = shingles(posts[j].sections.map((section) => section.body).join(' '));
    let intersection = 0;
    for (const value of a) if (b.has(value)) intersection++;
    max = Math.max(max, intersection / (a.size + b.size - intersection));
  }
  assert.ok(max < 0.5);
  assert.equal(Number(max.toFixed(6)), manifest.quality.maximumPairwiseFiveWordShingleJaccard);
  assert.equal(manifest.quality.repeatedParagraphCheck, 'pass');
  assert.equal(manifest.quality.sharedArgumentSequenceCheck, 'pass');
  assert.equal(manifest.quality.reusedWorkedExampleCheck, 'pass');
});

test('October 5 articles are indexed and the cycle ledger is separate', () => {
  const fleet = fs.readFileSync(new URL('../app/fleet-data.ts', import.meta.url), 'utf8');
  const ledger = JSON.parse(fs.readFileSync(new URL('../.paperclip/daily-content/topic-ledger.json', import.meta.url), 'utf8'));
  assert.match(fleet, /october5ResearchPosts/);
  assert.deepEqual(ledger.families.research['2026-10-05'], posts.map((post) => post.slug));
  assert.equal(manifest.baseline, 'f38404b87bfde6cbd599ea6e8851c66197a8ecec');
  assert.equal(manifest.handoffOnly, true);
});
