import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync('app/fleet-data.ts', 'utf8');
const page = readFileSync('app/research/[slug]/page.tsx', 'utf8');
const sitemap = readFileSync('app/sitemap.xml/route.ts', 'utf8');
const slug = 'offboarding-coordination-access-revocation';
const recordStart = source.indexOf(`slug: '${slug}'`);
const recordEnd = source.indexOf("{ slug: 'benefits-administration-change-control'", recordStart);
const record = source.slice(recordStart, recordEnd);

test('offboarding research points to the bounded coordination service', () => {
  assert.ok(recordStart >= 0 && recordEnd > recordStart, 'expected offboarding research record bounds');
  assert.match(record, /published: '2026-08-08'/);
  assert.match(record, /modified: '2026-10-21'/);
  assert.match(record, /title: 'Map an owner-approved offboarding coordination lane'/);
  assert.match(record, /href: '\/services\/offboarding-coordination'/);
  assert.match(record, /track approved separation tasks and missing completion signals/);
  assert.match(record, /employer keeps the separation decision, access approval, sensitive communications, and final acceptance/);
  assert.doesNotMatch(record, /href: '\/services'\s*[},]/);
  assert.match(page, /post\.serviceLink/);
  assert.match(page, /modifiedTime: post\.modified/);
  assert.match(sitemap, /post\.modified \?\? post\.published/);
});
