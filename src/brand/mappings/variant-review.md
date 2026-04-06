# Gemini HTML variants (current repo)

This repository ships two static HTML prototypes generated as design explorations. Older template names (Ahana, Meditative, etc.) are no longer present in the tree.

## Gemini v1 (`apps/gemini-v1/index.html`)

- **Typography:** Bebas Neue (display), Inter (body), Playfair Display (editorial headings / quotes), Montserrat (secondary).
- **Color story:** Coral primary (`brand-coral`), purple atmospheric sections, light gray page background, amber for stars / urgency accents.
- **Layout notes:** Full-viewport hero with video; “Who we are” with framed image + coral border accent; staggered offerings grid; retreat block with full-bleed background image and purple overlay; horizontal snap-scroll testimonials; Humanitix placeholder; team as circular portraits; purple gradient footer with large watermark title; **lead popup** after 5 seconds (demo).
- **Nav anchors:** `#who-we-are`, `#offerings`, `#events`, `#retreat`, `#team` (all linked in the desktop nav).

## Gemini v2 (`apps/gemini-v2/index.html`)

- **Typography:** Montserrat (display/bold uppercase), Inter (body), Caveat (script accents).
- **Color story:** Purple/amber/red CTAs, warm `sand` and `lavender` section backgrounds; red replaces coral for primary buttons.
- **Layout notes:** 90vh hero; **stats bar** immediately below hero; overlapping soft-shadow images in intro; card-style offerings with full-width buttons; retreat section on sand background (lighter than v1’s cinematic block); **3-column** testimonial grid (fewer quotes than v1’s slider); Humanitix placeholder; team; compact dark footer with Instagram/Facebook icons; same **5s lead popup** pattern.
- **Nav anchors:** Same core set; v2 omits a dedicated “Team” item in the top nav (team section exists on-page).

## Recommendation

Prefer **v1** for production direction when matching `references/BRAND_GUIDE.md` (coral accent, serif editorial voice, light premium feel). Use **v2** for layout/UX comparisons (stats bar, card grid testimonials, script accents).
