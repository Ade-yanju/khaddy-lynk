---
name: build-safelynk-website
description: "Build the Safe-Lynk Nursing and Care Agency marketing website and job-application form in Next.js. Use this skill whenever working on the safe-lynk-website project — creating pages, components, the application form, or restyling. Content comes from content.md; never invent facts."
---

# Build: Safe-Lynk Nursing and Care Agency Website

## What this is
A healthcare recruitment agency's marketing site + an online job application
form. Audience is two-sided: (1) healthcare organisations who need staff,
(2) nurses/care professionals looking for work. The site must read as
trustworthy, professional, and UK-healthcare-appropriate — not like a
generic SaaS template.

## Source of truth
All copy lives in `content.md` in this same folder. Pull text from it
directly; don't paraphrase facts (phone numbers, addresses, process steps,
check types). If a section needs copy not covered in `content.md`, write a
short placeholder clearly marked `TODO:` rather than inventing a claim.

**Non-negotiable messaging rule:** never say Safe-Lynk "provides care to
vulnerable people." Safe-Lynk is a recruitment/staffing agency. Always frame
it as connecting organisations with qualified professionals.

## Tech stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- react-hook-form + zod for the application form
- No CMS needed — content is static/local for v1

## Sitemap → routes
- `/` — Home
- `/about` — About Us
- `/services` — What We Do / Services
- `/for-employers` — For Employers
- `/for-candidates` — For Candidates
- `/apply` — Online Application Form (the big form)
- `/contact` — Contact

## Global layout
- Sticky header: logo/wordmark, nav (Home, About Us, Services, For
  Employers, For Candidates, Contact), and two persistent CTA buttons —
  **Request Staff** (→ `/for-employers`) and **Find a Job** (→ `/apply`).
  These two buttons appear on every page, styled as the primary and
  secondary CTA respectively.
- Footer: nav links, contact snippet, copyright line — content in
  `content.md` under "Global".

## Design direction
- Palette: deep trustworthy blue or teal as primary, a warm neutral
  (off-white/cream) background, one accent color for CTAs (e.g. a warm
  coral or green) — avoid stock "healthcare blue-on-white" that reads as a
  template. Pick real hex values and stay consistent.
- Typography: a confident, humanist sans-serif for headings, a highly
  readable sans for body. Avoid default system-font look.
- Tone: calm, competent, human — photography/illustration (if used) should
  feel like real people, not stock-clipart nurses. If no images are
  available, use strong typography, generous whitespace, and simple line
  icons instead of relying on stock photos.
- Every page needs real hierarchy: hero, then scannable sections with
  headings pulled from `content.md`, not walls of text.
- Fully responsive; mobile nav collapses to a menu but keeps both CTA
  buttons reachable.

## Page-by-page build notes
- **Home**: hero (headline + subhead + two CTAs from `content.md` §Home),
  company intro, professional description, a 3-4 card "What We Do"
  preview linking to `/services`, a short "Why Safe-Lynk" teaser linking
  to `/about`.
- **About**: full About copy, "Why Safe-Lynk?" list, "Our Values" as a
  grid of 6 cards.
- **Services**: recruitment areas as a list/grid, the 6-step recruitment
  process as a numbered horizontal/vertical timeline component, "Our
  Commitment to Safe Recruitment."
- **For Employers**: headline, the "we work with you to understand" list,
  strapline, prominent Request Staff CTA (form or mailto/tel — a simple
  inline enquiry form with Organisation, Contact Name, Email, Phone,
  Staffing need (textarea) is fine for v1).
- **For Candidates**: headline + body from `content.md`, CTA to `/apply`.
- **Apply**: the full 10-section form from `content.md`. Build as a single
  scrollable form with clear section headings (not a wizard, unless you
  prefer a multi-step progress form — either is fine, but every field in
  `content.md` must be present). Required fields validated with zod.
  "Any significant employment gaps? Yes" reveals a follow-up text field.
  File upload for CV. On submit, show the success message from
  `content.md` (wire to a real endpoint only if one is specified;
  otherwise a stub API route that logs and returns success is fine for
  v1).
- **Contact**: contact details + simple contact form as described in
  `content.md`.

## Definition of done
- All 7 routes exist and build without errors (`npm run build`).
- Header/footer identical across pages; both CTA buttons work everywhere.
- Application form contains every field listed in `content.md` §Apply,
  with client-side validation and a visible success state.
- No invented facts; the "connects organisations with professionals"
  framing is used, never "provides care."
- Passes a basic responsive check (mobile + desktop).
