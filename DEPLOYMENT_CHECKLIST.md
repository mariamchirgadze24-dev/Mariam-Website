# Deployment checklist

1) Create Sanity project (studio hosted or embedded). Note projectId & dataset.
2) Add schemas from `SCHEMAS/` and deploy.
3) Create Next.js app; install deps: `next react react-dom sanity @sanity/client @portabletext/react tailwindcss`.
4) Set `.env` with `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`, optional `SANITY_READ_TOKEN` (for preview).
5) Implement queries (see `SANITY_QUERIES.groq`) and pages.
6) Enable ISR and create `/api/revalidate/route.ts`.
7) In Sanity, add a webhook that hits `/api/revalidate` on publish.
8) Deploy to Vercel; add env vars there; connect custom domain.
