export const nov09BlogPosts = [
  {
    "slug": "set-a-pre-employment-background-check-record",
    "title": "Set a pre-employment background check record",
    "minutes": 8,
    "excerpt": "A background check record that names the candidate, the check, the result, and the reviewer.",
    "published": "2026-11-09"
  },
  {
    "slug": "track-a-leave-of-absence-return-date",
    "title": "Track a leave of absence return date",
    "minutes": 8,
    "excerpt": "A leave tracker that records the request, the approval, the return date, and the accommodation.",
    "published": "2026-11-09"
  },
  {
    "slug": "build-a-performance-improvement-plan-record",
    "title": "Build a performance improvement plan record",
    "minutes": 8,
    "excerpt": "A performance improvement plan that records the concern, the example, the support, and the review dates.",
    "published": "2026-11-09"
  },
  {
    "slug": "record-a-workplace-accommodation-request",
    "title": "Record a workplace accommodation request",
    "minutes": 8,
    "excerpt": "An accommodation record that captures the request, the interactive process, the decision, and the review.",
    "published": "2026-11-09"
  },
  {
    "slug": "keep-a-benefits-enrollment-change-log",
    "title": "Keep a benefits enrollment change log",
    "minutes": 8,
    "excerpt": "A change log that records the employee event, the plan change, the effective date, and the carrier confirmation.",
    "published": "2026-11-09"
  },
  {
    "slug": "write-a-termination-checklist-the-manager-can-follow",
    "title": "Write a termination checklist the manager can follow",
    "minutes": 8,
    "excerpt": "A termination checklist that covers the decision, the notice, the access, the property, and the final pay.",
    "published": "2026-11-09"
  },
  {
    "slug": "track-a-training-completion-record",
    "title": "Track a training completion record",
    "minutes": 8,
    "excerpt": "A training record that names the employee, the course, the completion date, and the evidence.",
    "published": "2026-11-09"
  },
  {
    "slug": "plan-a-quarterly-hr-compliance-audit",
    "title": "Plan a quarterly HR compliance audit",
    "minutes": 8,
    "excerpt": "A quarterly audit that samples files, leave, and training and ends with one improvement.",
    "published": "2026-11-09"
  }
];

export const nov09BlogArticles = {
  "set-a-pre-employment-background-check-record": {
    "slug": "set-a-pre-employment-background-check-record",
    "title": "Set a pre-employment background check record",
    "description": "A background check record that names the candidate, the check, the result, and the reviewer.",
    "published": "2026-11-09",
    "updated": "2026-11-09",
    "minutes": 8,
    "revision": "2026-11-09-set-a-pre-employment-background-check-record",
    "directAnswer": ["A background check record that names the candidate, the check, the result, and the reviewer.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Record the candidate and the check.", "Keep the result with the evidence.", "Name the reviewer and the date."],
    "sections": [
      {
        "heading": "How to approach: Set a pre-employment background check record",
        "paragraphs": [
          "A background check record should show what was checked, when, and who reviewed it. Start with the candidate, the check type, the result, and the reviewer. A record that only says cleared is not enough. Separate what was observed from what was assumed.",
          "Keep the record in the approved system with restricted access. A control that depends on memory is not yet a control. Record the date and the source so the next reviewer can repeat the check. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Record the candidate and the check",
        "paragraphs": [
          "Write the candidate, the role, and the check type. Record the consent and the date. A check without consent is a compliance risk. A control that depends on memory is not yet a control.",
          "Record the vendor and the reference. A result without the source is hard to verify. Record the date and the source so the next reviewer can repeat the check. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Record the result and the reviewer",
        "paragraphs": [
          "Write the result and the date. Name the reviewer who made the employment decision. Do not record a detail that is not needed for the decision. Record the exception and the person who approved it.",
          "Record any adverse action and the process. A decision without the record is hard to defend. Record the date and the source so the next reviewer can repeat the check. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Review the file before the start",
        "paragraphs": [
          "Check the record before the start date. A missing check should delay the start, not the record. Name the owner in the same line as the action. Use the same format for every handover so the next reader can scan it.",
          "Record the confirmation and the owner. A file that is not confirmed is not complete. Update the template when the same question appears twice. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Review the process annually",
        "paragraphs": [
          "Review the checks and the vendor with the HR lead. A new role may require a different check. Test the rule on one real file before applying it to the team. Keep the evidence with the record rather than in a separate log."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog/track-a-leave-of-absence-return-date", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov09/set-a-pre-employment-background-check-record.png"
  },
  "track-a-leave-of-absence-return-date": {
    "slug": "track-a-leave-of-absence-return-date",
    "title": "Track a leave of absence return date",
    "description": "A leave tracker that records the request, the approval, the return date, and the accommodation.",
    "published": "2026-11-09",
    "updated": "2026-11-09",
    "minutes": 8,
    "revision": "2026-11-09-track-a-leave-of-absence-return-date",
    "directAnswer": ["A leave tracker that records the request, the approval, the return date, and the accommodation.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Record the leave and the approval.", "Set the return date.", "Record any accommodation."],
    "sections": [
      {
        "heading": "How to approach: Track a leave of absence return date",
        "paragraphs": [
          "A leave tracker should show the leave, the approval, and the return. Start with the request, the dates, and the approver. A tracker that only lists the start date hides the return risk. Keep the boundary visible in the place where the work is assigned.",
          "Keep the tracker current. A return change should be recorded the same week. Use the same format for every handover so the next reader can scan it. A control that depends on memory is not yet a control."
        ]
      },
      {
        "heading": "Record the request and the approval",
        "paragraphs": [
          "Write the leave type, the dates, and the reason category. Record the approver and the date. A leave without the approval is a request, not a leave. Write the deadline as a date and a local time.",
          "Record the policy version that applied. A later review may need the rule. Test the rule on one real file before applying it to the team. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Set the return date and the accommodation",
        "paragraphs": [
          "Write the expected return date and any accommodation. Record the person who will confirm the return. Keep the original note beside the corrected version. Separate what was observed from what was assumed.",
          "Record the coverage plan. A leave without coverage may create a service gap. Name the owner in the same line as the action. Test the rule on one real file before applying it to the team."
        ]
      },
      {
        "heading": "Review the open leaves weekly",
        "paragraphs": [
          "Look for a leave that is past the return date or has no confirmation. Assign an owner and a date. Review the first few notes together before the process expands. Keep the boundary visible in the place where the work is assigned."
        ]
      },
      {
        "heading": "Review the process annually",
        "paragraphs": [
          "Review the leave types and the policy with the HR lead. Update the tracker and the approval path. Update the template when the same question appears twice. Use the same format for every handover so the next reader can scan it."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog/set-a-pre-employment-background-check-record", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov09/track-a-leave-of-absence-return-date.png"
  },
  "build-a-performance-improvement-plan-record": {
    "slug": "build-a-performance-improvement-plan-record",
    "title": "Build a performance improvement plan record",
    "description": "A performance improvement plan that records the concern, the example, the support, and the review dates.",
    "published": "2026-11-09",
    "updated": "2026-11-09",
    "minutes": 8,
    "revision": "2026-11-09-build-a-performance-improvement-plan-record",
    "directAnswer": ["A performance improvement plan that records the concern, the example, the support, and the review dates.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Record the concern and the example.", "Offer support and a review date.", "Keep the record factual."],
    "sections": [
      {
        "heading": "How to approach: Build a performance improvement plan record",
        "paragraphs": [
          "A performance improvement plan should be specific, supported, and time-bound. Start with the concern, the example, the support, and the review dates. A plan that only says improve is not a plan. Write the deadline as a date and a local time.",
          "Keep the record factual and respectful. The employee should know what success looks like. Test the rule on one real file before applying it to the team. Update the template when the same question appears twice."
        ]
      },
      {
        "heading": "Record the concern and the example",
        "paragraphs": [
          "Write the concern in observable terms. Use a specific example and the date. A general impression is not evidence. Record the exception and the person who approved it.",
          "Record the impact on the work or the team. The impact helps the employee understand why the plan matters. Write the deadline as a date and a local time. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Offer support and a review date",
        "paragraphs": [
          "Record the training, coaching, or resources offered. Set the review dates and the person who will review. Ask whether a new reviewer could act on the record without a conversation. Use the same format for every handover so the next reader can scan it.",
          "Record the employee's response and any questions. A plan without the response is one-sided. Test the rule on one real file before applying it to the team. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Record the outcome",
        "paragraphs": [
          "Write whether the plan was met, extended, or closed. Name the reviewer and the date. A plan without an outcome is incomplete. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Review the process annually",
        "paragraphs": [
          "Review the plans and the outcomes with the HR lead. Update the template and the training. Ask whether a new reviewer could act on the record without a conversation. Keep the boundary visible in the place where the work is assigned."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog/record-a-workplace-accommodation-request", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov09/build-a-performance-improvement-plan-record.png"
  },
  "record-a-workplace-accommodation-request": {
    "slug": "record-a-workplace-accommodation-request",
    "title": "Record a workplace accommodation request",
    "description": "An accommodation record that captures the request, the interactive process, the decision, and the review.",
    "published": "2026-11-09",
    "updated": "2026-11-09",
    "minutes": 8,
    "revision": "2026-11-09-record-a-workplace-accommodation-request",
    "directAnswer": ["An accommodation record that captures the request, the interactive process, the decision, and the review.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Record the request in the employee's words.", "Document the interactive process.", "Set a review date."],
    "sections": [
      {
        "heading": "How to approach: Record a workplace accommodation request",
        "paragraphs": [
          "An accommodation record should show the request and the process, not a medical diagnosis. Start with the employee's words, the interactive process, the decision, and the review. Update the template when the same question appears twice. A control that depends on memory is not yet a control.",
          "Keep the record confidential and separate from the general file where the policy requires. Use the same format for every handover so the next reader can scan it. Separate what was observed from what was assumed. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Record the request and the process",
        "paragraphs": [
          "Write the request in the employee's words. Record the date and the person who received it. If the source is unclear, route the question instead of guessing. Review the first few notes together before the process expands.",
          "Record the steps taken, the information requested, and the people involved. A decision without the process is hard to defend. Review the first few notes together before the process expands. Keep the evidence with the record rather than in a separate log."
        ]
      },
      {
        "heading": "Record the decision and the review",
        "paragraphs": [
          "Write the decision, the effective date, and the review date. Record the person who approved it. Write the deadline as a date and a local time. Review the first few notes together before the process expands.",
          "Record any alternative offered. A decision that ignores an alternative may not be reasonable. Record the date and the source so the next reviewer can repeat the check. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Review the accommodation",
        "paragraphs": [
          "Set a review date and the person who will check it. A temporary accommodation may need a new review. Update the template when the same question appears twice. Review the first few notes together before the process expands."
        ]
      },
      {
        "heading": "Review the process annually",
        "paragraphs": [
          "Review the requests and the outcomes with the HR and legal leads. Update the process and the training. Review the first few notes together before the process expands. Keep the evidence with the record rather than in a separate log."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog/build-a-performance-improvement-plan-record", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov09/record-a-workplace-accommodation-request.png"
  },
  "keep-a-benefits-enrollment-change-log": {
    "slug": "keep-a-benefits-enrollment-change-log",
    "title": "Keep a benefits enrollment change log",
    "description": "A change log that records the employee event, the plan change, the effective date, and the carrier confirmation.",
    "published": "2026-11-09",
    "updated": "2026-11-09",
    "minutes": 8,
    "revision": "2026-11-09-keep-a-benefits-enrollment-change-log",
    "directAnswer": ["A change log that records the employee event, the plan change, the effective date, and the carrier confirmation.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Record the event and the change.", "Confirm the carrier.", "Keep the effective date."],
    "sections": [
      {
        "heading": "How to approach: Keep a benefits enrollment change log",
        "paragraphs": [
          "A benefits change log should show why the change was allowed and whether the carrier received it. Start with the event, the change, the effective date, and the confirmation. Update the template when the same question appears twice. Keep the original note beside the corrected version.",
          "Keep the log current. A change without the carrier confirmation may not be active. Record the exception and the person who approved it. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Record the event and the change",
        "paragraphs": [
          "Write the qualifying event, the date, and the plan change. Record the employee's request and the evidence. Use the same format for every handover so the next reader can scan it. Separate what was observed from what was assumed.",
          "Record the effective date and the payroll deduction. A change without the date may create a billing error. Record the date and the source so the next reviewer can repeat the check. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Confirm the carrier",
        "paragraphs": [
          "Record the carrier submission and the confirmation. A change that is entered but not confirmed is not complete. Record the date and the source so the next reviewer can repeat the check. Separate what was observed from what was assumed.",
          "Record the employee communication. The employee should know what changed. Write the deadline as a date and a local time. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Review the log monthly",
        "paragraphs": [
          "Look for a change that is not confirmed or has no effective date. Assign an owner and a date. Keep the boundary visible in the place where the work is assigned. Keep the evidence with the record rather than in a separate log."
        ]
      },
      {
        "heading": "Review the process annually",
        "paragraphs": [
          "Review the events and the carriers with the benefits lead. Update the log and the instructions. If the source is unclear, route the question instead of guessing. Name the owner in the same line as the action."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog/write-a-termination-checklist-the-manager-can-follow", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov09/keep-a-benefits-enrollment-change-log.png"
  },
  "write-a-termination-checklist-the-manager-can-follow": {
    "slug": "write-a-termination-checklist-the-manager-can-follow",
    "title": "Write a termination checklist the manager can follow",
    "description": "A termination checklist that covers the decision, the notice, the access, the property, and the final pay.",
    "published": "2026-11-09",
    "updated": "2026-11-09",
    "minutes": 8,
    "revision": "2026-11-09-write-a-termination-checklist-the-manager-can-follow",
    "directAnswer": ["A termination checklist that covers the decision, the notice, the access, the property, and the final pay.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Record the decision and the approval.", "Remove access and recover property.", "Confirm the final pay."],
    "sections": [
      {
        "heading": "How to approach: Write a termination checklist the manager can follow",
        "paragraphs": [
          "A termination checklist should protect the employee and the company. Start with the decision, the notice, the access, the property, and the final pay. A checklist that only covers the exit interview leaves the access open. Write the deadline as a date and a local time.",
          "Keep the checklist in the order the work happens. Ask whether a new reviewer could act on the record without a conversation. Test the rule on one real file before applying it to the team. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Record the decision and the notice",
        "paragraphs": [
          "Write the decision and the approver. Record the notice date and the final day. A termination without the approval is a risk. Separate what was observed from what was assumed.",
          "Record the employee communication and the materials provided. Review the first few notes together before the process expands. Ask whether a new reviewer could act on the record without a conversation. Keep the original note beside the corrected version."
        ]
      },
      {
        "heading": "Remove access and recover property",
        "paragraphs": [
          "List the systems and the access to remove. Record the time and the person. List the property and the condition. Keep the boundary visible in the place where the work is assigned.",
          "Record the confirmation. A removal that is not confirmed is not complete. Separate what was observed from what was assumed. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Confirm the final pay and the file",
        "paragraphs": [
          "Record the final pay, benefits, and unused leave. Confirm the address for the final documents. Test the rule on one real file before applying it to the team. Write the deadline as a date and a local time.",
          "Record the file closure and the retention period. Write the deadline as a date and a local time. Update the template when the same question appears twice. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Review the process annually",
        "paragraphs": [
          "Review the checklist and the access with IT and HR. Update the template. Record the exception and the person who approved it. Keep the original note beside the corrected version."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog/keep-a-benefits-enrollment-change-log", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov09/write-a-termination-checklist-the-manager-can-follow.png"
  },
  "track-a-training-completion-record": {
    "slug": "track-a-training-completion-record",
    "title": "Track a training completion record",
    "description": "A training record that names the employee, the course, the completion date, and the evidence.",
    "published": "2026-11-09",
    "updated": "2026-11-09",
    "minutes": 8,
    "revision": "2026-11-09-track-a-training-completion-record",
    "directAnswer": ["A training record that names the employee, the course, the completion date, and the evidence.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Record the employee and the course.", "Keep the completion evidence.", "Set the renewal date."],
    "sections": [
      {
        "heading": "How to approach: Track a training completion record",
        "paragraphs": [
          "A training record should show who completed what and when. Start with the employee, the course, the date, and the evidence. A record that only says trained is not enough. Keep the boundary visible in the place where the work is assigned.",
          "Keep the record in the approved system. Separate what was observed from what was assumed. If the source is unclear, route the question instead of guessing. Update the template when the same question appears twice."
        ]
      },
      {
        "heading": "Record the employee and the course",
        "paragraphs": [
          "Write the employee, the course, and the required date. Record the source and the reviewer. Test the rule on one real file before applying it to the team. Record the date and the source so the next reviewer can repeat the check.",
          "Record the completion date and the score if one exists. A completion without the evidence is weak. A control that depends on memory is not yet a control. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Set the renewal date",
        "paragraphs": [
          "Write the renewal date and the reminder. A training that expires without a reminder may lapse. Name the owner in the same line as the action. Keep the original note beside the corrected version.",
          "Record the owner who follows up. A reminder without an owner is a notification. Ask whether a new reviewer could act on the record without a conversation. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Review the records monthly",
        "paragraphs": [
          "Look for an employee who is close to the renewal date or missing a required course. Assign an owner and a date. If the source is unclear, route the question instead of guessing. Update the template when the same question appears twice."
        ]
      },
      {
        "heading": "Review the process annually",
        "paragraphs": [
          "Review the courses and the renewal periods with the HR lead. Update the record and the reminders. Use the same format for every handover so the next reader can scan it. Ask whether a new reviewer could act on the record without a conversation."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog/plan-a-quarterly-hr-compliance-audit", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov09/track-a-training-completion-record.png"
  },
  "plan-a-quarterly-hr-compliance-audit": {
    "slug": "plan-a-quarterly-hr-compliance-audit",
    "title": "Plan a quarterly HR compliance audit",
    "description": "A quarterly audit that samples files, leave, and training and ends with one improvement.",
    "published": "2026-11-09",
    "updated": "2026-11-09",
    "minutes": 8,
    "revision": "2026-11-09-plan-a-quarterly-hr-compliance-audit",
    "directAnswer": ["A quarterly audit that samples files, leave, and training and ends with one improvement.", "The assistant prepares evidence; the HR owner keeps the decisions that change pay, access, or an employee record."],
    "takeaways": ["Sample files, leave, and training.", "Use the source evidence.", "Set one improvement."],
    "sections": [
      {
        "heading": "How to approach: Plan a quarterly HR compliance audit",
        "paragraphs": [
          "A quarterly audit should test a small sample and end with one improvement. Start with the files, the leave, and the training. A broad audit will not finish. Ask whether a new reviewer could act on the record without a conversation.",
          "Choose the sample before the audit. Include one routine case, one exception, and one case an employee challenged. Record the exception and the person who approved it. A control that depends on memory is not yet a control."
        ]
      },
      {
        "heading": "Choose the evidence",
        "paragraphs": [
          "Use the file, the leave record, and the training record. A summary without the source is not evidence. Write the deadline as a date and a local time. Use the same format for every handover so the next reader can scan it.",
          "Record the date and the reviewer. Keep the boundary visible in the place where the work is assigned. Keep the evidence with the record rather than in a separate log. Test the rule on one real file before applying it to the team."
        ]
      },
      {
        "heading": "Review the case",
        "paragraphs": [
          "Ask whether the owner, the standard, and the next step were clear. Record the finding and the evidence. Name the owner in the same line as the action. Use the same format for every handover so the next reader can scan it.",
          "Do not record a legal opinion. The audit is about the process. Test the rule on one real file before applying it to the team. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "Set one improvement",
        "paragraphs": [
          "Choose one change that would prevent the most common gap. Assign an owner and a date. Ask whether a new reviewer could act on the record without a conversation. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Review the audit quarterly",
        "paragraphs": [
          "Ask the team whether the audit helped. An audit that produces the same finding is not working. Record the exception and the person who approved it. Update the template when the same question appears twice."
        ]
      }
    ],
    "taskRows": [{"lane": "request", "philippinesTeam": "Prepares the record and checks the source", "owner": "HR owner", "check": "Dated approval recorded"}, {"lane": "exception", "philippinesTeam": "Flags the gap and routes the question", "owner": "HR owner", "check": "Named decision and date"}, {"lane": "close", "philippinesTeam": "Confirms the destination record", "owner": "HR owner", "check": "Confirmation timestamp"}],
    "pilotStats": [{"value": "1", "label": "Queue", "note": "Start with one workflow."}, {"value": "3", "label": "Checks", "note": "Source, owner, date."}],
    "scripts": [{"label": "Opening", "text": "I am preparing the record for review. I will confirm the source and the owner before we close."}],
    "workflow": [{"step": "1", "title": "Prepare", "text": "Gather the source and the required fields."}, {"step": "2", "title": "Review", "text": "The HR owner confirms the decision."}],
    "faqs": [{"question": "Who owns the decision?", "answer": "The named HR owner keeps the decision; the assistant prepares the evidence."}],
    "related": [{"title": "Related guide", "href": "/blog/track-a-training-completion-record", "note": "Continue with a related workflow."}],
    "sources": [{"name": "U.S. Department of Labor", "url": "https://www.dol.gov/", "note": "Public guidance consulted for general context."}],
    "heroImage": "/images/nov09/plan-a-quarterly-hr-compliance-audit.png"
  }
};
