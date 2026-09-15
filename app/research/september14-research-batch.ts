import type { ResearchPost } from '../fleet-data';

const date = '2026-09-14';
const sources = [
  { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework' },
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
  { name: 'NIST least privilege glossary', url: 'https://csrc.nist.gov/glossary/term/least_privilege' },
  { name: 'GAO Green Book', url: 'https://www.gao.gov/green-book' },
  { name: 'National Archives records management guidance', url: 'https://www.archives.gov/records-mgmt' },
  { name: 'EEOC recordkeeping requirements', url: 'https://www.eeoc.gov/employers/recordkeeping-requirements' },
  { name: 'U.S. Department of Labor recordkeeping fact sheet', url: 'https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping' },
  { name: 'FTC data security guidance', url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security' },
  { name: 'CISA Cybersecurity Performance Goals', url: 'https://www.cisa.gov/cybersecurity-performance-goals' },
  { name: 'ICO data minimisation guidance', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/' }
];

const studies = [
  ['hr-onboarding-record-completeness-thresholds', 'Testing Completeness Thresholds for Onboarding Records', 'Separate required-field coverage from approved exceptions before comparing onboarding completion.', 'When does an onboarding file count as complete if some evidence is unavailable or legitimately excepted?', 'Use a versioned required-field set, identify the authoritative source for each field, and report present, missing, conflicting, and approved-exception states separately.', 'A completeness threshold cannot show whether a document is accurate, lawful, necessary, or fairly requested. Local owners must approve requirements and exceptions.'],
  ['hr-payroll-exception-queue-aging-bias', 'Bias in Payroll Exception Queue-Aging Measures', 'Define the queue clock and unresolved population before using age as a control signal.', 'How can payroll teams compare exception age without favoring queues that close and reopen cases differently?', 'Start the clock at a documented ready-for-review event, preserve pauses separately, and retain reopened cases in a linked event history rather than resetting their age silently.', 'Queue age does not measure case difficulty, employee impact, payroll accuracy, or responsibility for delay. Pause rules and local cutoff practices affect comparisons.'],
  ['hr-benefits-vendor-acknowledgment-latency', 'Measuring Benefits Vendor Acknowledgment Latency', 'Distinguish sent, received, accepted, rejected, and applied events in benefit-change handoffs.', 'Which event boundaries make vendor acknowledgment latency reproducible for benefit administration?', 'Record the approved outbound event, vendor receipt, validation response, acceptance or rejection, and destination application as separate timestamps with stable case identity.', 'Vendor acknowledgments can be delayed, duplicated, or technically generated before review. The measure cannot determine eligibility, coverage, legal compliance, or employee harm.'],
  ['hr-case-routing-confidence-calibration', 'Calibrating Confidence in HR Case Routing', 'Test routing labels against reviewed outcomes without exposing sensitive case narratives.', 'Can a small HR team measure routing consistency while keeping sensitive intake detail out of general analytics?', 'Use a minimal labeled sample, named category definitions, independent review, and an explicit uncertain state. Compare agreement and escalation rates by category, not by employee.', 'A reviewed sample can miss rare serious cases and cannot validate legal, medical, safety, accommodation, or employee-relations judgments. Categories may drift after policy changes.'],
  ['hr-access-review-orphaned-role-signals', 'Signals for Orphaned Roles in HR Access Reviews', 'Use ownership and activity evidence to prioritize role review without treating inactivity as proof.', 'Which evidence can help identify HR system roles that no longer have a current business owner?', 'Combine current worker status, manager ownership, role purpose, approval age, recent authorized use, and system dependency. Treat missing or conflicting evidence as a review trigger.', 'Inactivity does not prove access is unnecessary, and activity does not prove it is appropriate. Emergency, integration, service, and regulatory roles need separate owner review.']
] as const;

export const september14ResearchPosts: readonly ResearchPost[] = studies.map(([slug, title, excerpt, question, finding, limitations]) => ({
  slug,
  title,
  excerpt,
  published: date,
  modified: date,
  thumbnail: `/research-heroes/september14-${slug}.svg`,
  sections: [
    { heading: 'Research question', body: question },
    { heading: 'Methodology and scope', body: 'We performed a qualitative synthesis of ten primary or official sources covering privacy, cybersecurity, internal control, employment recordkeeping, records management, and data minimisation. We mapped recurring control principles to an event-based HR administration model and challenged the model with routine, missing-input, conflicting-source, sensitive, changed-population, and failed-destination cases. The scope is workflow and measurement design for small and midsize HR teams. We used no employee-level data, survey estimates, causal tests, or legal conclusions.' },
    { heading: 'Finding', body: finding },
    { heading: 'Operational interpretation and inference boundary', body: 'Our interpretation is an inference from the cited control frameworks: an inspectable HR measure needs a defined source event, eligible population, decision owner, permitted administrative action, exception route, observation period, and destination evidence. The sources do not prescribe this exact operating model. The model supports review but does not transfer employer accountability or determine a lawful or fair employment outcome.' },
    { heading: 'Validation exercise', body: 'Choose a small redacted set that includes every named exception type. Give the definitions and records to a second reviewer who was not involved in the work. Record disagreements, trace each one to a definition or missing event, revise that control, and repeat after any system, policy, or ownership change.' },
    { heading: 'Limitations', body: limitations },
    { heading: 'Practical conclusion', body: 'Pilot the definition on one bounded queue. Publish definitions beside the result, preserve conflicting evidence, and keep consequential privacy, employment, pay, benefits, accommodation, safety, and legal decisions with qualified company owners.' }
  ],
  sources,
  serviceLink: { title: 'HR reporting and QA', href: '/services/reporting-and-qa', body: 'Turn the measurement definition into a controlled review worksheet.' }
}));
