import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const load = (name, imports = {}) => {
  const source = fs.readFileSync(new URL(`../app/blog/${name}.ts`, import.meta.url), 'utf8');
  const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(javascript, { exports: module.exports, module, require: (path) => imports[path] });
  return module.exports;
};

const september22 = load('september22-batch');
const { september23Articles, september23BlogPosts } = load('september23-batch', { './september22-batch': september22 });
const words = (value) => (JSON.stringify(value).match(/[A-Za-z0-9][A-Za-z0-9'’.-]*/g) ?? []).length;

test('September 23 blog batch contains exactly 12 new, substantial articles', () => {
  assert.equal(september23BlogPosts.length, 12);
  assert.equal(Object.keys(september23Articles).length, 12);
  assert.equal(new Set(september23BlogPosts.map((post) => post.slug)).size, 12);

  const otherBlogSource = fs.readdirSync(new URL('../app/blog/', import.meta.url))
    .filter((name) => name.endsWith('.ts') && name !== 'september23-batch.ts')
    .map((name) => fs.readFileSync(new URL(`../app/blog/${name}`, import.meta.url), 'utf8')).join('\n');

  for (const post of september23BlogPosts) {
    assert.equal(post.published, '2026-09-23');
    assert.ok(!otherBlogSource.includes(post.slug), `duplicate slug: ${post.slug}`);
    const article = september23Articles[post.slug];
    assert.ok(article);
    assert.equal(article.published, '2026-09-23');
    assert.equal(article.updated, '2026-09-23');
    assert.ok(words(article) >= 900, `${post.slug} has only ${words(article)} words`);
    assert.ok(article.sources.every((item) => item.url.startsWith('https://')));
    assert.ok(article.related.some((item) => item.href === '/contact-us'));
    assert.equal(article.banners.length, 3);
  }
});
