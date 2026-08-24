# Service-to-research link ledger

This ledger maps existing Philippines-based HR research to the service page that answers the reader's next practical question. It is a planning record, not a public claim or a publishing queue. Each proposed handoff needs a separate source, build, and public verification pass before release.

| Source research route | Reader's next question | Existing service destination | Current source link | Proposed contextual handoff |
| --- | --- | --- | --- | --- |
| `/research/hr-help-desk-service-level-evidence` | Who can run the routine HR help desk while the company keeps privacy and escalation decisions? | `/services/hr-help-desk-support` | Absent | After the scorecard or implementation section, link to the service scope with a short boundary: support staff can sort routine work; the company owner keeps sensitive decisions and exceptions. |
| `/research/onboarding-coordination-handoff-risk` | What work can a Philippines-based coordinator take on during a controlled onboarding handoff? | `/services/onboarding-coordination` | Absent | After the handoff-design section, link to the service page as the practical task, access, and owner checklist. |
| `/research/employee-records-access-review-benchmark` | How should a buyer scope records work without expanding access? | `/services/employee-records-administration` | Absent | After the review checklist, link to the service page for the defined records workflow and manager review points. |

## Execution order

1. Start with the HR help desk research page because its implementation takeaway already defines the same response-quality, privacy, and escalation boundary as the service.
2. Add one two-sentence contextual handoff through the existing `serviceLink` field. Keep the research conclusion separate from the service invitation.
3. Verify the rendered research route, service H1, canonical tags, link target, and sitemap entries. Then commit, push, and wait for cache-busted apex and `www` proof before marking the handoff published.

Do not add a link when the destination service, reader intent, or approval boundary changes. Update this ledger first and select a different pair instead.
