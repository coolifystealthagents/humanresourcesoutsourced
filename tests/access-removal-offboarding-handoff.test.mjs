import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const record = fs.readFileSync('app/research/october8-research-batch.ts', 'utf8');
const services = fs.readFileSync('app/fleet-data.ts', 'utf8');
const page = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');

test('access-removal research links once to the bounded offboarding coordination scope', () => {
  const selected = record.slice(record.indexOf('"slug": "hr-outsourcing-access-removal-evidence-study"'), record.indexOf('"slug": "hr-outsourcing-reopened-case-recurrence-study"'));
  assert.ok(selected.length > 0);
  assert.match(selected, /"published": "2026-10-08"/);
  assert.match(selected, /"modified": "2026-10-10"/);
  assert.match(selected, /"title": "Review offboarding coordination scope"/);
  assert.match(selected, /"href": "\/services\/offboarding-coordination"/);
  assert.match(selected, /track approved offboarding tasks and record account-disablement evidence/);
  assert.match(selected, /employer and accountable system owners decide separation, access changes, employee communication, and closure/);
  assert.doesNotMatch(selected, /"href": "\/services"/);
  const service = services.slice(services.indexOf("slug: 'offboarding-coordination'"), services.indexOf('// Add reviewed, source-backed original research here.'));
  assert.match(service, /approved separation tasks/);
  assert.match(service, /employer retains the separation decision/);
  assert.match(page, /post\.serviceLink/);
  assert.match(page, /modifiedTime: post\.modified/);
});

test('source-reconstruction research links once to employee-records administration', () => {
  const selected = record.slice(record.indexOf('"slug": "hr-outsourcing-source-reconstruction-study"'), record.indexOf('"slug": "hr-outsourcing-exception-reviewer-agreement-study"'));
  assert.ok(selected.length > 0);
  assert.match(selected, /"published": "2026-10-08"/);
  assert.match(selected, /"modified": "2026-10-12"/);
  assert.match(selected, /"title": "Review employee-records administration scope"/);
  assert.match(selected, /"href": "\/services\/employee-records-administration"/);
  assert.match(selected, /check approved source evidence, file the record in the named system, and keep a reconciliation log/);
  assert.match(selected, /employer keeps authoritative values, retention rules, access decisions, and exception decisions/);
  assert.doesNotMatch(selected, /"href": "\/services"/);
  const service = services.slice(services.indexOf("slug: 'employee-records-administration'"), services.indexOf("slug: 'benefits-administration-support'"));
  assert.match(service, /required fields and source evidence/);
  assert.match(service, /authoritative values and retention rules/);
  assert.match(page, /post\.serviceLink/);
  assert.match(page, /modifiedTime: post\.modified/);
});
