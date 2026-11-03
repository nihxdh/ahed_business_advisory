# Project documents

Reference material for the Ahed website. Nothing in this folder is bundled into the site.

| Folder | Contents |
| --- | --- |
| `client-brief/` | The client's two content documents. The website may only use content from these. Where they differ, the blueprint is the master. |
| `brand/` | Brand sources: the brand guidelines image (colours, typography, logo usage) and the original logo file. |
| `reference/` | The original single-file HTML template the site was first built from. |

## client-brief

- `strategic-business-advisor-website-blueprint.docx`: positioning, sitemap, homepage order, approach, audiences,
  advisor profile, enquiry form fields, service question bank, privacy and delivery phases. **Master document.**
- `ahed-web-page-contents.docx`: page copy, the six services and their offerings, About, Industries, How We Work,
  Insights article list and contact page. Its embedded photos are the service images in `src/assets/services/`.

Site copy taken from these lives in `src/content/index.ts`; each block is tagged `[B]` (blueprint) or `[C]` (contents).

## brand

- `brand-guidelines.jpeg`: palette (green #39B54A, dark green #009444, blue #3E83C4, gold #F9B000), Montserrat
  typography, logo variations and incorrect usage.
- `ahed-logo-source.png`: the original logo. Its "transparent" checkerboard is painted into the image, so it was cut
  out into `src/assets/brand/logo.webp` (full colour) and `logo-white.webp` (reverse for dark backgrounds).
