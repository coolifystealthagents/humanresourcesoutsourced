import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import test from 'node:test';

const manifest = JSON.parse(readFileSync(new URL('../.paperclip/aug10-2026/research.json', import.meta.url)));
const source = readFileSync(new URL('../app/fleet-data.ts', import.meta.url), 'utf8');
const page = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const sitemap = readFileSync(new URL('../app/sitemap.xml/route.ts', import.meta.url), 'utf8');
const builtSitemap = readFileSync(new URL('../.next/server/app/sitemap.xml.body', import.meta.url), 'utf8');

function gitFile(commit, path) {
  return execFileSync('git', ['show', `${commit}:${path}`], { encoding: 'utf8' });
}

function sourceRecord(sourceText, slug) {
  const match = sourceText.match(new RegExp(`\\['${slug}',[\\s\\S]*?(?=\\n\\s+\\['|\\n\\] as const)`));
  return match?.[0] ?? '';
}

test('August 10 research manifest and rendered contract pass', () => {
  assert.ok(manifest.entries.length >= 10);
  assert.equal(manifest.entries.length, 15);
  assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, manifest.entries.length);
  for (const entry of manifest.entries) {
    assert.match(entry.route, /^\/research\/[a-z0-9-]+$/);
    assert.equal(entry.route, `/research/${entry.slug}`);
    assert.equal(entry.sourcePath, 'app/fleet-data.ts');
    assert.equal(entry.sourceDate, '2026-08-10');
    assert.equal(entry.renderedDate, '2026-08-10');
    assert.equal(entry.provenance, 'original-aug10-batch');
    assert.match(entry.introducedByCommit, /^[0-9a-f]{40}$/);
    const record = sourceRecord(source, entry.slug);
    assert.match(record, new RegExp(`\\['${entry.slug}',`));
    assert.match(source, new RegExp(`['\"]${entry.slug}['\"]\\s*:\\s*['\"]2026-08-10['\"]`));
    assert.match(source, new RegExp(`published: researchRun15SourceDates\\[slug\\]`));
    const before = gitFile(`${entry.introducedByCommit}^`, entry.sourcePath);
    const introduced = gitFile(entry.introducedByCommit, entry.sourcePath);
    assert.doesNotMatch(before, new RegExp(`\\['${entry.slug}',`));
    assert.match(introduced, new RegExp(`\\['${entry.slug}',`));
    assert.ok(existsSync(new URL(`../public/research-banners/${entry.slug}.svg`, import.meta.url)));
    assert.match(sitemap, /allResearchPosts\.map/);
    assert.match(builtSitemap, new RegExp(`/research/${entry.slug}`));
    const builtArticle = readFileSync(new URL(`../.next/server/app/research/${entry.slug}.html`, import.meta.url), 'utf8');
    assert.match(builtArticle, /2026-08-10/);
    assert.match(builtArticle, /datePublished/);
    assert.match(builtArticle, /article:published_time/);
    assert.match(builtArticle, /dateTime="2026-08-10"/);
    assert.match(builtArticle, new RegExp(`canonical[^>]*research/${entry.slug}`));
  }
  assert.match(page, /datePublished:post\.published/);
  assert.match(page, /article:published_time/);
  assert.match(page, /<time dateTime=\{post\.published\}>\{post\.published\}<\/time>/);
  assert.match(source, /toSorted\(\(a, b\) => b\.published\.localeCompare\(a\.published\)\)/);
});
