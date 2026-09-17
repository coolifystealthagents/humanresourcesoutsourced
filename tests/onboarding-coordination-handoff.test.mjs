import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync('app/fleet-data.ts', 'utf8');
const page = readFileSync('app/research/[slug]/page.tsx', 'utf8');
const slug = 'onboarding-coordination-handoff-risk';
const recordStart = source.indexOf(`slug: '${slug}'`);
const recordEnd = source.indexOf("{ slug: 'payroll-preparation-four-eyes-review'", recordStart);
const record = source.slice(recordStart, recordEnd);

test('onboarding handoff keeps preparation and approval ownership separate', () => {
  assert.ok(recordStart >= 0 && recordEnd > recordStart, 'expected onboarding research record bounds');
  assert.match(record, /modified: '2026-09-17'/);
  assert.match(record, /title: 'Plan an owner-reviewed onboarding coordination lane'/);
  assert.match(record, /href: '\/services\/onboarding-coordination'/);
  assert.match(record, /approved checklist/);
  assert.match(record, /HR, IT, payroll, and the manager retain approval authority/);
  assert.match(page, /modifiedTime: post\.modified/);
});
