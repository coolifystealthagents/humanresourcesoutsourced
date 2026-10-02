import type { RichArticle } from './article-data';
import { october2IndependentCopy } from './october2-independent-copy';

export const october2CycleDate = '2026-10-02';
const prefix = 'october2-hr-';
type Topic = { slug:string; title:string; description:string; service:string; source:{name:string;url:string;note:string} };

export const october2Topics: readonly Topic[] = [
  {slug:'employee-name-change-system-sequence',title:'Sequence an Employee Name Change Across HR Systems',description:'Build an evidence-led name-change queue that keeps identity, payroll, benefits, directory, and access records synchronized without letting support staff decide legal sufficiency.',service:'employee-records-administration',source:{name:'Social Security Administration — Employer W-2 Filing Instructions',url:'https://www.ssa.gov/employer/',note:'Official employer resources concerning names and Social Security wage reporting.'}},
  {slug:'manager-access-transfer-checklist',title:'Transfer Manager Access Without Copying Sensitive HR Permissions',description:'Coordinate reporting-line changes, approvals, delegated work, and access reviews without cloning a former manager’s full HR visibility.',service:'employee-records-administration',source:{name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework',note:'Official framework supporting governed identity and access control practices.'}},
  {slug:'candidate-withdrawal-record-handoff',title:'Handle Candidate Withdrawals Without Erasing Recruiting Evidence',description:'Record a candidate-directed withdrawal, stop future activity, and preserve the required recruiting history without rewriting prior stages.',service:'interview-coordination',source:{name:'EEOC Recordkeeping Requirements',url:'https://www.eeoc.gov/employers/recordkeeping-requirements',note:'Official overview of federal employment recordkeeping requirements.'}},
  {slug:'new-hire-start-date-change-control',title:'Control a New Hire Start-Date Change Across Dependent Tasks',description:'Move an approved start date through payroll, benefits, access, equipment, orientation, and manager calendars while preserving the original offer record.',service:'onboarding-coordination',source:{name:'USCIS Form I-9 Central',url:'https://www.uscis.gov/i-9-central',note:'Official employer resources for Form I-9 timing and responsibilities.'}},
  {slug:'payroll-duplicate-employee-record-review',title:'Review Duplicate Employee Records Before Payroll Processing',description:'Detect and route possible duplicate worker records without merging identities, deleting history, or changing pay on an administrative assumption.',service:'payroll-preparation-support',source:{name:'U.S. Department of Labor Recordkeeping',url:'https://www.dol.gov/general/topic/workhours/hoursrecordkeeping',note:'Official federal overview of employer wage and hour recordkeeping responsibilities.'}},
  {slug:'benefits-qualifying-event-document-status',title:'Track Benefits Qualifying-Event Documents Without Deciding Eligibility',description:'Run a dated document and carrier-status queue while the plan owner retains eligibility, coverage, deadline, and exception decisions.',service:'benefits-administration-support',source:{name:'U.S. Department of Labor — Health Plans and Benefits',url:'https://www.dol.gov/general/topic/health-plans',note:'Official resources concerning employer health plans and participant protections.'}},
  {slug:'interview-no-show-recovery-workflow',title:'Build a Fair Interview No-Show Recovery Workflow',description:'Separate calendar failures, candidate communication, accommodation signals, and recruiter decisions before closing an application.',service:'interview-coordination',source:{name:'EEOC — Disability Discrimination and Employment Decisions',url:'https://www.eeoc.gov/disability-discrimination-and-employment-decisions',note:'Official EEOC information relevant to disability and employment processes.'}},
  {slug:'policy-translation-review-handoff',title:'Control the Review Handoff for Translated HR Policies',description:'Coordinate translation versions, reviewer questions, publication, and acknowledgments while qualified owners retain legal and policy meaning.',service:'hr-help-desk-support',source:{name:'EEOC — National Origin Discrimination',url:'https://www.eeoc.gov/national-origin-discrimination',note:'Official EEOC information concerning national-origin discrimination, including language-related employment practices.'}},
  {slug:'employee-survey-anonymity-operations',title:'Protect Survey Anonymity During HR Survey Operations',description:'Prepare rosters, reminders, exports, and reporting thresholds without exposing who responded or implying anonymity the system cannot provide.',service:'reporting-and-qa',source:{name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework',note:'Official framework for identifying and managing privacy risk.'}},
  {slug:'employee-refund-reimbursement-status',title:'Track Employee Reimbursements Without Approving Expenses',description:'Maintain receipt, approval, payment, rejection, and follow-up evidence while budget and payroll owners decide policy and tax treatment.',service:'payroll-preparation-support',source:{name:'IRS Publication 15-B',url:'https://www.irs.gov/publications/p15b',note:'Official IRS guide to employer tax treatment of fringe benefits.'}},
  {slug:'disciplinary-meeting-record-routing',title:'Route Disciplinary Meeting Records Without Expanding Access',description:'Coordinate approved notices, attendance, acknowledgment, restricted filing, and follow-up while managers and HR retain every substantive decision.',service:'performance-review-administration',source:{name:'OSHA — Whistleblower Protections',url:'https://www.whistleblowers.gov/',note:'Official resources concerning protected reports and anti-retaliation provisions administered by OSHA.'}},
  {slug:'hr-vendor-contact-change-verification',title:'Verify HR Vendor Contact Changes Before Sensitive Handoffs',description:'Authenticate new vendor contacts and delivery instructions before releasing employee data, approving access, or redirecting payments.',service:'operations-support',source:{name:'FTC — Start with Security',url:'https://www.ftc.gov/business-guidance/resources/start-security-guide-business',note:'Official business guidance concerning access controls, data handling, and service-provider oversight.'}},
];

export const october2BlogPosts = october2Topics.map(({slug,title,description})=>({slug:`${prefix}${slug}`,title,excerpt:description,minutes:14,published:october2CycleDate}));
const nist={name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework',note:'Official framework for accountable, purpose-based handling of personal data.'};

export const october2Articles: Record<string,RichArticle> = Object.fromEntries(october2Topics.map(topic=>{
  const slug=`${prefix}${topic.slug}`,copy=october2IndependentCopy[slug];
  if(!copy) throw new Error(`Missing independent Blog copy for ${slug}`);
  return [slug,{
    slug,title:topic.title,description:topic.description,published:october2CycleDate,updated:october2CycleDate,minutes:14,
    revision:`${october2CycleDate}-${slug}-independent`,heroImage:'/hr-team.jpg',directAnswer:copy.directAnswer,
    takeaways:copy.sections.map(s=>s.heading),sections:copy.sections,
    taskRows:copy.sections.map((s,i)=>({lane:s.heading,philippinesTeam:`Prepare and route the evidence for checkpoint ${i+1}.`,owner:`Approve the decision described in “${s.heading}.”`,check:`Retain the source and destination result for checkpoint ${i+1}.`})),
    pilotStats:[
      {value:'4',label:'Distinct checkpoints',note:'Each addresses a different decision in this article.'},
      {value:'2',label:'Reader scripts',note:'Use only after owner review.'},
      {value:String(copy.faqs.length),label:'Specific questions',note:'Answers stay inside the documented boundary.'},
      {value:'1',label:'Named outcome',note:'The final section defines article-specific closure.'},
    ],
    scripts:copy.scripts,
    workflow:copy.sections.map((s,i)=>({step:String(i+1).padStart(2,'0'),title:s.heading,text:s.paragraphs[0].split('. ')[0]+'.'})),
    faqs:copy.faqs,
    related:[
      {title:'Related HR service',href:`/services/${topic.service}`,note:`Review the service boundary for ${topic.title.toLowerCase()}.`},
      {title:'HR reporting and QA',href:'/services/reporting-and-qa',note:'Set owner checks and destination evidence.'},
      {title:'Plan the support lane',href:'/contact-us',note:'Scope access, ownership, and review before launch.'},
    ],
    sources:topic.source.url===nist.url?[topic.source]:[topic.source,nist],banners:[],
  } satisfies RichArticle];
}));
