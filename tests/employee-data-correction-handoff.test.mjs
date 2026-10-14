import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const batch = readFileSync('app/research/october13-research-batch.ts', 'utf8');
const service = readFileSync('app/fleet-data.ts', 'utf8');
const page = readFileSync('app/research/[slug]/page.tsx', 'utf8');
const slug = 'employee-data-correction-turnaround-reliability';
const recordStart = batch.indexOf(`"slug": "${slug}"`);
const recordEnd = batch.indexOf('"slug": "hr-intake-misclassification-study"', recordStart);
const record = batch.slice(recordStart, recordEnd);

test('employee-data correction research routes to the bounded records-administration service', () => {
  assert.ok(recordStart >= 0 && recordEnd > recordStart, 'expected selected October 13 research record bounds');
  assert.match(record, /"modified": "2026-10-13"/);
  assert.match(record, /"title": "Review employee-records administration scope"/);
  assert.match(record, /"href": "\/services\/employee-records-administration"/);
  assert.match(record, /check approved source evidence, file an authorized correction in the named system, and keep a before-and-after log/);
  assert.match(record, /employer keeps authority over the record value, access, retention, employee notice, and any exception/);
  assert.doesNotMatch(record, /"href": "\/services"/);
  const recordsService = service.slice(service.indexOf("slug: 'employee-records-administration'"), service.indexOf("slug: 'benefits-administration-support'"));
  assert.match(recordsService, /required fields and source evidence/);
  assert.match(recordsService, /authoritative values and retention rules/);
  assert.match(page, /post\.serviceLink/);
  assert.match(page, /modifiedTime: post\.modified/);
});
