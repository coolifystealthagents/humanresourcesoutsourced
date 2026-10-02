export type IndependentBlogCopy = {
  directAnswer: [string, string];
  sections: { heading: string; paragraphs: [string, string] }[];
  scripts: { label: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const october2IndependentCopy: Record<string, IndependentBlogCopy> = {
  'october2-hr-employee-name-change-system-sequence': {
    directAnswer: [
      'Handle an employee name change as a controlled sequence, not a global search-and-replace. First confirm the employee-directed request and the organization’s required evidence. Then identify which record controls payroll reporting, benefits, access, email, badges, and public display. Each destination needs its own acknowledgment before the case can close.',
      'The practical goal is continuity: the employee should still reach pay statements, benefits support, email, buildings, and internal search while records move at different speeds. Keep display preferences separate from regulated or vendor-required identity fields, restrict supporting documents, and give the employee one contact for unresolved destinations.',
    ],
    sections: [
      { heading: 'Decide which name each system is meant to hold', paragraphs: [
        'A useful change map begins with purpose. Payroll may need the name used for wage reporting, a benefits carrier may require a participant record that matches its enrollment evidence, and a directory may support a chosen display name. Those are related values, but they are not automatically interchangeable. Record the employee’s request, the evidence received, the approved controlling value, and the permitted display choice separately. If HRIS, payroll, or a vendor requires different evidence, show that difference instead of telling the employee that one upload has changed everything.',
        'Before any edit, list the destinations and mark the authority for each one. Include HRIS, timekeeping, payroll, tax files, benefits, retirement, identity provider, email, collaboration tools, badge systems, directories, learning platforms, and recurring vendor exports. For every destination, note the current value, proposed value, source, effective date, updater, and acknowledgment method. This inventory prevents an early directory change from being mistaken for a completed identity update and reveals systems that receive data through delayed integrations rather than direct entry.'
      ]},
      { heading: 'Sequence high-consequence records before convenience displays', paragraphs: [
        'Start with the employer-approved identity anchor and systems whose failures could interrupt pay, coverage, or access. A coordinator can prepare fields and check whether the packet matches a written checklist, but payroll, benefits, privacy, security, or legal owners decide unresolved evidence and timing. When payroll rejects a new surname that HRIS accepted, preserve both responses. Do not keep resubmitting variants until one passes. Send the rejection code, source record, and deadline to the owner who can determine the correct next action.',
        'Lower-consequence displays still deserve deliberate timing. An email alias, profile card, or org chart can reveal a change before the employee wants coworkers to see it. Ask the employee-facing owner which displays may change and when. Where systems support aliases, keep the old address reachable for an approved transition without presenting it as the current identity. Search should be tested with both values so help-desk staff can find the right record without copying identity documents or explaining personal circumstances to people who do not need them.'
      ]},
      { heading: 'Plan for a mixed-name transition without exposing evidence', paragraphs: [
        'The transition period is normal, not an exception to hide. Build a status view that says which destinations are complete, pending, intentionally different, rejected, or not applicable. Store only case identifiers and operational status in the shared queue. Marriage certificates, court records, government identifiers, and employee explanations belong in the approved restricted location. A pending vendor should see only the material its process requires, while managers receive a simple operational update if scheduling or access is affected.',
        'Test real employee journeys before declaring success. Can the employee sign in, receive email, open a pay statement, contact the carrier, use a badge, appear correctly in a manager roster, and find prior records? Check integrations that may overwrite a manual correction overnight. If a destination cannot change immediately, document the approved interim behavior and the person responsible for resolving it. The employee should not have to repeat sensitive evidence to every support queue because ownership was never assigned.'
      ]},
      { heading: 'Close with destination reconciliation and an employee summary', paragraphs: [
        'Closure requires more than completed tickets. Compare the approved values and effective date with each destination’s actual state or acknowledgment. Reconcile payroll export, benefits response, directory display, access identity, and archived references. If a system legitimately retains a historical name, record why and how authorized staff can search it. If an integration rejects the update, keep the case open with an owner and checkpoint rather than moving it to a vague completed-with-notes category.',
        'Send the employee an approved summary that distinguishes completed changes, expected delays, intentionally different records, and the contact for corrections. Avoid listing systems or sensitive evidence that the employee does not need to receive by email. Review recurring failures—such as payroll formatting, vendor lags, or alias loss—as process defects. The reader outcome is a name-change runbook that protects the employee’s control over display, preserves regulated records, and proves that critical services continued through the change.'
      ]},
    ],
    scripts: [
      { label: 'Destination rejection', text: 'The payroll destination rejected the approved value with this code. The source request remains unchanged. Please confirm the permitted value or additional evidence before the cutoff.' },
      { label: 'Employee status', text: 'Your approved change is complete in the destinations listed below. These destinations remain pending with named owners and expected checkpoints.' },
    ],
    faqs: [
      { question: 'Should every system show the same name on the same day?', answer: 'Not necessarily. Each destination can have a different purpose and evidence rule. What matters is an approved sequence, visible status, and continuity of pay, benefits, and access.' },
      { question: 'Where should supporting documents be stored?', answer: 'Use the employer-approved restricted record location. Shared trackers should contain only a case reference, status, owner, and deadline.' },
    ],
  },

  'october2-hr-manager-access-transfer-checklist': {
    directAnswer: [
      'Transfer manager access from approved duties and employee scope, not by cloning the previous manager’s account. Time approval, scheduling, recruiting, analytics, compensation, and employee-relations permissions should be reviewed as separate capabilities with separate owners.',
      'The safest handover has an effective time, a list of unfinished approvals, explicit exclusions for restricted cases, and tests from both the manager and employee views. Remove the prior manager’s rights when the new ownership becomes effective, then check reports and notifications that can preserve access outside the main role.',
    ],
    sections: [
      { heading: 'Translate the reporting change into work, not role labels', paragraphs: [
        'A manager change record tells the organization who reports to whom; it does not define every action the new manager should perform. Build an inventory of required work: approving time, seeing schedules, initiating job changes, reviewing goals, accessing team reports, opening requisitions, or receiving alerts. Name the employee population and effective instant for each duty. Temporary coverage, dotted-line supervision, and project leadership may require narrower rights than the primary reporting relationship.',
        'Do not use the departing manager’s account as a template. That account may contain permissions accumulated from earlier teams, investigations, compensation projects, leave cases, or administrative assignments. Begin with the standard approved role, then add only documented exceptions. For each addition, capture the business duty, data population, application owner, expiry or review event, and approver. A coordinator can collect this evidence but cannot decide that a senior title justifies broader access.'
      ]},
      { heading: 'Separate routine approvals from confidential case custody', paragraphs: [
        'Routine work and restricted work often coexist in the same application. A new manager may need a timecard queue without access to medical attachments, an open complaint, a prior performance investigation, or compensation planning for another group. Identify those objects before the transfer. HR, privacy, legal, or employee-relations owners should reassign each restricted case deliberately rather than letting it follow the reporting hierarchy through an automated rule.',
        'Use a handover register for unfinished actions. Record the employee, action type, due date, current owner, new owner, and whether the item contains restricted material. The old manager can complete, transfer, or return routine work according to owner instructions. Sensitive cases should move through their approved system, not by forwarded email or downloaded files. This preserves custody evidence and avoids giving the incoming manager context that the company has not determined they should receive.'
      ]},
      { heading: 'Stage grants and removals around one effective window', paragraphs: [
        'Plan the change so employees are not left without an approver while two managers also do not retain overlapping powers indefinitely. Identify tasks that must finish before the effective time, rights that can be pre-provisioned but inactive, and rights that must be removed immediately. Application owners should confirm the actual activation and removal events. A ticket marked complete before the configured date is planning evidence, not proof that permissions changed.',
        'Include delegated calendars, shared drives, mailing lists, dashboards, scheduled exports, approval substitutes, and notification subscriptions. These side channels can continue revealing team information after the primary manager role is removed. Where an application cannot align exactly with the effective window, document the interim safeguard and owner. Do not solve timing limitations by sharing credentials or asking the new manager to operate through the predecessor’s account.'
      ]},
      { heading: 'Test access from both sides and review the first cycle', paragraphs: [
        'Sign in through an approved test or owner-assisted review and confirm which employees, fields, actions, and reports the manager can reach. Then check what affected employees see: approver name, workflow destination, directory relationship, and escalation route. Test a normal approval, a restricted record, an employee outside the population, an exported report, and a notification generated after removal. Record unexpected visibility as a defect rather than explaining it as a platform quirk.',
        'Review the first time, leave, recruiting, and performance cycles after transfer. Reconcile stuck items, duplicate approvals, missing employees, and inherited alerts. Remove temporary rights on schedule and retain the application acknowledgments. The reader should finish with a transfer checklist that enables required management work while proving that confidential cases and unrelated populations did not move merely because a reporting line changed.'
      ]},
    ],
    scripts: [
      { label: 'Application owner request', text: 'Please grant only the listed duties for the approved employee population at the stated effective time, and confirm the listed exclusions and removal event.' },
      { label: 'Restricted case handoff', text: 'This case is excluded from the manager-role transfer. The qualified case owner must name the next custodian in the restricted system.' },
    ],
    faqs: [
      { question: 'Can we copy the former manager’s permissions?', answer: 'No. Build access from approved duties and population. The former account can contain historical or exceptional rights that should not transfer.' },
      { question: 'What should be tested after the change?', answer: 'Test ordinary approvals, restricted records, out-of-scope employees, reports, exports, notifications, and the employee-facing workflow destination.' },
    ],
  },

  'october2-hr-candidate-withdrawal-record-handoff': {
    directAnswer: [
      'Record a withdrawal from the candidate’s authenticated instruction and define its scope. A person may leave one requisition while keeping another application active, stop interviews while preserving a privacy request, or withdraw after an offer without authorizing deletion of the recruiting record.',
      'Close the operational work that no longer has a purpose—interviews, reminders, assessments, checks, and hiring tasks—while preserving prior history under the employer’s retention rules. Keep complaints, accommodations, source disputes, and deletion requests on their own qualified-owner paths.',
    ],
    sections: [
      { heading: 'Capture the candidate’s instruction without enlarging it', paragraphs: [
        'Use the candidate’s message, portal action, or recruiter-documented conversation as the source. Record when it arrived, how identity was matched, which role or requisition it names, and any stated limits. “I cannot continue with Tuesday’s interview” does not necessarily mean “remove me from every role.” A missed meeting, unanswered reminder, or recruiter assumption is not a candidate-authored withdrawal. Apply the employer’s separate inactivity process when no clear instruction exists.',
        'The source record should preserve the candidate’s words without commentary about motivation or quality. Avoid labels such as unreliable, not serious, or poor fit unless an authorized hiring owner makes and documents a separate disposition using approved criteria. If a representative communicates for the candidate, verify authority through the recruiting owner. A coordinator may acknowledge receipt and pause future steps, but should not negotiate offer terms or promise how retained records will be treated.'
      ]},
      { heading: 'Stop scheduled activity while preserving the recruiting history', paragraphs: [
        'Cancel upcoming interviews, calendar holds, automated reminders, assessments, background steps, travel arrangements, and hiring-manager tasks that relate solely to the withdrawn application. Tell participants only what they need to know: the activity is cancelled or the application is no longer active. Do not circulate the candidate’s explanation. Check integrations and agency workflows, because a status change in the applicant system may not stop vendor emails or interviewer reminders.',
        'Preserve the application stages, communications, scorecards, source, consent records, and disposition history according to the employer’s approved schedule. A withdrawal should add a dated event rather than overwrite the record so completely that later reviewers cannot distinguish candidate choice from employer rejection. If an offer was pending, route document, compensation, and onboarding shutdown tasks to their owners. Do not mark an employer rescission as a candidate withdrawal to simplify reporting.'
      ]},
      { heading: 'Keep adjacent rights and concerns on separate tracks', paragraphs: [
        'Withdrawal does not answer a privacy request, correction request, discrimination complaint, accommodation concern, agency ownership dispute, or referral-payment question. Create or link the appropriate restricted case and retain its deadline even after recruiting activity stops. If the candidate asks to be considered for another role, confirm which profile data and materials may continue to be used. Do not copy sensitive details from one case into the general pipeline note.',
        'A useful example is a candidate who withdraws from a sales role but wants to continue for an operations role handled by another recruiter. The first interview series and hiring tasks should stop; the second application should remain visible to its authorized team; shared assessments should be handled according to approved reuse rules; and communications should not imply that one hiring manager controls both outcomes. The candidate-facing acknowledgment should restate scope so an error can be corrected quickly.'
      ]},
      { heading: 'Reconcile every linked system before final disposition', paragraphs: [
        'Review the applicant tracking system, calendars, email sequences, assessment vendor, screening provider, agency portal, referral record, offer workspace, and onboarding queue. Record whether each action was cancelled, retained, transferred, or not applicable. If a destination fails, keep an owner and retry checkpoint. A green recruiting status does not prove that an external assessment invitation or interviewer calendar event disappeared.',
        'Close with an approved message that confirms the application affected and any permitted continuing relationship without promising future selection. Report withdrawal volumes separately from employer rejections and process failures. The reader outcome is a withdrawal lane that respects candidate direction, prevents unwanted contact, keeps required evidence, and avoids using a convenient pipeline label to dispose of unresolved rights or concerns.'
      ]},
    ],
    scripts: [
      { label: 'Scope confirmation', text: 'We recorded your withdrawal from the identified role. Please tell us if your instruction was intended to cover any other active application.' },
      { label: 'Internal cancellation', text: 'Stop the listed recruiting activities for this requisition. Preserve prior records and do not copy the candidate’s explanation into calendars or general notes.' },
    ],
    faqs: [
      { question: 'Does withdrawal mean the application should be deleted?', answer: 'No. Withdrawal and record deletion are different matters. Apply the employer’s retention and privacy-request processes separately.' },
      { question: 'Can a missed interview be coded as withdrawal?', answer: 'Only if the employer’s approved process supports that disposition. Do not present silence as a candidate-authored instruction.' },
    ],
  },

  'october2-hr-new-hire-start-date-change-control': {
    directAnswer: [
      'Control a start-date change through an approved candidate and employer record, then move each dependent task according to its own timing rule. Preserve the accepted offer and original date; attach the authorized change instead of silently editing history.',
      'Recheck screening, work authorization, payroll, benefits, accounts, equipment, workspace, orientation, and manager availability. Some preparation may remain valid, some must move, and some requires a qualified decision. Close only after every dependency is ready, visibly blocked, or assigned an approved exception.',
    ],
    sections: [
      { heading: 'Create a controlling change record', paragraphs: [
        'Begin with the accepted offer, candidate identity, original start date, employing entity, role, location, and work arrangement. Add the proposed date, source of the request, reason category, candidate agreement, employer approval, and time received. Do not replace the original offer artifact or make a calendar edit the only evidence. If the change affects other terms, route it back to the hiring, HR, compensation, or legal owner before sending revised language.',
        'Use one reference for the date change across systems. Recruiter email, HRIS prehire record, payroll setup, background vendor, and manager checklist should link to the same approved event. If sources disagree, stop and show the conflict. A coordinator can prepare the impact list and approved candidate message but cannot decide whether screening, work authorization, benefit eligibility, notice obligations, or compensation terms permit the new date.'
      ]},
      { heading: 'Sort dependencies into keep, move, cancel, and decide', paragraphs: [
        'Review background and credential checks, Form I-9 workflow, payroll creation, benefits enrollment timing, account provisioning, equipment shipping, workspace, orientation, training, travel, introductions, and first-week meetings. Mark each task keep, move, cancel, or owner decision. Equipment already shipped may remain with an approved custody plan; an account may stay disabled until the revised date; a training seat might need cancellation to release capacity.',
        'Avoid bulk-shifting every deadline by the same number of days. Payroll cycles, plan rules, vendor expirations, holidays, and facility access windows behave differently. Record the new due date and basis for each change. If a vendor cannot move a task, identify whether it can be reused, must be repeated, or requires an exception. The candidate should receive only confirmed changes, not internal speculation about eligibility or operational delays.'
      ]},
      { heading: 'Test consequences hidden behind a small calendar change', paragraphs: [
        'A one-week move can cross a pay-period boundary, benefits waiting point, month end, holiday shutdown, screening validity window, relocation booking, or manager absence. It can also leave a laptop at an unattended address or send credentials before employment begins. Use the specific scenario—equipment shipped and a payroll record already created—to check physical custody, data access, pay status, and communications separately. Do not activate access merely because the account exists.',
        'Include the candidate in changes that affect their actions: revised arrival instructions, document appointments, shipment handling, orientation, and approved contacts. Keep internal risk decisions with company owners. If the candidate cannot meet the new plan, reopen the hiring decision rather than repeatedly moving administrative dates without a stable agreement. Preserve every issued version and withdraw obsolete invitations so the person does not receive contradictory instructions.'
      ]},
      { heading: 'Run a dated readiness review and close the superseded plan', paragraphs: [
        'Before the revised start, ask each owner for ready, blocked, changed, or not-applicable status with evidence. Confirm payroll and HRIS dates, account activation, equipment location, workspace, manager coverage, orientation links, and outstanding candidate tasks. A checklist is useful only if it shows unresolved work and who owns it. Do not mark readiness from tickets created in advance when their destinations have not acknowledged the change.',
        'After the start, reconcile attendance, system access, payroll inclusion, benefit handoff, equipment receipt, and completed orientation. Cancel obsolete tasks and retain the reason they were superseded. Review defects such as early activation, duplicate payroll records, expired checks, or conflicting messages. The reader leaves with a dependency-led date-change process that protects candidate clarity and prevents an apparently minor schedule edit from creating pay, access, or onboarding errors.'
      ]},
    ],
    scripts: [
      { label: 'Dependency owner', text: 'The approved start date changed from the recorded original to the revised date. Confirm whether your task will remain, move, cancel, or require an owner decision.' },
      { label: 'Candidate confirmation', text: 'We recorded the revised start date and these confirmed next steps. Contact the named hiring owner if any date or instruction does not match your understanding.' },
    ],
    faqs: [
      { question: 'Should every onboarding task move by the same number of days?', answer: 'No. Each dependency has its own cutoff, validity period, and owner. Classify and reschedule tasks individually.' },
      { question: 'Can accounts remain active while the start is delayed?', answer: 'Only under an approved security plan. Existing accounts should normally remain disabled until the authorized activation event.' },
    ],
  },

  'october2-hr-payroll-duplicate-employee-record-review': {
    directAnswer: [
      'Treat a duplicate-worker alert as a question, not permission to merge or close records. Protect payroll processing while authorized HRIS, payroll, tax, and identity owners determine whether the records represent one person, a rehire, concurrent employment, or two different workers.',
      'Reconstruct how each record entered the system, identify which destinations consumed it, and preserve both histories. Only after the identity decision should owners correct pay, deductions, taxes, benefits, time, access, and reporting, with control totals for every affected payroll period.',
    ],
    sections: [
      { heading: 'Qualify the duplicate signal before changing either record', paragraphs: [
        'Start with the rule that raised the alert. Matching names, addresses, telephone numbers, bank accounts, email addresses, birth dates, government identifiers, or emergency contacts carry different confidence and risk. Shared households and recycled contact details can create false matches, while spelling changes and entity transfers can hide true ones. Record the compared fields and their sources without placing full sensitive values in a general queue. An alert should open a restricted review, not automatically select a surviving record.',
        'Check worker ID, employing entity, employment periods, assignment, location, manager, payroll group, tax profile, and rehire links. Ask whether both records can legitimately be active. A person may hold concurrent roles or move between entities without either record being erroneous. If identity evidence conflicts, stop downstream edits. The support team may assemble a comparison, but the designated identity and HR owners decide whether the records relate to the same worker and which history must remain separately preserved.'
      ]},
      { heading: 'Stabilize payroll without destroying evidence', paragraphs: [
        'Prevent unsupervised merges, deletions, status closures, bank changes, tax-profile replacement, or balance transfers while the review is open. Identify the next payroll cutoff and the runs in which each record appears. Payroll owners can decide whether to hold a transaction, continue an established record, or use another controlled path. A coordinator should not pick the record that looks newer or has cleaner fields, because that choice can redirect pay or alter statutory reporting.',
        'Take a read-only snapshot of relevant identifiers, status, period totals, deductions, direct-deposit destination reference, and integration responses. Keep the snapshot in the approved restricted location. Record which automated jobs may create another change before cutoff. If payroll proceeds, document the owner’s instruction and later reconciliation requirement. The goal is to keep employees paid correctly without erasing the event chain needed to repair the source and every destination.'
      ]},
      { heading: 'Trace creation events and downstream consumption', paragraphs: [
        'Follow each record backward through recruiting, onboarding, HRIS entry, imports, vendor feeds, acquisitions, entity transfers, and manual corrections. Determine whether a failed rehire link, delayed integration, changed name, or duplicate onboarding packet produced the condition. Then map where each identifier traveled: timekeeping, payroll, benefits, retirement, learning, access, directories, finance, and regulatory files. A source correction is incomplete if another destination still treats the duplicate as active.',
        'A returning employee with a new ID and an old active record in another entity illustrates why chronology matters. The old record may represent a legitimate prior employment history, an active concurrent role, or an unclosed transfer. Preserve start and end dates, entity ownership, and approved transfer evidence. Ask one bounded identity question at a time. Do not rewrite dates or statuses to force the records into a simpler pattern before the qualified owner decides what occurred.'
      ]},
      { heading: 'Separate the identity resolution from financial correction', paragraphs: [
        'Once owners determine the relationship, create a correction plan by destination and period. Reconcile hours, gross-to-net pay, deductions, taxes, benefits, retirement contributions, leave balances, costing, general-ledger output, and employee statements. Some items may require reversal and reissue; others may remain historically attached to an inactive identifier. Keep owner approval for each consequential step and retain the original values beside corrected values.',
        'Close only when payroll control totals match, required destinations acknowledge the approved state, access is appropriate, and the employee-facing records are understandable. Notify the employee through approved wording if statements or identifiers change. Review why prevention failed—rehire matching, entity handoff, import control, or manual entry—and test the repair. The reader outcome is a duplicate review that protects identity and pay instead of trading a tidy database for an unreconstructable payroll history.'
      ]},
    ],
    scripts: [
      { label: 'Payroll hold question', text: 'Two records require identity review before the next cutoff. Please specify the controlled payroll path; no merge, deletion, or bank change has been made.' },
      { label: 'Resolution handoff', text: 'The authorized identity decision is recorded. Please reconcile the listed periods and destinations while preserving both original histories.' },
    ],
    faqs: [
      { question: 'Does a matching bank account prove a duplicate?', answer: 'No. It is a sensitive signal requiring review, not a conclusive identity decision.' },
      { question: 'Should the older record be deleted?', answer: 'Usually not. Owners must preserve required history and decide how inactive or corrected records remain linked.' },
    ],
  },

  'october2-hr-benefits-qualifying-event-document-status': {
    directAnswer: [
      'A benefits qualifying-event queue should track the participant’s report, document state, deadlines, owner review, carrier response, and payroll result without deciding eligibility. Keep the reported event separate from the plan owner’s authorized determination.',
      'Use explicit evidence states and preserve the original received time. When names, dates, coverage tiers, or plan rules conflict, pause for the plan owner instead of changing the event to fit a carrier upload. Close only after coverage and deductions agree with the approved disposition.',
    ],
    sections: [
      { heading: 'Open from the participant’s report, not an assumed plan result', paragraphs: [
        'Record who reported the event, the event type in their words, event date, received timestamp, requested coverage change, plan, current coverage, and authenticated channel. A receipt message can explain next steps and missing administrative fields, but it should not promise that the event qualifies or state an effective date before review. Use the plan’s approved terminology when requesting material and avoid asking for broader family information than the documented process requires.',
        'Separate three dates: when the event allegedly occurred, when the participant submitted information, and when the organization or carrier received it. These dates may control different operational questions. Preserve the first submission even if it is incomplete or unreadable. A coordinator must not replace it with the date of a cleaner later upload. If the report arrived near a deadline, route the timing evidence immediately to the plan owner without predicting the outcome.'
      ]},
      { heading: 'Track evidence condition without issuing an eligibility verdict', paragraphs: [
        'Use document states such as requested, received, unreadable, identity mismatch, duplicate, awaiting participant, owner review, supplemental evidence requested, carrier submitted, rejected, and confirmed. The state describes handling, not eligibility. Store supporting material in the restricted benefits system; shared reminders need only a case reference, safe description, deadline, and owner. Access should not expand simply because several teams monitor the same cutoff.',
        'A marriage document whose names do not match the current HR record should create a bounded identity or record question. Do not tell the participant to change an HR record solely to make a benefits file pass. Benefits and HR owners decide whether separate processes are required and which record controls. Capture the carrier’s rejection language exactly and distinguish a technical file error from a substantive plan decision.'
      ]},
      { heading: 'Protect each deadline while the decision remains open', paragraphs: [
        'Display participant submission deadlines, internal review targets, carrier cutoffs, payroll freezes, and expected checkpoints independently. A case can be timely received but still awaiting owner review. Escalate aging items by consequence rather than quietly editing dates or repeatedly asking for documents already supplied. If the carrier requires a file before the employer decision is complete, the plan owner must choose the permitted path.',
        'Prepare a concise owner packet: reported event, source dates, requested change, current record, documents received, mismatch, plan or carrier instruction reference, and next external cutoff. Exclude unnecessary narrative. The owner’s response should specify disposition, approved effective interval, coverage tier, covered people, communication, and any payroll action. Keep the case pending if those elements are ambiguous rather than interpreting shorthand.'
      ]},
      { heading: 'Reconcile participant, carrier, and payroll outcomes', paragraphs: [
        'After approval, confirm what the carrier or benefits system accepted. Compare participant identifiers, plan, tier, dependents, effective and termination dates, premiums, credits, and coverage status. Then reconcile payroll deductions and any retroactive amounts under owner instructions. An accepted upload does not prove that the intended tier or effective date was applied. A payroll deduction also does not prove carrier coverage.',
        'Send approved participant communication that states the recorded outcome and a route for correction without giving plan or legal advice. Keep exceptions open with an owner and next date. Review recurring unreadable files, name conflicts, carrier rejections, and deduction mismatches as process evidence. The reader finishes with a status workflow that protects deadlines and privacy while leaving eligibility and plan interpretation with the authorized administrator.'
      ]},
    ],
    scripts: [
      { label: 'Missing evidence', text: 'We received your event report on the recorded date. The listed administrative item is still needed for owner review; no eligibility decision has been made.' },
      { label: 'Owner escalation', text: 'The source dates and records conflict as shown. Please provide the plan disposition, effective interval, and permitted carrier and payroll actions.' },
    ],
    faqs: [
      { question: 'Can the coordinator tell an employee whether the event qualifies?', answer: 'No. The coordinator can manage evidence and status; the plan administrator or authorized benefits owner decides eligibility.' },
      { question: 'When is the case complete?', answer: 'When the authorized disposition, carrier result, payroll treatment, and participant communication agree or any exception has a named owner.' },
    ],
  },

  'october2-hr-interview-no-show-recovery-workflow': {
    directAnswer: [
      'Before labeling a candidate a no-show, verify the invitation, timezone, delivery, link, host attendance, lobby records, and any accommodation request. A scheduling or interviewer failure must not become negative candidate evidence.',
      'Use an approved recovery message and a consistent response window while allowing recruiting or accessibility owners to handle exceptions. Measure failure causes separately so the organization improves interview operations rather than treating every incomplete meeting as candidate behavior.',
    ],
    sections: [
      { heading: 'Reconstruct the scheduled interview before assigning fault', paragraphs: [
        'Gather the approved invitation version, sent and accepted times, displayed timezone, meeting platform, link, dial-in option, delivery status, changes, reminders, interviewer calendar, and host or lobby events. Confirm that the candidate identity and requisition match. A calendar marked accepted does not prove the latest update arrived, and an empty meeting room does not prove the host opened the correct link. Record observations without writing a candidate-quality conclusion.',
        'Check both sides of the appointment. Was the interviewer present and able to admit guests? Did recruiting change the time after acceptance? Was the candidate waiting in a different lobby or using a superseded invitation? Did the message identify an accessible contact route? If platform evidence is unavailable, label the cause unresolved. Do not choose candidate absence as the default merely because it is the easiest status in the applicant system.'
      ]},
      { heading: 'Route accommodation and sensitive signals immediately', paragraphs: [
        'Review candidate replies for accommodation needs, disability language, technology barriers, emergencies, identity concerns, complaints, or recruiter promises. Preserve the candidate’s words in the approved restricted location and alert the qualified recruiting, accessibility, HR, privacy, or legal owner. Scheduling staff should not diagnose a need, judge credibility, or ask for medical details. The recovery clock may need an owner-approved adjustment.',
        'The captioning example shows the danger: the candidate replied to the invitation, but the request never reached the interviewer. The correct record is not a simple no-show. The organization must route the request, decide the candidate-facing response, and examine the broken handoff. General interview notes should not expose the request to every panelist. Give participants only the approved logistical information needed for the next meeting.'
      ]},
      { heading: 'Offer a bounded recovery without promising selection', paragraphs: [
        'Use recruiter-approved language that identifies the missed appointment, provides one response route, states the response window, and offers permitted formats or times. Avoid asking the candidate to prove why they missed the meeting unless the approved process requires specific information. Do not promise another interview when an owner must decide it. Apply the same baseline process consistently while recording authorized exceptions instead of concealing them.',
        'When the candidate responds, distinguish reschedule accepted, candidate withdrawal, timing dispute, accommodation routing, no response, and recruiter decision. Cancel obsolete events and ensure the new invitation contains the confirmed timezone, platform, contact, and accessibility arrangement. A coordinator may manage the calendar and acknowledgment; the hiring owner controls selection, exceptions, and final disposition.'
      ]},
      { heading: 'Use no-show data to repair interview operations', paragraphs: [
        'Report candidate absence separately from interviewer absence, link failure, timezone mismatch, delivery failure, late change, unresolved request, host error, and unknown cause. Include the number of scheduled interviews so a rate has a denominator. Do not use operational failure counts as a proxy for candidate quality or recruiter performance. Review patterns by platform, process stage, invitation template, and scheduling handoff.',
        'Close each case only when calendars, applicant status, candidate communication, and owner decision align. Retain enough evidence to explain the disposition without preserving unnecessary platform detail. The reader outcome is a recovery workflow that treats candidates fairly, surfaces accommodation needs, and turns preventable scheduling failures into process fixes instead of negative hiring evidence.'
      ]},
    ],
    scripts: [
      { label: 'Neutral recovery', text: 'We could not confirm completion of the scheduled interview. Please use this contact route by the stated time so recruiting can confirm the appropriate next step.' },
      { label: 'Accessibility handoff', text: 'The candidate’s request is preserved in the restricted channel. The accessibility owner must confirm the arrangement before a replacement invitation is sent.' },
    ],
    faqs: [
      { question: 'Is an accepted calendar invitation proof of a no-show?', answer: 'No. Verify the final invitation, delivery, timezone, host activity, and candidate communications.' },
      { question: 'Who decides whether to reschedule?', answer: 'The authorized recruiter or hiring owner, with accessibility or HR input when the facts require it.' },
    ],
  },

  'october2-hr-policy-translation-review-handoff': {
    directAnswer: [
      'Translate one frozen, approved policy version and keep the source and translation linked through review, publication, acknowledgment, and correction. A fluent translation is not enough when wording can change eligibility, duties, reporting routes, or employee rights.',
      'Use qualified language and policy reviewers for high-consequence passages, test the document in its actual accessible format, and publish a paired version record. Employees need to know which version is current and where to ask questions in a language they can use.',
    ],
    sections: [
      { heading: 'Freeze the source and define the audience', paragraphs: [
        'Assign the source policy a version, owner, approval date, effective date, jurisdiction, audience, and superseded versions before translation begins. Provide the translator with context, defined terms, referenced forms, contact routes, and a glossary. If the source changes, issue a visible revision and assess which translated passages must be redone. Silent edits create two policies that appear paired while expressing different instructions.',
        'Define target language, regional usage, reading level, employee population, and delivery formats. A literal translation may be technically grammatical but unfamiliar or misleading to the intended workforce. Identify passages involving leave, benefits, discipline, safety, complaints, confidentiality, acknowledgments, deadlines, and employee actions for heightened review. Translation staff can flag uncertainty; policy and legal owners decide the intended meaning.'
      ]},
      { heading: 'Review meaning through decisions and employee actions', paragraphs: [
        'Ask reviewers what an employee would believe they must do, may do, or will receive after reading each high-consequence section. Compare that interpretation with the approved source. The leave example is useful: a familiar local phrase can make a category appear broader or narrower than the source, changing apparent eligibility. Record the question and owner resolution rather than letting an editor choose the smoother phrase without authority.',
        'Use a bilingual issue log containing source passage, translated passage, concern, category, reviewer, decision, and affected cross-references. Check defined terms consistently across headings, forms, links, examples, and acknowledgments. Back translation can reveal drift but should not be treated as the sole approval method. A qualified reviewer must consider context and the actual action the organization expects.'
      ]},
      { heading: 'Test accessibility, navigation, and contact routes', paragraphs: [
        'Review the final web, PDF, mobile, print, and assistive-technology experience. Check reading order, headings, tables, links, form labels, alt text, dates, numbers, and line wrapping. Confirm that referenced forms and support routes are available to the target audience. A correct sentence is not useful if the employee cannot find the deadline, open the linked form, or identify how to request help.',
        'Run task-based review with appropriate authorized readers using synthetic questions: locate the reporting route, identify an effective date, distinguish mandatory from optional action, and find the correction contact. Record confusing passages without collecting unnecessary employee information. The policy owner decides revisions and whether either language version must be held from publication until the issue is resolved.'
      ]},
      { heading: 'Publish paired versions and maintain one change history', paragraphs: [
        'Release source and translation with linked version identifiers, effective date, owner, approval evidence, audience, and publication destinations. Remove or label superseded files so search results do not present an obsolete translation as current. Track which version each employee received and any required acknowledgment. Do not reuse an old acknowledgment when substantive translated wording changed.',
        'When a correction occurs, assess both versions, linked forms, communications, and acknowledgments. Notify affected readers in approved language and preserve the correction history. The reader outcome is a translation handoff that makes policy meaning reviewable, accessible, and traceable without asking a translator or coordinator to make legal or employment-policy decisions.'
      ]},
    ],
    scripts: [
      { label: 'Meaning question', text: 'This translated passage can support two employee actions. Please confirm the intended meaning and approved wording before publication.' },
      { label: 'Version notice', text: 'This translation corresponds to the identified source version and effective date. Use the listed contact route for language or policy questions.' },
    ],
    faqs: [
      { question: 'Is back translation enough for approval?', answer: 'No. It can reveal drift, but qualified reviewers must assess context, employee actions, and policy meaning.' },
      { question: 'Should translated policies share the source version number?', answer: 'They should be explicitly linked, with enough identifiers to show which translation corresponds to which approved source.' },
    ],
  },

  'october2-hr-employee-survey-anonymity-operations': {
    directAnswer: [
      'Define anonymity from the survey’s actual data flows: identifiers collected, administrator visibility, link tracking, raw exports, free text, filters, and reporting thresholds. Do not promise anonymity when the platform or operating process allows individual identification.',
      'Use the minimum roster for invitations, keep named participation away from managers unless the notice permits it, and test whether small groups or combined filters reveal respondents. Reports should show population, response rate, exclusions, suppression rules, and limitations beside conclusions.',
    ],
    sections: [
      { heading: 'Turn the anonymity promise into a verifiable configuration', paragraphs: [
        'Write down whether the survey is anonymous, confidential, identified, or pseudonymous and define what that means for employees. Inventory account fields, email tokens, IP or device data, timestamps, single-sign-on attributes, free text, administrator logs, vendor support access, and exports. Compare the inventory with the notice. If administrators can connect responses to people, do not use the word anonymous merely because managers lack direct access.',
        'Name who can see invitations, participation, raw responses, comments, and reports. Separate technical administration from analysis when possible. Set retention and deletion under owner-approved rules. Test the configuration with synthetic respondents before launch, including an administrator attempting to identify a response. Record platform limitations in the notice or change the design; do not depend on informal promises that nobody will look.'
      ]},
      { heading: 'Minimize roster use and protect nonparticipation', paragraphs: [
        'Load only fields needed to invite the approved population and apply reporting rules. Keep the source roster and upload version traceable so omissions and duplicates can be reconciled. Named participation status can expose a personal choice or invite manager pressure. If reminders require status, restrict the list to the survey team and use automated messages where appropriate. Do not give managers a nonrespondent list for a survey described as anonymous.',
        'When a manager asks for names to reach a participation target, route the request to the survey and privacy owners. Offer aggregate response progress or approved general reminders instead. Document excluded populations, undeliverable invitations, leave, and duplicate records so the denominator is honest. Participation targets should not justify changing the confidentiality promise after collection starts.'
      ]},
      { heading: 'Test re-identification through small groups and comments', paragraphs: [
        'Set minimum group sizes and rules for combinations of team, location, role, tenure, demographics, manager, and time. A group that passes one threshold can become identifiable when filters are stacked. Test dashboards and exports, not just the planned report. Suppress, combine, or withhold cuts that violate the rule. Record owner-approved exceptions rather than allowing analysts to explore until a person becomes obvious.',
        'Free text can reveal names, incidents, medical information, or distinctive circumstances even when structured fields are hidden. Decide who reviews comments, what must be escalated, how redaction works, and whether verbatim publication is permitted. Never promise that urgent safety or legal disclosures will remain inside an aggregate report if the organization has an approved response duty; explain the limit before collection.'
      ]},
      { heading: 'Publish findings with denominators and uncertainty', paragraphs: [
        'Every report should state the invited population, valid responses, response rate, survey period, excluded groups, suppression threshold, missingness, weighting, and material configuration limits. Distinguish overall results from filtered views. A voluntary snapshot is not a complete workforce measurement, and a high participation rate does not remove response bias. Keep claims proportional to the evidence.',
        'Review access logs and exports after reporting, remove temporary permissions, and retain only approved artifacts. Record complaints or accidental disclosures and correct the process. The reader outcome is a survey operation where the anonymity statement matches reality, managers cannot infer participation through routine tools, and leaders receive useful results with clear limits rather than false precision.'
      ]},
    ],
    scripts: [
      { label: 'Manager response', text: 'Named participation is not available under the survey promise. We can provide approved aggregate progress and a general reminder.' },
      { label: 'Reporting note', text: 'This result uses the stated population, response count, suppression threshold, and exclusions; small groups and identifying comments are withheld.' },
    ],
    faqs: [
      { question: 'Is a survey anonymous if managers cannot see names?', answer: 'Not automatically. Review what the platform, administrators, tokens, logs, and exports can reveal.' },
      { question: 'Can we report very small teams?', answer: 'Only under approved minimum-group and re-identification rules. Combining filters can make an apparently safe group identifiable.' },
    ],
  },

  'october2-hr-employee-refund-reimbursement-status': {
    directAnswer: [
      'Track reimbursement from employee submission through owner decision and payment without treating a complete receipt packet as approval. Preserve claimed, approved, adjusted, rejected, exported, paid, returned, and cancelled amounts as distinct states.',
      'Route policy, business-purpose, tax, wage, duplicate, currency, and authority questions to their qualified owners. Close only when the payment destination confirms the approved employee, amount, currency, and cycle and the employee receives an approved status explanation.',
    ],
    sections: [
      { heading: 'Build the claim record without deciding allowability', paragraphs: [
        'Capture employee identity, expense date, merchant, claimed amount, currency, category, receipt, submitted business purpose, project, payment preference reference, and named approver. Check readability and required fields against the approved process. Do not state that an expense is allowable, reimbursable, or non-taxable simply because every field is present. Preserve the original claim and any later supplement as separate events.',
        'A home-office purchase approved in chat but lacking a policy category should stop at owner review. Attach or reference the manager’s message without converting it into a finance or tax determination. Ask the budget or policy owner whether the message represents valid approval and what category and amount are authorized. Avoid coaching the employee to rewrite the purpose to fit an available option.'
      ]},
      { heading: 'Route exceptions to the owner who can answer them', paragraphs: [
        'Classify duplicates, missing receipts, late submissions, unusual merchants, personal components, foreign exchange, policy limits, manager conflicts, tax questions, and payroll timing separately. The exception label helps find an owner; it does not decide the result. Send a bounded packet showing the claim, rule or missing fact, prior approval, and deadline. Keep bank and tax details out of broad finance queues.',
        'If owners disagree, preserve each instruction and escalate through the approved path. Do not choose the answer that makes the aging report look better. An adjusted amount needs a reason and approving person. A rejected claim needs approved employee-facing wording and any review route. A duplicate signal should identify the possible matching payment without accusing the employee of misconduct.'
      ]},
      { heading: 'Follow the approved amount through export and payment', paragraphs: [
        'Once approved, record approved amount, currency, payment route, cycle, accounting treatment reference, and export identifier. Keep the claimed amount visible. Distinguish exported, accepted, scheduled, paid, returned, cancelled, and reissued states. A successful file upload proves only that a destination received a file; it does not prove the employee was paid or that the destination used the correct currency.',
        'Reconcile provider or bank response with employee, amount, currency, and payment reference. Route rejected accounts, closed cards, returned transfers, and payroll errors to the proper owner. Never change bank details from an emailed reply without the employer’s authenticated process. If the reimbursement appears on payroll, keep it distinct from wage decisions and let payroll or tax owners approve the treatment.'
      ]},
      { heading: 'Explain status clearly and use defects to improve intake', paragraphs: [
        'Send approved messages that distinguish waiting for information, owner review, approved, adjusted, rejected, scheduled, paid, or returned. Name the contact for correction or review without offering tax or policy advice. Avoid vague “processed” language when the item has only been exported. If a service target pauses during owner review, show that reason honestly rather than changing received dates.',
        'Review recurring missing purposes, chat approvals, duplicate submissions, currency errors, rejected destinations, and long owner waits. Adjust forms, approval routes, and training rather than giving coordinators broader discretion. The reader outcome is a reimbursement tracker that can answer what was claimed, what was authorized, what reached the employee, and who owns any remaining dispute.'
      ]},
    ],
    scripts: [
      { label: 'Owner decision', text: 'The claim packet is complete, but the listed policy or tax question requires your decision. Please record the approved amount, category, and reason.' },
      { label: 'Employee status', text: 'Your claim is in the stated status. This message does not change the owner’s decision; use the listed route for a correction or review request.' },
    ],
    faqs: [
      { question: 'Can a coordinator approve a complete expense packet?', answer: 'No. Completeness is an administrative check; the authorized budget, policy, finance, payroll, or tax owner makes the decision.' },
      { question: 'What proves payment?', answer: 'A destination response matching employee, approved amount, currency, and payment reference—not merely an exported file.' },
    ],
  },

  'october2-hr-disciplinary-meeting-record-routing': {
    directAnswer: [
      'Keep disciplinary-meeting coordination inside a restricted case opened by an authorized HR or employee-relations owner. Scheduling staff can manage approved invitations, materials, attendance, acknowledgment, and filing but cannot edit allegations, findings, consequences, or employee rights.',
      'Any new safety, protected-activity, leave, accommodation, discrimination, retaliation, pay, medical, threat, representation, or factual-dispute signal is a stop event. Route it through the qualified channel and record disposition without treating attendance or signature as agreement.',
    ],
    sections: [
      { heading: 'Open a restricted logistics record from an approved instruction', paragraphs: [
        'Confirm case owner, employee, approved notice version, participants, meeting purpose, date window, delivery method, representation process, accessibility arrangements, and restricted storage location. The coordinator should receive only the material needed for logistics. A calendar administrator does not need the investigation file, manager deliberations, medical material, or prior complaints. Use neutral event titles and private attendee settings.',
        'Record who approved the meeting and document version. If managers send a replacement notice or change the stated purpose, pause distribution until the case owner confirms the controlling version. Do not merge drafts or repair substantive wording. Keep earlier versions in the restricted history so the owner can explain what the employee received and when.'
      ]},
      { heading: 'Coordinate access and participation without shaping the outcome', paragraphs: [
        'Send approved invitations, arrange a private room or secure link, confirm participants, organize interpreter or accessibility support, and track delivery. Explain logistics only. Questions about allegations, evidence, discipline, representation, appeal, or consequences go to the case owner. Do not coach a manager or employee on what to say, and do not copy sensitive attachments into calendar descriptions.',
        'Prepare an attendance and document checklist that distinguishes sent, delivered, opened where available, presented, received, signed, refused, and commented. Those states are not interchangeable. A refusal to sign may still follow confirmed delivery, while a signature may acknowledge receipt rather than agreement. Use the employer’s approved wording and keep any employee statement intact.'
      ]},
      { heading: 'Stop and reroute when the meeting reveals a new protected issue', paragraphs: [
        'An employee who refuses a notice and says it followed a safety complaint has introduced a concern that logistics staff must not evaluate. Preserve the words, notify the employee-relations, legal, safety, or whistleblower owner through the restricted route, and wait for instruction. Apply the same stop rule to accommodation, leave, discrimination, retaliation, pay, medical, threat, or representation questions.',
        'Do not add conclusions such as unrelated, unsupported, or already handled. Do not promise confidentiality or a particular response. If the meeting pauses or changes, update participants with only approved logistical information. Keep the new concern linked but separately owned so the disciplinary record does not become an uncontrolled repository for investigations or medical detail.'
      ]},
      { heading: 'File the approved disposition and remove residual access', paragraphs: [
        'After the meeting, obtain the case owner’s disposition: completed, rescheduled, paused, superseded, acknowledgment refused, follow-up assigned, or another approved state. File the exact notice version, delivery evidence, attendance, acknowledgment state, approved notes, and next action in the restricted location. General trackers should contain only a case reference, owner, date, and operational status.',
        'Remove temporary calendar, folder, interpreter, and meeting access. Check recordings and transcripts against policy rather than assuming the platform default is allowed. Review version errors, exposure through invitations, and unhandled disclosures as defects. The reader outcome is a coordination lane that supports a fair, traceable meeting while leaving every substantive employment and response decision with qualified owners.'
      ]},
    ],
    scripts: [
      { label: 'Substantive question', text: 'This question concerns the notice or decision and has been routed to the authorized case owner. I can assist only with the meeting logistics.' },
      { label: 'New disclosure', text: 'A new restricted concern was raised in the employee’s own words. The meeting workflow is paused pending qualified-owner instruction.' },
    ],
    faqs: [
      { question: 'Does a signature prove agreement?', answer: 'Not necessarily. Record receipt, signature, refusal, comments, and owner disposition as separate facts.' },
      { question: 'What belongs in the general tracker?', answer: 'Only a case reference, owner, meeting date, operational status, and next action—not sensitive allegations or evidence.' },
    ],
  },

  'october2-hr-hr-vendor-contact-change-verification': {
    directAnswer: [
      'Verify vendor contact, domain, portal, data-destination, administrator, and payment changes outside the message that requested them. Use the existing contract owner, known telephone route, established portal, or independently retrieved directory; urgency and familiar branding are not authority.',
      'After approval, stage the narrowest possible access or non-sensitive test and reconcile every scheduled export, link, mailbox rule, ticket, invoice, integration, and emergency contact. Remove superseded access and retain evidence of verification and first successful use.',
    ],
    sections: [
      { heading: 'Compare the request with the trusted vendor profile', paragraphs: [
        'Identify the contracted entity, service, agreement owner, current contacts, approved domains, portals, data routes, account administrators, payment details, and verification methods. Compare the requested change field by field. A benefits-vendor email asking for a census on a new file-sharing domain affects both authority and data destination. Do not upload a test employee file to discover whether the request is genuine.',
        'Classify the consequence: informational contact, support recipient, privileged administrator, employee-data destination, encryption key, integration endpoint, invoice address, or bank instruction. Higher-consequence changes need stronger independent verification and often separate approvals. Preserve the original request and headers in the approved security or vendor case without forwarding sensitive attachments broadly.'
      ]},
      { heading: 'Verify through a channel that the request did not supply', paragraphs: [
        'Contact the vendor through the established portal, contract record, known account manager number, or independently retrieved official directory. Ask the authorized company vendor owner to participate. Do not use a telephone number, link, or reply address contained only in the change message. For payment or administrator changes, use the organization’s required dual-control and callback process.',
        'Record who was contacted, channel source, time, facts confirmed, effective date, scope, and approver. If the vendor says the request is false or cannot confirm it, alert security and stop related transfers. If confirmation is partial, approve only the verified fields. A coordinator must not infer that a correct person name validates a new domain, account, or data destination.'
      ]},
      { heading: 'Stage the change with minimum data and permission', paragraphs: [
        'Where possible, begin with a non-sensitive acknowledgment, empty folder, restricted test account, or metadata-only exchange. Limit recipient, dataset, period, purpose, expiry, download, onward sharing, and administrator rights. Confirm encryption and authentication through approved technical owners. Never use real employee data as a connectivity test simply because the monthly cutoff is near.',
        'Schedule the cutover and keep the old destination available only under an approved transition plan. Prevent duplicate exports to old and new contacts. For a portal change, verify the expected certificate, domain, account ownership, and destination response. For a human contact, confirm the person can access only the contracted service scope, not every historical file shared with the vendor.'
      ]},
      { heading: 'Reconcile all affected routes and retire the superseded contact', paragraphs: [
        'Review scheduled exports, shared links, mailbox rules, support queues, invoice workflows, integrations, access groups, emergency contacts, and documentation. Record the first successful approved use and any rejection. Remove or expire the old contact and revoke unused links and accounts. A changed address book entry does not update an automated integration or recurring transfer.',
        'Notify internal users through approved guidance and state the effective date and trusted route. Monitor unexpected requests around the change. Retain verification, approval, cutover, removal, and destination evidence. The reader outcome is a vendor-change process that resists impersonation and misdirection while allowing legitimate service changes to proceed without duplicating employee data or leaving obsolete access behind.'
      ]},
    ],
    scripts: [
      { label: 'Independent verification', text: 'We will verify this requested change through the established vendor-owner channel before altering access, transfers, or payment instructions.' },
      { label: 'Cutover confirmation', text: 'The approved destination is active for the stated scope and effective date. The superseded contact and listed recurring routes have been removed or disabled.' },
    ],
    faqs: [
      { question: 'Can we verify by replying to the request email?', answer: 'No. Use a previously trusted or independently retrieved channel that the request did not supply.' },
      { question: 'Should we test with a small employee file?', answer: 'No. Use non-sensitive or synthetic validation and approved technical checks before transferring live data.' },
    ],
  },
};
