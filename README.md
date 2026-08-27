# ebsanzaman.me — v12 "Archive" redesign

Filmmaker · Cinematographer · Editor — Dhaka

New design direction: mulled wine / woodland / antique marble / charcoal smoke /
sandlight / goat milk palette, with a vintage film-grain + color-grade + vignette
filter layered across every page, and a sprocket-hole "film strip" divider as the
site's signature motif.

## Structure
- `index.html` — **one page**, all sections, nav scrolls to each:
  - `#home` — hero
  - `#work` — professional portfolio (filterable grid)
  - `#about` — bio, timeline, toolkit, **CV embed**
  - `#academic-teaser` — intro card linking out to the Academic Projects hub
  - `#contact` — contact form + details
- `academic.html` — **separate page**: hub/grid of all 14 academic projects
- `academic/*.html` — **separate page per project** (14 total). Each has the
  write-up **PDF on the left**, **overview on the right**, per your brief.
- `style.css` — the whole design system (one file, shared by every page)
- `site.js` — nav, hamburger, reveal-on-scroll, active-section highlighting, filter, timecode
- `assets/` — CV, portrait photo, and the 13 academic project PDFs (already copied in and wired up)

## Still to add
1. **`assets/cv.pdf`** — ✅ added, now embedded as a real 2-page viewer in `#about`
   (one `<embed>` per page, via `cv.pdf#page=1` / `#page=2`) plus a download button.
2. **Film stills** — every `port-thumb-ph` placeholder in `index.html` has a comment
   right above it showing the `<img src="...">` to swap in.
3. **Showreel** — removed per your last note; the `#work` section is Portfolio-only now.
4. **Academic project thumbnails** — each of the 14 cards on `academic.html` has a
   `proj-thumb` slot (3:4) with a comment showing the `<img src="assets/academic-thumbs/<slug>.jpg">`
   to drop in; until then it shows an icon placeholder.
5. **Instagram / LinkedIn links** — in the `#contact` section and hero CTA area.
6. **Contact form** — sign up at formspree.io and replace `YOUR_FORM_ID` in the
   form's `action` URL in `index.html`.
7. Project 14 (নূপুর) and three others (Helden, The Symphonic Cacophony, দ্য
   যমজমাট Show) originally had video links — those play as embedded YouTube on the
   left of their project pages already; the rest use their PDF write-up.

## v12.4 correction notes
- Fixed nav-logo consistency: every page (academic.html + all 14 project pages) now
  shows the full "Ebsan Zaman Dipto" — several were still on the shortened "E. Zaman Dipto"
- CV in `#about` is no longer a live PDF viewer/embed — it's now two static page images
  (`assets/cv-pages/page-1.png`, `page-2.png`, rendered from `assets/cv.pdf` at 200dpi)
  shown side by side for viewing; the download button still links to the real `assets/cv.pdf`.
- **আহত পাখি (Ahoto Pakhi) still needs its YouTube link** — no video URL for this one was
  in the original site data, so it couldn't be wired up. Once you share the link, its hub
  card and project page can get the same play-badge/embed treatment as the other 4 videos.

## Deploy
Push to `main` — GitHub Pages serves automatically via `CNAME` (already set to
`ebsanzaman.me`).
