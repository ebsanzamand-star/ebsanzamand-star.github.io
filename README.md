# ebsanzaman.me — v4

Filmmaker · Cinematographer · Editor

## Pages
- `index.html`              — Home (hero, reel placeholder, logo ticker, featured work)
- `about.html`               — About (portrait, BTS placeholders, bio, toolkit tags, CV, timeline)
- `portfolio.html`           — Portfolio (filterable grid with still placeholders)
- `academic.html`            — Academic hub (intro + stats → Portfolio Report / Internship Report)
- `academic-portfolio.html`  — Grid of 14 academic projects
- `academic/*.html`          — One page per academic project (video / scrollable-PDF viewer + overview)
- `academic-internship.html` — Internship report (scrollable PDF + overview)
- `contact.html`             — Contact form + social links

Note: the old `expertise.html` page was folded into `about.html` (Toolkit tag list) — there is no
longer a separate Expertise nav item, matching the site map.

## How to add your materials

### Showreel video (index.html)
Find the comment `<!-- TO ADD REEL -->` and replace with:
```html
<iframe width="100%" height="100%" style="border:none;display:block"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1"
  allow="autoplay; fullscreen" allowfullscreen></iframe>
```

### Film stills / photos (portfolio.html + index.html)
1. Create a `stills/` folder in the repo.
2. Add your JPG/PNG files there.
3. Find each `<!-- ADD STILL -->` comment and replace the placeholder `div.port-thumb-ph` with:
```html
<img src="stills/filename.jpg" alt="Film title">
```

### Behind-the-scenes photos (about.html)
Find the `bts-ph` divs and replace with `<img>` tags pointing to your photos.

### Toolkit tags (about.html)
Edit the `.tag-cloud` list under `#expertise` directly — add/remove `<span class="tag-pill">`.

### CV (about.html)
Two placeholder pages sit side by side under `#cv`. Either:
- export your CV as two JPGs and swap each `.cv-page.ph` div for `<img src="cv-page1.jpg" alt="CV page 1">`, or
- keep it as a PDF and embed each page: `<embed src="cv.pdf#page=1" type="application/pdf">`
Also add `cv.pdf` to the repo root so the "Download Full CV" button works.

### Academic project pages (academic/*.html)
Each project page already has an overview. For projects without a video, find the
`.doc-viewer.tall.ph` placeholder and replace it with a PDF embed:
```html
<div class="doc-viewer tall">
  <embed src="../academic-materials/your-file.pdf" type="application/pdf">
</div>
```

### Internship report (academic-internship.html)
Add `internship-report.pdf` to the repo, then replace the placeholder `.doc-viewer.tall.ph`
block with the embed shown in the comment right below it.

### Brand logos (index.html)
Find `<span class="logo-ph">Oxfam</span>` etc. and replace with:
```html
<img src="logos/oxfam.png" alt="Oxfam" style="height:32px;filter:brightness(0) invert(.5)">
```

### Contact form (contact.html)
1. Sign up free at formspree.io
2. Create a form, copy your form ID
3. Replace `YOUR_FORM_ID` in the form action URL

### Instagram / social links (contact.html)
Find `<!-- ADD: Instagram -->` and add your links.

## Deploy
Push to `main` branch — GitHub Pages serves automatically via CNAME.
