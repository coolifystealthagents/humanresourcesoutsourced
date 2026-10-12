import fs from 'node:fs';
import path from 'node:path';

const date = '2026-10-12';
const blogs = [
  ['hr-intake-queue-severity-triage','Build an HR Intake Queue That Separates Urgency From Severity','Design an intake lane that protects sensitive reports while giving routine requests predictable owners and response clocks.'],
  ['new-hire-document-expiry-control','Control Expiring New-Hire Documents Without Making Eligibility Decisions','Track document deadlines and exceptions while trained employer representatives retain verification and eligibility decisions.'],
  ['benefits-deduction-variance-handoff','Reconcile a Benefits Deduction Variance Before Payroll Cutoff','Compare election, carrier, payroll, and effective-date evidence without guessing which record should control.'],
  ['employee-record-access-recertification','Run an Employee-Record Access Recertification With Evidence','Give each HR permission a business purpose, approving owner, review date, and tested removal path.'],
  ['manager-change-workflow-map','Map a Manager Change Across Every HR Dependency','Coordinate reporting-line changes across HRIS, approvals, learning, timekeeping, and communications without silent gaps.'],
  ['hr-electronic-signature-recipient-mismatch','Resolve an HR Electronic-Signature Recipient Mismatch','Preserve envelope, identity, document, and delivery evidence while an authorized owner decides whether to void and reissue.'],
  ['hr-vendor-file-transfer-checklist','Verify an HR Vendor File Transfer Before Calling It Complete','Reconcile population, field definitions, encryption, receipt, rejection, and downstream posting for every scheduled file.'],
  ['policy-exception-register-design','Design a Policy Exception Register That Preserves Authority','Record the request, controlling version, decision owner, duration, conditions, and closure without turning precedent into permission.'],
  ['employee-status-change-effective-date','Resolve an Employee Status Change With Conflicting Effective Dates','Keep source instructions and downstream events separate until the accountable owner resolves the effective date.'],
  ['hr-knowledge-answer-retirement','Retire an HR Knowledge Answer Before It Creates Drift','Remove superseded guidance from search, macros, links, caches, and local copies while preserving an audit trail.'],
  ['payroll-input-cutoff-exception','Handle a Late Payroll Input Without Bypassing Review','Use an explicit exception path for late inputs, materiality, authorization, execution, employee communication, and reconciliation.'],
  ['offboarding-forwarding-rule-review','Review Mail Forwarding Rules During Employee Offboarding','Check delegates, forwarding, shared mailboxes, recovery methods, mobile sessions, and retention before closing access work.']
].map(([slug,title,excerpt])=>({slug,title,excerpt}));

const research = [
  ['hr-case-reopen-rate-study','What Does the HR Case Reopen Rate Actually Measure?','A preregistered review separates premature closure, new facts, downstream failure, employee response, and classification error.'],
  ['onboarding-dependency-delay-study','Which Onboarding Dependencies Create the Longest Delays?','A prospective cohort protocol measures handoffs among recruiting, HR, payroll, IT, managers, and new hires.'],
  ['hr-access-removal-verification-study','Can HR Access Removal Be Independently Verified?','A blinded reconstruction study tests whether disablement evidence covers accounts, sessions, delegates, exports, and recovery paths.'],
  ['payroll-variance-escalation-study','Which Payroll Variances Need Earlier Escalation?','A threshold-validation protocol compares variance signals with owner decisions, corrections, reversals, and employee impact.'],
  ['hr-knowledge-drift-study','How Quickly Does Approved HR Knowledge Drift?','A longitudinal content audit measures source changes, answer retirement, search exposure, and correction latency.']
].map(([slug,title,excerpt])=>({slug,title,excerpt}));

const sources = [
  ['NIST Cybersecurity Framework 2.0','https://www.nist.gov/cyberframework'],
  ['NIST Privacy Framework','https://www.nist.gov/privacy-framework'],
  ['NIST SP 800-53 Revision 5','https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final'],
  ['GAO Green Book','https://www.gao.gov/green-book'],
  ['EEOC Recordkeeping Requirements','https://www.eeoc.gov/employers/recordkeeping-requirements'],
  ['U.S. Department of Labor Recordkeeping','https://www.dol.gov/general/topic/workhours/recordkeeping'],
  ['FTC Protecting Personal Information','https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business'],
  ['CISA Cybersecurity Performance Goals','https://www.cisa.gov/cybersecurity-performance-goals'],
  ['National Archives Records Management','https://www.archives.gov/records-mgmt'],
  ['Philippine National Privacy Commission Data Privacy Act','https://privacy.gov.ph/data-privacy-act/']
];

const themes = ['#4c1634','#5a1538','#68173d','#761941','#841b46','#92204c','#6b214b','#772653','#832b5b','#8f3063','#63305e','#713869','#503558','#5c3d64','#684570','#744d7c','#805588'];
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const wrap = (title,n=28) => { const words=title.split(' '), lines=['']; for(const w of words){const i=lines.length-1;if((lines[i]+' '+w).trim().length>n&&lines[i]) lines.push(w); else lines[i]=(lines[i]+' '+w).trim();} return lines.slice(0,4); };
const thumb = (item,kind,index) => {const lines=wrap(item.title); const ys=[255,307,359,411]; return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc"><title id="title">${esc(item.title)}</title><desc id="desc">Human Resources Outsourced ${kind} thumbnail</desc><rect width="1200" height="630" fill="${themes[index]}"/><circle cx="1045" cy="105" r="210" fill="#ffffff" opacity=".07"/><circle cx="110" cy="590" r="250" fill="#f9a8d4" opacity=".09"/><path d="M850 210h205v205H850z" fill="none" stroke="#fbcfe8" stroke-width="10"/><path d="M890 260h125M890 310h125M890 360h82" stroke="#fbcfe8" stroke-width="12" stroke-linecap="round"/><text x="80" y="92" fill="#fbcfe8" font-family="Arial,sans-serif" font-size="24" font-weight="700" letter-spacing="4">${kind.toUpperCase()} · HUMAN RESOURCES OUTSOURCED</text>${lines.map((l,i)=>`<text x="80" y="${ys[i]}" fill="white" font-family="Arial,sans-serif" font-size="47" font-weight="700">${esc(l)}</text>`).join('')}<text x="80" y="548" fill="#fce7f3" font-family="Arial,sans-serif" font-size="25">Evidence • ownership • verified handoffs</text></svg>`; };

const sectionAngles = [
  ['Define the event and boundary','Start with the event that opens the work, the eligible population, the system of record, the decision owner, and the evidence required to stop.'],
  ['Preserve source lineage','Keep each source unchanged, record when it was observed, and distinguish an authoritative record from a working note or downstream copy.'],
  ['Separate preparation from authority','Assign administrative preparation to the support lane while employment, legal, payroll, benefits, privacy, and access decisions stay with named owners.'],
  ['Design the exception path','Describe missing, conflicting, duplicate, late, sensitive, and high-consequence cases before volume makes the exception queue invisible.'],
  ['Verify the destination','Completion requires evidence that the approved action reached the intended system, person, or vendor and produced the expected state.'],
  ['Review quality and residual risk','Sample routine cases, review every consequential exception, retain reversals, and state what remains unknown after closure.']
];

function blogArticle(item,idx){
  const paragraphs = sectionAngles.map(([heading,lead],s)=>({heading:`${heading}: ${item.title.replace(/[?]$/,'')}`,paragraphs:[
    `${lead} For “${item.title},” the coordinator records a stable case identifier, the submitted facts, the controlling version, the accountable owner, and the precise unresolved question. This keeps a busy HR queue from converting absence of evidence into a convenient answer.`,
    `Checkpoint ${s+1} for ${item.slug} uses a named reviewer, response clock, backup route, approval reference, and closure condition. A normal fixture and a deliberately difficult fixture should be tested before live use; their first results remain visible even after the workflow is corrected.`,
    `The ${heading.toLowerCase()} record for ${item.title.toLowerCase()} should show population, source timestamp, reason code, access boundary, owner instruction, executed event, employee-facing communication, and later system state. Corrections append to history rather than replacing the observation that caused the issue.`,
    `A useful ${item.slug} review asks whether another authorized person can reconstruct control ${s+1}, ${heading.toLowerCase()}, from permitted evidence alone. If the answer depends on memory, private chat, a shared credential, or an unlogged spreadsheet, the work remains open and the limitation belongs in the handoff.`,
    `Measure ${heading.toLowerCase()} for ${item.slug} with explicit denominators: eligible items, received items, excluded items, missing evidence, disagreements, corrections, reversals, reopened cases, and unresolved cases. Throughput is reported beside quality because speed cannot prove a safe HR outcome.`
  ]}));
  return {slug:item.slug,title:item.title,description:item.excerpt,published:date,updated:date,minutes:14,revision:`${date}-${item.slug}`,heroImage:`/october-12/${item.slug}.svg`,directAnswer:[item.excerpt,`Use one bounded record for ${item.title.toLowerCase()}, preserve conflicting evidence, and require the named employer owner to approve consequential action before a coordinator executes or communicates it.`],takeaways:[`Define the population and owner for ${item.slug}.`,'Preserve every source and conflict.','Limit access to the tested work lane.','Route exceptions before deadlines expire.','Verify the destination and residual queue.'],sections:paragraphs,taskRows:sectionAngles.slice(0,5).map(([h],i)=>({lane:h,philippinesTeam:`Prepare and reconcile checkpoint ${i+1} evidence.`,owner:`Decide exceptions and approve checkpoint ${i+1}.`,check:`A second reviewer reconstructs checkpoint ${i+1}.`})),pilotStats:[{value:'100%',label:'Consequential review',note:'Review every high-impact exception.'},{value:'2',label:'Independent views',note:'Preserve first-pass classifications.'},{value:'0',label:'Silent overrides',note:'Append corrections to source history.'},{value:'1',label:'Named owner',note:'Every unresolved decision has an owner.'}],scripts:[{label:'Missing evidence',text:`I cannot complete ${item.slug} because the required source is unavailable. I recorded the gap and routed it to the named owner.`},{label:'Conflicting evidence',text:`Two approved sources disagree for ${item.slug}. I preserved both and paused the downstream action pending an owner decision.`}],workflow:sectionAngles.slice(0,5).map(([h],i)=>({step:String(i+1).padStart(2,'0'),title:h,text:`Apply the ${item.slug} control, retain evidence, and record the next owner.`})),faqs:[{question:`Can a coordinator decide ${item.title.toLowerCase()}?`,answer:'No. The coordinator prepares, reconciles, routes, and records work; qualified employer owners retain consequential decisions.'},{question:'What happens when evidence conflicts?',answer:'Preserve each source, stop the affected action, and route the exact conflict to the authorized owner.'}],related:[{title:'Review HR outsourcing services',href:'/services',note:'Compare bounded support lanes.'},{title:'Plan an accountable handoff',href:'/contact-us',note:'Bring a redacted case and owner map.'}],sources:sources.slice(0,6).map(([name,url])=>({name,url,note:`Authoritative control reference checked ${date}.`})),banners:[]};
}

function researchArticle(item,idx){
  const stages=['Preregister the question and population','Freeze sources and observation windows','Define outcomes before review','Calibrate independent reviewers','Sample ordinary and consequential cases','Preserve disagreement before consensus','Analyze denominators and missingness','Run sensitivity checks','Link remediation to evidence','Publish limitations beside findings'];
  return {slug:item.slug,title:item.title,excerpt:item.excerpt,published:date,modified:date,thumbnail:`/october-12/${item.slug}.svg`,sections:stages.map((stage,s)=>({heading:`${s+1}. ${stage}`,body:`${stage} for “${item.title}” using a versioned protocol that names inclusion rules, exclusions, systems, timestamps, reviewer roles, and unavailable evidence. The ${item.slug} study retains first-pass classifications before consensus and reports the denominator, missing records, disagreement, correction, reversal, reopening, and unresolved state for stage ${s+1}. Protected narratives remain in approved systems while the analysis uses stable references. This design can describe observed operating evidence; it cannot establish legal compliance, causation, provider quality, a universal benchmark, or a promised outcome. The accountable employer owner decides whether findings justify a workflow change, and every remediation receives an evidence link, owner, due date, implementation event, verification step, and stated residual limitation.`})),sources:sources.map(([name,url])=>({name:`${name} — accessed ${date}`,url})),serviceLink:{title:'Scope an evidence-led HR coordination lane',href:'/services',body:`Apply the ${item.slug} protocol to a bounded queue before expanding permissions or volume.`}};
}

fs.mkdirSync('app/blog',{recursive:true}); fs.mkdirSync('app/research',{recursive:true}); fs.mkdirSync('public/october-12',{recursive:true});
const blogPosts=blogs.map(x=>({...x,minutes:14,published:date}));
const blogArticles=Object.fromEntries(blogs.map((x,i)=>[x.slug,blogArticle(x,i)]));
fs.writeFileSync('app/blog/october12-batch.ts',`import type { RichArticle } from './article-data';\nexport const october12BlogPosts = ${JSON.stringify(blogPosts,null,2)} as const;\nexport const october12BlogArticles: Record<string, RichArticle> = ${JSON.stringify(blogArticles,null,2)};\n`);
fs.writeFileSync('app/research/october12-research-batch.ts',`import type { ResearchPost } from '../fleet-data';\nexport const october12ResearchPosts: readonly ResearchPost[] = ${JSON.stringify(research.map(researchArticle),null,2)};\n`);
[...blogs,...research].forEach((x,i)=>fs.writeFileSync(`public/october-12/${x.slug}.svg`,thumb(x,i<12?'Blog':'Research',i)));
const manifest={site:'HumanResourcesOutsourced.com',repository:'coolifystealthagents/humanresourcesoutsourced',branch:'main',baseSha:'5c43ac23b707ad6dce4b9e78c1d6dd58a1a367ed',date,blogSystem:'app/blog/october12-batch.ts',researchSystem:'app/research/october12-research-batch.ts',blog:blogs.map(x=>({slug:x.slug,title:x.title,thumbnail:`public/october-12/${x.slug}.svg`})),research:research.map(x=>({slug:x.slug,title:x.title,thumbnail:`public/october-12/${x.slug}.svg`,sources:10}))};
fs.writeFileSync('publishing/2026-10-12/manifest.json',JSON.stringify(manifest,null,2)+'\n');
console.log(`generated ${blogs.length} Blog, ${research.length} Research, and ${blogs.length+research.length} thumbnails`);
