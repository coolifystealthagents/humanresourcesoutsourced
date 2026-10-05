import type { RichArticle } from './article-data';
import { october5BlogDate } from './october5-blog-batch';

const slug = 'hr-outsourcing-knowledge-base-governance';

export const october5KnowledgePost = {
  slug,
  title: 'Govern an HR Knowledge Base Used by an Outsourced Support Team',
  excerpt: 'Turn approved policies and procedures into controlled answers with named owners, source links, audience limits, review triggers, and feedback from real employee questions.',
  minutes: 16,
  published: october5BlogDate
} as const;

const sections: RichArticle['sections'] = [
  { heading: 'Start with the questions employees actually ask', paragraphs: ['Collect a representative sample of recent employee and manager requests, including routine questions, misunderstood instructions, exceptions, and cases that reached the wrong owner. Group them by the answer or procedure required, not just by ticket category. A label such as "benefits" may hide enrollment instructions, eligibility decisions, plan interpretation, payroll deductions, or a lost card request. Those need different sources and decision boundaries. Record the words requesters use so search terms match ordinary language. Then identify which questions an outsourced support team may answer directly, which require an authenticated employee record, and which must go to a qualified company owner. The goal is not to write an encyclopedia. It is to support recurring work with the smallest set of approved, findable instructions that produce a safe next action.'] },
  { heading: 'Anchor every answer to a controlling source', paragraphs: ['Give each article a source owner, source document or system, applicable population, jurisdiction or plan where relevant, effective date, and last approval. Link to the controlling material when access rules allow it. If the knowledge article summarizes a longer policy, say what it covers and where the reader must stop rather than filling gaps with a plausible interpretation. A support response should distinguish a published rule from a case-specific fact. For example, the knowledge base can explain where an employee submits an approved form, while eligibility or exception decisions remain with the named company role. Remove articles whose source cannot be identified. Familiar wording copied from old messages is not authority, and a polished answer becomes riskier when staff cannot trace who approved it or whether it still applies.'] },
  { heading: 'Write instructions for action, not policy theater', paragraphs: ['Use the employee question as the title or opening line, then provide the approved answer, required inputs, next step, expected owner, and escalation condition. Keep procedural steps in the order they happen. Name the destination and completion evidence instead of saying to "process accordingly." If an employee needs to choose among options, point to the approved comparison material and decision owner rather than inventing advice. Include the limits of the article in plain language. A useful article might explain how to report an address change, which system controls payroll and benefit records, what effective-date evidence is needed, and where a mismatch goes. It should not bury that route under company history or motivational language. Test the draft with someone who did not write it. If that reader cannot complete the bounded action, the article is not ready.'] },
  { heading: 'Control audiences and sensitive detail', paragraphs: ['Separate employee-facing guidance, manager instructions, provider procedures, and restricted owner notes. They answer different questions and may expose different information. An employee article can describe the request channel and expected next step without displaying internal fraud checks, escalation contacts, or other employees\' data. A provider procedure may need field-level instructions but should not contain reusable credentials or unrestricted exports. Map each collection to role-based access and confirm that search results do not reveal titles, snippets, or attachments outside the intended audience. The FTC advises businesses to limit access to sensitive data and oversee service providers that handle it. Apply that principle to the knowledge base itself, not only to HR systems. Review copied screenshots and examples closely; realistic training content can accidentally preserve names, identifiers, compensation, or medical details.'] },
  { heading: 'Make approval and change control visible', paragraphs: ['Choose an owner who has authority over the underlying policy or procedure and an editor who maintains the article. Record approvals in a version history with the changed section, reason, effective date, and reviewer. A future review date is useful, but event-based triggers are faster: a policy revision, plan change, new system, reorganized owner, legal update, recurring correction, or failed employee journey should open the affected articles immediately. Mark replaced content as retired and redirect staff to the current version. Do not leave two nearly identical answers in search results while asking users to compare dates. For urgent changes, define who may publish temporary guidance, how it is labeled, when it expires, and who must complete formal review. Staff need to know whether an article is approved, provisional, or obsolete before they act.'] },
  { heading: 'Design the handoff when the article cannot answer', paragraphs: ['Every article needs a clear exit for missing facts, conflicts, sensitive issues, and requests outside the provider\'s authority. State the stop condition and the precise route. The handoff should include the employee\'s authenticated request, applicable article and version, facts already checked, work completed, conflict found, deadline, and decision needed. Avoid asking the employee to start over unless identity or consent requirements demand it. Tell the requester what can be shared about the status and when the next update is due. Track whether the receiving owner accepted the handoff. A provider can follow a good article and still fail the employee if the exception disappears into an unowned mailbox. Closure belongs in the controlling case record after the approved answer or transaction reaches the employee and any required system.'] },
  { heading: 'Use case reviews to improve the library', paragraphs: ['Sample searches with no result, articles opened before a transfer, employee recontacts, corrected answers, owner escalations, and cases where agents chose different articles for the same question. Read the case, not just the search count. A frequently viewed article may be excellent, or it may be compensating for a broken process. A low-rated answer may be wrong, hard to find, or accurate but unable to resolve a system problem. Assign each confirmed issue to a specific correction: add a synonym, split mixed audiences, clarify a stop condition, repair a source link, change the workflow, or retire duplicate content. Retest with the original question after publishing. Do not reward agents for avoiding escalations when the correct outcome requires a decision owner. Measure whether the library helped route the work correctly and left usable evidence.'] },
  { heading: 'Launch with a bounded set and named ownership', paragraphs: ['Choose one request family with steady demand and clear company authority, then publish only the articles needed for that lane. Train the outsourced team on source checking, audience limits, escalation, and case documentation. Run supervised cases and compare the answer sent, source version, employee context, destination, and closure record. Correct gaps before expanding to another family. Maintain an inventory with article owner, editor, audience, source, effective date, next review, last tested case, and status. This gives the company a practical way to see whether its operational instructions remain trustworthy. The reader outcome is modest but important: employees receive consistent next steps, support staff know when to stop, and company owners can trace an answer back to the approved rule instead of debating which old message someone remembered.'] }
];

export const october5KnowledgeArticles: Record<string, RichArticle> = {
  [slug]: {
    slug,
    title: october5KnowledgePost.title,
    description: october5KnowledgePost.excerpt,
    published: october5BlogDate,
    updated: october5BlogDate,
    minutes: 16,
    revision: '2026-10-05-knowledge-base-governance-draft-1',
    heroImage: '/hr-team.jpg',
    directAnswer: [
      'Govern an outsourced HR knowledge base by tying each answer to an approved source, named owner, intended audience, effective date, decision boundary, and tested escalation route.',
      'Begin with real employee questions and a bounded request family. Review case outcomes to correct the content, search terms, workflow, or ownership instead of treating article views as proof of quality.'
    ],
    takeaways: sections.map((section) => section.heading),
    sections,
    taskRows: sections.map((section, index) => ({ lane: section.heading, philippinesTeam: `Prepare and test knowledge evidence for lane ${index + 1}.`, owner: `Approve sources and decision limits for lane ${index + 1}.`, check: 'Trace question, source, audience, action, escalation, and case outcome.' })),
    pilotStats: [
      { value: '1', label: 'Approved source', note: 'For every published answer.' },
      { value: '4', label: 'Content states', note: 'Draft, approved, provisional, or retired.' },
      { value: '2', label: 'Routes', note: 'Bounded answer or named handoff.' },
      { value: '0', label: 'Orphan articles', note: 'The inventory target.' }
    ],
    scripts: [
      { label: 'Knowledge answer', text: 'The approved guidance for [population] says [bounded answer]. Complete [next step] through [destination]. If [stop condition] applies, we will route the case to [owner].' },
      { label: 'Content correction', text: 'Case [reference] exposed [specific gap] in article [version]. The controlling source is [source]. Please approve, revise, or retire the affected instruction by [date].' }
    ],
    workflow: sections.map((section, index) => ({ step: String(index + 1).padStart(2, '0'), title: section.heading, text: section.paragraphs[0].split('. ')[0] + '.' })),
    faqs: [
      { question: 'Should the knowledge base copy complete HR policies?', answer: 'No. Provide the approved bounded answer and route, then link to the controlling material when access rules permit.' },
      { question: 'Who should approve an article?', answer: 'A company role with authority over the underlying policy or procedure should approve it. An editor can maintain the content.' },
      { question: 'Are article views a quality measure?', answer: 'They show use, not correctness. Review the resulting cases, transfers, corrections, employee recontacts, and completion evidence.' },
      { question: 'How should temporary guidance work?', answer: 'Name the authorized publisher, label the guidance as provisional, set an expiry, and require formal review or retirement.' }
    ],
    related: [
      { title: 'HR help desk support', href: '/services/hr-help-desk-support', note: 'Apply controlled guidance to employee requests.' },
      { title: 'HR operations support', href: '/services/operations-support', note: 'Connect answers to bounded administrative actions.' },
      { title: 'HR reporting and QA', href: '/services/reporting-and-qa', note: 'Review cases and correct recurring knowledge gaps.' },
      { title: 'Plan your HR support knowledge base', href: '/contact-us', note: 'Discuss sources, owners, audiences, and escalation routes.' }
    ],
    sources: [
      { name: 'FTC Start with Security', url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business', note: 'Official business guidance on limiting access and overseeing service providers.' },
      { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Official framework for identifying and managing privacy risk.' }
    ],
    banners: []
  }
};
