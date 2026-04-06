# WordPress Migration Document — Altered States Experience

> **Source:** Static HTML (`apps/gemini-v1/` recommended) + `apps/gemini-v2/` alternate  
> **Target:** WordPress (self-hosted or managed)  
> **Generated:** 2026-04-05  
> **Primary migration target:** Single long-form **front page** with optional future split into dedicated pages

---

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [URL / structure mapping](#2-url--structure-mapping)
3. [Content inventory (recommended variant: Gemini v1)](#3-content-inventory-recommended-variant-gemini-v1)
4. [Calendly integration (WordPress)](#4-calendly-integration-wordpress)
5. [Humanitix / events](#5-humanitix--events)
6. [Forms & lead capture](#6-forms--lead-capture)
7. [Assets to migrate](#7-assets-to-migrate)
8. [Design system (v1)](#8-design-system-v1)
9. [Recommended WordPress setup](#9-recommended-wordpress-setup)
10. [SEO elements to preserve](#10-seo-elements-to-preserve)
11. [Risk areas & checklist](#11-risk-areas--checklist)

---

## 1. Executive summary

| Item | Value |
|------|--------|
| Page model | **One HTML file** per variant = one scrolling landing page |
| Sections | Hero, About, quote, offerings, retreat deep-dive, testimonials, events placeholder, team, footer |
| External integrations | **Calendly** (popup widget JS + CSS), **Humanitix** (placeholder + external link) |
| Forms | Footer newsletter (non-functional in static HTML); timed **lead modal** (demo only) |
| CSS | **Tailwind CDN** + small inline `<style>` blocks — reimplement in theme or builder, not by loading Tailwind CDN in production WP long-term |
| Fonts (v1) | Google Fonts: Bebas Neue, Inter, Montserrat, Playfair Display |

**Chosen variant for inventory:** **`apps/gemini-v1/index.html`** — aligns with `references/BRAND_GUIDE.md` (coral + editorial serif). Mirror the same content blocks from v2 only where you deliberately adopt its layout differences.

---

## 2. URL / structure mapping

| Static (current) | Suggested WP |
|------------------|--------------|
| `/` → open `apps/gemini-v1/index.html` via static host | **Settings → Reading:** static front page assigned to “Home” |
| In-page `#who-we-are`, `#offerings`, etc. | Same anchors on front page **or** child pages with 301s if you split content later |
| `https://events.humanitix.com/host/alteredstatesexperience` | Keep as button/link or embed collection widget |

No multi-page routes exist in the repo today.

---

## 3. Content inventory (recommended variant: Gemini v1)

### Global

- **`<title>`:** Altered States Experience \| Breathwork & Transformation  
- **Meta description:** Psychedelic-inspired breathwork positioning; safe, legal, drug-free.  
- **Nav label:** “ALTERED STATES” (text logo). Links: About, Offerings, Events, Retreat, Team, plus primary CTA “Apply for Retreat” (Calendly).

### Hero

- **Headline:** “TRANSFORMATION &” + coral line “THE MYSTICAL EXPERIENCE”  
- **Subhead:** Tagline about psychedelic-inspired breathwork.  
- **CTAs:** Apply for the Retreat (Calendly); Find an Event Near You → `#events`  
- **Media:** Full-screen looped **MP4** (`hero-video.mp4` alongside HTML — not committed in many checkouts).

### Who we are (`#who-we-are`)

- Eyebrow: “Who We Are”  
- **H2:** Safe, supportive space; “inner exploration” in coral italic.  
- Two body paragraphs (reverence for altered states; neuroscience-backed ceremonies, legal/safe framing).  
- Link: Explore our offerings → `#offerings`  
- Image: session photo (see assets list).

### Quote band

- Quote attributed to **Vi** (retreat / mystical connection).

### Offerings (`#offerings`)

- **City workshops & events:** Copy on cities (Sydney, Newcastle, Central Coast, Gold Coast, Melbourne), breathwork + music + optional Lion’s Mane; badge “Low-Ticket”; link to `#events`.  
- **Immersion retreat:** “Rites of Passage & Transformation”; 4-day, Oasis at One Mile Beach; 20 participants; Calendly CTA.

### Retreat (`#retreat`)

- Flagship framing; **H2:** “RITES OF PASSAGE” + outlined “& TRANSFORMATION”  
- Subhead: psycho-spiritual rebirth, 5-acre sanctuary.  
- Bullets: 4d/3n inclusive; breathwork, firewalk, ice bath; drumming & Music of the Plants; 6-week support.  
- Urgency box: limited to 20; discovery call.  
- Calendly CTA.  
- Background + three gallery images (assets list).

### Testimonials

- Intro: “Real Stories”; “A Community of 500+ Explorers”; stats line (5 stars, 284 reviews, 100% recommend).  
- Four carousel cards: **Travis**, **Sarah**, **Facebook Review**, **Kathy** (copy in HTML).

### Events (`#events`)

- Intro + Humanitix placeholder copy.  
- External button: View on Humanitix (URL above).

### Team (`#team`)

- **Gene Kelly** — Founder & Lead Facilitator (bio in HTML).  
- **Joshua Tree** — Lead Musician.  
- **Clara Marri** — Holistic Practitioner.

### Footer

- Newsletter pitch + email field (wire to ESP).  
- Explore links (anchor).  
- Connect: Instagram (`instagram.com/alteredstatesexperience`), Facebook placeholder `#`, email `gene@gkfitness.com.au`.  
- Legal line: © 2026; “Safe, legal, drug-free experience.”  
- Large watermark: “ALTERED STATES”.

### Lead popup (demo)

- Title: Free Breathwork Release Guide; first name + email. **Do not** copy 5-second auto-show behavior to production without consent/CMP review.

---

## 4. Calendly integration (WordPress)

### Current static approach

- Stylesheet: `https://assets.calendly.com/assets/external/widget.css`  
- Script: `https://assets.calendly.com/assets/external/widget.js` (async)  
- Triggers: `onclick="Calendly.initPopupWidget({url: 'https://calendly.com/placeholder'});return false;"` on nav, hero, offerings, retreat.

### Recommended WP approaches

1. **Official Calendly plugin**  
   - Embed inline widget or popup; configure event URL in plugin settings.  
   - Replace every `placeholder` URL with the real scheduling link (one event type or master scheduling page).

2. **Custom HTML block**  
   - Enqueue Calendly’s widget CSS/JS via `wp_enqueue_script` / `wp_enqueue_style` in the theme (preferred over pasting in every page).  
   - Use Calendly’s documented popup API on buttons with `data-calendly-url` or their recommended embed snippet.

3. **Page builder**  
   - Many builders have a Calendly element; same requirement: production URL + test mobile.

### Notes

- **GDPR / privacy:** Load third-party scripts only after consent if required in your jurisdiction.  
- **Accessibility:** Ensure keyboard users can open/close the popup; Calendly’s widget is third-party—test focus trap.  
- **Replace:** All instances of `https://calendly.com/placeholder` before go-live.

---

## 5. Humanitix / events

- Static site uses a **placeholder** titled “[Humanitix Collection Widget]” plus link to the public host page.  
- In WP: use Humanitix embed instructions (iframe or official integration if available) inside the Events section or a dedicated Events page.  
- Keep the external link as fallback.

---

## 6. Forms & lead capture

| Location | Fields | Action in WP |
|----------|--------|--------------|
| Footer | Email (+ subscribe button) | Connect to Mailchimp, Kit, FluentCRM, etc. |
| Footer (v1 second column) | Same pattern | Duplicate not in v1—single form in v1 footer |
| Lead modal | First name, email | Optional opt-in modal; integrate with ESP + consent copy |

Static HTML forms do not POST anywhere; implement server-side handler or ESP endpoint.

---

## 7. Assets to migrate

### Video (per variant folder)

| File | Role |
|------|------|
| `apps/gemini-v1/hero-video.mp4` | Hero background (loop, muted). Copy same file to v2 folder if both are kept. |

### Images (paths in HTML: `references/client_assets/`)

| Filename | Used in v1 (role) |
|----------|-------------------|
| `609498552_17992334450911758_7260561423754856278_n.jpg` | Who we are |
| `612405873_17993039429911758_2395989327158954337_n.jpg` | Workshops offering |
| `609859673_17992144829911758_3627750128898244285_n.jpg` | Retreat offering |
| `610195304_17992334459911758_6541602778669642153_n.jpg` | Retreat section background |
| `620417633_17994215384911758_1499016141491528773_n.jpg` | Retreat gallery |
| `611185010_17992576616911758_6359808428520505471_n.jpg` | Retreat gallery |
| `620500103_17994215375911758_7984306465112398357_n.jpg` | Retreat gallery (wide) |
| `587559784_17990523992911758_7449764443645668391_n.jpg` | Gene |
| `590422979_17990325833911758_5591702416302999544_n.jpg` | Joshua |
| `600820150_17990422193911758_1000555469359433895_n.jpg` | Clara |

**Repo note:** These JPGs are **referenced but may not be present** in a fresh clone (only documentation files may exist under `references/client_assets/`). Gather from the client drive or original asset export before migration.

### Documents (reference only)

- `references/BRAND_GUIDE.md`  
- `references/client_assets/Altered States Experience - Brand Kit.md`  
- `src/brand/brief/altered-states-client-brief.md`

---

## 8. Design system (v1)

Reproduce in theme tokens or builder global styles:

| Token | Value / usage |
|-------|----------------|
| `brand.coral` | `#F26B5B` — primary CTA, accents |
| `brand.purple` | `#6B21A8` — secondary, footer atmosphere |
| `brand.dark` | `#171717` — body text |
| `brand.light` | `#FAFAFA` — soft sections |
| `brand.amber` | `#F59E0B` — stars / highlights |
| Display font | Bebas Neue |
| Serif | Playfair Display (quotes, section titles) |
| Sans | Inter (body), Montserrat (limited) |

Custom CSS in static file includes `.text-outline`, `.hero-overlay`, `.quote-mark`, `.no-scrollbar` — port equivalents into theme CSS.

---

## 9. Recommended WordPress setup

| Layer | Suggestion |
|-------|------------|
| Hosting | Managed WP or solid PHP 8.x + HTTPS |
| Theme | **Block theme** (Twenty Twenty-Five child) or lightweight builder (**GeneratePress + Blocks**, **Kadence**) — avoid bloated multipurpose if possible |
| Performance | Optimize hero video (compressed MP4, poster image, lazy load below fold); use **WP Rocket** or server caching; image WebP delivery |
| Forms | **Fluent Forms**, **Gravity Forms**, or ESP-native forms |
| Calendly | Official **Calendly** plugin or enqueue widget assets in theme |
| SEO | **Rank Math** or **Yoast**; set title/description to match or improve on static meta |
| Analytics | GA4 / Plausible; tag CTAs and Calendly opens if needed |
| Backups / staging | Standard agency workflow before replacing placeholder URLs |

---

## 10. SEO elements to preserve

- Title and meta description from v1 `<head>`.  
- Single H1 in hero; maintain logical heading order when rebuilding in blocks.  
- Alt text already present on images in HTML — keep or improve (avoid keyword stuffing).  
- External links: `rel="noopener"` where `target="_blank"` (WP often adds automatically).

---

## 11. Risk areas & checklist

- [ ] Replace **all** `calendly.com/placeholder` URLs.  
- [ ] Confirm **Facebook** link (currently `#` in HTML).  
- [ ] Confirm **contact email** still correct for production.  
- [ ] Add **hero video** fallback (poster + reduced motion).  
- [ ] Humanitix: swap placeholder for real embed.  
- [ ] Newsletter + modal: legal consent, double opt-in if required.  
- [ ] Do not rely on **Tailwind CDN** in production; compile Tailwind or map utilities to theme CSS.  
- [ ] Upload all JPGs to **Media Library**; update URLs; regenerate thumbnails as needed.

---

## Gemini v2 delta (if migrating v2 instead)

Same integrations (Calendly, Humanitix). Typography and colors differ (Montserrat/Caveat, red CTAs, sand/lavender backgrounds). Testimonial content is shortened to three cards; retreat section loses full-bleed background image; v2 adds a **stats bar** under the hero. Re-run asset list from `apps/gemini-v2/index.html` if v2 becomes the source of truth.
