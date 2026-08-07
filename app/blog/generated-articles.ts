import type { RichArticle } from './article-data';

type Seed = { slug: string; title: string; description: string; focus: string };

const seeds: Seed[] = [
  ['philippines-hr-inbox-management-workflow', 'Philippines HR inbox management: a controlled workflow', 'Build a Philippines-based HR inbox lane with approved replies, clear routing, and an owner review for sensitive employee questions.', 'HR inbox management'],
  ['philippines-employee-records-administration-checklist', 'Philippines employee records administration: a practical checklist', 'Organize employee record updates with source checks, access limits, and an approval path for a Philippines-based support role.', 'employee records administration'],
  ['philippines-interview-scheduling-support-process', 'Philippines interview scheduling support: process and handoffs', 'Keep interviews moving with a Philippines-based coordinator while hiring owners retain candidate decisions and message approval.', 'interview scheduling'],
  ['philippines-hr-ticket-triage-escalation-rules', 'Philippines HR ticket triage: escalation rules that work', 'Set up a repeatable HR ticket queue with risk tags, response templates, and named escalation owners.', 'HR ticket triage'],
  ['philippines-employee-onboarding-document-collection', 'Philippines employee onboarding document collection: safe controls', 'Collect onboarding documents through a narrow workflow that checks completeness without turning the support role into a decision maker.', 'onboarding document collection'],
  ['philippines-pto-request-administration-support', 'Philippines PTO request administration: scope the support lane', 'Track PTO requests and missing approvals with a Philippines-based assistant while managers retain approval authority.', 'PTO administration'],
  ['philippines-hr-policy-acknowledgement-tracking', 'Philippines HR policy acknowledgement tracking: an owner-ready process', 'Create a reliable acknowledgement tracker with reminders, source records, and escalation for exceptions.', 'policy acknowledgement tracking'],
  ['philippines-recruiting-pipeline-administration', 'Philippines recruiting pipeline administration: controls and cadence', 'Keep candidate stages, reminders, and scorecards organized without outsourcing hiring judgment.', 'recruiting pipeline administration'],
  ['philippines-employee-benefits-administration-support', 'Philippines employee benefits administration support: define the boundary', 'Use a Philippines-based support lane for benefits forms and reminders while qualified owners handle eligibility and advice.', 'benefits administration'],
  ['philippines-hr-reporting-dashboard-preparation', 'Philippines HR reporting dashboard preparation: source and review rules', 'Prepare recurring HR reports from named sources with visible checks, owner signoff, and clear exception handling.', 'HR reporting'],
  ['philippines-new-hire-calendar-coordination', 'Philippines new hire calendar coordination: a repeatable handoff', 'Coordinate onboarding calendars, reminders, and meeting logistics with an accountable HR owner.', 'new hire calendar coordination'],
  ['philippines-employee-change-request-routing', 'Philippines employee change request routing: prevent silent errors', 'Route status, address, manager, and schedule changes through evidence and approval controls.', 'employee change routing'],
  ['philippines-hr-compliance-calendar-administration', 'Philippines HR compliance calendar administration: track the work', 'Maintain a compliance calendar and evidence log while legal and HR owners interpret requirements and approve action.', 'HR compliance calendar'],
  ['philippines-candidate-scorecard-collection-process', 'Philippines candidate scorecard collection: improve hiring handoffs', 'Collect interview scorecards on time and surface gaps without influencing hiring decisions.', 'candidate scorecard collection'],
  ['philippines-employee-exit-interview-coordination', 'Philippines exit interview coordination: a controlled support process', 'Schedule exit interviews, prepare approved materials, and route sensitive feedback to the right owner.', 'exit interview coordination'],
  ['philippines-hr-document-quality-assurance', 'Philippines HR document quality assurance: a two-pass review', 'Use a two-pass document check for names, dates, approvals, and storage location before records are closed.', 'HR document QA'],
  ['philippines-hr-calendar-and-deadline-tracking', 'Philippines HR calendar and deadline tracking: reduce missed handoffs', 'Track recurring HR deadlines with one source of truth, reminders, and manager escalation.', 'HR deadline tracking'],
  ['philippines-employee-communications-drafting-controls', 'Philippines employee communications drafting: approval controls', 'Prepare routine employee messages from approved copy while keeping policy interpretation and sensitive communication with HR.', 'employee communications drafting'],
  ['philippines-hr-data-access-review-checklist', 'Philippines HR data access review: a least-privilege checklist', 'Review the tools and records a support role can access, with named owners and evidence for every change.', 'HR data access review'],
  ['philippines-hr-workflow-documentation-playbook', 'Philippines HR workflow documentation: write the first playbook', 'Turn repeat HR work into a usable playbook with examples, stop rules, owners, and review points.', 'HR workflow documentation'],
  ['philippines-hr-backlog-cleanup-pilot', 'Philippines HR backlog cleanup: design a safe pilot', 'Reduce an HR admin backlog with a small pilot, redacted examples, daily review, and documented handback.', 'HR backlog cleanup'],
  ['philippines-hr-vendor-handoff-checklist', 'Philippines HR vendor handoff: keep ownership visible', 'Coordinate HR vendor requests with a source log, response deadlines, and a clear boundary between preparation and approval.', 'HR vendor handoffs']
].map(([slug, title, description, focus]) => ({ slug, title, description, focus }));

const source = { name: 'International Labour Organization: Decent work and the care economy', url: 'https://www.ilo.org/topics-and-sectors/care-economy', note: 'Authoritative context for clear responsibilities, worker support, and accountable work arrangements.' };

export const generatedArticles: Record<string, RichArticle> = Object.fromEntries(seeds.map((seed, index) => {
  const related = seeds.filter((candidate) => candidate.slug !== seed.slug).slice(index % 3, index % 3 + 3);
  return [seed.slug, {
    slug: seed.slug, title: seed.title, description: seed.description, published: '2026-08-07', updated: '2026-08-07', minutes: 9, revision: `2026-08-07-${seed.slug}`,
    directAnswer: [`A Philippines-based assistant can prepare and track ${seed.focus}, use approved templates, check required fields, and route exceptions. Your HR owner should retain final decisions, sensitive employee conversations, policy interpretation, and approval authority.`, `Start with one narrow queue, named tools, a written review rhythm, and proof for each completed item. Expand only after the owner can compare the support work with the approved process.`],
    takeaways: ['Define the queue and its owner before granting access.', 'Use source records and approved templates for routine work.', 'Escalate sensitive employee, legal, pay, and policy questions.', 'Review a small sample every day during the pilot.', 'Close each item with status, date, owner, and evidence.'],
    taskRows: [
      { lane: 'Intake', philippinesTeam: `Receive and sort ${seed.focus} items from the approved channel.`, owner: 'Set scope, priority, and the accountable decision maker.', check: 'Source, date, owner, and risk tag are recorded' },
      { lane: 'Preparation', philippinesTeam: 'Check required fields, use approved copy, and prepare the next action.', owner: 'Approve exceptions and any change to the standard process.', check: 'Every change traces to a source record' },
      { lane: 'Handoff', philippinesTeam: 'Route questions and send reminders to named owners.', owner: 'Make the decision and approve sensitive communication.', check: 'Escalations have a recipient and due time' },
      { lane: 'Quality review', philippinesTeam: 'Assemble a daily sample and list missing or unclear work.', owner: 'Review the sample and update the operating rule.', check: 'Review outcome and correction are visible' },
      { lane: 'Closeout', philippinesTeam: 'Update status and save the approved record.', owner: 'Confirm completion, retention, and access needs.', check: 'No item closes without evidence' }
    ],
    pilotStats: [
      { value: '1', label: 'Starting queue', note: 'Keep the first pilot narrow and observable' },
      { value: '2', label: 'Review passes', note: 'Check the work and then check the handoff' },
      { value: '3', label: 'Escalation tiers', note: 'Routine, owner review, and urgent routing' },
      { value: '30', label: 'Pilot days', note: 'Use a defined window before expanding scope' }
    ],
    sections: [
      { heading: `Define ${seed.focus} before assigning it`, paragraphs: [`Write the inputs, output, approved tools, review owner, and stop rules for ${seed.focus}. The assistant should know what a complete item looks like and where uncertainty goes.`, 'A short role brief is safer than a broad instruction to help with HR. Use redacted examples and identify the information that must never be copied into an unapproved tool.'] },
      { heading: 'Separate preparation from judgment', paragraphs: ['The support role can organize facts, draft approved copy, and show missing work. It should not decide employment outcomes, interpret policy, answer legal questions, settle disputes, or approve changes to pay or status.', 'Name one owner for each exception. A clear handoff is more useful than asking the assistant to make a reasonable guess when the record is incomplete.'] },
      { heading: 'Use a source-backed queue', paragraphs: [`Each ${seed.focus} item should point to its source, date, current owner, next action, and due time. Keep a visible status such as ready, waiting, escalated, or closed.`, 'The International Labour Organization emphasizes accountable work arrangements and clear responsibilities. Use that principle as context, then adapt the workflow to your company and qualified HR advice.'] },
      { heading: 'Review the first work every day', paragraphs: ['During the pilot, review representative work before increasing volume. Look for wrong routing, missing approvals, unclear notes, duplicated records, and messages that should have stopped.', 'Keep corrections in the playbook. A recurring mistake is a process gap to fix, not a reason to hide the sample.'] },
      { heading: 'Close the loop with evidence', paragraphs: ['A completed item should show what was received, what was prepared, who approved it, what was sent or changed, and when the record was closed.', 'At the end of the pilot, compare the queue against the original brief. Expand only when the owner can explain quality, access, response time, and escalation behavior.'] },
      { heading: 'Ask the provider to show the boundary', paragraphs: ['Ask for a walkthrough of one ordinary item and one sensitive exception. The answer should name the source, assistant action, stop point, owner, and proof of completion.', 'A provider conversation is most useful when it starts with a real redacted example and a short list of decisions that remain inside the company.'] }
    ],
    scripts: [
      { label: 'Provider call question', text: `Show how your Philippines-based assistant would handle one ordinary ${seed.focus} item and one exception. What is prepared, what stops, who approves, and what evidence remains?` },
      { label: 'Assistant stop rule', text: 'Prepare from approved sources and route uncertainty. Stop before answering sensitive employee questions or making a policy, pay, status, legal, or employment decision.' }
    ],
    workflow: [
      { step: '01', title: 'Map the queue', text: 'List the source, required fields, owner, due time, and approved destination.' },
      { step: '02', title: 'Test examples', text: 'Use redacted routine and exception examples with the owner watching.' },
      { step: '03', title: 'Run the lane', text: 'Prepare work, route questions, and record evidence without changing scope.' },
      { step: '04', title: 'Review the sample', text: 'Compare output to the brief and correct the playbook.' },
      { step: '05', title: 'Decide the next scope', text: 'Expand, narrow, or hand back the work using the review record.' }
    ],
    faqs: [
      { question: `What can a Philippines-based assistant do for ${seed.focus}?`, answer: 'They can prepare, organize, check, remind, and route approved work. The company should retain decisions, exceptions, sensitive messages, and final approval.' },
      { question: 'What should stay with the HR owner?', answer: 'Employment decisions, policy interpretation, legal questions, pay and benefits decisions, investigations, complaints, and exceptions should stay with qualified internal owners or advisers.' },
      { question: 'How should the first pilot be reviewed?', answer: 'Review representative items daily, record corrections, check access, and hold a formal scope decision at the end of the pilot window.' },
      { question: 'What makes an item complete?', answer: 'The source, action, owner, approval, status, date, and evidence should be visible in the approved system.' },
      { question: 'How do we protect employee information?', answer: 'Use named accounts, least-privilege access, approved storage, redacted training examples, and a clear escalation path for sensitive data.' }
    ],
    related: related.map((item) => ({ title: item.title, href: `/blog/${item.slug}`, note: 'Related workflow guide for HR owners.' })),
    sources: [source],
    banners: [
      { eyebrow: 'First task', title: 'Write the queue before hiring.', text: 'Define inputs, outputs, owners, access, and stop rules in one short brief.', href: '/services/operations-support', linkLabel: 'Review HR operations support' },
      { eyebrow: 'Quality check', title: 'Review a representative sample.', text: 'Use a daily review sheet to catch routing, source, and approval gaps early.', href: '/services/reporting-and-qa', linkLabel: 'See HR reporting and QA' },
      { eyebrow: 'Plan the role', title: 'Keep judgment with the owner.', text: 'Bring a redacted example to a staffing discussion before expanding the queue.', href: '/contact-us', linkLabel: 'Discuss HR support' }
    ]
  } as RichArticle];
}));
