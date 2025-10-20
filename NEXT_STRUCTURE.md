# Next.js (App Router) structure

/app
  /page.tsx                     # Home (masonry feeds)
  /about/page.tsx               # About
  /brief/page.tsx               # Category index
  /notes-on-art/page.tsx        # Category index
  /articles/[slug]/page.tsx     # Article detail
  /portfolio/page.tsx           # Portfolio index (+ statement)
  /portfolio/[slug]/page.tsx    # Portfolio detail
  /api/revalidate/route.ts      # ISR revalidation webhook
  /rss.xml/route.ts             # RSS feed
  /sitemap.xml/route.ts         # Sitemap
/components                     # Card, Media, MasonryFeed, Grid3x3, Grid4x4, Pagination, RichText
/lib                            # sanity.client.ts, queries.ts, utils.ts
/styles                         # Tailwind or CSS modules

Notes:
- Use Server Components for data fetching.
- Cache with ISR; revalidate on publish.
