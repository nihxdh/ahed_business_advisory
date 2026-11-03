# Ahed website (project rules)

Business advisory firm website (firm name: Ahed). The global ~/.claude/CLAUDE.md design rules also apply; this file wins where they differ.

## Current state
- Vite + React + TypeScript + Tailwind CSS v4 + Motion + lucide-react. Multi-page site with a small built-in
  history router (`src/lib/router.tsx`). Folder layout is documented in README.md: routes in `src/app/App.tsx`,
  pages in `src/pages/`, components in `src/components/{layout,sections,enquiry}/`, copy in `src/content/index.ts`,
  styles in `src/styles/global.css`. Import with the `@/` alias for `src/`, not relative `../` paths.
- Pages (from the blueprint sitemap): Home, About, Services, six service pages (`/services/<slug>`), Our Approach,
  Industries, Insights, Let's Talk (enquiry form), Privacy & Terms.

## Content: only the two client documents
- The client asked for ONLY the content of `docs/client-brief/ahed-web-page-contents.docx` and
  `docs/client-brief/strategic-business-advisor-website-blueprint.docx`. Do not add invented copy,
  figures, examples, FAQs, testimonials, client names or claims. Where the two differ, the blueprint is the master.
- All copy lives in `src/content/index.ts`, each block tagged with its source ([C] contents doc, [B] blueprint).
- Primary CTA "Let's Discuss Your Business", secondary "Explore Our Services", form submit "Request an Initial Discussion".
- Finance work must stay distinct from statutory audit and regulated tax/legal services (Finance page, footer, Privacy).
- Advisor profile (25+ years; MSD (Merck), KPMG, Saudi Aramco) must be verified, with dates and titles, before launch.
- Enquiry form follows blueprint section 8 (required: name, business email, industry, location, service, challenge,
  privacy consent; WhatsApp and marketing consent are separate). Never promise availability, price or a proposal.

## Brand (from the client's brand guidelines image, `docs/brand/brand-guidelines.jpeg`; overrides the brief's navy/teal idea)
- Logo: `src/assets/brand/logo.webp` (full colour) and `logo-white.webp` (reverse, for dark backgrounds), cut out from
  `docs/brand/ahed-logo-source.png` (that file has a checkerboard painted in; it is not transparent). Rendered by `Logo.tsx`.
  Favicon: the "A" mark on a transparent background, no white square (`public/favicon-32.png`, `favicon-64.png`);
  the iOS home-screen icon (`apple-touch-icon.png`) keeps a white background because iOS shows transparency as black. Do not distort,
  recolour or add effects to the logo.
- Colours: brand green #39B54A, dark green #009444, blue #3E83C4, gold #F9B000. Tokens: paper #F7FAF8,
  paper-2 #EEF4F0, surface #FFFFFF, ink (charcoal) #1E2427, ink-2 #4F5A5F, line #DCE5DF, spruce (deep green panels)
  #0B4A2B, mark (gold fills/highlights) #F9B000, accent (green text, eyebrows) #007A3A, ring (focus) #3E83C4,
  ok #1F8A47, friction #B43A4A. Token names are historical (spruce = dark panel, mark = gold).
  Light mode only: the client asked for no dark mode or theme toggle, so do not add one (overrides the global rule).
- Fonts: Montserrat for headings, labels and numbers (`@fontsource-variable/montserrat`, Bold for h1/h2, SemiBold
  for h3), Poppins for body text and buttons (`@fontsource/poppins`). The client asked for this combination.
- Sizing: the client asked for a compact scale. Keep the reduced `--step-*` type scale and section spacing.

## Signature element
- The hero is text only (eyebrow, heading, subhead, two CTAs, core message). The client asked to remove the
  "Our approach" card from it; the approach steps live in the homepage "How we work" section and on Our Approach.
- The hero background is an abstract deep green, blue and gold image (`src/assets/backgrounds/hero-bg.webp`, flowing lines, no
  people) under gradient shades (`.hero-bg`). No photos of people and no grid: the client asked for image plus shades
  only. The heading keeps its highlighter bar (green-to-blue, like the logo, under white text).
- Hero display font: Geist (`@fontsource-variable/geist`, `--f-hero`), a free stand-in for Neue Montreal, which the
  client asked for but which needs a licence and font files. Large bold heading, one sentence per line.
- The first section of every inner page (`PageHero`, `.page-hero`) uses the same green treatment as the hero; the
  client asked for this instead of a white first section. The contact page already opens on deep green.
- Every page opens on a dark green section, so the header is transparent (reverse logo) until the visitor scrolls.

## Placeholders to replace before launch
- Contact details (email, phone, WhatsApp, location), advisor name and photo, articles ("Coming soon").
- Privacy & Terms page is a draft from the blueprint's principles; final wording needs approval and legal review.
- Contact form submit is simulated with setTimeout; wire it to the CRM / email workflow in the blueprint.
- Hosting must serve `index.html` for every route (SPA fallback), since pages use real paths like `/about`.
