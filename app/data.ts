import { dailyBlogPosts } from './blog/daily-batch-2026-08-10';
import { august11BlogPosts } from './blog/daily-batch-2026-08-11';
import { august13BlogPosts } from './blog/daily-batch-2026-08-13';
import { august14BlogPosts } from './blog/daily-batch-2026-08-14';
import { august17BlogPosts } from './blog/daily-batch-2026-08-17';
import { august18BlogPosts } from './blog/august18-batch';
import { august18Repair4Posts } from './blog/august18-repair-4';
import { august19BlogPosts } from './blog/august19-batch';
import { august20BlogPosts } from './blog/august20-batch';
import { august21BlogPosts } from './blog/august21-batch';

export const site = {
  domain: 'HumanResourcesOutsourced.com',
  slug: 'humanresourcesoutsourced',
  brand: 'Human Resources Outsourced',
  primary: 'human resources outsourced',
  audience: 'companies outsourcing HR admin, recruiting coordination, and employee support',
  angle: 'HR inbox, onboarding paperwork, interview scheduling, and compliance handoffs',
  style: 'People ops handbook',
  dark: '#3b0a24',
  color: '#db2777',
  accent: '#7c3aed',
  heroImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  serviceImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  alt: 'human resources coordinator onboarding employee',
  badge: 'HR desk',
} as const;

export const services = [
  {
    slug: 'operations-support',
    title: 'HR operations support',
    desc: 'Keep the HR inbox, employee records, policy acknowledgements, and manager follow-up from falling behind.',
    bestTasks: ['HR inbox sorting and owner-approved replies', 'employee file updates and checklist tracking', 'policy acknowledgement follow-up', 'PTO, address, and status change routing'],
    controls: ['manager approval for sensitive employee issues', 'daily handoff note with open items and blockers', 'weekly error review for files, dates, and missing documents'],
    firstWeek: ['connect the HR inbox with limited permissions', 'share three good examples and three do-not-send examples', 'review the first 25 tickets before replies go out'],
    faqs: [
      { question: 'Can Philippines-based staff answer employee HR questions?', answer: 'They can draft and route simple replies from approved templates. Pay, discipline, medical, legal, and policy exceptions should stay with the HR owner.' },
      { question: 'What should stay in-house?', answer: 'Final decisions on employee relations, compensation, terminations, investigations, and legal interpretation should stay with your internal lead or advisor.' },
    ],
  },
  {
    slug: 'customer-support',
    title: 'Employee support desk',
    desc: 'A managed employee support desk for HR questions, benefits reminders, form collection, and status updates.',
    bestTasks: ['new hire question routing', 'benefits reminder follow-up from approved copy', 'document collection and missing-field checks', 'employee status update tickets'],
    controls: ['reply templates approved before launch', 'ticket tags for payroll, benefits, manager, and urgent issues', 'same-day escalation rules for sensitive messages'],
    firstWeek: ['build a small answer bank', 'tag ten past requests by owner and risk level', 'send daily unresolved-ticket summaries to HR'],
    faqs: [
      { question: 'Is this a replacement for an HR manager?', answer: 'No. It takes repeat admin work off the manager and routes questions to the right owner. Policy, judgment calls, and sensitive employee decisions stay with the manager.' },
      { question: 'How do we keep answers consistent?', answer: 'Start with approved reply templates, a list of topics the assistant cannot answer alone, and a weekly review of changed policies.' },
    ],
  },
  {
    slug: 'admin-support',
    title: 'Recruiting admin support',
    desc: 'Keep interview scheduling, candidate follow-up, scorecard collection, and hiring pipeline updates on track.',
    bestTasks: ['candidate email follow-up', 'interview scheduling and reminder messages', 'resume labeling and pipeline updates', 'scorecard collection after interviews'],
    controls: ['no salary, offer, rejection, or legal wording without approval', 'candidate notes stay factual and source based', 'daily pipeline report for stuck candidates'],
    firstWeek: ['load interview templates', 'clean one open role pipeline', 'test handoffs with five candidates before expanding'],
    faqs: [
      { question: 'Can outsourced recruiting admin talk to candidates?', answer: 'Yes, for scheduling and approved status messages. Hiring decisions, offer details, and sensitive feedback should come from the hiring owner.' },
      { question: 'What makes this work well?', answer: 'Clear templates, calendar rules, job-owner response times, and a short list of messages the assistant must escalate.' },
    ],
  },
  {
    slug: 'reporting-and-qa',
    title: 'HR reporting and QA',
    desc: 'Prepare weekly HR reports, check missing paperwork, and hand open questions back to the HR owner.',
    bestTasks: ['weekly onboarding status reports', 'missing document audits', 'ticket aging and response-time summaries', 'checklist QA before payroll or benefits cutoffs'],
    controls: ['source links for every number', 'red flag list for missing IDs, dates, or approvals', 'owner signoff before reports are sent outside HR'],
    firstWeek: ['pick one report that already exists', 'define the fields and source systems', 'compare assistant output to the owner report for two cycles'],
    faqs: [
      { question: 'Can a Philippines-based assistant own HR metrics?', answer: 'They can prepare and check the report. The HR owner should still approve the numbers, explain trends, and decide what changes.' },
      { question: 'Which reports are safest to start with?', answer: 'Start with onboarding status, missing paperwork, open tickets, and aging items. Avoid sensitive performance or compensation reports until trust and access controls are proven.' },
    ],
  },
] as const;

const evergreenBlogPosts = [
  { slug: 'philippines-hr-inbox-management-workflow', title: 'Philippines HR inbox management: a controlled workflow', excerpt: 'Build a Philippines-based HR inbox lane with approved replies, clear routing, and an owner review for sensitive employee questions.', minutes: 9 },
  { slug: 'philippines-employee-records-administration-checklist', title: 'Philippines employee records administration: a practical checklist', excerpt: 'Organize employee record updates with source checks, access limits, and an approval path for a Philippines-based support role.', minutes: 9 },
  { slug: 'philippines-interview-scheduling-support-process', title: 'Philippines interview scheduling support: process and handoffs', excerpt: 'Keep interviews moving with a Philippines-based coordinator while hiring owners retain candidate decisions and message approval.', minutes: 9 },
  { slug: 'philippines-hr-ticket-triage-escalation-rules', title: 'Philippines HR ticket triage: escalation rules that work', excerpt: 'Set up a repeatable HR ticket queue with risk tags, response templates, and named escalation owners.', minutes: 9 },
  { slug: 'philippines-employee-onboarding-document-collection', title: 'Philippines employee onboarding document collection: safe controls', excerpt: 'Collect onboarding documents through a narrow workflow that checks completeness without turning the support role into a decision maker.', minutes: 9 },
  { slug: 'philippines-pto-request-administration-support', title: 'Philippines PTO request administration: scope the support lane', excerpt: 'Track PTO requests and missing approvals with a Philippines-based assistant while managers retain approval authority.', minutes: 9 },
  { slug: 'philippines-hr-policy-acknowledgement-tracking', title: 'Philippines HR policy acknowledgement tracking: an owner-ready process', excerpt: 'Create a reliable acknowledgement tracker with reminders, source records, and escalation for exceptions.', minutes: 9 },
  { slug: 'philippines-recruiting-pipeline-administration', title: 'Philippines recruiting pipeline administration: controls and cadence', excerpt: 'Keep candidate stages, reminders, and scorecards organized without outsourcing hiring judgment.', minutes: 9 },
  { slug: 'philippines-employee-benefits-administration-support', title: 'Philippines employee benefits administration support: define the boundary', excerpt: 'Use a Philippines-based support lane for benefits forms and reminders while qualified owners handle eligibility and advice.', minutes: 9 },
  { slug: 'philippines-hr-reporting-dashboard-preparation', title: 'Philippines HR reporting dashboard preparation: source and review rules', excerpt: 'Prepare recurring HR reports from named sources with visible checks, owner signoff, and clear exception handling.', minutes: 9 },
  { slug: 'philippines-new-hire-calendar-coordination', title: 'Philippines new hire calendar coordination: a repeatable handoff', excerpt: 'Coordinate onboarding calendars, reminders, and meeting logistics with an accountable HR owner.', minutes: 9 },
  { slug: 'philippines-employee-change-request-routing', title: 'Philippines employee change request routing: prevent silent errors', excerpt: 'Route status, address, manager, and schedule changes through evidence and approval controls.', minutes: 9 },
  { slug: 'philippines-hr-compliance-calendar-administration', title: 'Philippines HR compliance calendar administration: track the work', excerpt: 'Maintain a compliance calendar and evidence log while legal and HR owners interpret requirements and approve action.', minutes: 9 },
  { slug: 'philippines-candidate-scorecard-collection-process', title: 'Philippines candidate scorecard collection: improve hiring handoffs', excerpt: 'Collect interview scorecards on time and surface gaps without influencing hiring decisions.', minutes: 9 },
  { slug: 'philippines-employee-exit-interview-coordination', title: 'Philippines exit interview coordination: a controlled support process', excerpt: 'Schedule exit interviews, prepare approved materials, and route sensitive feedback to the right owner.', minutes: 9 },
  { slug: 'philippines-hr-document-quality-assurance', title: 'Philippines HR document quality assurance: a two-pass review', excerpt: 'Use a two-pass document check for names, dates, approvals, and storage location before records are closed.', minutes: 9 },
  { slug: 'philippines-hr-calendar-and-deadline-tracking', title: 'Philippines HR calendar and deadline tracking: reduce missed handoffs', excerpt: 'Track recurring HR deadlines with one source of truth, reminders, and manager escalation.', minutes: 9 },
  { slug: 'philippines-employee-communications-drafting-controls', title: 'Philippines employee communications drafting: approval controls', excerpt: 'Prepare routine employee messages from approved copy while keeping policy interpretation and sensitive communication with HR.', minutes: 9 },
  { slug: 'philippines-hr-data-access-review-checklist', title: 'Philippines HR data access review: a least-privilege checklist', excerpt: 'Review the tools and records a support role can access, with named owners and evidence for every change.', minutes: 9 },
  { slug: 'philippines-hr-workflow-documentation-playbook', title: 'Philippines HR workflow documentation: write the first playbook', excerpt: 'Turn repeat HR work into a usable playbook with examples, stop rules, owners, and review points.', minutes: 9 },
  { slug: 'philippines-hr-backlog-cleanup-pilot', title: 'Philippines HR backlog cleanup: design a safe pilot', excerpt: 'Reduce an HR admin backlog with a small pilot, redacted examples, daily review, and documented handback.', minutes: 9 },
  { slug: 'philippines-hr-vendor-handoff-checklist', title: 'Philippines HR vendor handoff: keep ownership visible', excerpt: 'Coordinate HR vendor requests with a source log, response deadlines, and a clear boundary between preparation and approval.', minutes: 9 },
  {
    slug: 'philippines-hr-offboarding-support-access-closeout-checklist',
    title: 'Philippines HR offboarding support: access closeout checklist',
    excerpt: 'Use a Philippines-based HR assistant to track offboarding tasks while company owners keep control of employment decisions, system access, final records, and sensitive messages.',
    minutes: 14,
  },
  {
    slug: 'philippines-payroll-preparation-support-controls',
    title: 'Philippines payroll preparation support: scope and controls',
    excerpt: 'Set up Philippines-based payroll preparation with a narrow task list, separate approvals, change checks, source records, and a clear closeout review.',
    minutes: 14,
  },
  {
    slug: 'philippines-hr-onboarding-support-30-day-handoff-plan',
    title: 'Philippines HR onboarding support: a 30-day handoff plan',
    excerpt: 'Move onboarding admin to a Philippines-based HR assistant with clear owner decisions, access limits, review windows, and record controls.',
    minutes: 13,
  },
  {
    slug: 'human-resources-outsourced-planning',
    title: 'HR outsourcing: a Philippines HR admin buyer guide',
    excerpt: 'Plan Philippines-based HR admin support with clear task lanes, access limits, owner decisions, scripts, and a practical 10-day pilot.',
    minutes: 12,
  },
] as const;

// The dated daily batch is the newest family content and must precede evergreen posts.
export const blogPosts = [...august21BlogPosts, ...august20BlogPosts, ...august19BlogPosts, ...august18BlogPosts, ...august18Repair4Posts, ...august17BlogPosts, ...august14BlogPosts, ...august13BlogPosts, ...august11BlogPosts, ...dailyBlogPosts, ...evergreenBlogPosts] as const;

export const staffingOffer = {
  included: [
    'the HR admin tasks that can move without giving away manager decisions',
    'the inboxes, files, calendars, and HR tools the role will use',
    'approval rules for employee messages, records, offers, pay, and policy questions',
    'a first-week review plan for sample work, open items, and access limits',
  ],
} as const;

export const leadQuestions = [
  'Which HR admin work is falling behind now?',
  'Which inboxes, calendars, employee files, or HR systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingFitNote = 'The right setup depends on the HR tasks, schedule, access level, and decisions that must stay with your internal owner.';
