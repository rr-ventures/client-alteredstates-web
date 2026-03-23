# Altered States Experience — Unified Brand Guide

> **Purpose:** This is the single source of truth for all agents building the website, generating assets, writing copy, or making design decisions. When in doubt, refer back to this document.

---

## 1. Brand Identity

**Business Name:** Altered States Experience
**Owner/Founder:** Gene Kelly
**Location:** Port Stephens, NSW (retreat base) — Events held across Australia

**Mission Statement:** "Bring reverence to altered states of consciousness as a tool for profound personal healing and transformation."

**Offer Statement:** "A safe, supportive and fun space for inner exploration and evolution."

**Primary Tagline:** "The psychedelic inspired breathwork experience guaranteed to open your heart and blow your mind!"

**Secondary Tagline:** "Altered States: Transformation and the Mystical Experience!"

**Core Themes:** Transformation, consciousness expansion, breathwork, mystical experiences, neuroscience, community, healing.

**Positioning:** At the intersection of science and mysticism — a safe, legal, drug-free alternative to psychedelic experiences. Neuroscience-backed ceremony. "Rites of passage" framing (transformation, death of old self, rebirth).

---

## 2. Design Direction

### Overall Aesthetic

**Light, white, and airy** — clean, spacious backgrounds with generous breathing room. The site should feel modern, professional, and credible while retaining the mystical, transformative energy of the brand through its imagery and accent colors.

**No dark mode backgrounds** — the primary canvas must be white or light. Deep Space Black may only be used for specific sections like the footer, navigation, or small atmospheric blocks.

Think: a high-end wellness brand, not a rave flyer. Bright and open, but polished and elegant.

**Reference:** The clean, minimal structure of [zenthaishiatsu.com](https://www.zenthaishiatsu.com) — adapted with the Altered States color palette used strictly as accents.

---

## 3. Color Palette

All colors below are mandatory across all design variations.

| Token | Name | Hex | Usage |
|:------|:-----|:----|:------|
| `--color-bg-primary` | Pure White | `#FFFFFF` | Primary background. Clean, airy canvas. |
| `--color-bg-secondary` | Off-White / Light Cream | `#FAFAFA` | Secondary background for alternating sections. |
| `--color-accent-primary` | Psychedelic Purple | `#6B21A8` | Gradients, section accents, secondary CTAs, text highlights. |
| `--color-accent-secondary` | Neon Magenta | `#D946EF` | Vibrant highlights paired with purple in gradients (use sparingly). |
| `--color-accent-tertiary` | Electric Cyan | `#06B6D4` | Contrast accent representing clarity and science (use sparingly). |
| `--color-cta` | Action Red | `#DC2626` | Primary CTA buttons, banners, high-impact elements. |
| `--color-warm` | Golden Amber | `#F59E0B` | Warm highlights, text emphasis, secondary CTAs. |
| `--color-text-primary` | Dark Charcoal | `#171717` | All primary text on light backgrounds. |
| `--color-text-muted` | Medium Gray | `#52525B` | Secondary text, captions, metadata. |
| `--color-dark-section` | Deep Space Black | `#0A0A0A` | ONLY for footer, nav, or specific dark atmospheric blocks. |

### Optional Colors (vary by design variant)

These colors may be included or excluded depending on the specific design variant being built. When included, use them sparingly and intentionally.

| Token | Name | Hex | Usage | Notes |
|:------|:-----|:----|:------|:------|
| `--color-nature` | Mystic Green | `#22C55E` | Nature and healing contexts, testimonial sections, nature imagery overlays. | Adds natural warmth. Risk of palette feeling busy — use with restraint. |

### Color Usage Rules

- **Default to light mode.** The primary background must be white or light.
- **Accents Only:** Psychedelic Purple, Neon Magenta, Electric Cyan, and Action Red are for **accents, CTAs, gradients, hover states, and decorative elements only** — not for large background areas.
- **Gradients:** Combine Purple → Magenta → Cyan for subtle atmospheric accents. Keep gradients subtle (low opacity, large radius) rather than vivid and sharp.
- **CTAs:** Action Red for primary actions ("Apply Now", "Get Tickets"). Golden Amber or Purple for secondary CTAs.
- **Text:** Dark charcoal/near-black on light backgrounds. Ensure WCAG AA contrast ratios minimum. White text should only be used on dark sections (like the footer) or over images.

---

## 4. Typography

### Display Font (Headings, Titles, Event Names)

**Font Families:** Montserrat, Bebas Neue (use either or both as appropriate)

- **Montserrat** — Modern, geometric, versatile. Use for section headings and UI elements where readability matters.
- **Bebas Neue** — Tall, condensed, cinematic. Use for hero text, event titles, and large promotional display text where visual impact matters.

**Style Rules:**
- Always **BOLD** and **ALL-CAPS** for primary headings.
- Wide letter-spacing (tracking) for a cinematic, expansive feel.
- May be placed on solid color blocks (Action Red) for maximum visibility when over busy imagery.

### Body Font (Descriptions, UI, Long-form)

**Font Family:** Inter

**Style Rules:**
- Regular (400) or Medium (500) weight.
- White on dark backgrounds, high contrast.
- Generous line-height (1.6–1.8) for readability, especially for philosophical/descriptive content.

### Font Loading

Use Google Fonts. Load only the weights needed:
- Montserrat: 700, 900
- Bebas Neue: 400 (it only comes in one weight)
- Inter: 400, 500, 600

---

## 5. Visual Effects & Treatments

### Glow Effects

**Use glow effects (CSS `box-shadow`, `drop-shadow`) sparingly and only as subtle accents.** The rest of the site should remain clean and modern.

- Cards, buttons, general UI: No glow at rest. Clean, flat design.
- Hover states on interactive elements may use a very subtle color-tinted shadow.

### Sacred Geometry, Fractals, Mandalas

**OPTIONAL — varies by design variant.**

These elements (mandalas, sunbursts, fractal patterns) are part of the brand's visual language but should be treated as a design variable:

- **Variant A (with):** Include as faint, low-opacity background textures or section dividers. Never let them compete with content.
- **Variant B (without):** Skip entirely. Let photography, color accents, and typography carry the visual identity.

When using them, keep opacity very low (5–10%) and use them as large-scale background elements, not small decorative details. They should blend subtly into the light background.

### Prismatic Light Effects

Lens flares, rainbow streaks, and glowing auras may be used sparingly in hero sections or over dark image backgrounds. These should feel organic and atmospheric, not digital or synthetic.

---

## 6. Imagery & Photography

### The Psychedelic Eye (Brand Icon)

A close-up of an eye with an iridescent, multi-colored iris (green, purple, blue, gold). Use as:
- Favicon
- Logo mark
- Loading state icon

### Photography Style

| Context | Style |
|:--------|:------|
| Event atmosphere | Dark, moody shots of venues lit by colorful wall projections. |
| Community | Group photos of attendees — outdoors, natural settings, warmth and connection. |
| The setup | People on yoga mats with blankets — comfort, internal journey. |
| Sacred spaces | Altars with Buddha statues, candles, spiritual decor. |
| Retreat venue | The Oasis at One Mile Beach — forest, cabins, billabong, water features. |

### Image Treatment

- Images should be slightly desaturated or color-graded to match the brand palette (purple/cyan tints on shadows).
- Avoid stock photography. Use only real event/venue photos where possible.
- Overlay dark gradients on images before placing text on top.

---

## 7. Core Offerings (Content Reference)

### Low-Ticket: City Workshops & Events

- Evening workshops, sound journeys, full-day experiences
- $50–150 AUD | 3–4 hours (evening) or full day
- Locations: Sydney, Newcastle, Central Coast, Gold Coast, Melbourne (rotating)
- Includes: Guided breathwork, live music, optional Lion's Mane mushroom
- Tickets via **Humanitix**

### High-Ticket: Immersion Retreat (Flagship)

- "Altered States Immersion" / "Rites of Passage & Transformation"
- 4 days / 3 nights at The Oasis at One Mile Beach, Port Stephens
- Limited to 20 participants
- All-inclusive: accommodation, meals, daily breathwork, firewalk, drumming, ice bath, bodywork, sound journey, Lion's Mane, 42 guided recordings, 28-day integration program, lifetime resource access
- Pricing: ~~$2,499~~ → **$1,997 AUD** ("Golden Ticket" offer)
- Discovery calls via **Calendly**

### Positioning Language for High-Ticket

- "Embody the Keys to Self Mastery with Expanded States of Consciousness"
- "Experience non-ordinary states of consciousness as a powerful and accelerated method of healing and personal transformation — without substances."
- "Psycho-spiritual rebirth"
- "Safe, legal, drug-free experience"
- "Neuroscience-backed ceremony"

---

## 8. The Team

### Gene Kelly — Founder, Lead Facilitator

**Bio:** "Rebirthing breathwork facilitator with a background in health, fitness and wellness lifestyle coaching. With wisdom and science-backed insights, he uses non-ordinary states of consciousness as a catalyst to change the brain to help others heal, awaken and unlock their full potential."

**Credentials:** Certified Holistic Health Coach, Death Doula, Firewalk Facilitator, Neuroscience enthusiast.

### Joshua Tree — Lead Musician, Sound Journey Specialist

**Bio:** "Extraordinary multi-instrumentalist providing the beautiful soundscape throughout your immersion. He weaves instruments of the breath, skin and wood to create a sonic experience that has seen him perform at some of the biggest festival stages nationally and abroad."

**Credentials:** Bachelor in Visual Arts, completing Masters in Mental Health (Art Therapy), performs nationally and internationally.

### Clara Marri — Holistic Practitioner, Bodywork Specialist

**Bio:** "Holistic practitioner blending bodywork, breathwork, energy work and other somatic practices to help people release old patterns and return to balance. Her work bridges science and ancient, earth-rooted traditions, guiding others to reconnect with their bodies, the natural world, and a sense of embodied freedom."

**Specialties:** Bodywork, breathwork, energy work, somatic practices, fascia release.

---

## 9. Testimonials

### Retreat

> "In just three nights, I experienced profound healing, renewal, and a deeper connection to the mystical than I ever thought possible." — Vi

> "Over the 4 days, I gained more insight, clarity and direction than I had in the last 5 years." — Travis

> "I pushed far beyond what I thought I was capable of, surrounded by amazing, like-minded people. The connection and breakthroughs were unreal." — Sarah

> "Attending the Altered States retreat has been nothing short of life-changing. I came in with curiosity, and I left with a new sense of calm, clarity, and empowerment that continues to ripple through my daily life." — Lynda

> "Attending the Altered States Immersion Retreat was the most profound experience I have ever invested in myself." — Travis

> "To say it was life changing would not be an exaggeration. Gene, Joshua and the wonderful team of facilitators created a nourishing, safe, fun, enlightening and transformational atmosphere and experience." — Kathy

> "The setting for the retreat is amazing and the food was just perfect." — Grant

> "Facilitation and orchestration of the retreat was so skilful. It was such a profound experience and the group cohesion created through creating a safe space was next level." — Kaz

### Integration Program

> "The ongoing support over the 28 day integration programme was and remains invaluable, ensuring that the journey we began over the immersion weekend can continue." — Kathy

> "While I have nothing but amazing things to say about my retreat experience, the growth and expansion really takes hold in the integration program following the retreat." — Grant

### Workshops

> "It was not my first breathwork experience, but it was absolutely the best!!! The host is amazing! Great charisma and loved the guidance during the breathwork... Gene's command FOCUS!!! was so to the point! Live music was truly sensational!!! put myself in a hypnotic state and came back in total bliss at the end of the night!!"

---

## 10. Unique Selling Points

Use these in copy and design as needed:

1. **Legal & Safe** — Drug-free, no substances, fully insured
2. **Neuroscience-Backed** — Scientific framing legitimises the mystical experience
3. **Expert Facilitation** — Gene (rebirthing, health coaching, death work) + Joshua (music therapy) + Clara (somatic practice)
4. **Comprehensive Support** — 28-day integration program (6 weeks total)
5. **Immersive Venue** — Private 5-acre sanctuary at One Mile Beach
6. **Live Music** — Joshua Tree's soundscapes differentiate from typical retreats
7. **Transformational Framing** — "Rites of passage," not just "workshop"
8. **Community** — 500+ past participants, strong testimonials, 100% recommend on Facebook

---

## 11. Integrations & Technical Requirements

| Tool | Purpose | Usage |
|:-----|:--------|:------|
| **Humanitix** | Event ticketing | Single source of truth for workshop/event listings. Site should reflect Humanitix data. |
| **Calendly** | Discovery call scheduling | Used for high-ticket retreat bookings. Embed or link from retreat pages. |
| **HubSpot** | CRM & email marketing | Lead capture forms should integrate with HubSpot. (GoHighLevel is a potential alternative.) |

### Lead Capture

- Lead magnet concept: "Breathwork Release Guide" (placeholder — can be refined)
- Email capture for nurture sequence
- Goal: Build list → Nurture → Convert to retreat bookings

### Booking Flows

- **Low-ticket (workshops):** Direct to Humanitix ticket page
- **High-ticket (retreat):** Calendly discovery call → personal follow-up → booking

---

## 12. SEO Keywords

Target keywords for organic search:

- "Holotropic breathwork"
- "Rebirthing breathwork"
- "Wim Hof" (related searches)
- "Altered States Experience" (brand name)
- "Breathwork Sydney" / "Breathwork Newcastle" / "Breathwork [city]"

---

## 13. Online Presence

| Platform | Handle/Link | Notes |
|:---------|:------------|:------|
| Website | alteredstatesexperience.com | Being redesigned |
| Instagram | @alteredstatesexperience | 5,829 followers, 221 posts |
| Facebook | Altered States Experience | 3.7K likes, 4.6K followers, 284 reviews (100% recommend) |
| Humanitix | events.humanitix.com/host/alteredstatesexperience | Event ticketing |
| Linktree | linktr.ee/alteredstatesexperience | Link hub |

---

*End of Unified Brand Guide*
