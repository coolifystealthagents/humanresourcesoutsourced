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
      { question: 'Can an offshore assistant own HR metrics?', answer: 'They can prepare and check the report. The HR owner should still approve the numbers, explain trends, and decide what changes.' },
      { question: 'Which reports are safest to start with?', answer: 'Start with onboarding status, missing paperwork, open tickets, and aging items. Avoid sensitive performance or compensation reports until trust and access controls are proven.' },
    ],
  },
] as const;

export const blogPosts = [
  {
    slug: 'human-resources-outsourced-planning',
    title: 'How to plan outsourced HR support',
    excerpt: 'Define the admin work, approval lines, and access rules before you look for support.',
    minutes: 6,
  },
  {
    slug: 'human-resources-outsourced-tasks-to-outsource',
    title: 'HR tasks to outsource first',
    excerpt: 'Start with repeat admin work that has good examples and a clear owner.',
    minutes: 7,
  },
  {
    slug: 'human-resources-outsourced-provider-questions',
    title: 'Questions to ask an HR outsourcing provider',
    excerpt: 'Ask how the provider handles access, quality checks, sensitive questions, and daily handoffs.',
    minutes: 8,
  },
  {
    slug: 'human-resources-outsourced-onboarding-checklist',
    title: 'First-week HR support onboarding checklist',
    excerpt: 'Set up tools, sample work, approval rules, and daily review before handing over the full queue.',
    minutes: 9,
  },
] as const;

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
