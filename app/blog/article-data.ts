export type RichArticle = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated: string;
  minutes: number;
  revision: string;
  directAnswer: string[];
  takeaways: string[];
  sections: { heading: string; paragraphs: string[] }[];
  taskRows: { lane: string; philippinesTeam: string; owner: string; check: string }[];
  pilotStats: { value: string; label: string; note: string }[];
  scripts: { label: string; text: string }[];
  workflow: { step: string; title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  related: { title: string; href: string; note: string }[];
  sources: { name: string; url: string; note: string }[];
};

export const richArticles: Record<string, RichArticle> = {
  'human-resources-outsourced-planning': {
    slug: 'human-resources-outsourced-planning',
    title: 'HR outsourcing: a Philippines HR admin buyer guide',
    description: 'Plan HR outsourcing with Philippines-based staff, clear task lanes, access limits, record controls, scripts, a 10-day pilot, and manager approval rules.',
    published: '2026-07-22',
    updated: '2026-07-22',
    minutes: 12,
    revision: '2026-07-22-hr-outsourcing-philippines-guide',
    directAnswer: [
      'HR outsourcing moves defined people-admin work to an outside team while your company keeps authority over policy, pay, discipline, investigations, and other sensitive decisions. A Philippines-based HR assistant can run repeat tasks such as interview scheduling, onboarding checklists, employee file updates, benefits reminders, and HR inbox routing.',
      'The safest setup starts with a narrow task list, named owners, limited access, and a short review cycle. Treat the outside team as an admin lane with clear stop points, not a replacement for your HR leader or legal adviser.'
    ],
    takeaways: [
      'Move repeat admin work before work that needs judgment.',
      'Give each task one company owner and one written escalation rule.',
      'Use named accounts and the smallest access level that gets the job done.',
      'Run a short pilot and review real files before widening the queue.',
      'Keep employee relations, pay, discipline, and legal calls with your company.'
    ],
    taskRows: [
      { lane: 'Interview coordination', philippinesTeam: 'Offer approved times, send reminders, and update the applicant tracking system.', owner: 'Choose candidates, set interview rules, and approve rejections or offers.', check: 'Calendar accuracy and complete status notes' },
      { lane: 'Onboarding admin', philippinesTeam: 'Send the approved checklist, collect forms, and flag missing fields.', owner: 'Approve the hire, start date, pay, access, and policy exceptions.', check: 'Complete packet before the start date' },
      { lane: 'Employee records', philippinesTeam: 'File approved documents and record address or status changes.', owner: 'Approve changes that affect pay, benefits, employment status, or policy.', check: 'Source document attached to each change' },
      { lane: 'HR help desk', philippinesTeam: 'Tag requests, send approved answers, and route sensitive questions.', owner: 'Handle complaints, medical details, investigations, discipline, and exceptions.', check: 'Correct routing and response age' },
      { lane: 'Payroll preparation', philippinesTeam: 'Collect time records, check missing fields, and prepare the change list.', owner: 'Approve rates, deductions, corrections, and the final payroll run.', check: 'Two-person review before submission' }
    ],
    pilotStats: [
      { value: '10 days', label: 'Pilot length', note: 'Example planning window' },
      { value: '25 items', label: 'First sample', note: 'Example file or ticket set' },
      { value: '15 min', label: 'Daily review', note: 'Example manager check' },
      { value: '2 people', label: 'Sensitive changes', note: 'Example approval control' }
    ],
    sections: [
      {
        heading: 'What HR outsourcing should cover',
        paragraphs: [
          'Start with work that repeats and leaves a clear record. Scheduling, checklist follow-up, inbox sorting, document collection, system updates, and report preparation are easier to teach than employee relations or policy decisions.',
          'A good first scope names the input, the expected output, and the person who checks it. It also says when the assistant must stop and return the item to an internal HR owner.',
          'This line matters because an admin task can turn sensitive without warning. A routine address update may affect payroll tax records, while an ordinary inbox message may contain a complaint or medical detail.'
        ]
      },
      {
        heading: 'What must stay with the company',
        paragraphs: [
          'Your company should keep final authority over hiring, pay, discipline, termination, investigations, employee relations, policy exceptions, and legal interpretation. The Philippines team can prepare records and route facts, but it should not make those calls.',
          'Write the boundary beside each task instead of placing it in a separate policy nobody reads. For example, an assistant may draft a standard benefits reminder, while the benefits owner approves any answer about eligibility or a denied claim.',
          'Keep one named owner for every high-risk lane. If ownership is split across HR, payroll, finance, and a manager, write the routing order so a sensitive case does not bounce between inboxes.'
        ]
      },
      {
        heading: 'Use access limits that fit the task',
        paragraphs: [
          'NIST defines least privilege as limiting access to the minimum needed for assigned work. In practice, an interview coordinator may need the calendar and applicant tracking system, but not compensation files or investigation notes.',
          'Use named accounts, multifactor authentication, role-based permissions, and an access log where the tool supports them. Do not share one broad HR login because it makes review and offboarding harder.',
          'Review access at the end of the pilot, after a role change, and when a task leaves the scope. Remove unused permissions instead of keeping them in case they are needed later.'
        ]
      },
      {
        heading: 'Set record rules before the handoff',
        paragraphs: [
          'HR records do not all follow one retention period. The IRS says employment tax records should be kept for at least four years after the tax becomes due or is paid, whichever is later.',
          'The EEOC says employers generally must keep personnel or employment records for one year, with other rules applying in some cases. Your own counsel or HR owner should set the record schedule because location, company size, contract terms, and the type of record can change the answer.',
          'Give the assistant a written file name, source field, storage location, and deletion rule for each document lane. A checklist should also say who may correct a record and who must approve the change.'
        ]
      },
      {
        heading: 'Compare the service models before choosing',
        paragraphs: [
          'HR outsourcing can mean software plus advice, a local professional employer organization, consulting, or dedicated admin staff. Those models solve different problems, so a brand list is less useful than a scope comparison.',
          'Dedicated Philippines-based staff fit repeat admin work that lives inside your existing tools and rules. They are not the right substitute for a licensed adviser, employer-of-record service, or company leader who must make employment decisions.',
          'Ask whether the provider supplies a dedicated person, a pooled queue, or both. Then confirm who trains the worker, who reviews quality, how coverage works, and what happens to accounts and records when the engagement ends.'
        ]
      },
      {
        heading: 'A realistic 10-day pilot',
        paragraphs: [
          'Imagine a 75-person company with a busy HR inbox and three open roles. The first pilot covers interview scheduling, new-hire checklist follow-up, and simple inbox tagging, while the HR manager keeps offers, complaints, payroll changes, and policy answers.',
          'During days 1 and 2, the manager shares ten redacted examples and marks the required output. During days 3 through 5, the assistant completes a small queue while the manager checks every item before it goes out.',
          'During days 6 through 10, the assistant works the normal queue within the written limits. The manager reviews a sample each day, records errors by type, and changes the instructions when a new exception appears.',
          'The pilot should stop if sensitive information goes to the wrong person, an approval is skipped, or the assistant works outside the approved system. A stop rule is useful because it turns a vague concern into a clear action.'
        ]
      },
      {
        heading: 'Measure the work without chasing busy numbers',
        paragraphs: [
          'Count complete and correct handoffs rather than messages sent or tickets closed. For scheduling, useful checks include calendar accuracy, candidate response age, and whether the next step is recorded.',
          'For onboarding, review missing documents, corrected fields, and completion before the start date. For the HR inbox, track items sent to the wrong owner and sensitive messages that missed the same-day escalation rule.',
          'Keep the scorecard small during the pilot. Three to five measures are enough to show whether the lane is stable, while a long dashboard can hide the one error that matters.'
        ]
      },
      {
        heading: 'Questions to ask before signing',
        paragraphs: [
          'Ask the provider to walk through one ordinary task and one sensitive exception. Listen for a clear account owner, review step, escalation path, and exit process rather than a broad promise that the team can handle everything.',
          'Request a sample first-week plan based on your tools and task list. The plan should name training examples, access needed, daily review time, and the point when work may go out without line-by-line approval.',
          'Ask how the provider recruits in the Philippines and confirms the worker assigned to your account. The answer should match the service you are buying, including schedule, coverage, reporting, and replacement terms.'
        ]
      }
    ],
    scripts: [
      { label: 'Provider call question', text: 'Please show me how your Philippines-based HR assistant would handle a routine onboarding form with one missing field, then explain what changes if the employee adds a medical note or complaint.' },
      { label: 'Internal handoff rule', text: 'You may send approved scheduling and checklist messages. Stop and tag the HR manager before replying when a message mentions pay, discipline, medical information, a complaint, an investigation, or a policy exception.' }
    ],
    workflow: [
      { step: '01', title: 'Choose one lane', text: 'Pick a repeat queue with clear examples, such as interview scheduling or onboarding document follow-up.' },
      { step: '02', title: 'Mark the boundaries', text: 'List what the assistant may send, what needs review, and what must return to an internal owner.' },
      { step: '03', title: 'Limit access', text: 'Create named accounts and grant only the systems and fields required for the chosen lane.' },
      { step: '04', title: 'Review a small sample', text: 'Check the first 25 items or another practical sample before increasing the queue.' },
      { step: '05', title: 'Decide with evidence', text: 'Expand, fix, or stop the lane based on errors, handoff quality, and manager review time.' }
    ],
    faqs: [
      { question: 'What is HR outsourcing?', answer: 'HR outsourcing gives defined HR work to an outside provider. The scope may include admin staff, software, consulting, payroll support, or another service model, while the company keeps the duties and decisions named in its agreement.' },
      { question: 'Which HR tasks are best to outsource first?', answer: 'Start with repeat admin work that has good examples and a clear owner. Interview scheduling, checklist follow-up, document collection, employee file updates, and inbox routing are practical first lanes.' },
      { question: 'Can a Philippines-based HR assistant talk to employees?', answer: 'Yes, when the assistant uses approved messages and clear escalation rules. Complaints, medical details, pay questions, discipline, investigations, and policy exceptions should return to the internal HR owner.' },
      { question: 'How long should an HR outsourcing pilot run?', answer: 'There is no single required length. A 10-business-day pilot is a planning example that gives many teams time to test training, access, real work, and a daily review without moving the whole HR queue at once.' },
      { question: "Does outsourcing remove the employer's responsibility?", answer: 'No. A provider can perform defined work, but the company still needs qualified owners for employment duties, approvals, legal advice, policy, and sensitive employee decisions.' },
      { question: 'How do we protect employee data?', answer: 'Use the minimum access needed, named accounts, strong login controls, written storage rules, and regular access reviews. Set the final privacy and retention rules with the company owners who understand the laws and contracts that apply.' }
    ],
    related: [
      { title: 'HR tasks to outsource first', href: '/blog/human-resources-outsourced-tasks-to-outsource', note: 'Choose a small first lane.' },
      { title: 'Questions to ask an HR outsourcing provider', href: '/blog/human-resources-outsourced-provider-questions', note: 'Prepare for provider calls.' },
      { title: 'First-week HR support onboarding checklist', href: '/blog/human-resources-outsourced-onboarding-checklist', note: 'Turn the plan into a launch list.' },
      { title: 'HR operations support', href: '/services/operations-support', note: 'Review the matching service lane.' }
    ],
    sources: [
      { name: 'CIPD: HR outsourcing factsheet', url: 'https://www.cipd.org/en/knowledge/factsheets/outsourcing-factsheet/', note: 'Service models, reasons for outsourcing, and contract considerations.' },
      { name: 'NIST: least privilege glossary', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Definition used for the access-control guidance.' },
      { name: 'IRS: employment tax recordkeeping', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping', note: 'Four-year employment tax record guidance.' },
      { name: 'EEOC: recordkeeping requirements', url: 'https://www.eeoc.gov/employers/recordkeeping-requirements', note: 'Federal personnel and employment record guidance.' },
      { name: 'SBA: hire and manage employees', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'Employer planning and compliance overview.' }
    ]
  }
};
