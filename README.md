# ebsanzaman.me — Portfolio

Filmmaker · Cinematographer · Editor

## Structure

```
/
├── index.html      Home (hero, about, skills)
├── work.html       Filmography + professional credits
├── academic.html   14 academic projects with video links
├── contact.html    Contact page
├── style.css       Shared stylesheet
├── photo.jpg       Portrait (97 KB — cached separately)
├── og-image.jpg    Social share image (1200×630)
└── CNAME           Custom domain for GitHub Pages
```

## Deploy

Push to `main` — GitHub Pages serves automatically.
Custom domain is set in CNAME.

## Bugs fixed vs v1

- noscript fallback (all sections visible without JS)
- scroll-padding-top (fixed nav no longer hides headings)
- IntersectionObserver guard (safe on older Android browsers)
- Favicon (inline SVG)
- Meta description on every page
- Open Graph + Twitter Card on every page
- Canonical URL on every page
- Photo extracted to photo.jpg (cacheable, not base64 in HTML)
- Mobile hamburger nav
- Active nav link highlight (rootMargin fix)
- Skip to content link (accessibility)
- aria-labels on nav
- Timecode pauses when hero not in view (battery/perf fix)
- ULAB email added to contact
- All YouTube links from academic portfolio included
- Film cards with YouTube links now clickable
- 4 separate pages instead of 1 long scroll

## Contact

ebsan.zaman.d@gmail.com
