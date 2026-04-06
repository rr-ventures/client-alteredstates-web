# client-alteredstates-web

Static HTML prototypes for **Altered States Experience** (breathwork / retreats). Each variant is a single long-form landing page: Tailwind CSS via CDN, optional hero background video, **Calendly** popup widgets (placeholder URL until production), and a **Humanitix** events placeholder with a link to the live host page.

## Recommended variant

**Use `apps/gemini-v1/` as the primary reference for WordPress migration and client-facing review.**

- **Brand alignment:** Coral primary accent (`#F26B5B`), purple secondary, and **Playfair Display** for editorial headings match the direction in `references/BRAND_GUIDE.md` (light, airy, premium wellness—not “gym flyer”).
- **Structure:** Full single-page flow with a distinctive retreat section (full-bleed imagery + checklist), horizontal testimonial scroller, and a richer footer treatment.
- **`apps/gemini-v2/`** is a valid alternate layout (Montserrat + Caveat script, sand/lavender panels, red CTAs). Keep it for A/B or design discussion, but it diverges more from the documented brand palette (red vs coral; less serif editorial voice).

## Repository layout

| Path | Purpose |
|------|---------|
| `apps/gemini-v1/index.html` | Primary design variant (single page, sections as anchors). |
| `apps/gemini-v2/index.html` | Alternate layout; same general content with different typography and UI chrome. |
| `references/BRAND_GUIDE.md` | Unified brand and design rules for copy and visuals. |
| `references/client_assets/` | Intended home for client-supplied images referenced by the HTML filenames (see below). |
| `src/brand/brief/altered-states-client-brief.md` | Client / project brief. |
| `src/brand/mappings/` | Section mapping notes (`variant-review.md`, `template-mappings.md`, `media-usage.md`). |
| `WP_MIGRATION.md` | WordPress migration notes (content inventory, Calendly, assets, plugin suggestions). |

## Local preview

The HTML loads images with paths such as `../../references/client_assets/<filename>.jpg` and hero video as `hero-video.mp4` next to each `index.html`. **Serve the repository root** so those relative paths resolve.

```bash
npm install
npm run dev:v1
```

Open **http://localhost:3001/apps/gemini-v1/** (trailing slash matters for `serve`).

```bash
npm run dev:v2
```

Open **http://localhost:3002/apps/gemini-v2/**

`npm run dev` is an alias for `dev:v1`.

### Assets not in Git

If images or `hero-video.mp4` are missing locally, sections will show broken media until you add:

- **Images:** Filenames listed in `WP_MIGRATION.md` (section *Assets to migrate*) and `src/brand/mappings/media-usage.md`, placed under `references/client_assets/`.
- **Video:** `apps/gemini-v1/hero-video.mp4` and `apps/gemini-v2/hero-video.mp4` (same file can be copied to both folders).

## Scripts (npm)

| Script | Description |
|--------|-------------|
| `npm run dev` / `npm run dev:v1` | Static server on port **3001** (repo root). |
| `npm run dev:v2` | Static server on port **3002** (repo root). |

There are no Vite/React apps in this repository; older README references to Lovable/Bolt and `install:all` referred to a previous layout and have been removed.
