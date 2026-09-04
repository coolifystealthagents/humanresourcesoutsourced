# Service-to-research link ledger

This ledger maps existing Philippines-based HR research to the service page that answers the reader's next practical question. It is a planning record, not a public claim or a publishing queue. Each proposed handoff needs a separate source, build, and public verification pass before release.

| Source research route | Reader's next question | Existing service destination | Current source link | Proposed contextual handoff |
| --- | --- | --- | --- | --- |
| `/research/hr-help-desk-service-level-evidence` | Who can run the routine HR help desk while the company keeps privacy and escalation decisions? | `/services/hr-help-desk-support` | Delivered: exactly one route-local link | Do not add another handoff. The existing card keeps sensitive cases, exceptions, and final decisions with the HR owner. |
| `/research/onboarding-coordination-handoff-risk` | What work can a Philippines-based coordinator take on during a controlled onboarding handoff? | `/services/onboarding-coordination` | Absent | Next candidate. After the handoff-design section, link to the service page as the practical task, access, and owner checklist. |
| `/research/employee-records-access-review-benchmark` | How should a buyer scope records work without expanding access? | `/services/employee-records-administration` | Absent | After the review checklist, link to the service page for the defined records workflow and manager review points. |

## Execution order

1. The HR help desk handoff is already delivered and must not be duplicated.
2. Start with onboarding coordination because its handoff-design section already names the task, access, and owner boundaries that match the service.
3. Add one two-sentence contextual handoff through the existing `serviceLink` field. Keep the research conclusion separate from the service invitation.
4. Verify the rendered research route, service H1, canonical tags, link target, and sitemap entries. Then commit, push, and wait for cache-busted apex and `www` proof before marking the handoff published.

Do not add a link when the destination service, reader intent, or approval boundary changes. Update this ledger first and select a different pair instead.
