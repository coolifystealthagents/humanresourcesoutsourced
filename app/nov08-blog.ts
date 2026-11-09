export const nov08BlogPosts = [
  {
    "slug": "build-an-employee-file-checklist-the-auditor-can-follow",
    "title": "Build an employee file checklist the auditor can follow",
    "minutes": 8,
    "excerpt": "A file checklist that ties each required document to a date, an owner, and a review point.",
    "published": "2026-11-08"
  },
  {
    "slug": "set-an-onboarding-checklist-that-survives-the-first-week",
    "title": "Set an onboarding checklist that survives the first week",
    "minutes": 8,
    "excerpt": "An onboarding checklist that covers the paperwork, the access, the manager meeting, and the first-week review.",
    "published": "2026-11-08"
  },
  {
    "slug": "track-a-leave-request-without-losing-the-policy-version",
    "title": "Track a leave request without losing the policy version",
    "minutes": 8,
    "excerpt": "A leave tracker that records the request, the policy version, the approval, and the return date.",
    "published": "2026-11-08"
  },
  {
    "slug": "keep-a-performance-note-that-survives-a-manager-change",
    "title": "Keep a performance note that survives a manager change",
    "minutes": 8,
    "excerpt": "A performance note that records the observation, the date, the example, and the next step without guessing the outcome.",
    "published": "2026-11-08"
  },
  {
    "slug": "prepare-a-handbook-acknowledgment-the-employee-can-understand",
    "title": "Prepare a handbook acknowledgment the employee can understand",
    "minutes": 8,
    "excerpt": "A handbook acknowledgment that names the version, the changes, the review, and the employee's confirmation.",
    "published": "2026-11-08"
  },
  {
    "slug": "build-an-offboarding-checklist-that-protects-access-and-records",
    "title": "Build an offboarding checklist that protects access and records",
    "minutes": 8,
    "excerpt": "An offboarding checklist that removes access, recovers property, closes the file, and records the exit.",
    "published": "2026-11-08"
  },
  {
    "slug": "measure-hr-response-time-without-rewarding-speed-alone",
    "title": "Measure HR response time without rewarding speed alone",
    "minutes": 8,
    "excerpt": "An HR response-time measure that pairs speed with accuracy, completeness, and a resolved question.",
    "published": "2026-11-08"
  },
  {
    "slug": "plan-a-weekly-hr-operations-review-on-evidence",
    "title": "Plan a weekly HR operations review on evidence",
    "minutes": 8,
    "excerpt": "A short weekly review that turns onboarding, leave, and file exceptions into decisions and owners.",
    "published": "2026-11-08"
  }
];

export const nov08BlogArticles = {
  "build-an-employee-file-checklist-the-auditor-can-follow": {
    "slug": "build-an-employee-file-checklist-the-auditor-can-follow",
    "title": "Build an employee file checklist the auditor can follow",
    "description": "A file checklist that ties each required document to a date, an owner, and a review point.",
    "published": "2026-11-08",
    "updated": "2026-11-08",
    "minutes": 8,
    "revision": "2026-11-08-build-an-employee-file-checklist-the-auditor-can-follow",
    "directAnswer": ["A file checklist that ties each required document to a date, an owner, and a review point.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["List the required documents and the rule behind each.", "Name the file owner and the reviewer.", "Test the checklist on one real file."],
    "sections": [
      {
        "heading": "How to approach: Build an employee file checklist the auditor can follow",
        "paragraphs": [
          "An employee file checklist should let an auditor find each required document without asking. Start with the documents the law and the policy require. A checklist that lists every possible document will not be used. Write the deadline as a date and a local time.",
          "Keep the checklist short enough to review before the audit. The file should show what is present, what is missing, and who is responsible. Review the first few notes together before the process expands. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "List the required documents",
        "paragraphs": [
          "Record the identity, eligibility, tax, and policy documents the file must contain. Add the signed acknowledgments and the training records. A document that is required by a specific rule should name the rule. Keep the evidence with the record rather than in a separate log.",
          "Record the retention period and the storage system. A document that is kept in a personal folder is not controlled. The checklist should point to the approved location. A control that depends on memory is not yet a control."
        ]
      },
      {
        "heading": "Record the owner and the review",
        "paragraphs": [
          "Name the person who maintains the file and the person who reviews it. A file without an owner will drift. The review should happen on a fixed schedule. Ask whether a new reviewer could act on the record without a conversation.",
          "Record the date of the last review and the missing documents. A missing document should have a follow-up date, not just a note. Keep the evidence with the record rather than in a separate log. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Test the checklist on one file",
        "paragraphs": [
          "Pick one employee file and trace each document. Check whether the checklist matches the file. A mismatch is a finding about the checklist. Keep the evidence with the record rather than in a separate log.",
          "Update the checklist after the test. A checklist that is never tested is only an intention. Name the owner in the same line as the action. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Review the checklist quarterly",
        "paragraphs": [
          "Review the required documents and the retention rules with the HR owner. A new rule may require a new document. Record the review date. A control that depends on memory is not yet a control.",
          "Keep the old checklist with the change note. A later audit may need to see what the team was following. Test the rule on one real file before applying it to the team. A short note with four fields is easier to use than a long narrative."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov08/build-an-employee-file-checklist-the-auditor-can-follow.png"
  },
  "set-an-onboarding-checklist-that-survives-the-first-week": {
    "slug": "set-an-onboarding-checklist-that-survives-the-first-week",
    "title": "Set an onboarding checklist that survives the first week",
    "description": "An onboarding checklist that covers the paperwork, the access, the manager meeting, and the first-week review.",
    "published": "2026-11-08",
    "updated": "2026-11-08",
    "minutes": 8,
    "revision": "2026-11-08-set-an-onboarding-checklist-that-survives-the-first-week",
    "directAnswer": ["An onboarding checklist that covers the paperwork, the access, the manager meeting, and the first-week review.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Prepare paperwork and access before day one.", "Name the first-week meetings and the reviewer.", "Ask the new hire what was missing."],
    "sections": [
      {
        "heading": "How to approach: Set an onboarding checklist that survives the first week",
        "paragraphs": [
          "An onboarding checklist should make the first week predictable for the new hire and the manager. Start with the paperwork, the access, and the first meeting. A checklist that only covers the paperwork leaves the new hire waiting. Keep the boundary visible in the place where the work is assigned.",
          "Keep the checklist to the tasks that must happen before the first day and during the first week. A long list of optional training can wait. A short note with four fields is easier to use than a long narrative. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Prepare the paperwork and the access",
        "paragraphs": [
          "Record the documents, the payroll setup, and the benefits enrollment. Confirm that the access requests are submitted before the start date. A new hire without access cannot work. Record the date and the source so the next reviewer can repeat the check.",
          "Name the person who owns each task and the date it is due. A task without an owner will be missed. Keep the boundary visible in the place where the work is assigned. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Set the first-week meetings",
        "paragraphs": [
          "Record the manager meeting, the team introduction, and the role training. A new hire should know what to expect on each day. The checklist should name the person who will meet them. A short note with four fields is easier to use than a long narrative.",
          "Record the first-week review and the questions to ask. A short review at the end of the week catches the gaps early. Review the first few notes together before the process expands. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Confirm the completion",
        "paragraphs": [
          "Record the date each task was completed and the person who confirmed it. A checklist that is marked complete without evidence is not a control. Keep the evidence with the record rather than in a separate log. Ask whether a new reviewer could act on the record without a conversation.",
          "Ask the new hire what was missing. A checklist that improves after each onboarding is more useful than a perfect template. Separate what was observed from what was assumed. If the source is unclear, route the question instead of guessing."
        ]
      },
      {
        "heading": "Review the checklist quarterly",
        "paragraphs": [
          "Review the tasks and the owners with the HR team. A new system or policy may require a new step. Record the review date. Ask whether a new reviewer could act on the record without a conversation.",
          "Keep the completed checklist with the employee file. A later audit may need to see what was done. A short note with four fields is easier to use than a long narrative. Keep the original note beside the corrected version."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov08/set-an-onboarding-checklist-that-survives-the-first-week.png"
  },
  "track-a-leave-request-without-losing-the-policy-version": {
    "slug": "track-a-leave-request-without-losing-the-policy-version",
    "title": "Track a leave request without losing the policy version",
    "description": "A leave tracker that records the request, the policy version, the approval, and the return date.",
    "published": "2026-11-08",
    "updated": "2026-11-08",
    "minutes": 8,
    "revision": "2026-11-08-track-a-leave-request-without-losing-the-policy-version",
    "directAnswer": ["A leave tracker that records the request, the policy version, the approval, and the return date.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Record the policy version that applied.", "Name the approver and the coverage plan.", "Close with the actual return date."],
    "sections": [
      {
        "heading": "How to approach: Track a leave request without losing the policy version",
        "paragraphs": [
          "A leave tracker should show which policy applied when the request was approved. Start with the employee, the dates, and the policy version. A tracker that only records the dates cannot explain a later dispute. Ask whether a new reviewer could act on the record without a conversation.",
          "Keep the tracker current. A leave request that is approved but not recorded will create a payroll or coverage problem. If the source is unclear, route the question instead of guessing. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Record the request and the policy",
        "paragraphs": [
          "Record the request date, the leave type, and the dates requested. Attach the policy version that applied. A policy change after the request should not be applied retroactively without a review. Keep the evidence with the record rather than in a separate log.",
          "Record the eligibility check and the supporting document. A leave without the required documentation should be marked as pending. Name the owner in the same line as the action. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Record the approval and the coverage",
        "paragraphs": [
          "Name the approver and the date. Record the coverage plan for the team. A leave that is approved without coverage creates a service gap. Name the owner in the same line as the action.",
          "Record the return date and any accommodation. The team should know when the employee is expected back. Use the same format for every handover so the next reader can scan it. If the source is unclear, route the question instead of guessing."
        ]
      },
      {
        "heading": "Close the request",
        "paragraphs": [
          "Record the actual return date and any change. A leave that is closed without the return date is incomplete. The payroll team should see the final dates. If the source is unclear, route the question instead of guessing.",
          "Keep the record for the retention period. A later audit may need to see the approval and the policy. Record the date and the source so the next reviewer can repeat the check. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Review the tracker quarterly",
        "paragraphs": [
          "Review the requests and the policy versions. Look for a repeated issue, such as a missing document or a late approval. Update the process. Write the deadline as a date and a local time.",
          "Keep the old policy version with the change note. A later review may need to see what applied. If the source is unclear, route the question instead of guessing. A short note with four fields is easier to use than a long narrative."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov08/track-a-leave-request-without-losing-the-policy-version.png"
  },
  "keep-a-performance-note-that-survives-a-manager-change": {
    "slug": "keep-a-performance-note-that-survives-a-manager-change",
    "title": "Keep a performance note that survives a manager change",
    "description": "A performance note that records the observation, the date, the example, and the next step without guessing the outcome.",
    "published": "2026-11-08",
    "updated": "2026-11-08",
    "minutes": 8,
    "revision": "2026-11-08-keep-a-performance-note-that-survives-a-manager-change",
    "directAnswer": ["A performance note that records the observation, the date, the example, and the next step without guessing the outcome.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Use a specific example, not a general impression.", "Record the support and the next step.", "Store the note in the approved system."],
    "sections": [
      {
        "heading": "How to approach: Keep a performance note that survives a manager change",
        "paragraphs": [
          "A performance note should record what was observed and what was agreed. Start with the date, the example, and the next step. A note that only says needs improvement is not useful to the next manager. Use the same format for every handover so the next reader can scan it.",
          "Keep the note factual. Do not diagnose the employee or predict the outcome. The note is a record for a fair conversation. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Record the observation and the example",
        "paragraphs": [
          "Write what happened, when, and where. Use a specific example rather than a general impression. A note that says the employee is disengaged is not evidence. Ask whether a new reviewer could act on the record without a conversation.",
          "Record the impact on the work or the team. The impact helps the next manager understand why the note matters. Test the rule on one real file before applying it to the team. Keep the original note beside the corrected version."
        ]
      },
      {
        "heading": "Record the conversation and the next step",
        "paragraphs": [
          "Record the date of the conversation and the employee's response. Write the next step and the review date. A note without a next step is a complaint, not a plan. A short note with four fields is easier to use than a long narrative.",
          "Record any support offered, such as training or a check-in. The note should show that the employee had a chance to improve. Keep the boundary visible in the place where the work is assigned. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "Protect the record",
        "paragraphs": [
          "Store the note in the approved HR system. Do not keep it in a personal folder or a chat. The record may be sensitive. Write the deadline as a date and a local time.",
          "Share it only with the people who need it. A performance note should not become office gossip. A control that depends on memory is not yet a control. Keep the boundary visible in the place where the work is assigned."
        ]
      },
      {
        "heading": "Review the note at a manager change",
        "paragraphs": [
          "When a manager changes, read the last few notes together. The new manager should understand the history and the next step. Update the note if the context is missing. Record the date and the source so the next reviewer can repeat the check.",
          "Keep the note for the retention period. A later review may need to see the evidence and the support offered. A short note with four fields is easier to use than a long narrative. Use the same format for every handover so the next reader can scan it."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov08/keep-a-performance-note-that-survives-a-manager-change.png"
  },
  "prepare-a-handbook-acknowledgment-the-employee-can-understand": {
    "slug": "prepare-a-handbook-acknowledgment-the-employee-can-understand",
    "title": "Prepare a handbook acknowledgment the employee can understand",
    "description": "A handbook acknowledgment that names the version, the changes, the review, and the employee's confirmation.",
    "published": "2026-11-08",
    "updated": "2026-11-08",
    "minutes": 8,
    "revision": "2026-11-08-prepare-a-handbook-acknowledgment-the-employee-can-understand",
    "directAnswer": ["A handbook acknowledgment that names the version, the changes, the review, and the employee's confirmation.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Name the version and the effective date.", "Summarize only the changes that matter.", "Record the acknowledgment in the approved system."],
    "sections": [
      {
        "heading": "How to approach: Prepare a handbook acknowledgment the employee can understand",
        "paragraphs": [
          "A handbook acknowledgment should confirm that the employee received and understood the current version. Start with the version, the effective date, and the key changes. A signature without the context is not informed acknowledgment. Name the owner in the same line as the action.",
          "Keep the acknowledgment short. The employee should know what changed and where to find the full policy. Write the deadline as a date and a local time. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Record the version and the changes",
        "paragraphs": [
          "Record the handbook version, the effective date, and the sections that changed. A new version without a change summary creates confusion. Record the exception and the person who approved it. Separate what was observed from what was assumed.",
          "Record where the employee can read the full handbook. The acknowledgment should point to the approved location, not a personal copy. Record the date and the source so the next reviewer can repeat the check. Test the rule on one real file before applying it to the team."
        ]
      },
      {
        "heading": "Explain the key points",
        "paragraphs": [
          "Summarize the changes that affect the employee's daily work, such as leave, remote work, or expense rules. A summary that is too long will not be read. Separate what was observed from what was assumed. Update the template when the same question appears twice.",
          "Record the date of the briefing and the person who gave it. The employee should have a chance to ask a question. Test the rule on one real file before applying it to the team. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Collect the confirmation",
        "paragraphs": [
          "Record the employee's acknowledgment and the date. Use the approved system. A paper signature without a record is hard to audit. If the source is unclear, route the question instead of guessing.",
          "If the employee declines to sign, record the conversation and the next step. Do not force a signature. Update the template when the same question appears twice. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Review the acknowledgment with the policy",
        "paragraphs": [
          "Keep the acknowledgment with the handbook version. A later audit may need to see which version the employee received. Test the rule on one real file before applying it to the team. Ask whether a new reviewer could act on the record without a conversation.",
          "Review the process after each handbook update. A process that works for one update may fail for the next. Update the template when the same question appears twice. Separate what was observed from what was assumed."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov08/prepare-a-handbook-acknowledgment-the-employee-can-understand.png"
  },
  "build-an-offboarding-checklist-that-protects-access-and-records": {
    "slug": "build-an-offboarding-checklist-that-protects-access-and-records",
    "title": "Build an offboarding checklist that protects access and records",
    "description": "An offboarding checklist that removes access, recovers property, closes the file, and records the exit.",
    "published": "2026-11-08",
    "updated": "2026-11-08",
    "minutes": 8,
    "revision": "2026-11-08-build-an-offboarding-checklist-that-protects-access-and-records",
    "directAnswer": ["An offboarding checklist that removes access, recovers property, closes the file, and records the exit.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Remove access before the last day.", "Recover property and close the file.", "Confirm every step with a name and a date."],
    "sections": [
      {
        "heading": "How to approach: Build an offboarding checklist that protects access and records",
        "paragraphs": [
          "An offboarding checklist should remove access before the employee leaves the building. Start with the systems, the property, and the records. A checklist that only covers the exit interview leaves the access open. Record the exception and the person who approved it.",
          "Keep the checklist in the order the work happens. The manager and IT should know who does what and by when. Record the date and the source so the next reviewer can repeat the check. Test the rule on one real file before applying it to the team."
        ]
      },
      {
        "heading": "Remove access and recover property",
        "paragraphs": [
          "List the systems and the access that must be removed. Record the time and the person who removed each one. A shared password should be changed, not just the account disabled. Use the same format for every handover so the next reader can scan it.",
          "List the property to recover, such as a laptop, a phone, or a key. Record the condition and the date. A missing item should be routed to the manager. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Close the file and the payroll",
        "paragraphs": [
          "Record the final pay, the benefits, and the unused leave. Confirm the address for the final documents. A payroll error after the exit is hard to correct. If the source is unclear, route the question instead of guessing.",
          "Record the file closure and the retention period. The file should not be deleted when the employee leaves. Separate what was observed from what was assumed. Keep the original note beside the corrected version."
        ]
      },
      {
        "heading": "Record the exit",
        "paragraphs": [
          "Record the last day, the reason, and the exit interview. A record without the reason is hard to review. The manager should confirm the last day. Keep the evidence with the record rather than in a separate log.",
          "Record the confirmation that the access is removed and the property is returned. A checklist without confirmation is not complete. Test the rule on one real file before applying it to the team. Review the first few notes together before the process expands."
        ]
      },
      {
        "heading": "Review the checklist quarterly",
        "paragraphs": [
          "Review the systems and the owners with IT and HR. A new system may require a new step. Record the review date. Record the exception and the person who approved it.",
          "Keep the completed checklist with the employee file. A later audit may need to see what was done. A short note with four fields is easier to use than a long narrative. Keep the original note beside the corrected version."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov08/build-an-offboarding-checklist-that-protects-access-and-records.png"
  },
  "measure-hr-response-time-without-rewarding-speed-alone": {
    "slug": "measure-hr-response-time-without-rewarding-speed-alone",
    "title": "Measure HR response time without rewarding speed alone",
    "description": "An HR response-time measure that pairs speed with accuracy, completeness, and a resolved question.",
    "published": "2026-11-08",
    "updated": "2026-11-08",
    "minutes": 8,
    "revision": "2026-11-08-measure-hr-response-time-without-rewarding-speed-alone",
    "directAnswer": ["An HR response-time measure that pairs speed with accuracy, completeness, and a resolved question.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Measure first response and resolution separately.", "Sample accuracy and boundary safety.", "Review reopened requests for a pattern."],
    "sections": [
      {
        "heading": "How to approach: Measure HR response time without rewarding speed alone",
        "paragraphs": [
          "An HR response-time measure should answer whether employees get a useful answer, not just a fast one. Start with the request, the first response, and the resolution. A fast acknowledgment without an answer is not service. Separate what was observed from what was assumed.",
          "Keep the measure simple. A few request types and a clear window are enough to show whether the service is working. Test the rule on one real file before applying it to the team. Update the template when the same question appears twice."
        ]
      },
      {
        "heading": "Measure the first response and the resolution",
        "paragraphs": [
          "Record the time to the first substantive response and the time to resolution. A response that asks a question is substantive; an automated reply is not. If the source is unclear, route the question instead of guessing. Ask whether a new reviewer could act on the record without a conversation.",
          "Report the two measures separately. A fast first response with a slow resolution may still frustrate the employee. Write the deadline as a date and a local time. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Check the accuracy and the boundary",
        "paragraphs": [
          "Sample the responses and check the accuracy against the policy. A response that cites the wrong policy is worse than a slow one. Review the first few notes together before the process expands. Keep the evidence with the record rather than in a separate log.",
          "Check the boundary. An HR assistant should not promise an outcome or give legal advice. The measure should include the boundary. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Review the exceptions",
        "paragraphs": [
          "List the requests that were reopened or escalated. A reopened request may point to an incomplete answer. Share the pattern with the team. If the source is unclear, route the question instead of guessing.",
          "Update the knowledge base or the script. The goal is fewer reopened requests, not a faster clock. Record the date and the source so the next reviewer can repeat the check. Update the template when the same question appears twice."
        ]
      },
      {
        "heading": "Review the measure quarterly",
        "paragraphs": [
          "Review the request types and the window. A new policy or system may change the work. Update the measure with the team. Update the template when the same question appears twice.",
          "Keep the old definition with the change note. A later review may need to see what the team was measuring. Keep the evidence with the record rather than in a separate log. Keep the boundary visible in the place where the work is assigned."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov08/measure-hr-response-time-without-rewarding-speed-alone.png"
  },
  "plan-a-weekly-hr-operations-review-on-evidence": {
    "slug": "plan-a-weekly-hr-operations-review-on-evidence",
    "title": "Plan a weekly HR operations review on evidence",
    "description": "A short weekly review that turns onboarding, leave, and file exceptions into decisions and owners.",
    "published": "2026-11-08",
    "updated": "2026-11-08",
    "minutes": 8,
    "revision": "2026-11-08-plan-a-weekly-hr-operations-review-on-evidence",
    "directAnswer": ["A short weekly review that turns onboarding, leave, and file exceptions into decisions and owners.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Answer one question: what needs a decision this week.", "Send a one-page evidence pack.", "End every item with an owner and a date."],
    "sections": [
      {
        "heading": "How to approach: Plan a weekly HR operations review on evidence",
        "paragraphs": [
          "A weekly HR review should answer one question: which items need a decision this week, and who will make it. Everything else belongs in the written queue. If the meeting reviews every request, it becomes a status report. Update the template when the same question appears twice.",
          "Choose the items before the meeting. The HR lead should select the blocked, aging, or sensitive items. Send a short evidence pack in advance. Update the template when the same question appears twice."
        ]
      },
      {
        "heading": "Prepare the evidence pack",
        "paragraphs": [
          "For each item, include the request, the source, the open question, the owner, and the next step. Keep it to one page. A pack that takes an hour to read will not be read. Review the first few notes together before the process expands.",
          "Do not include the entire file. Link the relevant records and summarize the rest. The purpose is a decision. Test the rule on one real file before applying it to the team."
        ]
      },
      {
        "heading": "Review by next action",
        "paragraphs": [
          "Group the items by the decision they need: approve, clarify, escalate, or close. This turns a list of requests into a list of decisions. It also shows when one person is the bottleneck. If the source is unclear, route the question instead of guessing.",
          "For each group, ask what would change the current position. If nothing would change it, the item may not need a meeting slot. If the source is unclear, route the question instead of guessing. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Limit the meeting to decisions",
        "paragraphs": [
          "Do not read updates that everyone already has in writing. Ask the decision maker for a choice, a condition, or a request for specific evidence. Record the answer in the queue. Record the exception and the person who approved it.",
          "If a decision cannot be made, name the missing person or evidence and set a date. Every discussed item should leave with an owner. Name the owner in the same line as the action. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Follow up and measure movement",
        "paragraphs": [
          "Send a short written summary the same day with the decisions, owners, and dates. Check the summary against the queue. The written record and the system record should agree. Name the owner in the same line as the action.",
          "At the end of the month, review the actions that came out of the review. How many were completed, and how many moved the work forward? A meeting that produces actions but no movement is not working. Separate what was observed from what was assumed."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov08/plan-a-weekly-hr-operations-review-on-evidence.png"
  }
};
