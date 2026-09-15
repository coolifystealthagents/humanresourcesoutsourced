import type { RichArticle } from './article-data';

const date = '2026-09-14';
const topics = [
  ['onboarding-document-receipt-chain', 'Keep an Onboarding Document Receipt Chain', 'prove which onboarding document arrived, who checked it, and where it was filed', 'onboarding-coordination', 'receipt integrity'],
  ['payroll-cutoff-approval-register', 'Build a Payroll Cutoff Approval Register', 'separate late payroll inputs from the approval that admits them to a pay cycle', 'payroll-preparation-support', 'cutoff control'],
  ['benefits-vendor-rejection-followup', 'Track Benefits Vendor Rejections to Resolution', 'route rejected benefit changes without guessing eligibility or changing employee elections', 'benefits-administration-support', 'vendor response'],
  ['employee-address-change-effective-date', 'Control Effective Dates for Employee Address Changes', 'preserve the requested address, approved use, effective date, and destination confirmation', 'employee-records-administration', 'effective-date control'],
  ['candidate-interview-panel-access', 'Limit Interview Panel Access by Candidate and Stage', 'grant interview materials only to the approved panel for the active hiring stage', 'interview-coordination', 'candidate privacy'],
  ['performance-review-reminder-exception', 'Route Performance Review Reminder Exceptions', 'distinguish a late reminder from an absent reviewer, changed manager, or paused review', 'performance-review-administration', 'review-cycle exceptions'],
  ['leave-request-document-routing', 'Route Leave Request Documents Without Copy Sprawl', 'keep leave documents in the restricted source while the queue carries only status and ownership', 'hr-help-desk-support', 'sensitive-document routing'],
  ['offboarding-property-return-reconciliation', 'Reconcile Offboarding Property Returns', 'match each assigned asset to return evidence, condition, owner, and unresolved exception', 'offboarding-coordination', 'asset closeout'],
  ['hr-inbox-sensitive-case-routing', 'Set a Stop Rule for Sensitive HR Inbox Cases', 'identify sensitive case signals and route them without expanding the shared inbox record', 'hr-help-desk-support', 'intake boundaries'],
  ['training-roster-eligibility-freeze', 'Freeze the Eligible Roster for Training Reports', 'version the assigned population before measuring completion or chasing overdue learners', 'learning-administration', 'roster versioning'],
  ['employee-manager-change-notification', 'Verify Employee Manager-Change Notifications', 'confirm the approved manager change reached each authorized downstream destination', 'employee-records-administration', 'change propagation'],
  ['hr-report-definition-change-log', 'Maintain an HR Report Definition Change Log', 'record every numerator, denominator, exclusion, owner, and effective-definition change', 'reporting-and-qa', 'metric governance']
] as const;

export const september14BlogPosts = topics.map(([suffix, title, focus]) => ({
  slug: `september14-hr-${suffix}`,
  title,
  excerpt: `A practical HR operations guide to ${focus}.`,
  minutes: 9,
  published: date
}));

export const september14Articles: Record<string, RichArticle> = Object.fromEntries(topics.map(([suffix, title, focus, service, theme], index) => {
  const slug = `september14-hr-${suffix}`;
  const closeProof = `destination evidence for ${focus}`;
  return [slug, {
    slug,
    title,
    description: `A Philippines-based HR support workflow to ${focus}, with a narrow data boundary and named company review.`,
    published: date,
    updated: date,
    minutes: 9,
    revision: `${date}-${slug}`,
    heroImage: `/blog-heroes/${slug}.svg`,
    directAnswer: [
      `Start with one source record, one decision owner, and one closure test. The administrative objective is to ${focus}.`,
      `A Philippines-based coordinator may prepare, compare, remind, route, and document the ${theme} workflow. The employer retains decisions about employment, pay, benefits, accommodations, privacy, policy, safety, and legal duties.`
    ],
    takeaways: [
      `Define the ${theme} trigger before work begins.`,
      'Keep the original request and later corrections as separate events.',
      'Expose only the fields needed for the assigned administrative step.',
      'Pause conflicts and consequential decisions for a named company owner.',
      `Close only after a reviewer can retrieve ${closeProof}.`
    ],
    taskRows: [
      { lane: 'Receive', philippinesTeam: 'Capture the source, event time, case ID, and requested administrative action.', owner: `Approve the source and scope for ${theme}.`, check: 'The original event remains retrievable' },
      { lane: 'Validate', philippinesTeam: 'Check required fields and dates without resolving a conflict.', owner: 'Decide which value controls when records disagree.', check: 'Missing and conflicting facts stay visible' },
      { lane: 'Route', philippinesTeam: 'Send one concise exception record through the approved channel.', owner: 'Return an approval, correction, or stop instruction.', check: 'The decision and decision time are recorded' },
      { lane: 'Close', philippinesTeam: 'Apply only the approved administrative step and attach proof.', owner: 'Review exceptions and authorize closure.', check: closeProof }
    ],
    pilotStats: [
      { value: '1', label: 'Authoritative source', note: theme },
      { value: '5', label: 'Test scenarios', note: 'Routine, missing, conflict, sensitive, failed update' },
      { value: String(index + 6), label: 'Pilot cases', note: 'Review each early case' },
      { value: '2', label: 'Owner checks', note: 'Approval and closure' }
    ],
    sections: [
      { heading: `Define the ${theme} boundary`, paragraphs: [`Write the event that opens the work and the evidence that ends it. For this lane, the coordinator needs to ${focus}.`, 'List the decisions the coordinator cannot make and place a named company owner beside every stop point.'] },
      { heading: 'Preserve the source and its history', paragraphs: ['Keep the original message or system event, its timestamp, and a stable case identifier. A tracker entry is a working aid, not a replacement for the source.', 'When a correction arrives, add a new event. Do not silently overwrite the record another reviewer needs to reconstruct the sequence.'] },
      { heading: 'Use a minimum shared record', paragraphs: [`A ${theme} queue normally needs case identity, status, owner, due time, and next action. Sensitive narratives and documents stay in the restricted source system.`, `Grant only the access needed to ${focus}. Review download, export, sharing, and delegated access separately.`] },
      { heading: 'Test the failure paths', paragraphs: ['Run a routine case, a missing field, a conflicting source, a sensitive message, and a failed destination update before scaling the lane.', 'Ask a second reviewer to reproduce the outcome from retained records alone. Revise any field or rule that depends on verbal context.'] },
      { heading: 'Close from the destination', paragraphs: [`Use ${closeProof} as the closing record. A sent message or checked task proves activity, not the state of the authoritative destination.`, 'Leave unresolved work open with a named next action and review time. Report queue age separately from completion.'] },
      { heading: 'Questions for a provider review', paragraphs: [`Ask for a redacted demonstration of how the team would ${focus}.`, 'Confirm who reviews early cases, how exceptions reach the employer, and how access and records are returned when the assignment ends.'] }
    ],
    scripts: [
      { label: 'Exception note', text: `Paused because ${theme} evidence is missing, conflicting, sensitive, or requires an owner decision. Please confirm the controlling instruction.` },
      { label: 'Closeout note', text: `Closed after company review of ${closeProof}.` }
    ],
    workflow: [
      { step: '01', title: 'Receive', text: 'Preserve the source, time, and case identity.' },
      { step: '02', title: 'Compare', text: 'Check named facts without choosing between conflicts.' },
      { step: '03', title: 'Escalate', text: 'Route the exception to its assigned company owner.' },
      { step: '04', title: 'Apply', text: 'Perform only the approved administrative action.' },
      { step: '05', title: 'Confirm', text: 'Attach destination evidence and complete the review.' }
    ],
    faqs: [
      { question: `Can an outsourced coordinator own this ${theme} task?`, answer: 'The coordinator can own documented administrative steps. The employer retains consequential decisions and approvals.' },
      { question: 'What belongs in the shared queue?', answer: 'Use case identity, status, owner, timing, and next action. Keep sensitive detail in the restricted source system.' },
      { question: 'What if two sources disagree?', answer: 'Preserve both values and route the conflict to the named company owner.' },
      { question: 'What proves completion?', answer: `Require ${closeProof}. Activity alone does not prove the final state.` }
    ],
    related: [
      { title: 'Related HR service', href: `/services/${service}`, note: `Review the service boundary for ${theme}.` },
      { title: 'HR reporting and QA', href: '/services/reporting-and-qa', note: 'Design the evidence check and review sample.' }
    ],
    sources: [
      { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Official framework for managing privacy risk.' },
      { name: 'GAO Green Book', url: 'https://www.gao.gov/green-book', note: 'Official internal-control principles.' }
    ],
    banners: [{ eyebrow: 'Map the handoff', title: `Make the ${theme} boundary reviewable.`, text: 'Name the source, company owner, stop point, and destination evidence.', href: `/services/${service}`, linkLabel: 'Review the service scope' }]
  } satisfies RichArticle];
}));
