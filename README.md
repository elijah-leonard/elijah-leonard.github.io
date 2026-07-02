# elijah-leonard.github.io

Personal portfolio for Andrew (Elijah) Leonard. Plain static site — no build step.

## Pages
- `index.html` — full-screen **Home** landing (logo, name, tagline, links). No scrolling.
- `portfolio.html` — the content page: About · Projects · How I Work · Career · Field Notes · Contact, with a fixed nav (incl. a **Home** tab) and scroll-spy section highlighting.
- `styles.css`, `main.js`, `assets/` — shared styling, behavior, and images.

## Local preview
```
npx --yes http-server . -p 8000 -c-1
```
Then open http://localhost:8000

## Deploy (GitHub Pages user site)
1. Repo is named **`elijah-leonard.github.io`** (must be public to publish on the free plan).
2. Keep `index.html` at the repo root.
3. Push to `main`.
4. Repo → Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Live at https://elijah-leonard.github.io within a minute or two.

## Still to fill in (placeholders)
- Scheduling URL — search `calendly.com/your-handle` in `index.html` and `portfolio.html` → your Calendly/Cal.com link.
- Book URL — search `example.com/meaning-driven-design` in `portfolio.html` → the published book.
- Career timeline dates/employers — the `.timeline` section in `portfolio.html`.
- Project links/details — the `.projects-grid` cards in `portfolio.html`.
