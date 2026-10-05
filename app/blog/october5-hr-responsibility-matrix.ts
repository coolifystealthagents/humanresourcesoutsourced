import type { RichArticle } from './article-data';
import { october5BlogDate } from './october5-blog-batch';

const slug = 'hr-outsourcing-responsibility-matrix';

export const october5ResponsibilityPost = {
  slug,
  title: 'Build a Responsibility Matrix for Outsourced HR Administration',
  excerpt: 'Assign preparation, decisions, system actions, employee communication, evidence, and backup coverage for each outsourced HR workflow.',
  minutes: 16,
  published: october5BlogDate
} as const;

const sections: RichArticle['sections'] = [
  { heading: 'Map work at the level where handoffs happen', paragraphs: ['Start with a real workflow, not a department label. "Onboarding" is too broad to assign to one box. Break it into offer data receipt, identity and eligibility document handling, system entry, manager reminders, orientation scheduling, payroll handoff, employee questions, exception review, and completion evidence. For every step, record the trigger, source, authorized action, destination, deadline, and proof that the work reached the right place. This level of detail exposes the moments when a provider must stop and a company owner must decide. It also prevents two people from assuming the other person updated the same record. Build the first matrix from a recent completed case and one difficult case. The contrast will reveal dependencies that a workshop based on an ideal process tends to miss.'] },
  { heading: 'Separate preparation from authority', paragraphs: ['An outsourced administrator can collect facts, check required fields, prepare a transaction, organize a decision packet, schedule an approved message, and document the outcome. Those actions do not transfer the company\'s authority for employment decisions, policy interpretation, legal conclusions, payroll approval, benefit eligibility, accommodation decisions, investigations, or exceptions. Give each consequential decision a named company role and state what evidence that owner needs. A useful row might say that the provider prepares an employee status change from an authenticated request, while the HR owner approves the change and the payroll owner confirms the effective payroll period. The distinction protects employees from unsupported answers and keeps the provider from becoming an accidental policy maker. It also makes delays diagnosable: the record can show whether preparation, decision, or execution is waiting.'] },
  { heading: 'Assign one accountable owner without hiding contributors', paragraphs: ['Each step needs one role accountable for the outcome, even when several people contribute. Name the person who performs the work, the owner who accepts the result, the people who must be consulted before action, and the people who need an update. Avoid filling every row with the full project team. Too many mandatory consultations turn ordinary administration into a meeting queue, while a long notification list spreads sensitive employee information farther than necessary. Use roles rather than personal names in the durable matrix, then maintain a separate contact roster with primary and backup people. Define what accountability means for that row. It may mean approving source data, confirming a system update, answering an employee, or accepting reconciliation evidence. A letter in a grid has little value unless the operating meaning is explicit.'] },
  { heading: 'Design the stop points and escalation path', paragraphs: ['Write the conditions that prevent routine processing. Examples include conflicting effective dates, a missing approval, an employee identity mismatch, an instruction sent through an unapproved channel, a request outside scope, a system permission failure, or a question requiring policy judgment. For each condition, name the escalation owner, the evidence to send, the response deadline, the safe status of the case while waiting, and the employee update that may be given. Do not use "escalate to HR" as the whole rule. HR may include several specialists, and a forwarded message may omit the exact decision needed. A good escalation packet states the authenticated source, work already completed, conflict or risk, deadline, affected destination, and requested decision. The provider should record the answer and resume only the authorized step, not reinterpret the answer as a new standing policy.'] },
  { heading: 'Connect access to assigned tasks', paragraphs: ['Review the systems, folders, queues, reports, and distribution lists required by each assigned action. Grant access for the job actually described in the matrix and remove permissions that belong to an old workflow or a different population. The NIST definition of least privilege calls for giving users only the minimum authorizations needed to perform assigned tasks. Apply that idea practically: a coordinator who prepares a change may not need final approval rights, and a help desk responder may need a controlled knowledge source rather than broad employee file access. Record who approves access, who reviews it, what event triggers removal, and how urgent revocation works. Test with a realistic case. A permission list may look correct while a missing folder, queue, or field quietly forces staff to share files through an unsafe workaround.'] },
  { heading: 'Add backup coverage that preserves control', paragraphs: ['A backup plan should identify more than a second name. Record when backup coverage activates, how the backup receives current case context, which actions remain available, and which decisions must wait for the primary owner or another authorized role. Test coverage during a planned absence with a small set of routine cases and at least one exception. Watch for private inboxes, personal spreadsheets, undocumented verbal approvals, or system knowledge held by one person. The provider can maintain a current open-case register with owner, status, next action, due time, dependency, and employee update. Company backups still need the authority and system access appropriate to their role. If emergency access is broader, document approval, duration, monitoring, and removal rather than leaving it active for convenience.'] },
  { heading: 'Test the matrix against one complete transaction', paragraphs: ['Run a tabletop exercise, then follow one authorized transaction from intake through closure. Ask each participant what they receive, what they check, what they may change, when they stop, where they record evidence, and whom they notify. Introduce a realistic disruption such as a late manager response, inconsistent source data, an unavailable system, or an employee reply that changes the facts. The exercise should find ambiguous ownership before a live deadline does. Record every place where two roles claim the same action, no role owns an action, the backup cannot proceed, or the evidence does not prove completion. Correct the workflow and repeat the failed portion. Success means a different qualified person can follow the record, understand the authorized decision, locate the controlling system, and explain the current status without reconstructing the case from chat history.'] },
  { heading: 'Keep the matrix tied to operating change', paragraphs: ['Review responsibility rows when scope, policy, systems, staffing, employee populations, vendors, or approval thresholds change. Do not wait for an annual contract review if the daily work has already moved. Version the matrix, record the owner and approval date, and tell affected staff which instructions changed. Sample cases after the change to confirm that behavior matches the document. Metrics should point to specific design problems: cases waiting for a decision owner, transactions returned for incomplete sources, access failures, duplicate actions, missed employee updates, or closure without evidence. Use those findings to change a row, an intake requirement, an access rule, or a backup path. The finished matrix is an operating control, not wall art. It should help an employee get a reliable answer and help the company see exactly where authority remained.'] }
];

export const october5ResponsibilityArticles: Record<string, RichArticle> = {
  [slug]: {
    slug,
    title: october5ResponsibilityPost.title,
    description: october5ResponsibilityPost.excerpt,
    published: october5BlogDate,
    updated: october5BlogDate,
    minutes: 16,
    revision: '2026-10-05-responsibility-matrix-draft-1',
    heroImage: '/hr-team.jpg',
    directAnswer: [
      'Build the responsibility matrix from individual HR actions. Name who prepares each action, who decides, who executes it, who receives an update, and what evidence proves completion.',
      'Keep employment and policy authority with qualified company owners. Give an outsourced team bounded administrative work, explicit stop conditions, task-based access, and tested backup routes.'
    ],
    takeaways: sections.map((section) => section.heading),
    sections,
    taskRows: sections.map((section, index) => ({ lane: section.heading, philippinesTeam: `Prepare the evidence and assigned action for lane ${index + 1}.`, owner: `Approve decisions and accept the result for lane ${index + 1}.`, check: 'Confirm trigger, authority, destination, deadline, backup, and proof.' })),
    pilotStats: [
      { value: '1', label: 'Accountable role', note: 'For every action and result.' },
      { value: '2', label: 'Cases to map', note: 'One routine and one difficult case.' },
      { value: '4', label: 'Handoff facts', note: 'Source, action, destination, and proof.' },
      { value: '0', label: 'Unowned steps', note: 'The target before launch.' }
    ],
    scripts: [
      { label: 'Decision escalation', text: 'The authenticated source says [fact]. We completed [bounded work]. Processing stopped because [condition]. Please decide [specific question] by [time].' },
      { label: 'Ownership check', text: 'Who prepares this action, who has authority to approve it, who changes the controlling record, and what evidence lets the accountable owner accept completion?' }
    ],
    workflow: sections.map((section, index) => ({ step: String(index + 1).padStart(2, '0'), title: section.heading, text: section.paragraphs[0].split('. ')[0] + '.' })),
    faqs: [
      { question: 'Should one provider own an entire HR process?', answer: 'Assign individual actions. The provider may coordinate a workflow while company roles retain decisions, approvals, and acceptance.' },
      { question: 'Should the matrix use employee names?', answer: 'Use durable role names in the matrix and maintain a separate roster for primary and backup contacts.' },
      { question: 'How detailed should the matrix be?', answer: 'Make it detailed enough to show every real handoff, decision boundary, system action, employee update, and completion record.' },
      { question: 'When should it be reviewed?', answer: 'Review it whenever scope, systems, policy, staffing, populations, access, or approval rules change, then test the affected rows.' }
    ],
    related: [
      { title: 'HR operations support', href: '/services/operations-support', note: 'Map recurring administrative actions and handoffs.' },
      { title: 'Onboarding coordination', href: '/services/onboarding-coordination', note: 'Apply the matrix to a dependency-heavy workflow.' },
      { title: 'HR reporting and QA', href: '/services/reporting-and-qa', note: 'Test ownership and completion evidence.' },
      { title: 'Map your HR support responsibilities', href: '/contact-us', note: 'Discuss tasks, authority, access, backups, and evidence.' }
    ],
    sources: [
      { name: 'NIST least privilege glossary', url: 'https://csrc.nist.gov/glossary/term/least_privilege', note: 'Official definition supporting task-limited system authorization.' },
      { name: 'FTC Start with Security', url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business', note: 'Official business guidance on access controls and service provider oversight.' }
    ],
    banners: []
  }
};
