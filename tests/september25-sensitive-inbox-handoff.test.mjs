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

test('sensitive HR inbox guide keeps one bounded help-desk handoff and freshness contract', () => {
  const september22 = load('september22-batch');
  const { september25Articles, september25BlogPosts } = load('september25-batch', { './september22-batch': september22 });
  const slug = 'september25-hr-hr-inbox-sensitive-case-triage';
  const article = september25Articles[slug];
  const post = september25BlogPosts.find((item) => item.slug === slug);

  assert.ok(article);
  assert.equal(article.updated, '2026-09-26');
  assert.equal(JSON.stringify(article.contextualLink), JSON.stringify({
    afterSection: 'Separate completeness checks from decisions',
    lead: 'If your team needs a narrow queue for routine requests, the service page shows the work a Philippines-based coordinator can prepare and the cases that must stop for an internal owner.',
    label: 'Review HR help desk support',
    href: '/services/hr-help-desk-support'
  }));
  assert.equal(post?.updated, '2026-09-26');

  const page = fs.readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
  const sitemap = fs.readFileSync(new URL('../app/sitemap.xml/route.ts', import.meta.url), 'utf8');
  assert.match(page, /modifiedTime: article\?\.updated/);
  assert.match(page, /Updated <time dateTime=\{article\.updated\}>/);
  assert.match(sitemap, /typeof blog\.updated === 'string' \? blog\.updated/);
});