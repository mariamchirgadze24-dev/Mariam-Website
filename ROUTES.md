# Routes & pagination

- Home: `/` — masonry feeds (Latest Articles, From Portfolio)
- Category indexes:
  - `/brief` — 3x3 grid, 9 per page, `?page=1..N`
  - `/notes-on-art` — same
- Articles: `/articles/[slug]`
- Portfolio index: `/portfolio` — 4x4 grid, 16 per page
- Portfolio detail: `/portfolio/[slug]`
- About: `/about`
- System: `/rss.xml`, `/sitemap.xml`, custom 404
