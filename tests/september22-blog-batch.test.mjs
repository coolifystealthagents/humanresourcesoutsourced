import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const sourcePath = new URL('../app/blog/september22-batch.ts', import.meta.url);
const source = fs.readFileSync(sourcePath, 'utf8');
const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const module = { exports: {} };
vm.runInNewContext(javascript, { exports: module.exports, module });

const { september22Articles, september22BlogPosts } = module.exports;
const words = (value) => (JSON.stringify(value).match(/[A-Za-z0-9][A-Za-z0-9'’.-]*/g) ?? []).length;

test('September 22 blog batch contains exactly 12 new, substantial articles', () => {
  assert.equal(september22BlogPosts.length, 12);
  assert.equal(Object.keys(september22Articles).length, 12);
  assert.equal(new Set(september22BlogPosts.map((post) => post.slug)).size, 12);

  const otherBlogSource = fs.readdirSync(new URL('../app/blog/', import.meta.url))
    .filter((name) => name.endsWith('.ts') && name !== 'september22-batch.ts')
    .map((name) => fs.readFileSync(new URL(`../app/blog/${name}`, import.meta.url), 'utf8')).join('\n');

  for (const post of september22BlogPosts) {
    assert.equal(post.published, '2026-09-22');
    assert.ok(!otherBlogSource.includes(post.slug), `duplicate slug: ${post.slug}`);
    const article = september22Articles[post.slug];
    assert.ok(article);
    assert.equal(article.published, '2026-09-22');
    assert.equal(article.updated, '2026-09-22');
    assert.ok(words(article) >= 900, `${post.slug} has only ${words(article)} words`);
    assert.ok(article.sources.every((item) => item.url.startsWith('https://')));
    assert.ok(article.related.some((item) => item.href === '/contact-us'));
    assert.equal(article.banners.length, 3);
  }
});
