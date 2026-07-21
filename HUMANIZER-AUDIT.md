# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the site's public marketing and editorial copy while preserving route slugs, HR decision boundaries, service schema, form fields, and conversion paths.

## Reviewed files

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/layout.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`
- `app/globals.css`

## What changed

- Repaired a broken generated guide title and gave all four guides clear, HR-specific titles and summaries.
- Replaced the repeated generic article body with useful copy for planning, task selection, provider checks, and first-week setup.
- Removed dormant, unsupported savings and pilot-length figures from the shared data file.
- Removed broad staffing copy for unrelated work such as bookkeeping, development, and marketing.
- Rewrote contact, footer, CTA, metadata, and service copy around real HR queues, access limits, approval lines, and manager decisions.
- Replaced robotic fragments and generic staffing phrases with direct sentences.
- Added a proper container and spacing to the shared guide/service CTA after visual QA found it pressed against the viewport edge.

## Final anti-AI pass

The remaining short labels and numbered steps belong to the interface and describe specific HR work. The public copy no longer relies on inflated claims, vague authority, forced contrasts, decorative statistics, chatbot language, or generic upbeat conclusions.

## Exclusions and preserved facts

Privacy, terms, cancellation, and cancellation-policy pages were excluded. No legal policy wording was changed. No testimonials, client claims, credentials, first-person stories, citations, prices, savings claims, or performance statistics were added. Existing boundaries around pay, policy, discipline, investigations, employee relations, offers, and terminations were preserved.
