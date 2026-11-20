# Norm Warehouse — redesign: design and plan

Status: **proposal, nothing built yet.** Approve or amend, then build.

## 1. What we take from each reference

| Source | Steal | Leave |
| --- | --- | --- |
| **maker.dk** | Light, airy page. Small label in a left column, big text in a right column (editorial rows). Hairline rules. Pill CTA in the nav. One loud full-bleed accent band. Tight grotesk type. Accordion/list rows. | Danish multi-tier mega-nav (we have 5 sections, not 7 menus). Corporate "Ventures" tone. |
| **worco.org.au** | Co-op voice: members are the point. Dark inverted section for members. Photo grid of people at work. Plain "apply here" CTA. Vacancy notice as a banner. | Centre-aligned serif-ish text blocks, popup modal on load, low-contrast grey on black. |

**Result:** a one-page, light editorial site with a dark "people" chapter and one coral accent band. Warehouse / signage feel, not startup feel.

## 2. Design language

**Palette** (one accent only)

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#121211` | text, dark sections |
| `--paper` | `#f4f2ec` | page background (warm, matches the timber photos) |
| `--paper-2` | `#e7e4da` | cards, alt rows |
| `--accent` | `#e0716b` | accent band, CTA pill, highlights (coral, as on the previous site) |
| `--line` | `rgba(18,18,17,.22)` | hairlines |

Accent is a single token. Swap to coral `#e0716b` (current site) if coral is too much.

**Type**
- Display and body: a neo-grotesk (Inter Tight / "Archivo" variable, self-hosted). Weights 400 and 600 only.
- Display: tight tracking (-0.03em), line-height 0.95, sizes `clamp(3rem, 9vw, 9rem)` for H1, `clamp(2rem, 4vw, 3.5rem)` for H2.
- Body 18px/1.55, max 62ch. Labels 13px uppercase, +0.06em tracking.
- Prices, dimensions, counts in tabular numerals.

**Layout**
- 12-col grid, gutter `clamp(1.25rem, 4vw, 4.5rem)`.
- Editorial row: cols 1–3 = label (`01 — Join`), cols 4–12 = content. Collapses to stacked below 800px.
- Hairline between every row. No cards with shadows, no rounded corners except the pill buttons.
- Photos: full-bleed or edge-to-edge in the grid, sharp corners, slight warm grade preserved (they already look good).

**Components**
- Pill button (ink, or accent on dark). Text link with ↗ arrow (already in `main.css`).
- Sticky header: logo left, 5 anchor links, pill "Enquire" right. Mobile: full-screen menu (already exists in `App.vue`).
- Stat strip: `13 studios · 2 workshop managers · 24/7 access · since 2012`.
- Accordion rows (`<details>`) for membership inclusions and FAQ-style content.
- Marquee-free tool strip: horizontal scroll-snap row of machine photos with a caption.

**Motion:** fade/rise on scroll (IntersectionObserver), 300ms ease-out; hover = image scale 1.03; everything off under `prefers-reduced-motion`.

## 3. Page structure (single page, anchor nav)

Nav: **About · Join · History · Members · Get something made** + pill **Enquire** (mailto).

| # | Section | Surface | Layout | Content |
| --- | --- | --- | --- | --- |
| 0 | **Hero** | photo, dark overlay | Full-bleed image, H1 "Norm Warehouse", subline "Creative studios and communal workshop", stat strip at bottom | `home-hero.webp` |
| 1 | **About** | paper | Editorial row. Right col: the 4 intro paragraphs, key phrases (gender inclusive, queer friendly, non-profit) bolded. Below: front half / back half split — two photos + floorplan | `DSCF0702` (lounge/kitchen, front half), `DSCF0691` (machinery, back half), `norm-floorplan.webp` |
| 1b | **Tool strip** | paper-2 | Scroll-snap row, 8 captioned machines | `DSCF0664` bandsaw, `0666` jointer, `0675` thicknesser, `0679` router table, `0681` belt sander, `0683` drill press, `0688` welding bay, `0686` hand tools |
| 2 | **Join the community** | **accent band** (the maker.dk "Work with us" moment) | Left: H2 + co-op paragraph. Right: two big price tiles side by side — **Studio $370/mo, ~6 sqm, shared by 2–3** and **Workshop membership $220/mo, 5 places, no studio**. Inclusions as hairline list. "Who we cater for / don't" as two short columns. CTA: `Email us` + prompt "Tell us a bit about yourself and what you want to do at Norm" (mailto with that subject, no form). Footnote: "Prices as of Jan 2027". | `hero-studios.webp` (maker drilling), `DSCF0659` (booth) |
| 3 | **History** | paper | Vertical timeline with year markers: **2012** founders + Breese St Brunswick, **2015** Coburg North move + working bees, **Pandemic / Merri-Bek Council**, **Today**. Pull quote: "…instead of buying a shitty drill for one job." (maybe soften — your call). Flyer slot for "creative advertising (see flyer)". | `DSCF0657` (NORM entrance sign), `DSCF0658` (courtyard). **Missing:** the flyer, Brunswick photo |
| 4 | **Our members** | **ink (dark)**, the Worco chapter | Filterable grid (All / Wood / Metal / Design / Art). Card: still image, name, discipline tags, one-line bio, link. 3-up desktop, 1-up mobile. Scaffolded with 6 placeholder entries driven by `src/data/members.js` | **Placeholder stills** from existing workshop shots, marked `placeholder: true` |
| 5 | **Get something made** | paper-2 | Big H2, 2 cols: copy left, photo right, `Tell us what you need` mailto CTA. | `hero-contact.webp` (person at bench) |
| — | **Footer** | ink | Logo (inverted), address 14 Lewis St Coburg North, email, Instagram, Facebook, Acknowledgement if you have one, "Non-profit. Volunteer run." | `norm-logo.png` |

Optional (off by default): vacancy banner above the header, copied from Worco. Dismissible, one line, not a modal. Turn on when a studio is free.

## 4. Image map (existing assets only)

All paths in `public/`. Nothing new needed except where flagged.

- Hero: `home-hero.webp`
- About split: `workshop-images/DSCF0702.jpeg` (front half), `DSCF0691.jpeg` (back half), `norm-floorplan.webp`
- Tool strip: `DSCF0664`, `0666`, `0675`, `0679`, `0681`, `0683`, `0688`, `0686`
- Join: `hero-studios.webp`, `DSCF0659.jpeg`
- History: `DSCF0657.jpeg`, `DSCF0658.jpeg`
- Members placeholders: `hero-workshop.webp`, `hero-contact.webp`, `DSCF0692`, `0696`, `0698`, `0700`
- Get something made: `hero-contact.webp` (+ `DSCF0693` vise as detail)
- Safety detail (optional, About): `DSCF0662.jpeg` PPE wall
- Logo: `norm-logo.png`
- Duplicates: `home-hero` = `hero-about`; `DSCF0693.jpg` (root) = `workshop-images/DSCF0693`. Safe to delete one of each.

Images **not available** and still needed: member portraits/work stills, the old flyer, any Brunswick (Breese St) photo, board/workshop-manager photo.

## 5. Build plan

Stack stays **Vue 3 + Vite + vue-router**; static deploy unchanged (`npm run build:static`).

1. **Tokens and base** — rewrite `src/assets/main.css`: palette, type scale, grid, row/label pattern, pill button, reveal animation, reduced-motion.
2. **Shell** — `App.vue`: sticky header with anchor links and Enquire pill, mobile menu, dark footer. Keep Instagram/Facebook icons.
3. **Home sections as components** — `src/components/sections/`: `HeroSection`, `AboutSection`, `ToolStrip`, `JoinSection`, `HistorySection`, `MembersSection`, `MadeSection`. `HomeView.vue` composes them. Copy lives in the components, verbatim from your content.
4. **Members scaffold** — `src/data/members.js` + `MemberCard.vue`, discipline filter.
5. **Routing** — single page. Old routes `/history /workshop /studios /members /join /get-something-made /contact` redirect to `/#section` so existing links work. Delete the now-unused views.
6. **Images** — convert `DSCF*.jpeg` to webp at 1600px and 800px widths, `srcset` + `loading="lazy"`, explicit width/height to stop layout shift.
7. **Polish and verify** — mobile (375), tablet, desktop; keyboard nav; contrast check on coral and dark sections; Lighthouse; `npm run build:static`; screenshot each section.

Rough size: 1 session, ~10 files touched, no new dependencies except a self-hosted font.

## 6. Open decisions

1. **One page vs keep multi-page?** Recommend one page: the content is five short sections. Existing `/workshop` has 280 lines (equipment lists, classes, inductions) that this content does not cover. Drop or fold into a "Workshop" section later?
2. **Accent:** coral `#e0716b` (chosen).
3. **Contact email** — not in your content. Plan reuses `info@normwarehouse.com.au` from the current site.
4. **Pull quote** with "shitty drill": keep as is or soften for the site?
5. **Members:** go with placeholder stills now, or hide the section until real members supply photos?
