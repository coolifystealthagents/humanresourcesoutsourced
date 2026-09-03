import type { RichArticle } from './article-data';

type Topic = {
  slug: string; title: string; description: string; focus: string;
  intake: string; failure: string; proof: string; service: string;
};

const date = '2026-09-03';
const source = {
  name: 'NIST Privacy Framework',
  url: 'https://www.nist.gov/privacy-framework',
  note: 'Official framework used to define privacy risk, data processing, and accountable handling.'
};

const topics: Topic[] = [
  { slug: 'september3-philippines-hr-dependent-care-change-intake', title: 'Dependent-care changes: separate document intake from eligibility decisions', description: 'Collect dependent-care change records through a narrow HR support lane while benefits owners retain eligibility and coverage decisions.', focus: 'dependent-care change intake', intake: 'employee identifier, request type, event date, document checklist, secure destination, benefits owner, and response deadline', failure: 'the event is unclear, evidence is incomplete, or the employee asks whether a dependent qualifies', proof: 'a receipt record and owner-reviewed packet in the approved benefits system', service: 'benefits-administration-support' },
  { slug: 'september3-philippines-hr-jury-duty-notice-routing', title: 'Jury-duty notices: route dates and documents without interpreting leave policy', description: 'Create an HR administration path for jury-duty notices that preserves the employee request and sends policy decisions to the employer.', focus: 'jury-duty notice routing', intake: 'employee, notice date, requested absence, attached source, manager, payroll contact, policy owner, and due time', failure: 'dates conflict, pay treatment is questioned, or the notice contains a policy exception', proof: 'an acknowledged request linked to the authorized owner response', service: 'operations-support' },
  { slug: 'september3-philippines-hr-referral-bonus-evidence-check', title: 'Employee referral bonuses: check the evidence before payroll handoff', description: 'Reconcile referral records, candidate milestones, and approvals without allowing an HR coordinator to decide bonus eligibility.', focus: 'referral bonus evidence checking', intake: 'referrer, candidate, requisition, referral timestamp, milestone source, policy version, approver, and payroll cutoff', failure: 'the referral source conflicts, the milestone is disputed, or eligibility requires policy interpretation', proof: 'an approved instruction tied to the source referral and payroll handoff', service: 'payroll-preparation-support' },
  { slug: 'september3-philippines-hr-candidate-withdrawal-closeout', title: 'Candidate withdrawals: close the recruiting record without rewriting the reason', description: 'Handle candidate withdrawals with factual notes, calendar cleanup, owner notification, and controlled record retention.', focus: 'candidate withdrawal closeout', intake: 'candidate, requisition, source message, received time, scheduled interviews, recruiter, hiring owner, and record destination', failure: 'the message raises a complaint, requests deletion, or conflicts with an earlier recruiter note', proof: 'the preserved source, canceled logistics, owner acknowledgment, and final pipeline status', service: 'recruiting-pipeline-support' },
  { slug: 'september3-philippines-hr-interviewer-substitution-control', title: 'Interviewer substitutions: protect the scorecard and candidate handoff', description: 'Coordinate a panel change while keeping interviewer authority, candidate communication, and scorecard ownership explicit.', focus: 'interviewer substitution control', intake: 'candidate, requisition, original panel, replacement, interview purpose, calendar status, scorecard owner, and recruiter approval', failure: 'the replacement lacks approval, the interview purpose changes, or candidate messaging needs judgment', proof: 'an approved panel record, corrected invitation, and assigned scorecard', service: 'interview-coordination' },
  { slug: 'september3-philippines-hr-onboarding-equipment-readiness', title: 'Onboarding equipment readiness: expose blockers before the start date', description: 'Track device, account, shipping, and owner dependencies without giving HR support control over security provisioning.', focus: 'onboarding equipment readiness', intake: 'new hire, approved start date, role profile, device request, delivery destination, system owners, dependencies, and check times', failure: 'approval is missing, delivery details are uncertain, or access scope differs from the role profile', proof: 'owner confirmations for equipment, delivery, and approved account readiness', service: 'onboarding-coordination' },
  { slug: 'september3-philippines-hr-remote-work-request-intake', title: 'Remote-work requests: build a neutral intake record for owner review', description: 'Prepare remote-work request records without promising approval or interpreting accommodation, tax, security, or employment rules.', focus: 'remote-work request intake', intake: 'employee, requested arrangement, dates, work location supplied by the employee, manager, HR owner, security owner, and next checkpoint', failure: 'the request mentions medical needs, cross-border work, policy exceptions, tax questions, or urgent circumstances', proof: 'a minimized intake record and dated response from the qualified owner', service: 'hr-help-desk-support' },
  { slug: 'september3-philippines-hr-mailbox-delegation-review', title: 'HR mailbox delegation: review send, read, and archive permissions separately', description: 'Design mailbox access around the approved HR queue so outside support does not inherit authority from a shared inbox.', focus: 'HR mailbox delegation review', intake: 'mailbox, task categories, read scope, send scope, approved templates, restricted topics, reviewer, and access review date', failure: 'permissions expose unrelated cases, sending authority is unclear, or a restricted message enters the queue', proof: 'a role-matched permission record and completed access test', service: 'hr-help-desk-support' },
  { slug: 'september3-philippines-hr-bank-detail-change-verification', title: 'Payroll bank-detail changes: verify the channel before preparing an update', description: 'Route payroll bank-detail changes through identity checks and separate approval without copying account data into working notes.', focus: 'payroll bank-detail change verification', intake: 'employee identifier, approved request channel, receipt time, secure record location, verification state, payroll owner, and cutoff', failure: 'the channel is unapproved, identity is uncertain, account details appear in email, or timing affects payroll', proof: 'an authenticated request and payroll-owner confirmation in the authorized system', service: 'payroll-preparation-support' },
  { slug: 'september3-philippines-hr-life-event-benefits-intake', title: 'Benefits life events: log the deadline without deciding coverage', description: 'Track benefits life-event submissions, missing documents, and owner deadlines while qualified specialists answer coverage questions.', focus: 'benefits life-event intake', intake: 'employee, stated event, event date, received date, required-document list, secure destination, plan owner, and response checkpoint', failure: 'the event category is uncertain, a deadline may have passed, or the employee asks about coverage or cost', proof: 'a complete owner-reviewed packet or a documented request for missing evidence', service: 'benefits-administration-support' },
  { slug: 'september3-philippines-hr-training-reminder-exclusion-check', title: 'Training reminders: check exclusions before sending another notice', description: 'Reconcile training assignments with leave, status, completion, and approved exemption records before reminders go out.', focus: 'training reminder exclusion checking', intake: 'employee, course, assignment source, due date, completion state, leave or status flag, exemption owner, and reminder template', failure: 'systems disagree, the employee is inactive or on leave, or an exemption needs approval', proof: 'a reviewed recipient list linked to current assignment and status sources', service: 'learning-administration' },
  { slug: 'september3-philippines-hr-reporting-line-correction', title: 'Reporting-line corrections: preserve effective dates across HR systems', description: 'Coordinate manager-record corrections across HR tools while the company owner approves organizational changes and effective dates.', focus: 'reporting-line correction coordination', intake: 'employee, current manager, proposed manager, source instruction, effective date, affected systems, approver, and reconciliation owner', failure: 'sources conflict, the effective date is missing, or the request implies an unapproved organizational decision', proof: 'matching approved manager values and effective dates across in-scope systems', service: 'employee-records-administration' }
];

export const september3BlogPosts = topics.map(({ slug, title, description }) => ({ slug, title, excerpt: description, minutes: 10, published: date }));

export const september3Articles: Record<string, RichArticle> = Object.fromEntries(topics.map((topic, index) => [topic.slug, {
  slug: topic.slug,
  title: topic.title,
  description: topic.description,
  published: date,
  updated: date,
  minutes: 10,
  revision: `${date}-${topic.slug}`,
  heroImage: undefined,
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
