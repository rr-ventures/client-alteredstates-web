# WordPress Content Pack — Altered States Experience (v1 / `gemini-v1`)

> **Source of truth for design & copy:** `apps/gemini-v1/index.html`  
> **Brand reference:** `references/BRAND_GUIDE.md` (use for extended bios, SEO keywords, CRM notes; v1 HTML overrides for **exact** on-page copy, colors, and typography)  
> **Migration context:** `WP_MIGRATION.md`  
> **Generated:** 2026-04-05

This document is a complete brief to rebuild the site on WordPress: one long-form **Home** page matching v1, plus integration and theme configuration notes.

---

## 1. Site model

| Item | Value |
|------|--------|
| Primary page | **Home** (static front page) — single scrolling landing |
| In-page anchors | `#who-we-are`, `#offerings`, `#retreat`, `#events`, `#team` |
| Additional WP pages (optional later) | Privacy, Terms, Thank-you (post-form), dedicated Events page if you split content |

---

## 2. Global SEO & `<head>` content

| Element | Exact content |
|---------|----------------|
| **Document language** | `en` |
| **`<title>`** | Altered States Experience \| Breathwork & Transformation |
| **Meta description** | The psychedelic inspired breathwork experience guaranteed to open your heart and blow your mind! Safe, legal, drug-free alternative to psychedelic experiences. |
| **Single H1** | In Hero only (see §3.2). Maintain logical heading order in blocks (H1 → H2 → H3). |

**Fonts loaded (Google Fonts — match weights in theme):**

- Bebas Neue  
- Inter: 400, 500, 600  
- Montserrat: 400, 700, 900 + italic 400  
- Playfair Display: 400, 600 + italic 400, 600  

**URL (Google Fonts CSS):**  
`https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=Montserrat:ital,wght@0,400;0,700;0,900;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap`

---

## 3. Section-by-section content (exact copy)

### 3.1 Navigation (`#navbar`)

| Element | Content / behavior |
|---------|-------------------|
| Logo / site name (text) | ALTERED STATES |
| Logo link | `#` in static HTML → in WP, link to home URL or `#` top |
| About | `#who-we-are` |
| Offerings | `#offerings` |
| Events | `#events` |
| Retreat | `#retreat` |
| Team | `#team` |
| Primary CTA (button) | **Apply for Retreat** → opens Calendly popup (see §7) |

**Nav behavior to replicate:** Fixed top, `bg-white/90`, backdrop blur, bottom border light gray; on scroll past ~50px add subtle shadow.

---

### 3.2 Hero

| Element | Content |
|---------|---------|
| **H1 (line 1)** | TRANSFORMATION & |
| **H1 (line 2)** | THE MYSTICAL EXPERIENCE (styled as accent color — coral in v1) |
| **Subhead** (serif italic) | The psychedelic inspired breathwork experience guaranteed to open your heart and blow your mind! |
| **CTA primary** (button) | Apply for the Retreat → Calendly popup |
| **CTA secondary** (link) | Find an Event Near You → `#events` |
| **Background** | Full-viewport looping **muted** video: `hero-video.mp4` (path relative to HTML: same folder as `index.html` → `apps/gemini-v1/hero-video.mp4`) |
| **Overlay** | Linear gradient top to bottom: `rgba(0,0,0,0.3)` → `rgba(0,0,0,0.7)` |

---

### 3.3 Who we are (`#who-we-are`)

| Element | Content |
|---------|---------|
| Eyebrow | WHO WE ARE |
| **H2** | A safe, supportive and fun space for *inner exploration* and evolution. (*inner exploration* = italic + coral accent in v1) |
| Paragraph 1 | We bring reverence to altered states of consciousness as a tool for profound personal healing and transformation. |
| Paragraph 2 | Experience non-ordinary states of consciousness as a powerful and accelerated method of healing and personal transformation — without substances. Our neuroscience-backed ceremonies provide a legal, safe, and expertly facilitated rite of passage. |
| Text link | Explore our offerings → `#offerings` (with arrow affordance in design) |

---

### 3.4 Quote band (Vi)

| Element | Content |
|---------|---------|
| Quote | In just three nights, I experienced profound healing, renewal, and a deeper connection to the mystical than I ever thought possible. |
| Attribution | — VI |

**Presentation:** Large decorative opening quote mark (Playfair, coral, low opacity); centered; section background `#FAFAFA` (`brand-light`).

---

### 3.5 Offerings (`#offerings`)

**Section header**

| Element | Content |
|---------|---------|
| Eyebrow | OUR OFFERINGS |
| **H2** | Journeys of Transformation |

**Card 1 — City Workshops & Events**

| Element | Content |
|---------|---------|
| Badge | LOW-TICKET |
| **H3** | City Workshops & Events |
| Body | Evening workshops, sound journeys, and full-day experiences across Sydney, Newcastle, Central Coast, Gold Coast, and Melbourne. Includes guided breathwork, live music, and optional Lion's Mane mushroom. |
| Link | Find an Event Near You → `#events` |

**Card 2 — Immersion Retreat**

| Element | Content |
|---------|---------|
| Badge | FLAGSHIP OFFER |
| **H3** | Immersion Retreat |
| Body | "Rites of Passage & Transformation" — A 4-day all-inclusive retreat at The Oasis at One Mile Beach. Embody the keys to self-mastery with expanded states of consciousness. Limited to 20 participants. |
| Button (styled as underlined link) | Apply for the Retreat → Calendly popup |

---

### 3.6 Retreat deep-dive (`#retreat`)

Dark atmospheric section with background image + purple multiply overlay + gradient (see §5 images).

| Element | Content |
|---------|---------|
| Eyebrow | THE FLAGSHIP EXPERIENCE |
| **H2 (display)** | RITES OF PASSAGE / *& TRANSFORMATION* (second line: white outline stroke on transparent fill — `.text-outline` in v1) |
| Subhead (serif italic) | Psycho-spiritual rebirth in a private 5-acre sanctuary. |
| **Bullets** | • 4 days / 3 nights all-inclusive accommodation & meals |
| | • Daily breathwork, firewalk ceremony & ice bath |
| | • Live tribal drumming & Music of the Plants sound journey |
| | • 6-week total support (pre-retreat + 28-day integration) |
| **Urgency box title** | Strictly Limited to 20 Participants (with clock icon) |
| **Urgency box body** | Our next immersion is filling fast. Book a discovery call to secure your spot. |
| **CTA button** | Apply Now — Limited Spots → Calendly popup |

---

### 3.7 Testimonials (`#` implicit — no id; after retreat)

**Intro**

| Element | Content |
|---------|---------|
| Eyebrow | REAL STORIES |
| **H2** | A Community of 500+ Explorers |
| Stats row | 5 Stars \| 284 Reviews \| 100% Recommend |

**Carousel cards (4)** — each: 5 gold stars, quote in italics, name bold.

1. **Travis:** "Over the 4 days, I gained more insight, clarity and direction than I had in the last 5 years. The most profound experience I have ever invested in myself."
2. **Sarah:** "I pushed far beyond what I thought I was capable of, surrounded by amazing, like-minded people. The connection and breakthroughs were unreal."
3. **Facebook Review:** "It was not my first breathwork experience, but it was absolutely the best!!! Gene's command FOCUS!!! was so to the point! Live music was truly sensational!!!"
4. **Kathy:** "To say it was life changing would not be an exaggeration. Gene, Joshua and the wonderful team created a nourishing, safe, fun, enlightening atmosphere."

**Interaction:** Horizontal scroll, snap to cards, scrollbar hidden (accessibility: ensure keyboard/ARIA alternative or visible controls in WP).

---

### 3.8 Events (`#events`)

| Element | Content |
|---------|---------|
| Eyebrow | JOIN US LIVE |
| **H2** | Upcoming Events |
| Intro paragraph | Find a breathwork workshop near you. We regularly host events in Sydney, Newcastle, Central Coast, Gold Coast, and Melbourne. |
| Placeholder title | [Humanitix Collection Widget] |
| Placeholder description | The live event schedule will automatically populate here. |
| Button (external) | View on Humanitix |

**Humanitix URL:** `https://events.humanitix.com/host/alteredstatesexperience`  
`target="_blank"` — use `rel="noopener noreferrer"` in WP.

---

### 3.9 Team (`#team`)

**Section header**

| Element | Content |
|---------|---------|
| Eyebrow | EXPERT FACILITATION |
| **H2** | Meet The Team |

**Gene Kelly**

| Field | Content |
|-------|-----------|
| **H3** | Gene Kelly |
| Role | FOUNDER & LEAD FACILITATOR |
| Bio | Rebirthing breathwork facilitator, holistic health coach, and death doula. Gene uses non-ordinary states of consciousness as a catalyst to change the brain to help others heal, awaken and unlock their full potential. |

**Joshua Tree**

| Field | Content |
|-------|-----------|
| **H3** | Joshua Tree |
| Role | LEAD MUSICIAN |
| Bio | Extraordinary multi-instrumentalist weaving instruments of the breath, skin and wood to create a sonic experience. Completing Masters in Mental Health (Art Therapy). |

**Clara Marri**

| Field | Content |
|-------|-----------|
| **H3** | Clara Marri |
| Role | HOLISTIC PRACTITIONER |
| Bio | Blending bodywork, breathwork, energy work and somatic practices to help people release old patterns. Her work bridges science and ancient, earth-rooted traditions. |

---

### 3.10 Footer

**Column 1 — Stay Connected**

| Element | Content |
|---------|---------|
| **H3** | Stay Connected |
| Body | Join our community to receive updates on upcoming events, retreats, and get our free Breathwork Release Guide. |
| Form | Email placeholder: `Your email address` \| Button: **Subscribe** |

**Column 2 — Explore**

| Link label | Target |
|------------|--------|
| About Us | `#who-we-are` |
| Offerings | `#offerings` |
| Events | `#events` |
| Retreat | `#retreat` |

**Column 3 — Connect**

| Link label | URL |
|------------|-----|
| Instagram | `https://instagram.com/alteredstatesexperience` |
| Facebook | `#` (placeholder in v1 — **replace before launch**) |
| Contact | `mailto:gene@gkfitness.com.au` |

**Watermark / legal**

| Element | Content |
|---------|---------|
| Large watermark text | ALTERED STATES (very low opacity white) |
| Copyright | © 2026 Altered States Experience. All rights reserved. |
| Tagline line | Safe, legal, drug-free experience. |

**Footer visuals:** Background `brand-purple` with gradient overlay (`from-brand-dark via-brand-purple/80 to-brand-dark`).

---

### 3.11 Lead capture modal (optional / consent-gated)

v1 includes a **demo** modal triggered after **5 seconds** — **do not** replicate auto-show in production without consent/CMP review.

| Element | Content |
|---------|---------|
| **H3** | Free Breathwork Release Guide |
| Body | Enter your email to receive our comprehensive guide to starting your breathwork journey. |
| Fields | First Name, Email Address |
| Submit | Send Me The Guide |

Wire to ESP/CRM (Brand guide suggests HubSpot or similar).

---

## 4. Image & media inventory

Paths below are as in v1 HTML (`../../references/client_assets/` from `apps/gemini-v1/`). Upload to **Media Library** and reattach; filenames are Instagram-style IDs.

| File (basename) | Section | Alt text (from HTML) | Description (for editors / alt improvement) |
|-----------------|---------|----------------------|---------------------------------------------|
| `609498552_17992334450911758_7260561423754856278_n.jpg` | Who we are | Altered States Breathwork Session | Portrait-oriented session / group breathwork atmosphere; decorative coral frame offset behind image. |
| `612405873_17993039429911758_2395989327158954337_n.jpg` | Offerings card 1 | City Workshops | Workshop/event imagery for low-ticket offering; hover scale on static site. |
| `609859673_17992144829911758_3627750128898244285_n.jpg` | Offerings card 2 | Immersion Retreat | Retreat / immersion visual for flagship card. |
| `610195304_17992334459911758_6541602778669642153_n.jpg` | Retreat background | Retreat Background | Full-bleed background under purple multiply + dark gradient. |
| `620417633_17994215384911758_1499016141491528773_n.jpg` | Retreat gallery | Retreat Experience | Gallery tile (tall crop `h-64`). |
| `611185010_17992576616911758_6359808428520505471_n.jpg` | Retreat gallery | Retreat Group | Gallery tile. |
| `620500103_17994215375911758_7984306465112398357_n.jpg` | Retreat gallery | Breathwork | Wide span 2 cols, shorter height `h-48`. |
| `587559784_17990523992911758_7449764443645668391_n.jpg` | Team | Gene Kelly | Circular headshot, border + shadow. |
| `590422979_17990325833911758_5591702416302999544_n.jpg` | Team | Joshua Tree | Circular headshot. |
| `600820150_17990422193911758_1000555469359433895_n.jpg` | Team | Clara Marri | Circular headshot. |
| `hero-video.mp4` | Hero | *(none in HTML — add poster + aria)* | Looping muted full-screen background video. |

**Repo note:** JPGs and video may be absent in a fresh clone; source from client before migration (`WP_MIGRATION.md` §7).

---

## 5. Design tokens (v1 — for theme / builder globals)

Use these as the **implementation target** for a pixel-faithful v1 rebuild. `BRAND_GUIDE.md` lists alternate tokens (e.g. Action Red `#DC2626` for CTAs); **v1 uses coral** for primary buttons.

### 5.1 Colors

| Token name | Hex | Usage in v1 |
|------------|-----|----------------|
| brand.coral | `#F26B5B` | Primary CTAs, accents, eyebrow labels, links, quote decoration |
| brand.purple | `#6B21A8` | Footer base, retreat overlay multiply |
| brand.dark | `#171717` | Body text, dark section base, some buttons |
| brand.light | `#FAFAFA` | Alternate sections (quote, testimonials, Humanitix placeholder) |
| brand.amber | `#F59E0B` | Stars, urgency emphasis |
| White | `#FFFFFF` | Page background, cards |
| Gray utilities (Tailwind-aligned) | e.g. `text-gray-600`, `border-gray-100`, `text-gray-500` | Body secondary text, borders, placeholder widget |

**CTA hover (v1):** `orange-600` (approx. `#EA580C`) on coral buttons.

### 5.2 Typography

| Role | Font |
|------|------|
| Display / hero / team names / retreat H2 line 1 | Bebas Neue |
| Serif / section H2s / quotes / hero subhead | Playfair Display |
| Body UI | Inter |
| Montserrat | Loaded in v1; use sparingly if needed for UI parity (nav uses `font-medium` sans — Inter) |

### 5.3 Spacing & layout (from HTML / Tailwind)

| Pattern | Value / notes |
|---------|----------------|
| Section vertical padding | `.section-padding` → `padding-top/bottom: 6rem` (96px) |
| Retreat section | `py-24` (96px top/bottom) |
| Quote band | `py-20` (80px) |
| Container max width | `max-w-7xl` (80rem), centered; inner `max-w-5xl` / `max-w-4xl` where used |
| Horizontal padding | `px-4 sm:px-6 lg:px-8` |
| Nav height | `h-20` (80px) |
| Hero | `h-screen` (100vh), content `mt-16` below nav |
| Rounded corners | Cards/images `rounded-2xl` / `rounded-xl`; buttons `rounded-full` or `rounded-md` |
| Shadows | `shadow-lg` + coral-tinted shadow on primary buttons |

### 5.4 Custom CSS equivalents (port to theme `style.css` or builder custom CSS)

- **`.text-outline`:** `-webkit-text-stroke: 1px white; color: transparent;` (retreat H2 second line)
- **`.hero-overlay`:** gradient specified in §3.2
- **`.quote-mark`:** Playfair, ~8rem, coral `#F26B5B`, opacity 0.2, positioned behind quote
- **`.no-scrollbar`:** hide scrollbar on testimonial row; **add accessible alternative in WP**

### 5.5 Brand guide alignment note

`BRAND_GUIDE.md` specifies **Action Red** `#DC2626` for primary CTAs and additional accent colors (magenta, cyan). **v1 HTML uses coral** `#F26B5B`. For “match the shipped v1 design,” use coral; for strict brand-doc compliance, discuss with stakeholder.

---

## 6. Calendly integration details

### 6.1 Assets (as in v1)

| Asset | URL |
|-------|-----|
| Stylesheet | `https://assets.calendly.com/assets/external/widget.css` |
| Script | `https://assets.calendly.com/assets/external/widget.js` (async) |

### 6.2 Trigger pattern (static HTML)

```js
Calendly.initPopupWidget({url: 'https://calendly.com/placeholder'});
return false;
```

**v1 trigger locations:** Nav “Apply for Retreat”, Hero “Apply for the Retreat”, Offerings card 2 “Apply for the Retreat”, Retreat “Apply Now — Limited Spots”.

### 6.3 Production requirement

Replace **`https://calendly.com/placeholder`** with the real scheduling URL (one event type or master page). Test mobile popup, keyboard focus, and consent/cookie policy if loading before consent.

---

## 7. Humanitix integration details

| Item | Value |
|------|--------|
| Public host page | `https://events.humanitix.com/host/alteredstatesexperience` |
| Static v1 behavior | Placeholder box + “View on Humanitix” button |
| WP goal | Embed Humanitix **collection** widget (iframe or official method) in the Events section; keep external link as fallback |

**Placeholder copy (until embed live):** see §3.8.

---

## 8. WordPress build specification

### 8.1 Recommended theme

**Primary recommendation: Kadence** (free + optional Kadence Blocks Pro).

- Lightweight, performance-oriented, strong **global typography & color** controls that map cleanly to §5.  
- Header/footer builder supports **transparent → sticky** header with scroll shadow behavior.  
- Works well with **custom CSS** for `.text-outline`, hero overlay, and quote mark.  

**Strong alternatives**

| Theme | Why |
|-------|-----|
| **GeneratePress** + **GenerateBlocks** | Minimal CSS footprint; excellent for custom sections; slightly more manual setup for sticky/blur header. |
| **Astra** + **Spectra** or Gutenberg | Very common; Pro adds transparent header; watch bundle size if many blocks. |

**Avoid for this project:** Heavy multipurpose themes with bundled sliders/demos unless you strip aggressively.

**Block theme option:** Child of **Twenty Twenty-Five** + **full-site editing** — viable if the team prefers pure core blocks; expect more custom CSS for hero video, outline text, and testimonial carousel.

---

### 8.2 Page builder choice

**Recommendation: Native Block Editor (Gutenberg) + Kadence Blocks** (or GenerateBlocks if on GeneratePress).

**Why**

- Long single page maps to **reusable patterns** and **anchor links** without a proprietary shortcode lock-in.  
- **Columns / Row Layout** blocks match v1’s grids (who we are, offerings, retreat, team, footer).  
- **Custom HTML** or small child theme snippet for Calendly enqueue keeps third-party JS maintainable.  
- Easier **accessibility** remediation than some legacy builders (headings, landmarks).

**If the client insists on Elementor:** Use Elementor Pro for theme builder (header/footer), sticky header, and video background; duplicate §5 tokens in Site Settings; export cautiously (performance).

---

### 8.3 Section → block mapping (cheat sheet)

| Section | Suggested blocks / approach |
|---------|----------------------------|
| **Nav** | Theme builder header: Logo (Site Title or custom HTML), Navigation block (anchor links), Button → Custom HTML with Calendly onclick **or** Calendly plugin shortcode/button. |
| **Hero** | Cover block (full height) with **background video** (block support varies — may need Kadence row + video BG, or HTML block + child theme); inner **Heading** (H1), **Paragraph** (italic), Buttons. |
| **Who we are** | Row/Columns 50/50: left = Paragraph (eyebrow style), Heading H2, Paragraphs, Button/link; right = Image + optional spacer for offset border (Group + border or custom CSS). |
| **Quote band** | Group (bg color `#FAFAFA`) + Columns: Quote block **or** Paragraph + citation; decorative quote via CSS `::before` or HTML block. |
| **Offerings** | Section heading Group; **Columns (2)**; each column: Image, Heading H3, Paragraph, Badge (Badge block / small Group), Button or link. |
| **Retreat** | Group with background image + overlay (Kadence Advanced Background **or** Cover + inner Columns); Heading H2 (split styling: custom class for outline line); List block for bullets; Group for urgency box; Button. Right column: **Gallery** or 3× Image blocks in nested Columns. |
| **Testimonials** | Heading group + stats Row; **Kadence Testimonials** / **Slider** / or **Stack on Mobile** grid; if horizontal scroll, add keyboard buttons for a11y. |
| **Events** | Heading + Paragraph; **Custom HTML** for Humanitix iframe; Button (external). |
| **Team** | Columns (3): Image (circle via rounded style), Heading H3, Paragraph (role), Paragraph (bio). |
| **Footer** | Theme footer builder or block template: Columns, Heading, **Form** (Fluent Forms / WPForms / Mailchimp block), Navigation lists, HTML for watermark text. |
| **Lead modal** | Popup plugin (e.g. **FluentCRM** popup, **OptinMonster**, **HubSpot** forms popup) with same copy; **no** 5s auto-open without consent. |

---

### 8.4 Plugin list & configuration notes

| Plugin | Purpose | Notes |
|--------|---------|--------|
| **Calendly** (official) or **custom enqueue in child theme** | Popup scheduling | Single production URL; test mobile. |
| **Rank Math** or **Yoast SEO** | Title, meta, schema | Paste §2 title & description; set canonical on Home. |
| **Fluent Forms** or **Gravity Forms** | Footer newsletter + optional lead guide | Connect to Mailchimp, Kit, FluentCRM, or **HubSpot** (per brand guide). |
| **WP Rocket** or host caching | Performance | Cache page; exclude admin; optimize CSS/JS. |
| **Imagify** / **ShortPixel** / server WebP | Images | Compress uploads; WebP delivery. |
| **Humanitix** | Events embed | Use official embed/iframe from Humanitix dashboard if available; else Custom HTML. |
| **Cookie / consent** (if required) | GDPR | Block Calendly/Humanitix until consent if legally required. |

Optional: **Redirection** for future URL changes; **UpdraftPlus** or host backups.

---

### 8.5 Mobile responsiveness (extracted from v1 HTML)

| Behavior | Source (Tailwind breakpoints) |
|----------|--------------------------------|
| **Navigation** | Desktop: horizontal links + CTA. **Below `md`:** v1 **does not** render mobile menu — **WP must add** hamburger/off-canvas or stacked nav for small screens (gap in static v1). |
| **Hero** | Heading scales `text-6xl md:text-8xl lg:text-9xl`; subhead `text-xl md:text-2xl`; CTAs stack `flex-col sm:flex-row`. |
| **Who we are** | Single column default; two columns from `lg`. |
| **Offerings** | Single column; 2 columns from `md`. Second card has `mt-12 md:mt-24` stagger — optional visual parity. |
| **Retreat** | Single column; 2 columns `lg`; CTA full width mobile `w-full sm:w-auto`. |
| **Gallery** | 2×2 grid with one wide image `col-span-2` on larger screens; stack on small. |
| **Testimonials** | Horizontal scroll; min card width 300px mobile, 400px `md`. |
| **Team** | 1 column; 3 columns from `md`. |
| **Footer** | Single column; 2-column grid `md` for main block; bottom legal row stacks then `md:flex-row`. |
| **Touch** | `playsinline` on hero video for iOS. |

---

## 9. Content gaps & pre-launch checklist

| Gap | Action |
|-----|--------|
| **Calendly URL** | Still `placeholder` in source — replace everywhere. |
| **Facebook URL** | Footer points to `#` — obtain real page URL (`BRAND_GUIDE` references Facebook presence). |
| **Humanitix embed** | Placeholder UI only — implement real collection widget + test. |
| **Hero video + poster** | Video may be missing from repo; add **poster image** and **reduced-motion** fallback (static image). |
| **Client JPGs** | May be missing in clone — collect from client. |
| **Mobile nav** | Not in v1 HTML — design and implement. |
| **Forms** | No backend in static site — connect footer + lead magnet to ESP/CRM; add consent copy if required. |
| **Lead popup timing** | Do not copy 5-second auto-show without CMP/consent review. |
| **H1/H2 order** | Ensure block editor does not add extra H1s in patterns. |
| **Brand guide vs v1 colors** | Document stakeholder choice: coral (v1) vs Action Red (guide). |

---

## 10. Quick reference — external links

| Label | URL |
|-------|-----|
| Instagram | https://instagram.com/alteredstatesexperience |
| Humanitix host | https://events.humanitix.com/host/alteredstatesexperience |
| Email | mailto:gene@gkfitness.com.au |
| Calendly | *(production URL TBD)* |

---

*End of WP Content Pack*
