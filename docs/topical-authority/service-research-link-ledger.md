# Service-to-research link ledger

This ledger maps existing Philippines-based HR research to the service page that answers the reader's next practical question. It is a planning record, not a public claim or a publishing queue. Each proposed handoff needs a separate source, build, and public verification pass before release.

| Source research route | Reader's next question | Existing service destination | Current source link | Proposed contextual handoff |
| --- | --- | --- | --- | --- |
| `/research/hr-help-desk-service-level-evidence` | Who can run the routine HR help desk while the company keeps privacy and escalation decisions? | `/services/hr-help-desk-support` | Delivered: exactly one route-local link | Do not add another handoff. The existing card keeps sensitive cases, exceptions, and final decisions with the HR owner. |
| `/research/onboarding-coordination-handoff-risk` | What work can a Philippines-based coordinator take on during a controlled onboarding handoff? | `/services/onboarding-coordination` | Delivered locally: exactly one route-local link | Rendered source `478bc70a4fdd11c6b202a2f6931a03bb93e429db` adds the owner-reviewed service card. Local artifact proof passed; public rollout remains pending under the repository routine. Do not duplicate this handoff. |
| `/research/employee-records-access-review-benchmark` | How should a buyer scope records work without expanding access? | `/services/employee-records-administration` | Delivered locally: exactly one route-local link | Rendered source `bf6dff226cc7506fc649825c3585ac08774d4955` adds the bounded service card. Local artifact proof passed; public rollout remains pending because the repository routine prohibits deployment and live-site verification. Do not duplicate this handoff. |

## Execution order

1. The HR help desk and onboarding-coordination handoffs are delivered locally and must not be duplicated.
2. Preserve rendered-source commit `478bc70a4fdd11c6b202a2f6931a03bb93e429db`; the status-only record must remain separate from the rendered source.
3. The employee-records access-review handoff is delivered locally. Do not add another handoff unless a new source and distinct buyer question are verified absent in a later audit.
4. Local verification for the onboarding source covered the research and service H1/canonical values, one route-local service link, Article/OG modified date `2026-09-17`, and both sitemap records. The repository routine prohibits deployment and live-site verification, so this entry is `deployment_pending_public_verification` by policy.
5. Do not add a link when the destination service, reader intent, or approval boundary changes. Update this ledger first and select a different pair instead.
