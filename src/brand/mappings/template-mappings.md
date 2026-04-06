# Section → WordPress mapping (Gemini variants)

Both variants are a **single front page** with in-page sections (anchor IDs). For WordPress, map each block to a reusable pattern (block theme, page builder section, or ACF flexible row).

| HTML section / `#id` | Suggested WP block / template part | Notes |
|---------------------|-----------------------------------|--------|
| Nav + logo | Header / site logo + menu | Mobile menu not built in static HTML. |
| Hero (video + CTAs) | Cover / hero + background video | Provide WebM or poster fallback for performance. |
| `#who-we-are` | Text + media | v1: single hero image + frame; v2: two overlapping images. |
| Quote band (v1: Vi; v2: Lynda) | Group or pattern | Optional reusable “pull quote”. |
| `#offerings` | Two-column feature cards | Workshops vs retreat; Calendly on retreat CTA. |
| `#retreat` | Detailed program section | v1: immersive full-bleed; v2: checklist card + images. |
| Testimonials | Slider (v1) or grid (v2) | Source copy from HTML; connect to review plugin if desired. |
| `#events` | Custom HTML / Humanitix embed | Replace placeholder with official widget or iframe when available. |
| `#team` | Team grid (3 bios) | CPT “Team member” or static blocks. |
| Footer | Footer template | Newsletter form + social + explore links. |
| `#lead-popup` | Plugin or delayed modal | Wire to ESP (Mailchimp, etc.); avoid intrusive timing in production or gate with cookie. |

Calendly and Humanitix URLs in the repo are **placeholders or public marketing links**—replace with the client’s final scheduling and ticketing assets during migration.
