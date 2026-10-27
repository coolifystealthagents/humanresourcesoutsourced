export const octoberTwentySeventhResearchPosts = [
  {
    "slug": "humanresourcesoutsourced-auditing-access-changes-around-leave-request",
    "title": "Auditing access changes around leave request",
    "excerpt": "A grounded HR outsourcing note for HR and people operations leaders: leave request with explicit evidence, decision rights, and a verified close.",
    "published": "2026-10-27",
    "modified": "2026-10-27",
    "thumbnail": "/oct27-heroes/humanresourcesoutsourced-auditing-access-changes-around-leave-request.png",
    "sections": [
      {
        "heading": "Question and scope",
        "body": "The question should name the unit, the start event, the stop event, and the decision the result is meant to inform. If the population is too small to sample, say so and report the complete set rather than implying a larger study. Distinguish an administrative pause from a failure: a pause waits for a named decision, while a failure leaves the next action unowned. State whether the study covers one team, one client, or all cases in the defined service. Record this decision in the study log with the case key, the review date, and the person who approved the classification.\n\nThe scope is one defined population of leave request cases observed from first request through verified close in the policy library. If one request produces several I-9 record updates, define whether the unit is the request or each update before sampling. Define the start event, the stop event, the pause rule, and the treatment of a missing I-9 record before collecting data. If the study is exploratory, label it exploratory and do not present the result as a stable baseline. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue."
      },
      {
        "heading": "Population and unit",
        "body": "When several I-9 record updates belong to one request, state whether the request or each update is the unit and apply that rule consistently. A case that moves between owners stays one case unless the process defines a new requirement at the handoff. If the definition of policy acknowledgment rate changes, keep the old and new values side by side for the transition period. Record the extraction date and the queue filter so another reviewer can reproduce the population count. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it.\n\nIf a reopened case creates a new requirement, count it as a new case and retain a link to the earlier record. If duplicate requests are merged, keep the duplicate count and the merge rule in the dataset. The definition should make it possible to classify a case without asking the person who did the work. Keep a list of requests closed as duplicates and show which case survived. At Human Resources Outsourced, the reviewer should be able to explain this step to benefits broker from the case record alone."
      },
      {
        "heading": "Definitions and measures",
        "body": "A case that has no destination change should be defined as cancelled or rejected, not counted as complete. Record the version of the benefits enrollment and the HR ticket queue snapshot used for each case. Record the person who approved the definition and the date it became effective. A definition that depends on the reviewer\u2019s memory is not reproducible enough for this study. Use the same note in the case file and the study extract; do not create a second version in a personal document.\n\nTest each definition on a routine case, a missing-evidence case, and a case that crossed owners. Record the source system, the record identifier, the extraction time, and the reviewer for every extracted value. A duplicate request is a separate intake event even when it points to the same underlying need; record the link. Record the pause rule and the person authorized to release a paused case. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      },
      {
        "heading": "Data dictionary and evidence",
        "body": "The data dictionary should name the allowed values for status, exception reason, owner, and close evidence. Keep the identity crosswalk in the approved system and restrict it to the review owner. Keep the source reference and the coded value in the same row, and do not overwrite the original with a later correction. Do not use a zero or an empty string to represent missing evidence. Keep the measurement note short enough to read with the case and specific enough to support the reported leave response time.\n\nEach case needs the source, the observation time, the field supported, the owner, and the reviewer. Record the extraction time separately from the event time so a late entry is visible. Keep the source reference and the coded value in the same row, and do not overwrite the original with a later correction. Pilot the dictionary with two reviewers and compare their classifications before the main sample. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved.\n\nUse a pseudonymous case key and keep the identity crosswalk in an approved system with restricted access. Record the extraction time separately from the event time so a late entry is visible. A missing value should have a reason code, not a blank cell or a zero. Define who may change a coded value and how the change is logged. Link the observation to the exact field in the benefits portal and to the policy acknowledgment that supports it."
      },
      {
        "heading": "Sampling and collection",
        "body": "A convenience sample of recently closed cases will overrepresent easy work and underrepresent the tail that needs attention. If a source cannot be accessed, mark it unavailable and record the access problem rather than asking the operator to reconstruct it from memory. Keep the sample selection reproducible by recording the export date, filter, and random seed or start rule. Keep a table of planned, eligible, selected, and reviewed counts for each stratum. Do not let a summary written later replace the evidence that was available at the first decision.\n\nIf the population is small, report every case and the reason the sample is exhaustive rather than presenting a false precision. Record the time of each observation so a later reviewer can distinguish a late entry from a changed decision. A sample of recent closures can miss the oldest unresolved work, which is often the most informative. If a selected case is out of scope, replace it only with the next case in the same stratum and record the substitution. If the case moved between owners, include both owner periods in the review note and name the handoff time.\n\nA convenience sample of recently closed cases will overrepresent easy work and underrepresent the tail that needs attention. Collect the exception reason and the action taken before the close so the analysis can separate detection from resolution. If a stratum has fewer cases than planned, report the smaller count instead of replacing it with a convenience case. Use a random start and a fixed interval when the frame is ordered, and record both. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      },
      {
        "heading": "Analysis and reporting",
        "body": "Keep case-level detail available for review, because a summary chart without records cannot support a decision. Compare periods only after checking the case mix, the definitions, and the queue rules. Use a simple before-and-after comparison only when the definitions and observation window are the same. End with the decision the evidence supports and the decision it does not support. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract.\n\nState which findings are descriptive and which require a follow-up test with a larger or different sample. If two measures disagree, report both and explain what each one counts. Record the sample date, the denominator, the numerator, and the exclusion count for every reported rate. End with the decision the evidence supports and the decision it does not support. At Human Resources Outsourced, the leave request review should end with a dated note and a named owner for the next check."
      },
      {
        "heading": "Limitations",
        "body": "The cited public sources frame recordkeeping, privacy, security, or control practice; they do not provide a local result. The study cannot determine whether a professional judgment was correct, only whether the record supports it. Name the follow-up evidence that would reduce the largest uncertainty. State that the result describes the observed sample, not the whole industry or every team in the service. If the evidence is sensitive, record the approved reference and access path rather than copying the content.\n\nThe method also cannot observe work that never entered the queue, which may be the most important missing population. Selection bias remains when the team chooses cases that are easy to open or owners who are likely to cooperate. Record the response or access problems that prevented a case from being reviewed. If the reviewer performed the work, use a second reviewer for a subsample and report the disagreement. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      },
      {
        "heading": "Review and next action",
        "body": "Choose one next action: fix the source, simplify the I-9 record, change the queue, adjust access, or pause the work until the owner decides. A quality review should end with a testable next step, not a general instruction to improve. Set the next sample date before closing the review, so the action does not drift. Use a short action log that names the change, the owner, the due date, and the measure that will show whether it worked. Record this decision in the study log with the case key, the review date, and the person who approved the classification.\n\nA quality review should end with an owner, a date, and one testable change, not a list of intentions. A quality review should end with a testable next step, not a general instruction to improve. Close the review only when the owner has accepted the result and the next check is scheduled. Schedule the next review before the action begins, not after the result arrives. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Department of Labor \u2014 recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "name": "U.S. Citizenship and Immigration Services \u2014 Form I-9",
        "url": "https://www.uscis.gov/i-9"
      },
      {
        "name": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "url": "https://www.hhs.gov/hipaa/index.html"
      }
    ],
    "serviceLink": {
      "title": "HR operations support",
      "href": "/services",
      "body": "Use the method to define evidence and ownership."
    }
  },
  {
    "slug": "humanresourcesoutsourced-estimating-rework-in-benefits-enrollment-from-correction-and-reopen-records",
    "title": "Estimating rework in benefits enrollment from correction and reopen records",
    "excerpt": "A grounded HR outsourcing note for HR and people operations leaders: benefits enrollment with explicit evidence, decision rights, and a verified close.",
    "published": "2026-10-27",
    "modified": "2026-10-27",
    "thumbnail": "/oct27-heroes/humanresourcesoutsourced-estimating-rework-in-benefits-enrollment-from-correction-and-reopen-records.png",
    "sections": [
      {
        "heading": "Question and scope",
        "body": "The protocol does not estimate an industry benchmark; it produces a local description that HR and people operations leaders can review. State how duplicate requests are identified and whether they are merged, linked, or counted separately. Write the primary measure and one supporting measure; a measure without a denominator or observation window is not ready. State whether the study covers one team, one client, or all cases in the defined service. If the evidence is sensitive, record the approved reference and access path rather than copying the content.\n\nA useful scope is narrow enough to reproduce and specific enough to show whether late benefits change is being detected. A count without a denominator is not a measurement, especially when the queue changes size during the day. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. Keep the protocol with the benefits enrollment batch so the next reviewer can see what was measured. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      },
      {
        "heading": "Population and unit",
        "body": "The unit is one benefits enrollment case, from the opening request to the verified close, and linked events stay with that case. Define whether a request that generates several policy acknowledgment updates is one case or several before counting begins. Define how a case that waits for client HR lead is counted: paused, open, or excluded, but not silently dropped. Report a case that moved between owners as one case with two owner periods unless the process creates a new requirement. Record this decision in the study log with the case key, the review date, and the person who approved the classification.\n\nA population that changes size during the day should be reported with the start, end, and net change, not only the closing total. A denominator that changes during the window should be reported separately for each period. Define how a case that waits for employee is counted: paused, open, or excluded, but not silently dropped. If a request was reopened after the window, keep it in the original population and report the later event separately. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue."
      },
      {
        "heading": "Definitions and measures",
        "body": "Name the owner who can declare a case complete, and record that role in the data dictionary. Do not store sensitive content in the analysis file when a reference to the approved repository is enough. Use the same status vocabulary in the queue, the evidence extract, and the report so a case does not change category. Define whether the measure counts requests, cases, or destination updates, and use that unit consistently. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it.\n\nDefine how a correction after close is linked to the original case and whether it creates a new case. Record the source system, the record identifier, the extraction time, and the reviewer for every extracted value. Before collection, test the definitions on a missing I-9 record, a reopened case, and a handoff. If two reviewers disagree, preserve both classifications until the definition is clarified. At Human Resources Outsourced, the reviewer should be able to explain this step to payroll manager from the case record alone."
      },
      {
        "heading": "Data dictionary and evidence",
        "body": "Use a pseudonymous case key and keep the identity crosswalk in an approved system with restricted access. If a field is derived, record the formula and the source fields used to calculate it. Store sensitive evidence in the approved repository and keep only the reference in the analysis file. Pilot the dictionary with two reviewers and compare their classifications before the main sample. Use the same note in the case file and the study extract; do not create a second version in a personal document.\n\nTest the dictionary on five cases before the full sample; ambiguous fields should be fixed before collection, not after. Give every case a study key that is not the client name, member number, or candidate email. Keep the source reference and the coded value in the same row, and do not overwrite the original with a later correction. Record the source location, not just the file name, so a reviewer can reopen the exact evidence. When a case needs an exception, record the reason, the owner, and the date before continuing the review.\n\nEach case needs the source, the observation time, the field supported, the owner, and the reviewer. Record the extraction time separately from the event time so a late entry is visible. Record the data extraction date and the version of the applicant tracking system used for the population count. A case key should remain stable if the case moves between owners or changes status. Keep the measurement note short enough to read with the case and specific enough to support the reported offboarding closure."
      },
      {
        "heading": "Sampling and collection",
        "body": "Stop expanding the sample only when the review question is answered, not when the result starts to look favorable. Use the same collection form for every case and keep the original record linked to the extracted fields. A sample of recent closures can miss the oldest unresolved work, which is often the most informative. Include at least one case from each owner in scope when the frame allows it. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved.\n\nUse a random or systematic start rule for the first case, then take consecutive cases within each stratum. Collect the exception reason and the action taken before the close so the analysis can separate detection from resolution. Keep the sample selection reproducible by recording the export date, filter, and random seed or start rule. Record the date of the sample and the version of the queue export. Link the observation to the exact field in the applicant tracking system and to the leave request that supports it.\n\nSample across the full observation window, including the days when the queue was busiest and the days when coverage changed. Collect the case from the benefits portal, the performance review, and the approval record, and stop at the verified close. If a stratum has fewer cases than planned, report the smaller count instead of replacing it with a convenience case. Include at least one case from each owner in scope when the frame allows it. Do not let a summary written later replace the evidence that was available at the first decision."
      },
      {
        "heading": "Analysis and reporting",
        "body": "For benefits enrollment, report the age distribution and the share of cases waiting on a named decision rather than a single average. Compare periods only after checking the case mix, the definitions, and the queue rules. Write the finding in plain language and separate what was observed from what the team believes caused it. When a measure is based on a small sample, state the case count and avoid ranking owners by the result. If the case moved between owners, include both owner periods in the review note and name the handoff time.\n\nCompare I-9 exception count across owners only after checking the case mix, the channel, and the evidence standard. Keep descriptive findings separate from causal claims. Keep the case-level table available for review and summarize only the measures that answer the question. Report the number of cases that drive a small-sample result and the direction of the effect. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      },
      {
        "heading": "Limitations",
        "body": "The method also cannot observe work that never entered the queue, which may be the most important missing population. Report the unknown population and the evidence that would be needed to describe it. Report the limits of the benefits portal data, including fields that were unavailable or changed during the window. If the reviewer performed the work, use a second reviewer for a subsample and report the disagreement. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract.\n\nThe study cannot determine whether the professional decision was correct, only whether the record and handoff are reconstructable. The study cannot determine whether a professional judgment was correct, only whether the record supports it. Record the response or access problems that prevented a case from being reviewed. If the queue changed during the window, explain how the change affects the denominator. At Human Resources Outsourced, the benefits enrollment review should end with a dated note and a named owner for the next check."
      },
      {
        "heading": "Review and next action",
        "body": "Report what moved, what did not, and which result is still unexplained. Report what moved, what stayed the same, and what the study still cannot explain. Record the owner, the due date, and the exact change that will be tested at the next review. Close the review when the owner accepts the finding and the next test is on the calendar. If the evidence is sensitive, record the approved reference and access path rather than copying the content.\n\nRecord the decision and the next check so the study does not end as an archive. Repeat the protocol with the same definitions and window, then compare the same measures. Record the owner, the due date, and the exact change that will be tested at the next review. Link the action to the case evidence that prompted it, not only to the meeting notes. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      }
    ],
    "sources": [
      {
        "name": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "url": "https://www.hhs.gov/hipaa/index.html"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Department of Labor \u2014 recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "name": "U.S. Citizenship and Immigration Services \u2014 Form I-9",
        "url": "https://www.uscis.gov/i-9"
      }
    ],
    "serviceLink": {
      "title": "HR operations support",
      "href": "/services",
      "body": "Use the method to define evidence and ownership."
    }
  },
  {
    "slug": "humanresourcesoutsourced-measuring-cycle-time-for-employee-file-from-request-to-verified-close",
    "title": "Measuring cycle time for employee file from request to verified close",
    "excerpt": "A grounded HR outsourcing note for HR and people operations leaders: employee file with explicit evidence, decision rights, and a verified close.",
    "published": "2026-10-27",
    "modified": "2026-10-27",
    "thumbnail": "/oct27-heroes/humanresourcesoutsourced-measuring-cycle-time-for-employee-file-from-request-to-verified-close.png",
    "sections": [
      {
        "heading": "Question and scope",
        "body": "A useful scope is narrow enough to reproduce and specific enough to show whether missing I-9 is being detected. State how duplicate requests are identified and whether they are merged, linked, or counted separately. Record how corrections, reopens, and duplicate requests are treated so file completeness cannot be inflated by reclassification. Record the exclusions in advance so a difficult case cannot be removed after the result is known. If the case moved between owners, include both owner periods in the review note and name the handoff time.\n\nThe scope is one defined population of employee file cases observed from first request through verified close in the applicant tracking system. The unit definition should be stable enough that two reviewers can classify the same case the same way. The definitions should be short enough to use at the queue and precise enough to defend in a review with employee. Write the decision the study is meant to inform before choosing the measure. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      },
      {
        "heading": "Population and unit",
        "body": "When several I-9 record updates belong to one request, state whether the request or each update is the unit and apply that rule consistently. A denominator that changes during the window should be reported separately for each period. The definition should make it possible to classify a case without asking the person who did the work. If a request was reopened after the window, keep it in the original population and report the later event separately. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract.\n\nRecord the opening count by owner and channel, because a single total can hide a queue concentrated in one person. A denominator that changes during the window should be reported separately for each period. If the definition of leave response time changes, keep the old and new values side by side for the transition period. Separate cases opened before the window from cases opened and closed inside it, and report both counts. At Human Resources Outsourced, the employee file review should end with a dated note and a named owner for the next check."
      },
      {
        "heading": "Definitions and measures",
        "body": "Measure elapsed time from the first recorded request to the verified destination update, and report waiting intervals separately. Test the data dictionary on a small set of cases and revise ambiguous fields before the main sample. Record the person who approved the definition and the date it became effective. Keep a change log for every definition adjustment and the date it took effect. If the evidence is sensitive, record the approved reference and access path rather than copying the content.\n\nIf the definition of completion changes, keep the old and new rules side by side for the transition period. Use a stable case key and a separate identity crosswalk stored in an approved system. A completeness measure should name the required fields and the evidence state; an overall percentage is not reproducible. State how duplicate, cancelled, and reopened cases enter the numerator and denominator. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      },
      {
        "heading": "Data dictionary and evidence",
        "body": "The data dictionary should name the allowed values for status, exception reason, owner, and close evidence. Record the extraction time separately from the event time so a late entry is visible. Store sensitive evidence in the approved repository and keep only the reference in the analysis file. Keep the original request, the approval, and the destination value linked to the same key. Record this decision in the study log with the case key, the review date, and the person who approved the classification.\n\nRecord the version or date of the performance review and the policy library value so a later reviewer can see what was known at the first action. Name the required fields for each article type and mark conditional fields in the dictionary. Record the source identifier, the field name, the observation time, and the reviewer for every extracted value. Do not use a zero or an empty string to represent missing evidence. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue.\n\nThe data dictionary should name the allowed values for status, exception reason, owner, and close evidence. Give every case a study key that is not the client name, member number, or candidate email. Keep the source reference and the coded value in the same row, and do not overwrite the original with a later correction. Record the source location, not just the file name, so a reviewer can reopen the exact evidence. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it."
      },
      {
        "heading": "Sampling and collection",
        "body": "Use a random or systematic start rule for the first case, then take consecutive cases within each stratum. Collect the exception reason and the action taken before the close so the analysis can separate detection from resolution. Use a random or systematic start rule and then take consecutive cases within each stratum. Record the date of the sample and the version of the queue export. At Human Resources Outsourced, the reviewer should be able to explain this step to client HR lead from the case record alone.\n\nStop expanding the sample only when the review question is answered, not when the result starts to look favorable. A second reviewer should re-extract a small subsample and record disagreements before the full analysis. A sample of recent closures can miss the oldest unresolved work, which is often the most informative. Keep a table of planned, eligible, selected, and reviewed counts for each stratum. Use the same note in the case file and the study extract; do not create a second version in a personal document.\n\nA convenience sample of recently closed cases will overrepresent easy work and underrepresent the tail that needs attention. Use the same collection form for every case and keep the original record linked to the extracted fields. Stratify by risk, channel, and owner so the sample is not dominated by the easiest queue. A case that is difficult to access is still part of the frame; report the access failure rather than replacing it silently. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      },
      {
        "heading": "Analysis and reporting",
        "body": "If the sample is small, report the instability and the cases that drive the result instead of a precise-looking percentage. The analysis should end with the decision the evidence can support and the decision it cannot support. Show the unresolved cases by owner, age, and dependency instead of reporting a single completion percentage. End with the decision the evidence supports and the decision it does not support. Keep the measurement note short enough to read with the case and specific enough to support the reported offboarding closure.\n\nSeparate observation from interpretation; a high completion rate on a small easy sample is not evidence of a strong control. Report denominators with every rate and separate missing evidence from negative evidence. Use a simple before-and-after comparison only when the definitions and observation window are the same. When a measure is based on a small sample, state the case count and avoid ranking owners by the result. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      },
      {
        "heading": "Limitations",
        "body": "Small samples are sensitive to one case; report the instability instead of presenting a percentage as a stable rate. The cited sources describe recordkeeping, privacy, security, or control practice; they do not supply a local benchmark. Name the follow-up evidence that would reduce the largest uncertainty. If the reviewer performed the work, use a second reviewer for a subsample and report the disagreement. Link the observation to the exact field in the HRIS and to the employee file that supports it.\n\nThe cited public sources frame recordkeeping, privacy, security, or control practice; they do not provide a local result. Changes in staffing, access, or the applicant tracking system during the window can create a difference that is not a process effect. Record the response or access problems that prevented a case from being reviewed. Report the limits of the applicant tracking system data, including fields that were unavailable or changed. Do not let a summary written later replace the evidence that was available at the first decision."
      },
      {
        "heading": "Review and next action",
        "body": "Name the owner who will read the result and set a review date before the sample is collected. Choose one change and one measure to test it; a long action list is hard to evaluate. Set the next sample date before closing the review, so the action does not drift. Schedule the next review before the action begins, not after the result arrives. If the case moved between owners, include both owner periods in the review note and name the handoff time.\n\nChoose one next action: fix the source, simplify the benefits enrollment, change the queue, adjust access, or pause the work until the owner decides. Choose one change and one measure to test it; a long action list is hard to evaluate. If the action requires a policy or access change, route it to the owner and record the decision. Link the action to the case evidence that prompted it, not only to the meeting notes. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      }
    ],
    "sources": [
      {
        "name": "U.S. Department of Labor \u2014 recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "name": "U.S. Citizenship and Immigration Services \u2014 Form I-9",
        "url": "https://www.uscis.gov/i-9"
      },
      {
        "name": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "url": "https://www.hhs.gov/hipaa/index.html"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "serviceLink": {
      "title": "HR operations support",
      "href": "/services",
      "body": "Use the method to define evidence and ownership."
    }
  },
  {
    "slug": "humanresourcesoutsourced-testing-evidence-completeness-in-i-9-record-without-a-convenience-sample",
    "title": "Testing evidence completeness in I-9 record without a convenience sample",
    "excerpt": "A grounded HR outsourcing note for HR and people operations leaders: I-9 record with explicit evidence, decision rights, and a verified close.",
    "published": "2026-10-27",
    "modified": "2026-10-27",
    "thumbnail": "/oct27-heroes/humanresourcesoutsourced-testing-evidence-completeness-in-i-9-record-without-a-convenience-sample.png",
    "sections": [
      {
        "heading": "Question and scope",
        "body": "Write the primary question and one supporting question, then stop; a long list of questions usually hides an undefined unit. If the population is too small to sample, say so and report the complete set rather than implying a larger study. Define the start event, the stop event, the pause rule, and the treatment of a missing benefits enrollment before collecting data. Record the exclusions in advance so a difficult case cannot be removed after the result is known. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract.\n\nThis protocol asks how I-9 record can be described from the operational record in HR outsourcing without turning a completion count into a quality claim. Exclude a reopened case only when the reopening did not create a new requirement; keep the exclusion count and reason. Record how corrections, reopens, and duplicate requests are treated so benefits change cycle cannot be inflated by reclassification. State whether the study covers one team, one client, or all cases in the defined service. At Human Resources Outsourced, the I-9 record review should end with a dated note and a named owner for the next check."
      },
      {
        "heading": "Population and unit",
        "body": "Record how duplicate requests were matched, merged, or kept separate, because that choice changes the denominator. Record the queue at the start and end of each observation day so additions and withdrawals are visible. The stop event should be the verified destination update, not the last message in the thread. Separate cases opened before the window from cases opened and closed inside it, and report both counts. If the evidence is sensitive, record the approved reference and access path rather than copying the content.\n\nThe unit is one I-9 record case, from the opening request to the verified close, and linked events stay with that case. Define whether a request that generates several performance review updates is one case or several before counting begins. If the definition of offboarding closure changes, keep the old and new values side by side for the transition period. If the queue was archived during the window, report the loss and exclude the affected period rather than assuming the cases were resolved. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      },
      {
        "heading": "Definitions and measures",
        "body": "Define how a correction after close is linked to the original case and whether it creates a new case. Do not store sensitive content in the analysis file when a reference to the approved repository is enough. A duplicate request is a separate intake event even when it points to the same underlying need; record the link. Give one concrete example and one boundary case to each reviewer before collection begins. Record this decision in the study log with the case key, the review date, and the person who approved the classification.\n\nName the owner who can declare a case complete, and record that role in the data dictionary. Test the data dictionary on a small set of cases and revise ambiguous fields before the main sample. A completeness measure should name the required fields and the evidence state; an overall percentage is not reproducible. If two reviewers disagree, preserve both classifications until the definition is clarified. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue."
      },
      {
        "heading": "Data dictionary and evidence",
        "body": "Use a pseudonymous case key and keep the identity crosswalk in an approved system with restricted access. Use a controlled list for exception reasons; do not let free text become the analysis category. Record the source identifier, the field name, the observation time, and the reviewer for every extracted value. Do not use a zero or an empty string to represent missing evidence. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it.\n\nKeep free-text notes separate from coded fields so the analysis does not depend on inconsistent wording. Test the dictionary on a case with a missing employee file and a case with a corrected value. Run a five-case pilot before the full sample and revise any field that two reviewers interpret differently. A case key should remain stable if the case moves between owners or changes status. At Human Resources Outsourced, the reviewer should be able to explain this step to client HR lead from the case record alone.\n\nKeep free-text notes separate from coded fields so the analysis does not depend on inconsistent wording. Use a controlled list for exception reasons; do not let free text become the analysis category. Record the source identifier, the field name, the observation time, and the reviewer for every extracted value. Archive the dictionary with the study so a later reviewer can reproduce the categories. Use the same note in the case file and the study extract; do not create a second version in a personal document."
      },
      {
        "heading": "Sampling and collection",
        "body": "Sample across the full observation window, including the days when the queue was busiest and the days when coverage changed. Use the same collection form for every case and keep the original record linked to the extracted fields. A sample of recent closures can miss the oldest unresolved work, which is often the most informative. Use a random start and a fixed interval when the frame is ordered, and record both. When a case needs an exception, record the reason, the owner, and the date before continuing the review.\n\nA convenience sample of recently closed cases will overrepresent easy work and underrepresent the tail that needs attention. Collect the case from the HRIS, the I-9 record, and the approval record, and stop at the verified close. If a stratum has fewer cases than planned, report the smaller count instead of replacing it with a convenience case. If a selected case is out of scope, replace it only with the next case in the same stratum and record the substitution. Keep the measurement note short enough to read with the case and specific enough to support the reported offboarding closure.\n\nUse consecutive I-9 record cases where possible, then stratify by owner, channel, and risk class. A second reviewer should re-extract a small subsample and record disagreements before the full analysis. Stratify by risk, channel, and owner so the sample is not dominated by the easiest queue. Keep a table of planned, eligible, selected, and reviewed counts for each stratum. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      },
      {
        "heading": "Analysis and reporting",
        "body": "Keep case-level detail available for review, because a summary chart without records cannot support a decision. For I-9 record, report the age distribution and the share of cases waiting on a named owner. Report the number of cases that changed status after the first extraction and how the change was handled. Report the number of cases that drive a small-sample result and the direction of the effect. Link the observation to the exact field in the HRIS and to the I-9 record that supports it.\n\nSeparate observation from interpretation; a high completion rate on a small easy sample is not evidence of a strong control. For I-9 record, report the age distribution and the share of cases waiting on a named owner. Show the unresolved cases by owner, age, and dependency instead of reporting a single completion percentage. End with the decision the evidence supports and the decision it does not support. Do not let a summary written later replace the evidence that was available at the first decision."
      },
      {
        "heading": "Limitations",
        "body": "The record may be incomplete, delayed, or maintained outside the team, so the method cannot infer missing work from a clean summary. Selection bias remains when the team chooses cases that are easy to open or owners who are likely to cooperate. Do not treat a missing record as proof that the work did not happen; it is evidence about the record. State what a follow-up study would measure and which population it would include. If the case moved between owners, include both owner periods in the review note and name the handoff time.\n\nSmall samples are sensitive to one case; report the instability instead of presenting a percentage as a stable rate. Changes in staffing, access, or the benefits portal during the window can create a difference that is not a process effect. Report the limits of the benefits portal data, including fields that were unavailable or changed during the window. State what a follow-up study would measure and which population it would include. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory."
      },
      {
        "heading": "Review and next action",
        "body": "Report what moved, what did not, and which result is still unexplained. If the result is inconclusive, say so and choose a narrower question rather than claiming a trend. Report the action result even if the change did not work; a failed test is still evidence. If the action needs approval, record the approver and the date before the change is applied. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract.\n\nIf the action affects incorrect employee record, route it to client HR lead and record the approval before implementation. A quality review should end with a testable next step, not a general instruction to improve. Close the review only when the owner has accepted the result and the next check is scheduled. Link the action to the case evidence that prompted it, not only to the meeting notes. At Human Resources Outsourced, the I-9 record review should end with a dated note and a named owner for the next check."
      }
    ],
    "sources": [
      {
        "name": "U.S. Citizenship and Immigration Services \u2014 Form I-9",
        "url": "https://www.uscis.gov/i-9"
      },
      {
        "name": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "url": "https://www.hhs.gov/hipaa/index.html"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Department of Labor \u2014 recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      }
    ],
    "serviceLink": {
      "title": "HR operations support",
      "href": "/services",
      "body": "Use the method to define evidence and ownership."
    }
  },
  {
    "slug": "humanresourcesoutsourced-testing-whether-performance-review-monitoring-catches-silent-failures",
    "title": "Testing whether performance review monitoring catches silent failures",
    "excerpt": "A grounded HR outsourcing note for HR and people operations leaders: performance review with explicit evidence, decision rights, and a verified close.",
    "published": "2026-10-27",
    "modified": "2026-10-27",
    "thumbnail": "/oct27-heroes/humanresourcesoutsourced-testing-whether-performance-review-monitoring-catches-silent-failures.png",
    "sections": [
      {
        "heading": "Question and scope",
        "body": "A useful scope is narrow enough to reproduce and specific enough to show whether missing I-9 is being detected. The population should include cases handled by every owner and channel in scope, not only the queue with the cleanest records. Write the primary measure and one supporting measure; a measure without a denominator or observation window is not ready. State whether the study covers one team, one client, or all cases in the defined service. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it.\n\nA useful scope is narrow enough to reproduce and specific enough to show whether late benefits change is being detected. If the population is too small to sample, say so and report the complete set rather than implying a larger study. The definitions should be short enough to use at the queue and precise enough to defend in a review with employee. Name the population, the observation window, and the systems included in the extraction. At Human Resources Outsourced, the reviewer should be able to explain this step to employee from the case record alone."
      },
      {
        "heading": "Population and unit",
        "body": "The unit is one performance review case, from the opening request to the verified close, and linked events stay with that case. Exclude cases opened outside the window only when the exclusion rule was written before collection. The stop event should be the verified destination update, not the last message in the thread. If a request was reopened after the window, keep it in the original population and report the later event separately. Use the same note in the case file and the study extract; do not create a second version in a personal document.\n\nThe unit is one performance review case, from the opening request to the verified close, and linked events stay with that case. Report the number of cases that could not be classified and the reason, rather than forcing them into a category. The stop event should be the verified destination update, not the last message in the thread. If a request was reopened after the window, keep it in the original population and report the later event separately. When a case needs an exception, record the reason, the owner, and the date before continuing the review."
      },
      {
        "heading": "Definitions and measures",
        "body": "Measure elapsed time from the first recorded request to the verified destination update, and report waiting intervals separately. Keep the original text and the coded value together so a reviewer can check the classification. If a case is outside the scope rule, record the rule and the date of exclusion rather than removing it silently. Record the pause rule and the person authorized to release a paused case. Keep the measurement note short enough to read with the case and specific enough to support the reported benefits change cycle.\n\nTest each definition on a routine case, a missing-evidence case, and a case that crossed owners. A blank field, a not-applicable field, and a confirmed negative field should have different codes. If a case is outside the scope rule, record the rule and the date of exclusion rather than removing it silently. Give one concrete example and one boundary case to each reviewer before collection begins. If two reviewers disagree, preserve both classifications until the definition or the evidence is resolved."
      },
      {
        "heading": "Data dictionary and evidence",
        "body": "The data dictionary should name the allowed values for status, exception reason, owner, and close evidence. Name the required fields for each article type and mark conditional fields in the dictionary. A missing value should have a reason code, not a blank cell or a zero. Record the source location, not just the file name, so a reviewer can reopen the exact evidence. Link the observation to the exact field in the applicant tracking system and to the policy acknowledgment that supports it.\n\nEach case needs the source, the observation time, the field supported, the owner, and the reviewer. If a field is derived, record the formula and the source fields used to calculate it. A missing value should have a reason code, not a blank cell or a zero. Use a separate field for reviewer notes so the coded values stay comparable. Do not let a summary written later replace the evidence that was available at the first decision.\n\nMark missing, unavailable, and confirmed negative values separately; collapsing them hides the difference between no evidence and evidence of absence. Name the required fields for each article type and mark conditional fields in the dictionary. Run a five-case pilot before the full sample and revise any field that two reviewers interpret differently. Archive the dictionary with the study so a later reviewer can reproduce the categories. If the case moved between owners, include both owner periods in the review note and name the handoff time."
      },
      {
        "heading": "Sampling and collection",
        "body": "Sample across the full observation window, including the days when the queue was busiest and the days when coverage changed. Keep the collection window and the number of collectors in the report; both affect how the result should be interpreted. If a stratum has fewer cases than planned, report the smaller count instead of replacing it with a convenience case. Include at least one case from each owner in scope when the frame allows it. Keep the review note with the case so the next sampler does not have to reconstruct the decision from memory.\n\nIf the population is small, report every case and the reason the sample is exhaustive rather than presenting a false precision. Collect the case from the leave management system, the I-9 record, and the approval record, and stop at the verified close. A sample of recent closures can miss the oldest unresolved work, which is often the most informative. Keep a table of planned, eligible, selected, and reviewed counts for each stratum. When a value is missing, record the missing state and the reason instead of leaving an empty field in the extract.\n\nRecord the eligible count, the sample size, and every exclusion so another reviewer can reproduce the sample. A second reviewer should re-extract a small subsample and record disagreements before the full analysis. A sample of recent closures can miss the oldest unresolved work, which is often the most informative. Include at least one case from each owner in scope when the frame allows it. At Human Resources Outsourced, the performance review review should end with a dated note and a named owner for the next check."
      },
      {
        "heading": "Analysis and reporting",
        "body": "State which findings are descriptive and which require a follow-up test with a larger or different sample. The analysis should end with the decision the evidence can support and the decision it cannot support. When two groups differ, check whether the difference survives after adjusting for case mix and evidence standard. Show the age distribution and the open-case count by owner, not only the mean. If the evidence is sensitive, record the approved reference and access path rather than copying the content.\n\nA difference between two periods is a signal to inspect, not proof that a process change caused the change. For performance review, report the age distribution and the share of cases waiting on a named owner. Report the number of cases that changed status after the first extraction and how the change was handled. Report the numerator, denominator, observation window, and exclusion count for each measure. The note should distinguish what was observed, what was inferred, and what still needs an owner decision."
      },
      {
        "heading": "Limitations",
        "body": "The study cannot determine whether the professional decision was correct, only whether the record and handoff are reconstructable. The record may be incomplete or delayed, so the method cannot infer work that never entered the queue. Name the follow-up evidence that would reduce the largest uncertainty. If the reviewer performed the work, use a second reviewer for a subsample and report the disagreement. Record this decision in the study log with the case key, the review date, and the person who approved the classification.\n\nThe study cannot determine whether the professional decision was correct, only whether the record and handoff are reconstructable. A clean summary can hide missing evidence, especially when the operator who did the work is also the reviewer. State that the result describes the observed sample and not the entire industry or every team in the service. State that the result describes the observed sample, not the whole industry or every team in the service. Keep the evidence reference beside the coded value so a reviewer can test the same case without rebuilding the queue."
      },
      {
        "heading": "Review and next action",
        "body": "Name the owner who will read the result and set a review date before the sample is collected. If the action changes late benefits change, record the approval from benefits broker before implementation. Keep the old process note until the new process has been tested; do not erase the baseline. Keep the prior procedure available so the next reviewer can compare the old and new states. If the source changes after the observation, preserve the earlier value and add a dated note instead of replacing it.\n\nReport what moved, what did not, and which result is still unexplained. If the action changes unlogged leave, record the approval from payroll manager before implementation. Report the action result even if the change did not work; a failed test is still evidence. Record the owner, due date, and exact change that will be tested at the next review. At Human Resources Outsourced, the reviewer should be able to explain this step to payroll manager from the case record alone."
      }
    ],
    "sources": [
      {
        "name": "U.S. Department of Labor \u2014 recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping"
      },
      {
        "name": "U.S. Citizenship and Immigration Services \u2014 Form I-9",
        "url": "https://www.uscis.gov/i-9"
      },
      {
        "name": "U.S. Department of Health and Human Services \u2014 HIPAA",
        "url": "https://www.hhs.gov/hipaa/index.html"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "serviceLink": {
      "title": "HR operations support",
      "href": "/services",
      "body": "Use the method to define evidence and ownership."
    }
  }
];
