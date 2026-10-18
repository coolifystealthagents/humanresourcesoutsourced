import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync('app/fleet-data.ts', 'utf8');
const page = readFileSync('app/research/[slug]/page.tsx', 'utf8');
const slug = 'performance-review-administration-data-quality';
const recordStart = source.indexOf(`slug: '${slug}'`);
const recordEnd = source.indexOf("{ slug: 'offboarding-coordination-access-revocation'", recordStart);
const record = source.slice(recordStart, recordEnd);

test('performance-review research points to the bounded administration service', () => {
  assert.ok(recordStart >= 0 && recordEnd > recordStart, 'expected performance-review research record bounds');
  assert.match(record, /published: '2026-08-08'/);
  assert.match(record, /modified: '2026-10-18'/);
  assert.match(record, /title: 'Plan a controlled performance-review admin lane'/);
  assert.match(record, /href: '\/services\/performance-review-administration'/);
  assert.match(record, /track the approved form, reminders, and completion record/);
  assert.match(record, /Managers keep ratings, feedback, deadline exceptions, and performance decisions/);
  assert.doesNotMatch(record, /href: '\/services'/);
  assert.match(page, /post\.serviceLink/);
  assert.match(page, /modifiedTime: post\.modified/);
});
