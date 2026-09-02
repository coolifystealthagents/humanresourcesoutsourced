import type { RichArticle } from './article-data';

type Topic = {
  slug: string; title: string; description: string; focus: string;
  intake: string; failure: string; proof: string; service: string;
};

const date = '2026-09-02';
const heroImage = '/blog-heroes/august31-hr-operations-field-guide.svg';
const source = {
  name: 'NIST Privacy Framework',
  url: 'https://www.nist.gov/privacy-framework',
  note: 'Official framework used to define privacy risk, data processing, and accountable handling.'
};

const topics: Topic[] = [
  { slug: 'september2-philippines-hr-emergency-contact-change-verification', title: 'Emergency contact changes: verify the request without widening access', description: 'A practical HR support workflow for checking emergency contact updates, preserving the source request, and limiting who can see the record.', focus: 'emergency contact change verification', intake: 'employee identifier, submitted contact, relationship, request channel, receipt time, and system owner', failure: 'the requester cannot be authenticated, the contact is duplicated, or the employee disputes the change', proof: 'the authenticated request, approved update, and system confirmation', service: 'employee-records-administration' },
  { slug: 'september2-philippines-hr-probation-review-deadline-tracking', title: 'Probation review deadline tracking without making the decision', description: 'Track review dates, manager inputs, and approved notices while employment decisions remain with the employer.', focus: 'probation review deadline tracking', intake: 'start date, controlling review date, manager, required form, reminder schedule, and HR owner', failure: 'dates conflict, a manager requests an extension, or the review includes a performance or employment decision', proof: 'an owner-approved outcome linked to the controlling date', service: 'operations-support' },
  { slug: 'september2-philippines-hr-employee-name-change-record-coordination', title: 'Employee name change records: coordinate one update across HR systems', description: 'Route an employee name change through evidence, approval, dependent systems, and a final reconciliation.', focus: 'employee name change record coordination', intake: 'employee identifier, requested name, approved evidence location, effective date, dependent systems, and record owner', failure: 'evidence is missing, systems require different formats, or payroll and benefits records disagree', proof: 'matching approved values across every in-scope destination', service: 'employee-records-administration' },
  { slug: 'september2-philippines-hr-interview-panel-availability-lock', title: 'Interview panel availability: lock the schedule before inviting candidates', description: 'Build a scheduling checkpoint that confirms panel ownership, time zones, accessibility needs, and candidate communications.', focus: 'interview panel availability control', intake: 'requisition, candidate, panel members, time zones, interview format, hold expiry, and scheduling owner', failure: 'a panelist has not accepted, an interviewer changes, or an accommodation question appears', proof: 'a confirmed panel and candidate invitation tied to the same slot', service: 'interview-coordination' },
  { slug: 'september2-philippines-hr-missing-timesheet-exception-queue', title: 'Missing timesheets: run an exception queue before payroll cutoff', description: 'Separate reminders, manager approvals, corrections, and payroll handoff so a missing timesheet cannot be silently guessed.', focus: 'missing timesheet exception handling', intake: 'employee, pay period, missing interval, source system, manager, cutoff, and payroll owner', failure: 'hours are disputed, approval is late, or someone asks the coordinator to estimate time', proof: 'approved time evidence or a documented payroll-owner exception', service: 'payroll-preparation-support' },
  { slug: 'september2-philippines-hr-benefits-document-receipt-log', title: 'Benefits document receipt logs that do not expose plan decisions', description: 'Record receipt, completeness, secure routing, and owner response while benefits specialists decide eligibility and coverage.', focus: 'benefits document receipt logging', intake: 'employee identifier, document type, plan, received time, completeness check, secure destination, and owner', failure: 'the document contains unexpected sensitive data or the employee asks about eligibility, cost, or coverage', proof: 'a complete packet received by the authorized benefits owner', service: 'benefits-administration-support' },
  { slug: 'september2-philippines-hr-training-roster-reconciliation', title: 'Training roster reconciliation: resolve enrollment and completion gaps', description: 'Compare assigned training, attendance, completion evidence, and approved exemptions without treating a dashboard as the only source.', focus: 'training roster reconciliation', intake: 'employee, required course, assignment source, due date, completion event, exemption owner, and learning system', failure: 'the roster conflicts with HR status, completion evidence is missing, or an exemption needs judgment', proof: 'a reconciled roster with every gap assigned to an owner', service: 'learning-administration' },
  { slug: 'september2-philippines-hr-returned-employee-email-routing', title: 'Returned employee email: fix delivery without changing the message', description: 'Handle bounced HR notices through address checks, approved alternate channels, and evidence of final delivery.', focus: 'returned employee email routing', intake: 'message identifier, approved template, recipient record, bounce event, alternate channel, sensitivity level, and owner', failure: 'the address source conflicts, the message is time sensitive, or an alternate recipient is proposed', proof: 'owner-approved delivery evidence or a documented failed-delivery handoff', service: 'hr-help-desk-support' },
  { slug: 'september2-philippines-hr-manager-approval-aging-report', title: 'Manager approval aging reports that show the real blocker', description: 'Turn overdue HR approvals into a useful report with request age, decision owner, consequence, and escalation history.', focus: 'manager approval aging reporting', intake: 'request identifier, submitted time, required decision, current owner, due date, reminders, consequence, and escalation route', failure: 'ownership is unclear, the deadline changes, or a sensitive case appears in a broad report', proof: 'an owner response, changed route, or explicit blocked status', service: 'reporting-and-qa' },
  { slug: 'september2-philippines-hr-contractor-conversion-checklist', title: 'Contractor conversion checklists: coordinate the handoff, not worker status', description: 'Track approved conversion tasks across recruiting, HR, payroll, access, and onboarding while qualified owners decide classification and terms.', focus: 'contractor conversion administration', intake: 'approved conversion instruction, effective date, role, manager, payroll path, access changes, onboarding tasks, and owners', failure: 'worker status, terms, pay, eligibility, or effective dates remain undecided', proof: 'owner-approved records and destination confirmations for each task', service: 'onboarding-coordination' },
  { slug: 'september2-philippines-hr-employee-survey-access-control', title: 'Employee survey administration with response access controls', description: 'Prepare survey lists, reminders, and completion reporting without exposing individual responses to unauthorized viewers.', focus: 'employee survey administration', intake: 'approved audience, purpose, survey owner, response visibility, reminder rules, exclusions, and close date', failure: 'a manager requests individual responses, an employee raises a complaint, or anonymity cannot be preserved', proof: 'an approved aggregate report and documented access record', service: 'reporting-and-qa' },
  { slug: 'september2-philippines-hr-open-enrollment-reminder-suppression', title: 'Open enrollment reminders: suppress messages after a valid response', description: 'Reconcile enrollment status before each reminder so employees do not receive stale, duplicate, or inappropriate messages.', focus: 'open enrollment reminder suppression', intake: 'employee identifier, plan year, eligibility source, response status, reminder event, suppression reason, and benefits owner', failure: 'systems disagree, an employee disputes eligibility, or a response is incomplete', proof: 'a current recipient list tied to the approved status source', service: 'benefits-administration-support' }
];

export const september2BlogPosts = topics.map(({ slug, title, description }) => ({ slug, title, excerpt: description, minutes: 10, published: date }));

export const september2Articles: Record<string, RichArticle> = Object.fromEntries(topics.map((topic, index) => [topic.slug, {
  slug: topic.slug,
  title: topic.title,
  description: topic.description,
  published: date,
  updated: date,
  minutes: 10,
  revision: `${date}-${topic.slug}`,
  heroImage,
  directAnswer: [
    `A Philippines-based HR coordinator can manage ${topic.focus} when the company identifies the source records, permitted checks, decision owner, and stop point. The coordinator can prepare and route the work, but the employer keeps policy, employment, pay, benefits, privacy, and exception decisions.`,
    `Start with ${topic.intake}. Close the item only when the record contains ${topic.proof}.`
  ],
  takeaways: [
    `Write the permitted steps for ${topic.focus}.`,
    'Give each record one accountable company owner.',
    'Keep incoming values separate from approved values.',
    `Pause when ${topic.failure}.`,
    `Require ${topic.proof} before closure.`
  ],
  taskRows: [
    { lane: 'Open', philippinesTeam: `Create the ${topic.focus} record from the approved channel.`, owner: 'Set scope, sources, access, due time, and authority.', check: `The record shows ${topic.intake}` },
    { lane: 'Check', philippinesTeam: 'Compare the submitted details with the named source without overwriting either value.', owner: 'Resolve source conflicts and approve corrections.', check: 'Submitted, source, and proposed values stay distinguishable' },
    { lane: 'Route', philippinesTeam: `Stop and send a bounded question when ${topic.failure}.`, owner: 'Make the decision and approve sensitive communication.', check: 'The handoff names the issue, owner, and next checkpoint' },
    { lane: 'Close', philippinesTeam: 'Apply only the approved administrative action and save its evidence.', owner: 'Confirm the outcome and retention treatment.', check: `Closure contains ${topic.proof}` }
  ],
  pilotStats: [
    { value: '1', label: 'Workflow', note: topic.focus },
    { value: '2', label: 'Source views', note: 'Incoming and controlling records' },
    { value: String(4 + index), label: 'Pilot cases', note: 'Include routine and exception records' },
    { value: '10', label: 'Review days', note: 'Inspect every early closeout' }
  ],
  sections: [
    { heading: `Write the record for ${topic.focus}`, paragraphs: [`The working record should contain ${topic.intake}. Store private material in its approved system and expose only the status needed to move the task.`, `Use event-based statuses such as received, checked, waiting for owner, approved, applied, and closed. A status should tell the next person what happened and which evidence exists.`] },
    { heading: 'Keep the decision owner in the workflow', paragraphs: [`Administrative support can check fields, prepare updates, send approved reminders, and maintain the queue. It must stop when ${topic.failure}.`, 'Put the owner next to the task instead of burying the name in a playbook. The handoff should ask one answerable question and state what cannot proceed until the owner responds.'] },
    { heading: 'Preserve differences during reconciliation', paragraphs: ['Do not replace a submitted value merely because another system looks more current. Record both values, their sources, and their effective dates, then ask the owner which one controls.', `For ${topic.focus}, a correction needs a source and an approval. That small separation prevents a coordinator from creating authority by editing the record.`] },
    { heading: 'Test the exception before volume', paragraphs: [`Run a complete case, a missing-field case, a conflicting-source case, and a case where ${topic.failure}. Check the access used, the words sent, and the evidence returned.`, 'Reviewers should be able to reconstruct the task without opening unrelated employee information. If they cannot, fix the record design before adding more volume.'] },
    { heading: 'Close only after the destination confirms', paragraphs: [`For this workflow, useful closeout evidence is ${topic.proof}. If that evidence has not arrived, leave the item pending and schedule the next owner check.`, 'Track defects by type: wrong source, excess access, missed stop point, late escalation, destination mismatch, or premature closure. Each defect should result in a specific change to the checklist or review.'] },
    { heading: 'Questions for an HR outsourcing provider', paragraphs: [`Ask the provider to demonstrate ${topic.focus} with one redacted routine case and one exception. Have the coordinator show the exact fields, access, decision boundary, and closeout proof.`, 'Ask who reviews the early work, how unresolved records return to the client, and how access changes when the scope ends. The demonstration should match the written role brief.'] }
  ],
  scripts: [
    { label: 'Owner handoff', text: `I checked the approved sources for ${topic.focus}. The unresolved point needs your decision before I can continue. I preserved both values and recorded the next checkpoint.` },
    { label: 'Stop rule', text: `Pause this item when ${topic.failure}. Route it to the named owner and do not change the controlling record without approval.` }
  ],
  workflow: [
    { step: '01', title: 'Open the item', text: 'Record the source, purpose, owner, due time, and privacy level.' },
    { step: '02', title: 'Compare records', text: 'Check required values while keeping disagreements visible.' },
    { step: '03', title: 'Ask the owner', text: 'Route one precise question when the stop rule applies.' },
    { step: '04', title: 'Apply approval', text: 'Carry out only the administrative action the owner authorized.' },
    { step: '05', title: 'Save proof', text: 'Confirm the destination and review the first cases for defects.' }
  ],
  faqs: [
    { question: `Can an outsourced coordinator own ${topic.focus}?`, answer: 'The coordinator can own defined administrative steps and queue maintenance. The employer retains decisions, exceptions, and sensitive communications.' },
    { question: 'What access does the role need?', answer: 'Use named accounts and the smallest view that supports the approved source check and destination update.' },
    { question: 'What happens when records conflict?', answer: 'Keep both values and route the controlling-source decision to the accountable owner.' },
    { question: 'How should the pilot be reviewed?', answer: 'Inspect every early record for source accuracy, privacy, stop-rule use, destination confirmation, and closure evidence.' },
    { question: 'Does this replace HR or legal advice?', answer: 'No. This is an administrative workflow. Qualified owners must decide legal, policy, medical, pay, benefits, and employment questions.' }
  ],
  related: [
    { title: 'Related HR service', href: `/services/${topic.service}`, note: 'Review the matching administrative lane.' },
    { title: 'HR reporting and QA', href: '/services/reporting-and-qa', note: 'Set the source checks and review sample.' },
    { title: 'Plan Philippines-based HR support', href: '/contact-us', note: 'Bring a redacted workflow to a staffing discussion.' }
  ],
  sources: [source],
  banners: [
    { eyebrow: 'Map the record', title: `Define ${topic.focus} before granting access.`, text: 'Name the source, owner, stop point, and proof.', href: `/services/${topic.service}`, linkLabel: 'Review the service scope' },
    { eyebrow: 'Test the lane', title: 'Review routine and exception evidence.', text: 'Check sources, access, routing, and closeout.', href: '/services/reporting-and-qa', linkLabel: 'See reporting and QA' },
    { eyebrow: 'Scope the role', title: 'Keep judgment with the employer.', text: 'Use a redacted example to define the support boundary.', href: '/contact-us', linkLabel: 'Discuss HR support' }
  ]
} as RichArticle]));
