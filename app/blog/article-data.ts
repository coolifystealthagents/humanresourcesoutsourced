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
  expertQuote?: { text: string; attribution: string; url: string };
  chart?: { title: string; subtitle: string; bars: { label: string; value: number; note: string }[]; methods: string };
  graphic?: { title: string; caption: string; steps: { label: string; detail: string }[] };
  banners?: { eyebrow: string; title: string; text: string; href: string; linkLabel: string }[];
};

export const richArticles: Record<string, RichArticle> = {
  'philippines-payroll-preparation-support-controls': {
    slug: 'philippines-payroll-preparation-support-controls',
    title: 'Philippines payroll preparation support: scope and controls',
    description: 'Set up Philippines-based payroll preparation with a narrow task list, separate approvals, change checks, source records, and a clear closeout review.',
    published: '2026-07-27',
    updated: '2026-07-27',
    minutes: 14,
    revision: '2026-07-27-philippines-payroll-preparation-controls',
    directAnswer: [
      'A Philippines-based payroll assistant can collect approved time records, check missing fields, prepare change lists, update working files, and assemble a payroll register for review. Your company should keep control of employee master-data approval, final payroll approval, bank-detail changes, funding, and payment release.',
      'The cleanest setup separates preparation from approval and leaves a record for every change. Start with one pay cycle, use named accounts, review each exception, and reconcile the approved register against the final output before the cycle closes.'
    ],
    takeaways: [
      'Give the assistant preparation work, not payment authority.',
      'Require source evidence for every employee or bank-detail change.',
      'Keep named company owners for approvals, funding, and release.',
      'Reconcile the approved register against the final output.',
      'Remove access and return open items through a written exit list.'
    ],
    taskRows: [
      { lane: 'Time and attendance intake', philippinesTeam: 'Collect approved files, check names and dates, and list missing items.', owner: 'Approve time, leave, corrections, and exceptions before they enter the payroll file.', check: 'Source file, owner, date, and approval are visible' },
      { lane: 'Employee change list', philippinesTeam: 'Prepare additions, departures, status changes, and approved deductions from source records.', owner: 'Approve every change that affects employment, pay, benefits, tax treatment, or access.', check: 'Old value, new value, source, and approver match' },
      { lane: 'Payroll register draft', philippinesTeam: 'Enter approved inputs, run the working calculation, and flag unusual results.', owner: 'Review totals, exceptions, and sensitive employee changes before approval.', check: 'Totals tie to approved inputs and prior-cycle review' },
      { lane: 'Payment file support', philippinesTeam: 'Prepare the approved output and hand it to the named release owner.', owner: 'Control bank details, funding, final authorization, and payment release.', check: 'Preparer and releaser are different people' },
      { lane: 'Closeout records', philippinesTeam: 'Save the approved register, exception list, confirmations, and open-item note.', owner: 'Confirm the final output, resolve differences, and set retention rules.', check: 'Final record matches the approved register' }
    ],
    pilotStats: [
      { value: '76%', label: 'Payments fraud exposure', note: 'United States organizations reporting attempted or actual payments fraud in AFP\'s 2026 survey about 2025 activity' },
      { value: '74%', label: 'BEC exposure', note: 'United States organizations affected by business email compromise in the same AFP survey' },
      { value: '43%', label: 'Detected by tips', note: 'Share of cases detected by tips in ACFE\'s 2024 global study' },
      { value: '$145K', label: 'Median case loss', note: 'Median loss among cases in ACFE\'s 2024 global study' }
    ],
    sections: [
      {
        heading: 'Define payroll preparation before assigning it',
        paragraphs: [
          'Payroll preparation is the work that turns approved time, employee changes, deductions, and other source records into a register that a company owner can review. It does not include deciding a person\'s pay, changing bank details without approval, funding the account, or releasing the payment.',
          'Write the first scope as a short list of inputs and outputs. A useful line says where the time file arrives, which fields the assistant checks, where exceptions go, who approves the register, and what evidence closes the cycle.'
        ]
      },
      {
        heading: 'Separate preparation from approval and release',
        paragraphs: [
          'One person should not be able to create an employee change, approve it, alter the payment destination, and release funds. NIST control AC-5 tells organizations to identify duties that need separation and define access rights that support that split.',
          'For a Philippines support role, the assistant can prepare the working file and exception list while named company owners approve employee changes and the final register. A different authorized person should control funding and release, with reconciliation completed after the output is available.'
        ]
      },
      {
        heading: 'Treat change requests as evidence, not email instructions',
        paragraphs: [
          'A request to add an employee, change a deduction, or replace bank details needs a known source and an approved path. The assistant should record the old value, proposed value, request source, approver, date, and status instead of acting on a forwarded message alone.',
          'Business email compromise makes this rule practical rather than fussy. AFP reported on April 14, 2026 that 74% of 465 surveyed United States organizations were affected by business email compromise during 2025, so a separate verification step is sensible even though that figure is not a Philippines incident estimate.'
        ]
      },
      {
        heading: 'Use fraud research as context, not a forecast',
        paragraphs: [
          'The same AFP release says 76% of surveyed United States organizations experienced attempted or actual payments fraud in 2025, and 58% said checks were subject to fraud. Those results describe United States treasury teams; they do not measure a Philippines-based assistant or predict what will happen in one payroll process.',
          'ACFE\'s 2024 global study covered 1,921 occupational fraud cases from 138 countries and territories, with more than $3.1 billion in total losses and a $145,000 median loss per case. It also found that 43% of cases were detected by tips, which supports a clear reporting path and owner review without turning the article into a claim about any worker or location.'
        ]
      },
      {
        heading: 'Run the first cycle with visible checkpoints',
        paragraphs: [
          'Use a real cycle with redacted training examples and a narrow employee group. Check each input before entry, review every exception, compare the draft totals with approved source records, and hold release until the owner signs off.',
          'The 30-day chart below is a setup example for teams that need time to map, test, run, and close one preparation lane. It is not a claim that every payroll calendar takes 30 days or that the support role should control the full process.'
        ]
      },
      {
        heading: 'Keep records that explain what happened',
        paragraphs: [
          'A good closeout pack shows the approved inputs, change list, exception decisions, reviewed register, confirmation, and unresolved items. The assistant can assemble this pack, but the company owner sets the retention schedule and decides who may correct or delete a record.',
          'The IRS says United States employers should keep employment tax records for at least four years after filing the fourth quarter for the year. That is a United States rule rather than a Philippine retention period, so use it only as an example and ask the right company owner or adviser to set the schedule that applies.'
        ]
      },
      {
        heading: 'Ask the provider to show the control path',
        paragraphs: [
          'A useful provider answer walks through an ordinary time-file correction and a risky bank-detail request. It names the source, assistant action, approval owner, system record, stop rule, final check, and the person who removes access when the work ends.',
          'Ask to see the first-cycle plan, not a promise that the team can handle everything. The plan should show sample files, named accounts, review times, exception categories, backup coverage, open-item reporting, and the handback process if the assigned worker changes.'
        ]
      }
    ],
    scripts: [
      { label: 'Provider call question', text: 'Please show how your Philippines-based payroll assistant would handle one missing time record and one request to change employee bank details. Name the source evidence, the stop point, each approval owner, and the record left after the cycle closes.' },
      { label: 'Assistant stop rule', text: 'You may prepare the register from approved source records and list exceptions. Stop and tag the payroll owner before changing employee details, resolving a pay dispute, accepting new bank instructions, approving the final register, funding an account, or releasing a payment.' }
    ],
    workflow: [
      { step: '01', title: 'Map the source files', text: 'List each input, its owner, arrival time, required fields, and approved storage place.' },
      { step: '02', title: 'Mark approval points', text: 'Name who approves employee changes, exceptions, the final register, funding, and release.' },
      { step: '03', title: 'Test named access', text: 'Give the assistant only the systems and fields needed for preparation, then test removal.' },
      { step: '04', title: 'Review one live cycle', text: 'Check every exception and compare the draft register with approved source records.' },
      { step: '05', title: 'Close and reconcile', text: 'Match the final output to the approved register and save the evidence and open-item note.' }
    ],
    faqs: [
      { question: 'What can a Philippines payroll assistant prepare?', answer: 'The role can collect approved time records, check missing fields, prepare employee change lists, enter approved inputs, build a draft register, list exceptions, and assemble closeout records. The exact scope should match the company\'s systems and owner rules.' },
      { question: 'Which payroll duties should stay with the company?', answer: 'Keep decisions about employment and pay, employee master-data approval, bank-detail verification, final register approval, funding, payment release, dispute handling, and legal interpretation with qualified company owners.' },
      { question: 'Should the assistant have access to the bank account?', answer: 'Preparation normally does not require payment-release authority. Use the smallest access needed, keep preparer and releaser duties separate, and have the company\'s system and finance owners approve access.' },
      { question: 'How should bank-detail changes be checked?', answer: 'Use a known request channel and a separate verification step with an authorized owner. Record the old and new values, source, verifier, approval, date, and status before the change enters the approved payroll file.' },
      { question: 'Does this guide set a legal retention period?', answer: 'No. It gives an operating checklist and cites the IRS rule as a United States example. The company owner or adviser must set the employment, tax, privacy, and cross-border record rules that apply.' }
    ],
    related: [
      { title: 'Payroll preparation support', href: '/services/payroll-preparation-support', note: 'Review the matching Philippines staffing lane.' },
      { title: 'Employee records administration', href: '/services/employee-records-administration', note: 'Plan source records and approved changes.' },
      { title: 'HR reporting and QA', href: '/services/reporting-and-qa', note: 'Set up register checks and closeout reports.' },
      { title: 'HR outsourcing planning guide', href: '/blog/human-resources-outsourced-planning', note: 'Compare broader task and owner boundaries.' },
      { title: 'Plan Philippines-based HR support', href: '/contact', note: 'Bring a sample checklist to a staffing discussion.' }
    ],
    sources: [
      { name: 'AFP: 2026 Payments Fraud and Control Survey release', url: 'https://www.financialprofessionals.org/about/learn-more/press-releases/Details/over-75-percent-of-us-firms-experienced-payments-fraud-in-2025-while-ai-adoption-for-fraud-mitigation-lags', note: 'Published April 14, 2026; United States survey of 465 treasury practitioners and source for the 76%, 74%, and 58% figures and the Chris Ward quote.' },
      { name: 'ACFE: Occupational Fraud 2024, A Report to the Nations', url: 'https://www.acfe.com/-/media/files/acfe/pdfs/rttn/2024/2024-report-to-the-nations.pdf', note: 'Global study and source for the case count, countries and territories, total loss, median loss, and tip-detection share.' },
      { name: 'NIST SP 800-53 Rev. 5: AC-5 Separation of Duties', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Published September 2020 with later updates; source for the separation-of-duties control used in this guide.' },
      { name: 'IRS: Employment tax recordkeeping', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping', note: 'Reviewed June 12, 2026; official United States guidance used only as a recordkeeping example.' },
      { name: 'Lawphil: Republic Act No. 10173, Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Philippine privacy-law text for readers who need to discuss cross-border personal-data duties with qualified owners or advisers.' }
    ],
    expertQuote: {
      text: 'Fraud prevention today is an operating model, not a single control. The best outcomes come from strengthening the fundamentals — verification, disciplined approvals and timely detection — and using technology to reinforce trust as payments move faster. At Truist, that’s how we show up: with simplicity, speed, safety and smart execution.',
      attribution: 'Chris Ward, Head of Enterprise Payments at Truist, quoted by AFP on April 14, 2026',
      url: 'https://www.financialprofessionals.org/about/learn-more/press-releases/Details/over-75-percent-of-us-firms-experienced-payments-fraud-in-2025-while-ai-adoption-for-fraud-mitigation-lags'
    },
    chart: {
      title: 'First 30 days of payroll preparation review',
      subtitle: 'Each bar ends at a planned control check, not a promised result.',
      bars: [
        { label: 'Map inputs', value: 3, note: 'Days 1-3' },
        { label: 'Test changes', value: 7, note: 'Days 4-7' },
        { label: 'Run one cycle', value: 14, note: 'Days 8-14' },
        { label: 'Close and review', value: 30, note: 'Days 15-30' }
      ],
      methods: 'Method: the bars place the example mapping, test, live-cycle, and closeout checks on a 30-day setup scale. They are planning points made for this guide, not survey results, service promises, or a required payroll calendar.'
    },
    graphic: {
      title: 'Payroll preparation control path',
      caption: 'Preparation moves forward only from approved evidence, while decisions and release stay with company owners.',
      steps: [
        { label: 'Collect', detail: 'Approved sources' },
        { label: 'Prepare', detail: 'Draft and exceptions' },
        { label: 'Approve', detail: 'Company owner' },
        { label: 'Reconcile', detail: 'Final evidence' }
      ]
    },
    banners: [
      { eyebrow: 'First task', title: 'Map one payroll preparation lane.', text: 'Bring one source file, one change list, and one closeout example so the role starts with work the owner can check.', href: '/services/payroll-preparation-support', linkLabel: 'Review payroll preparation support' },
      { eyebrow: 'Quality check', title: 'Give every change a source and owner.', text: 'Use the reporting and QA lane to compare approved inputs, the draft register, exceptions, and the final record.', href: '/services/reporting-and-qa', linkLabel: 'See HR reporting and QA' },
      { eyebrow: 'Plan the role', title: 'Keep approvals and payment release in-house.', text: 'A staffing discussion can map the Philippines support work around your existing owners, systems, and closeout rules.', href: '/contact', linkLabel: 'Discuss Philippines-based HR support' }
    ]
  },
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
      { title: 'HR tasks to outsource first', href: '/blog', note: 'Choose a small first lane.' },
      { title: 'Questions to ask an HR outsourcing provider', href: '/blog', note: 'Prepare for provider calls.' },
      { title: 'First-week HR support onboarding checklist', href: '/blog', note: 'Turn the plan into a launch list.' },
      { title: 'HR operations support', href: '/services/operations-support', note: 'Review the matching service lane.' }
    ],
    sources: [
      { name: 'CIPD: HR outsourcing factsheet', url: 'https://www.cipd.org/en/knowledge/factsheets/outsourcing-factsheet/', note: 'Service models, reasons for outsourcing, and contract considerations.' },
      { name: 'NIST: least privilege glossary', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Definition used for the access-control guidance.' },
      { name: 'IRS: employment tax recordkeeping', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping', note: 'Four-year employment tax record guidance.' },
      { name: 'EEOC: recordkeeping requirements', url: 'https://www.eeoc.gov/employers/recordkeeping-requirements', note: 'Federal personnel and employment record guidance.' },
      { name: 'SBA: hire and manage employees', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'Employer planning and compliance overview.' }
    ]
  },
  'philippines-hr-onboarding-support-30-day-handoff-plan': {
    slug: 'philippines-hr-onboarding-support-30-day-handoff-plan',
    title: 'Philippines HR onboarding support: a 30-day handoff plan',
    description: 'Use this 30-day plan to hand repeat onboarding admin to a Philippines-based HR assistant while your company keeps hiring, policy, pay, access, and employee decisions.',
    published: '2026-07-25',
    updated: '2026-07-25',
    minutes: 13,
    revision: '2026-07-25-philippines-hr-onboarding-handoff',
    directAnswer: [
      'A Philippines-based HR assistant can run the repeat parts of onboarding: sending approved welcome notes, checking forms for missing fields, booking orientation, updating the HR system, and chasing signed acknowledgements. Your company should keep final control of the hire, start date, pay, policy exceptions, system permissions, and any message that contains a complaint or medical detail.',
      'Move the work in four steps over 30 days instead of handing over the whole queue on day one. Start with redacted examples, test named accounts, review every early item, and widen the lane only after the records are complete and the stop rules work.'
    ],
    takeaways: [
      'Begin with one repeat onboarding queue and ten clean examples.',
      'Give the assistant a named account with only the access the task needs.',
      'Keep hiring, pay, policy, employee relations, and legal calls with the company.',
      'Check complete records and correct handoffs, not message volume.',
      'Remove access and return open work through a written exit checklist.'
    ],
    taskRows: [
      { lane: 'Welcome messages', philippinesTeam: 'Send owner-approved copy, confirm receipt, and record the next step.', owner: 'Approve the hire, start date, policy wording, and any exception.', check: 'Correct person, date, template, and status' },
      { lane: 'Form collection', philippinesTeam: 'Check required fields, name the missing item, and store the approved file.', owner: 'Decide whether a document is acceptable and handle sensitive details.', check: 'Complete file with source and received date' },
      { lane: 'Orientation booking', philippinesTeam: 'Offer approved times, send reminders, and update the shared calendar.', owner: 'Choose required sessions, presenters, and attendance rules.', check: 'Calendar, time zone, and attendee match' },
      { lane: 'System setup request', philippinesTeam: 'Prepare the approved request and track its status.', owner: 'Approve each permission and confirm the business need.', check: 'Named account and least-access review' },
      { lane: 'First-week follow-up', philippinesTeam: 'Send the checklist, collect open questions, and route each one.', owner: 'Answer pay, policy, complaint, medical, and manager questions.', check: 'No sensitive question answered from guesswork' }
    ],
    pilotStats: [
      { value: '60%', label: 'Human element', note: 'Share of breaches involving a human element in the 2025 Verizon DBIR' },
      { value: '$4.88M', label: 'Global breach impact', note: 'Average reported in IBM\'s 2024 Cost of a Data Breach study' },
      { value: '859,532', label: 'Cyber complaints', note: 'Complaints received by the FBI IC3 during calendar year 2024' },
      { value: '$16.6B', label: 'Reported cyber loss', note: 'Losses in the FBI IC3 2024 annual report' }
    ],
    sections: [
      {
        heading: 'Choose a first lane that can be checked',
        paragraphs: [
          'Onboarding looks like one process, but it is a pile of small jobs owned by different people. Pick one lane that has a clear input and output, such as form collection or orientation booking, and leave exceptions with the internal HR owner.',
          'Gather ten recent examples and remove details the assistant does not need for training. Mark what was correct, what needed approval, and what should have stopped the process, because a folder of examples without notes leaves the new person guessing.'
        ]
      },
      {
        heading: 'Keep employee decisions inside the company',
        paragraphs: [
          'The outside assistant may prepare a record or send approved copy, but preparation is not approval. Hiring decisions, pay, benefit eligibility, background-check decisions, policy exceptions, discipline, accommodations, investigations, and termination belong with qualified company owners.',
          'Put the owner beside each stop rule. If a new hire asks why a benefit is unavailable, the assistant should route the question to the benefits owner rather than trying to make the welcome process feel complete.'
        ]
      },
      {
        heading: 'Use named accounts and the smallest useful access',
        paragraphs: [
          'NIST calls this least privilege. Its glossary defines the principle this way: "A security principle that a system should restrict the access privileges of users (or processes acting on behalf of users) to the minimum necessary to accomplish assigned tasks."',
          'For an onboarding coordinator, that may mean access to a checklist, a limited employee profile, and the orientation calendar. It does not automatically mean access to compensation files, investigation notes, medical records, or every past employee file.'
        ]
      },
      {
        heading: 'Treat the security numbers as a reason to slow down',
        paragraphs: [
          'The 2025 Verizon Data Breach Investigations Report says the human element was involved in about 60% of breaches. That does not mean an HR assistant is the problem; it means email, credentials, copied files, and rushed approvals deserve a simple control that people can follow.',
          'IBM reported that the global average impact of a data breach reached $4.88 million in its 2024 study, up 10% from the prior year. The FBI Internet Crime Complaint Center received 859,532 complaints in 2024 and recorded more than $16.6 billion in reported losses, but those global and national figures are context for careful account setup rather than a forecast for one company.'
        ]
      },
      {
        heading: 'Run the handoff in four review windows',
        paragraphs: [
          'Days 1 through 3 are for mapping the queue, cleaning examples, and naming the owner. The assistant watches the process and repeats the instructions back using one sample, while no message or record leaves the training area without review.',
          'Days 4 through 7 are a small supervised test. Give the assistant five to ten ordinary items, check every output, and sort misses into instruction, access, source-data, or judgment errors so the fix is clear.',
          'Days 8 through 14 are for a normal but narrow queue. Review a daily sample, keep every sensitive item with HR, and check whether the work actually reduces follow-up instead of creating another place for the manager to look.'
        ]
      },
      {
        heading: 'Count complete handoffs, not activity',
        paragraphs: [
          'A busy assistant can send many reminders while the employee file stays incomplete. Use a short scorecard that checks record completeness, correct owner routing, calendar accuracy, approval evidence, and the age of unresolved items.',
          'Review misses by type and show the exact example. If three forms arrive without a received date, change the checklist and test the fix instead of telling the assistant to be more careful.'
        ]
      },
      {
        heading: 'Set record and exit rules before the first live file',
        paragraphs: [
          'Retention is not one universal number. The IRS says employers should keep employment tax records for at least four years after the tax becomes due or is paid, whichever is later, while the EEOC says employers generally must keep personnel or employment records for one year and lists other situations with different duties.',
          'Ask the company owner or counsel to set the schedule that applies to each record type and location. The assistant needs the approved file name, storage place, source field, correction owner, and deletion or archive instruction, not a general request to keep HR files organized.'
        ]
      }
    ],
    scripts: [
      { label: 'Provider call question', text: 'Please show how your Philippines-based HR assistant would process a new-hire form with one missing field, then explain what changes if the form includes medical information or a complaint.' },
      { label: 'Assistant stop rule', text: 'You may send the approved welcome and checklist messages. Stop and tag the HR owner before replying to anything about pay, benefits eligibility, policy exceptions, complaints, medical details, investigations, or access outside the approved list.' }
    ],
    workflow: [
      { step: '01', title: 'Map one queue', text: 'Name the input, output, owner, storage place, and stop rule for one repeat onboarding task.' },
      { step: '02', title: 'Prepare examples', text: 'Use ten redacted examples with notes that show what passed, what changed, and what returned to HR.' },
      { step: '03', title: 'Test access', text: 'Create a named account with the smallest useful permission set and test it on a sample record.' },
      { step: '04', title: 'Review live work', text: 'Check every early item, then move to a daily sample only after the lane stays inside its boundary.' },
      { step: '05', title: 'Close the loop', text: 'Review record quality, manager time, open items, and access before adding another task.' }
    ],
    faqs: [
      { question: 'Which onboarding tasks can a Philippines HR assistant handle?', answer: 'A trained assistant can send approved messages, collect forms, flag missing fields, book orientation, update approved HR system fields, track acknowledgements, and route employee questions. The company should keep decisions and sensitive exceptions.' },
      { question: 'Should the assistant receive full HR system access?', answer: 'No. Start with the smallest role and field access needed for the chosen lane, use a named account, and review permissions when the lane changes.' },
      { question: 'Who approves system access for a new hire?', answer: 'A company system or data owner should approve each permission based on the job. The outsourced assistant may prepare and track the request but should not grant access alone.' },
      { question: 'How often should HR review the first month of work?', answer: 'Review every item during the first supervised test, then use a daily sample when the lane is stable. Keep immediate review for sensitive records and exceptions.' },
      { question: 'Does this plan replace legal or privacy advice?', answer: 'No. It is an operations plan for assigning admin work. Qualified company owners and advisers must set the employment, privacy, retention, and cross-border rules that apply.' }
    ],
    related: [
      { title: 'HR operations support', href: '/services/operations-support', note: 'See the matching employee admin lane.' },
      { title: 'Recruiting admin support', href: '/services/admin-support', note: 'Plan candidate scheduling and pipeline work.' },
      { title: 'HR reporting and QA', href: '/services/reporting-and-qa', note: 'Build a small review scorecard.' },
      { title: 'HR outsourcing planning guide', href: '/blog/human-resources-outsourced-planning', note: 'Compare task lanes and owner boundaries.' }
    ],
    sources: [
      { name: 'Verizon: 2025 Data Breach Investigations Report executive summary', url: 'https://www.verizon.com/business/resources/reports/2025-dbir-executive-summary.pdf', note: 'Published in 2025; source for the human-element share used in the article.' },
      { name: 'IBM: 2024 Cost of a Data Breach study release', url: 'https://newsroom.ibm.com/2024-07-30-ibm-report-escalating-data-breach-disruption-pushes-costs-to-new-highs', note: 'Published July 30, 2024; source for the global average and year-over-year change.' },
      { name: 'FBI IC3: 2024 Internet Crime Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf', note: 'Published in 2025 for calendar year 2024; source for complaint and reported-loss totals.' },
      { name: 'NIST: least privilege glossary', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Source for the exact least-privilege definition quoted in the article.' },
      { name: 'IRS: employment tax recordkeeping', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping', note: 'Official guidance for the four-year employment tax record rule.' },
      { name: 'EEOC: recordkeeping requirements', url: 'https://www.eeoc.gov/employers/recordkeeping-requirements', note: 'Official guidance for federal personnel and employment record retention.' }
    ],
    expertQuote: {
      text: 'A security principle that a system should restrict the access privileges of users (or processes acting on behalf of users) to the minimum necessary to accomplish assigned tasks.',
      attribution: 'NIST Computer Security Resource Center, least privilege glossary',
      url: 'https://csrc.nist.gov/glossary/term/least_privilege'
    },
    chart: {
      title: '30-day onboarding handoff review windows',
      subtitle: 'Each bar ends at a planned review point, not a promised performance result.',
      bars: [
        { label: 'Map and observe', value: 3, note: 'Days 1-3' },
        { label: 'Supervised test', value: 7, note: 'Days 4-7' },
        { label: 'Narrow live queue', value: 14, note: 'Days 8-14' },
        { label: 'Steady lane review', value: 30, note: 'Days 15-30' }
      ],
      methods: 'Method: the bars show the four planning windows in this guide on a 30-day scale. They are an operating example, not survey findings or a promise that every onboarding queue will be ready on the same day.'
    },
    graphic: {
      title: 'The employee record handoff path',
      caption: 'Every live item should leave a visible record, while exceptions return to the company owner.',
      steps: [
        { label: 'Receive', detail: 'Approved channel' },
        { label: 'Check', detail: 'Fields and source' },
        { label: 'Route', detail: 'Owner or next step' },
        { label: 'Record', detail: 'Status and evidence' }
      ]
    },
    banners: [
      { eyebrow: 'First task', title: 'Start with one onboarding queue.', text: 'Map the inputs, owner decisions, systems, and stop rules before a Philippines-based assistant touches a live employee record.', href: '/services/operations-support', linkLabel: 'Review HR operations support' },
      { eyebrow: 'Quality check', title: 'Give the manager one review sheet.', text: 'Use the reporting and QA lane to check complete records, correct routing, open items, and access without building a giant dashboard.', href: '/services/reporting-and-qa', linkLabel: 'See HR reporting and QA' },
      { eyebrow: 'Plan the role', title: 'Bring a real checklist to the staffing call.', text: 'A short, redacted example makes it easier to define the work, the tools, and the decisions that stay with your HR owner.', href: '/contact', linkLabel: 'Discuss Philippines-based HR support' }
    ]
  }
};
