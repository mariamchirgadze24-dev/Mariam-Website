# Content model (Sanity)

## Article
- `title: string` (required)
- `slug: slug` (auto from title, required)
- `date: datetime` (default now)
- `category: enum('brief', 'notes-on-art')` (required)
- `coverMedia: image | file(video)` (required)
- `body: richText` (Portable Text; supports inline images+captions)
- `gallery: media[]` (optional, images/video)
- `credits: text` (optional)
- `seo: { title, description, ogImage }` (optional)

## PortfolioItem
- `title: string` (required)
- `slug: slug` (required)
- `date: datetime`
- `heroMedia: image | file(video)` (required)
- `body: richText` (short description)
- `pressLinks: [{label, url}]` (optional)
- `tags: string[]` (optional)
- `seo: {...}` (optional)

## Page (About)
- `title: string`
- `slug: 'about'`
- `content: richText`

## SiteSettings
- `siteTitle`, `description`, `socialLinks[]`, `defaultOG`
