# Do Robots Need World Models? — CoRL 2026 Workshop

Static website for the CoRL 2026 workshop **"Do Robots Need World Models? A Debate on
Explicit Prediction, Planning, and End-to-End Robot Learning."**

Plain HTML + CSS + a few lines of vanilla JS — no build step. Hosting on GitHub Pages
just serves the files as-is.

## Structure

```
index.html            All page content (single page).
css/style.css         Styling. Theme colors live in :root at the top.
js/main.js            Mobile nav toggle + disabled placeholder links.
images/
  organizers/         Organizer headshots (400×400, square-cropped).
  sponsors/           Sponsor logos and source notes.
  favicon.svg         Site favicon.
  og-preview.png      1200×630 social/link-preview image.
```

## Editing content (for co-organizers)

Everything is in `index.html`, grouped into clearly-labelled `<section>` blocks:

- **Important Dates** — edit the `#dates` table. All currently marked `TBD`.
- **Invited Speakers** — `#speakers`, one `<article class="speaker">` per speaker.
- **Schedule** — `#schedule` table.
- **Organizers** — `#organizers`, one `<figure class="person">` each; photo path
  points into `images/organizers/`.
- **Call for Papers** — `#cfp`; the OpenReview link is a placeholder (`data-tbd`)
  until the venue is live.
- **Paper Awards** — `#awards` within Call for Papers; prizes for Best Research
  Paper and Best Position Paper.
- **Sponsors** — `#sponsors`; logos link to sponsor websites, with provenance in
  `images/sponsors/SOURCES.md`.

Theme colors (accent green, the three debate-side colors) are CSS variables at the top
of `css/style.css`.

## Placeholders still to fill

- Workshop date & location (waiting on the CoRL 2026 program).
- OpenReview submission link + archival status.
- Important dates.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
