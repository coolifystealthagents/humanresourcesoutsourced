import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync('app/fleet-data.ts', 'utf8');
const page = readFileSync('app/research/[slug]/page.tsx', 'utf8');
const slug = 'employee-records-access-review-benchmark';
const recordStart = source.indexOf(`slug: '${slug}'`);
const recordEnd = source.indexOf("{ slug: 'onboarding-coordination-handoff-risk'", recordStart);
const record = source.slice(recordStart, recordEnd);

test('employee-records access review links to a bounded administration scope', () => {
  assert.ok(recordStart >= 0 && recordEnd > recordStart, 'expected employee-records research record bounds');
  assert.match(record, /modified: '2026-09-22'/);
  assert.match(record, /title: 'Scope an employee-records administration lane'/);
  assert.match(record, /href: '\/services\/employee-records-administration'/);
  assert.match(record, /prepare approved record changes/);
  assert.match(record, /employer keeps access approval, retention rules, and decisions about sensitive records/);
  assert.match(page, /post\.serviceLink/);
  assert.match(page, /modifiedTime: post\.modified/);
});