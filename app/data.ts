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
    desc: 'Offshore HR operations support for inbox triage, employee record updates, policy handoffs, and manager follow-up.',
    bestTasks: ['HR inbox sorting and owner-approved replies', 'employee file updates and checklist tracking', 'policy acknowledgement follow-up', 'PTO, address, and status change routing'],
    controls: ['manager approval for sensitive employee issues', 'daily handoff note with open items and blockers', 'weekly error review for files, dates, and missing documents'],
    firstWeek: ['connect the HR inbox with limited permissions', 'share three good examples and three do-not-send examples', 'review the first 25 tickets before replies go out'],
    faqs: [
      { question: 'Can offshore staff answer employee HR questions?', answer: 'They can draft and route simple replies from approved templates. Pay, discipline, medical, legal, and policy exceptions should stay with the HR owner.' },
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
      { question: 'Is this a replacement for an HR manager?', answer: 'No. It removes repeat admin work and routes issues faster. A manager still owns policy, judgement calls, and employee-sensitive decisions.' },
      { question: 'How do we keep answers consistent?', answer: 'Start with approved reply templates, a list of topics the assistant cannot answer alone, and a weekly review of changed policies.' },
    ],
  },
  {
    slug: 'admin-support',
    title: 'Recruiting admin support',
    desc: 'Recruiting admin support for interview scheduling, candidate follow-up, scorecard collection, and hiring pipeline cleanup.',
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
    desc: 'HR reporting and QA support for weekly people ops dashboards, checklist audits, and clean handoffs to the HR owner.',
    bestTasks: ['weekly onboarding status reports', 'missing document audits', 'ticket aging and response-time summaries', 'checklist QA before payroll or benefits cutoffs'],
    controls: ['source links for every number', 'red flag list for missing IDs, dates, or approvals', 'owner signoff before reports are sent outside HR'],
    firstWeek: ['pick one report that already exists', 'define the fields and source systems', 'compare assistant output to the owner report for two cycles'],
    faqs: [
      { question: 'Can an offshore assistant own HR metrics?', answer: 'They can prepare and check the report. The HR owner should still approve the numbers, explain trends, and decide what changes.' },
      { question: 'Which reports are safest to start with?', answer: 'Start with onboarding status, missing paperwork, open tickets, and aging items. Avoid sensitive performance or compensation reports until trust and access controls are proven.' },
    ],
  },
] as const;

export const blogPosts = [
  {
    slug: 'human-resources-outsourced-planning',
    title: 'Human Resources Outsourced: What does it plan?',
    excerpt: 'A plain-English guide to staffing details, scope, and hidden planning.',
    minutes: 6,
  },
  {
    slug: 'human-resources-outsourced-tasks-to-outsource',
    title: 'Human Resources Outsourced: What tasks should you outsource first?',
    excerpt: 'Start with recurring work that has examples and clear review rules.',
    minutes: 7,
  },
  {
    slug: 'human-resources-outsourced-provider-questions',
    title: 'Human Resources Outsourced: Questions to ask before hiring',
    excerpt: 'Use these questions before you sign with a provider or freelancer.',
    minutes: 8,
  },
  {
    slug: 'human-resources-outsourced-onboarding-checklist',
    title: 'Human Resources Outsourced: First week onboarding checklist',
    excerpt: 'A simple checklist for tools, SOPs, calls, QA, and reporting.',
    minutes: 9,
  },
] as const;

export const stats = [
  { label: 'Typical savings target', value: '30-60%', note: 'depends on role, management, and local hiring plan' },
  { label: 'Best pilot length', value: '14 days', note: 'enough time to test quality before scaling' },
  { label: 'Start with', value: '5-10 tasks', note: 'clear recurring tasks beat vague job descriptions' },
] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
