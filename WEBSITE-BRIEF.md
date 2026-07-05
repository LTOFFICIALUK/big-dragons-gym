# Big Dragons Gym — Website Brief & Build Prompt

Use this document as the master brief for designing and building the Big Dragons Gym website. It is written to be handed directly to a developer or AI builder.

---

## 1. Project Overview

**Client:** Big Dragons Gym  
**Goal:** A clean, professional, lead-generation website that extends existing brand identity, ranks strongly for local search in Blaenau Ffestiniog and North Wales, and scales for bi-weekly SEO/GEO content updates.

**Primary conversion goals (in order):**

1. Phone/WhatsApp enquiry to Dei (`+44 7940 125381`)
2. Personal training consultation booking / enquiry
3. Membership / 24/7 access enquiry
4. Social follow ([Facebook](https://www.facebook.com/p/Big-Dragons-Gym-61558675053886/) · [Instagram](https://www.instagram.com/big_dragon_gym/))

**Success metrics:** Local pack visibility, organic traffic for “gym Blaenau Ffestiniog”, PT/nutrition enquiries, click-to-call, form submissions, map directions.

---

## 2. Brand Identity (Extend, Don’t Reinvent)

### Existing Logo Analysis

The crest logo establishes a bold, athletic, Welsh identity:

| Element | Direction |
|--------|-----------|
| **Primary red** | Vibrant crimson (~`#C62828` / `rgb(198, 40, 40)`) — CTAs, accents, energy |
| **Deep maroon** | Dark burgundy (~`#4A1212` / `rgb(74, 18, 18)`) — headers, footer, premium “hardcore” feel |
| **White** | Text on dark, clean space, contrast |
| **Black** | Body text, subtle UI chrome |
| **Dragon crest** | Hero watermark, favicon source, section dividers (angular/shield shapes) |
| **“NORTH WALES”** | Lean into local pride — Welsh + English copy, GEO content |

### Visual Tone

- **Modern athletic** — not corporate wellness spa; think strength, community, 24/7 grit
- **Clean and professional** — generous whitespace, strong hierarchy, no clutter
- **Eyecatching but natural** — real gym photography over stock where possible; when stock is used, prefer industrial/raw gym environments (concrete, iron, chalk) not glossy fitness-model clichés

### Typography

- **Headings:** Bold condensed sans (e.g. Bebas Neue, Oswald, or similar athletic feel — match logo weight)
- **Body:** Clean readable sans (e.g. Inter, DM Sans)
- **Welsh:** Ensure full Welsh character support (ŵ, ŷ, etc.)

### UI Patterns Derived from Logo

- Angular section dividers (shield/chevron motifs)
- Red CTA buttons with subtle hover lift
- Dark maroon bands for trust sections (hours, location, contact)
- Optional subtle dragon silhouette or crest watermark at low opacity in hero

---

## 3. Business Information (Canonical — Use Everywhere)

```
Business name:     Big Dragons Gym
Address:           Jerusalem Chapel, 32 High Street,
                   Blaenau-Ffestiniog, United Kingdom, LL41 3AL
Opening hours:     24/7
Primary contact:   Dei
Phone:             +44 7940 125381
Facebook:          https://www.facebook.com/p/Big-Dragons-Gym-61558675053886/
Instagram:         https://www.instagram.com/big_dragon_gym/
```

**Important GEO note:** Jerusalem Chapel / 32 High Street is a shared building (also home to Little Dragons Softplay). The site must clearly identify **Big Dragons Gym** as a separate 24/7 fitness business — use distinct NAP (Name, Address, Phone), schema, and copy so Google and users do not confuse the two.

**Default language:** English  
**Secondary language:** Welsh (Cymraeg) — full site translation, not just hero tagline.

---

## 4. Photography & Media Strategy

### Priority 1 — Owned / Social Media Assets

Source images from:

- [Facebook page](https://www.facebook.com/p/Big-Dragons-Gym-61558675053886/)
- [Instagram @big_dragon_gym](https://www.instagram.com/big_dragon_gym/)

**Recommended usage map:**

| Placement | Preferred source |
|-----------|------------------|
| Hero | Best wide gym floor / equipment shot from IG/FB; logo overlaid |
| About / facility | Interior equipment, free weights, training area |
| Personal training | Dei coaching, 1:1 sessions, client training (with consent) |
| Community / social proof | Member posts, transformation stories, event photos |
| OG / social share | Logo on dark maroon + one strong gym photo |

**Workflow:** Download highest-resolution originals from social; optimise to WebP/AVIF; maintain an `/public/media/` folder with descriptive filenames (`hero-gym-floor.webp`, `pt-session-dei.webp`) for SEO alt text.

### Priority 2 — Copyright-Free Placeholders (Where Social Media Is Thin)

Use only when real assets are unavailable. Prefer **Unsplash** or **Pexels** with these search terms (match brand — industrial, real, not fake):

| Section | Search terms | Notes |
|---------|--------------|-------|
| Hero fallback | `industrial gym`, `weight room`, `powerlifting gym` | Dark/moody, red accent lighting acceptable |
| PT | `personal trainer coaching`, `gym coach dumbbell` | Authentic coaching moment, not posed model shoot |
| Nutrition | `meal prep fitness`, `healthy food gym` | Simple, realistic — plate/chicken/rice style |
| 24/7 access | `night gym`, `empty gym late night` | Reinforces round-the-clock USP |
| North Wales local | `Snowdonia`, `Blaenau Ffestiniog`, `Welsh mountains` | Subtle local pride — 1–2 images max, not tourist brochure |

**Placeholder rules:**

- No watermarks, no obviously AI-generated faces
- Prefer photos with natural grain/imperfection
- Replace placeholders with real gym photos as they become available (bi-weekly content cadence)

### Logo

Use existing crest file as master brand asset (`img/Copy of BIG DRAGONS GYM 1 (11).jpg`). Export SVG/PNG variants: full colour, white-on-dark, favicon 32×32.

---

## 5. Site Architecture (SEO-Scalable)

Build for **content growth every 2 weeks** without restructuring.

```
/                          Home (EN default)
/cy/                       Home (Welsh)
/about                     About Big Dragons Gym
/personal-training         PT services (primary money page)
/nutrition                 Nutrition advice & coaching
/membership                24/7 access & membership info
/location                  Find us — map, directions, parking
/contact                   Contact + enquiry form
/blog/                     Blog index (launch with 2–3 posts minimum)
/blog/[slug]               Individual articles (GEO + SEO fuel)
/faq                       FAQ (schema-friendly)
/privacy-policy
/cookies
```

**Welsh URLs:** Mirror under `/cy/` prefix (e.g. `/cy/hyfforddi-personol`, `/cy/bwyd`) with `hreflang` linking.

### Launch Pages (MVP)

1. **Home** — hero, USPs, services teaser, local trust, CTA
2. **Personal Training** — primary SEO landing page
3. **Nutrition** — secondary service page
4. **Contact** — form + click-to-call + map
5. **Location** — GEO page for “gym near me” / Blaenau Ffestiniog
6. **Blog** — 2–3 seed articles (see Section 8)

---

## 6. Page-by-Page Content Direction

### Home

**H1 (EN):** *Big Dragons Gym — 24/7 Fitness in Blaenau Ffestiniog, North Wales*  
**H1 (CY):** *Big Dragons Gym — Campfa 24/7 yn Llan Ffestiniog, Gogledd Cymru*

**Hero subline:** Personal training, nutrition advice, and round-the-clock access — your local gym in the heart of Blaenau Ffestiniog.

**USPs (icon row):**

- Open 24/7
- Personal training with Dei
- Nutrition guidance
- North Wales community gym
- Jerusalem Chapel, High Street — easy to find

**Sections:**

1. Hero (photo + logo + dual CTA: *Book PT* / *Call Dei*)
2. Services overview (3 cards: PT, Nutrition, 24/7 Membership)
3. Why Big Dragons (local, supportive, no-nonsense training)
4. Social proof (IG embed or testimonial placeholders → replace with real reviews)
5. Location strip (address + embedded Google Map)
6. Final CTA band (maroon background, red button)

### Personal Training (Money Page)

**Target keywords:** personal trainer Blaenau Ffestiniog, PT North Wales, gym personal training LL41

**Content blocks:**

- Who Dei is (brief, approachable, expert)
- What sessions include (goal setting, programme design, form coaching)
- Who it’s for (beginners → experienced lifters)
- Pricing / enquiry CTA (no hard prices if not confirmed — “Contact Dei for rates”)
- FAQ snippet (3–5 PT questions)
- Strong sticky mobile CTA: Call / WhatsApp

### Nutrition

**Target keywords:** nutrition advice gym North Wales, fitness nutrition Blaenau Ffestiniog

**Content:** Practical guidance positioning (not medical) — meal planning support, habit coaching, alignment with training goals. Link to PT packages.

### Membership / 24/7 Access

**Target keywords:** 24 hour gym Blaenau Ffestiniog, gym open 24/7 North Wales

**Content:** Access model, what’s included, how to join, safety/access instructions. Emphasise USP vs competitors who close early.

### Location (GEO Page)

**Target keywords:** gym Blaenau Ffestiniog, gym near me LL41, fitness centre High Street Blaenau Ffestiniog

**Must include:**

- Embedded Google Map (correct pin — verify in Google Business Profile)
- Written directions from A470, train station, local landmarks
- Parking info
- “Inside Jerusalem Chapel, 32 High Street” — clarify entrance if different from softplay
- Local area copy (community gym serving Blaenau Ffestiniog, Ffestiniog, Dolwyddelan, Betws-y-Coed corridor, etc.)

### Contact

- Click-to-call: `tel:+447940125381`
- WhatsApp link: `https://wa.me/447940125381`
- Short enquiry form: Name, Phone, Email, Interest (PT / Nutrition / Membership / General), Message
- Social links
- Response expectation: “Dei will get back to you as soon as possible”

### Blog (Scalable Content Engine)

Structure every post with:

- Local keyword in title where natural
- 800–1,200 words
- Internal links to PT, Nutrition, Contact
- Author: Dei / Big Dragons Gym
- FAQ schema where applicable
- EN + CY versions (publish EN first, CY within same sprint or staggered)

---

## 7. Language Selector (Subtle)

**Default:** English

**Implementation:**

- Small text toggle in header nav: `EN | CY` (or `English | Cymraeg`)
- Low visual weight — same size as nav links, no flag icons unless client prefers
- Persist choice in cookie/localStorage
- Full page translation, not partial
- Welsh copy should feel natural (consider professional Welsh translation review for launch)

**hreflang setup:**

```html
<link rel="alternate" hreflang="en-GB" href="https://bigdragonsgym.co.uk/..." />
<link rel="alternate" hreflang="cy-GB" href="https://bigdragonsgym.co.uk/cy/..." />
<link rel="alternate" hreflang="x-default" href="https://bigdragonsgym.co.uk/..." />
```

---

## 8. SEO & GEO Foundation (Built for Scale)

### Technical SEO (Non-Negotiable)

- **Framework:** Next.js (App Router) or similar SSG/ISR for performance + easy content additions
- **Core Web Vitals:** LCP < 2.5s, mobile-first, lazy-loaded images, WebP/AVIF
- **Semantic HTML:** one H1 per page, logical heading hierarchy
- **Meta:** unique title + description per page (EN and CY)
- **Sitemap.xml** + **robots.txt** (auto-generated)
- **Canonical URLs** on all pages
- **Open Graph + Twitter cards** (logo + gym photo)
- **404 page** with nav back to Contact and Home

### Local SEO / GEO

- **Google Business Profile:** NAP must match website exactly
- **LocalBusiness + Gym schema** on every page (JSON-LD):

```json
{
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "name": "Big Dragons Gym",
  "image": "[hero-image-url]",
  "telephone": "+447940125381",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jerusalem Chapel, 32 High Street",
    "addressLocality": "Blaenau Ffestiniog",
    "postalCode": "LL41 3AL",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[verify]",
    "longitude": "[verify]"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/p/Big-Dragons-Gym-61558675053886/",
    "https://www.instagram.com/big_dragon_gym/"
  ],
  "priceRange": "££"
}
```

- **Service schema** on PT and Nutrition pages
- **FAQ schema** on FAQ and service pages
- **BreadcrumbList** schema on inner pages
- Embedded Google Map on Home, Location, Contact

### Target Keyword Clusters (Build Pages + Blog Around These)

**Primary (local):**

- gym Blaenau Ffestiniog
- gym LL41 3AL
- 24 hour gym Blaenau Ffestiniog
- fitness centre Blaenau Ffestiniog

**Secondary (services):**

- personal trainer Blaenau Ffestiniog
- personal training North Wales
- nutrition advice gym Wales
- gym with personal trainer Gwynedd / Snowdonia

**Long-tail (blog fuel):**

- best gym near Blaenau Ffestiniog
- how to start weight training North Wales
- meal prep tips for gym beginners
- 24/7 gym access benefits

### Bi-Weekly SEO Workflow (Architecture Must Support)

1. **CMS or MDX blog** — add posts without developer (Sanity, Contentful, or `/content/blog/*.mdx`)
2. **Template-based landing pages** — e.g. `/areas/[town]` for future GEO pages (Ffestiniog, Dolwyddelan, Penrhyndeudraeth)
3. **Component library** for reusable SEO blocks: FAQ accordion, CTA strip, local area mention, internal link modules
4. **Analytics:** Google Analytics 4 + Google Search Console from day one
5. **Conversion tracking:** form submits, tel: clicks, WhatsApp clicks
6. **Review integration path:** future Google reviews widget / testimonial section

---

## 9. Lead Generation UX

### Persistent Mobile CTA Bar

Fixed bottom bar on mobile:

- **Call Dei** | **WhatsApp** | **Enquire**

### Above-the-Fold CTAs (Every Key Page)

- Primary: red button — “Book Personal Training” → Contact with PT pre-selected
- Secondary: outline/white — “Call +44 7940 125381”

### Form Design

- Minimal fields (reduce friction)
- GDPR checkbox + link to Privacy Policy
- Success state with phone fallback
- Optional: integrate Calendly later for PT bookings

### Trust Signals

- “24/7 Access” badge
- “North Wales” local badge
- Social follow counts / recent IG grid (3×3)
- Real photos > stock
- Clear contact with named person (Dei) — personal, local, trustworthy

---

## 10. Design System Summary

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-red` | `#C62828` | CTAs, links, accents |
| `--color-maroon` | `#4A1212` | Header/footer, dark sections |
| `--color-maroon-light` | `#6B1F1F` | Hover states |
| `--color-white` | `#FFFFFF` | Text on dark, backgrounds |
| `--color-black` | `#1A1A1A` | Body text |
| `--color-gray-100` | `#F5F5F5` | Alternate section bg |
| Border radius | `4px` (sharp) or `8px` max | Match angular brand |
| Button | Red fill, white text, bold uppercase tracking | Primary actions |
| Section padding | `py-16 md:py-24` | Generous breathing room |

**Avoid:** neon gradients, generic purple fitness branding, overly rounded “app” aesthetic, cheesy stock smiles.

---

## 11. Footer (Sitewide)

```
Big Dragons Gym
Jerusalem Chapel, 32 High Street
Blaenau-Ffestiniog, LL41 3AL

Open 24/7
Call Dei: +44 7940 125381

[Facebook] [Instagram]

Quick links: About | Personal Training | Nutrition | Location | Contact | Blog
Legal: Privacy | Cookies

EN | CY  (subtle language toggle duplicate)
© 2026 Big Dragons Gym. All rights reserved.
```

---

## 12. Launch Checklist

- [ ] Domain + SSL (suggest: `bigdragonsgym.co.uk` or similar — verify availability)
- [ ] Google Business Profile claimed and linked
- [ ] NAP consistent across web, GBP, Facebook, Instagram
- [ ] All images optimised + alt text (keyword-natural, not stuffed)
- [ ] EN + CY core pages live
- [ ] Schema validated (Google Rich Results Test)
- [ ] Sitemap submitted to Search Console
- [ ] GA4 + conversion events firing
- [ ] Mobile click-to-call tested on iOS + Android
- [ ] Map pin verified at Jerusalem Chapel
- [ ] 2–3 blog posts published at launch
- [ ] Social bios link to website

---

## 13. Seed Blog Posts (Launch Content)

1. **“Why Big Dragons Gym is Blaenau Ffestiniog’s 24/7 Fitness Home”** — local GEO anchor post
2. **“Personal Training in North Wales: What to Expect with Dei”** — PT conversion post
3. **“Simple Nutrition Tips to Support Your Gym Goals”** — nutrition service post

Publish Welsh equivalents under `/cy/blog/...` for each.

---

## 14. Suggested Tech Stack (For Builder)

| Layer | Recommendation | Why |
|-------|----------------|-----|
| Framework | **Next.js 14+** (App Router) | SEO, ISR for blog, performance |
| Styling | **Tailwind CSS** | Fast iteration, consistent design tokens |
| i18n | **next-intl** or built-in `[locale]` routing | EN default + CY mirror |
| Content | **MDX** or **Sanity CMS** | Bi-weekly updates without redeploys |
| Forms | **Resend + API route** or **Formspree** | Lead capture to Dei’s email |
| Maps | Google Maps embed + schema coordinates | Local SEO |
| Hosting | **Vercel** | Edge CDN, preview deploys |
| Images | `next/image` + WebP | Core Web Vitals |

---

## 15. Copy Tone Guide

**Voice:** Direct, motivating, local, no jargon. Friendly but serious about training.

**EN example:** *“Train on your schedule. Big Dragons Gym is open 24/7 — with personal training and nutrition support from Dei when you want expert guidance.”*

**CY example:** *“Hyffordd ar eich amser chi. Mae Big Dragons Gym ar agor 24/7 — gyda hyfforddi personol a chymorth bwyta iach gan Dei pan fyddwch chi eisiau arweiniad arbenigol.”*

**Avoid:** Generic “transform your life” fitness clichés, medical nutrition claims, confusing the gym with Little Dragons Softplay.

---

## 16. Builder Prompt (Paste-Ready Summary)

> Build a modern, mobile-first Next.js website for **Big Dragons Gym**, a 24/7 fitness gym at **Jerusalem Chapel, 32 High Street, Blaenau-Ffestiniog, LL41 3AL**. Contact: **Dei, +44 7940 125381**. Extend the existing crest logo branding: crimson red `#C62828`, deep maroon `#4A1212`, white, black, bold athletic typography, angular shield-inspired UI accents. Primary goal: **local SEO lead generation** for personal training and nutrition advice in Blaenau Ffestiniog and North Wales. Use real photos from [Facebook](https://www.facebook.com/p/Big-Dragons-Gym-61558675053886/) and [Instagram @big_dragon_gym](https://www.instagram.com/big_dragon_gym/); where media is missing, use copyright-free Unsplash/Pexels placeholders (industrial gym, authentic PT coaching — nothing fake or overly polished). English default with full Welsh (`/cy/`) mirror; subtle `EN | CY` toggle in nav. Include: Home, Personal Training, Nutrition, Membership (24/7), Location, Contact, Blog, FAQ, Privacy. Implement LocalBusiness/ExerciseGym schema, hreflang, sitemap, GA4 events (call, form, WhatsApp). Architecture must support bi-weekly blog/SEO additions via CMS or MDX. Design: clean, professional, eyecatching, conversion-focused with sticky mobile CTAs (Call, WhatsApp, Enquire). Clarify this is a gym, distinct from Little Dragons Softplay in the same building.

---

*Document created: July 2026*
