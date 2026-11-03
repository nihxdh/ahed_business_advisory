# Ahed – business advisory firm website

Vite + React + TypeScript, Tailwind CSS v4, Motion and lucide-react. Fonts via Fontsource.

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript only
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

## Folder structure

```
├── docs/                      Project documents (not bundled) – see docs/README.md
│   ├── client-brief/          The client's content documents (the only allowed source of site copy)
│   ├── brand/                 Brand guidelines image and original logo file
│   └── reference/             Original HTML template
├── public/                    Static files served as-is (favicon, app icon)
├── src/
│   ├── main.tsx               Entry point
│   ├── app/App.tsx            App shell and routes
│   ├── pages/                 One component per route (Home, About, Services, ServiceDetail, OurApproach,
│   │                          Industries, Insights, LetsTalk, Privacy, NotFound)
│   ├── components/
│   │   ├── layout/            Header, Footer, Logo, ScrollProgress
│   │   ├── sections/          Page sections (Hero, PageHero, ServiceGrid, Steps, CtaBand, …)
│   │   └── enquiry/           Let's Talk page: enquiry form and sidebar
│   ├── content/index.ts       All site copy, each block tagged with its source document
│   ├── lib/                   router.tsx (tiny history router), motion.tsx (Reveal, SectionHead, easing)
│   ├── styles/global.css      Brand tokens, type scale and site styles
│   └── assets/                brand/ (logos), services/ (service photos), backgrounds/ (hero image)
├── index.html                 HTML shell, meta tags
├── vite.config.ts             Vite + React + Tailwind; "@/" alias to src/
└── tsconfig.json
```

Imports use the `@/` alias for `src/` (for example `import { services } from "@/content"`).

## Deploying
Pages use real paths (`/about`, `/services/strategy-and-growth`), so the host must serve `index.html` for unknown
routes (Netlify `_redirects`, Vercel rewrites, or the equivalent).

## Customise
- Copy: edit `src/content/index.ts`. Use only content from `docs/client-brief/`.
- Colours, fonts and sizes: edit the tokens at the top of `src/styles/global.css`.
- Enquiry form: replace the `setTimeout` in `src/components/enquiry/Contact.tsx` with a call to your backend or form service.
- Contact details, the advisor's name and photo, and the articles are placeholders. Replace them before launch.
