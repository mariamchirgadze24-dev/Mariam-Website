# Component specs

## <Media>
- Props: `media` (image/file), `alt`, `priority?`
- Renders `next/image` for images and `<video muted loop playsInline autoPlay>` for short videos.
- Converts GIFs to MP4/WebM if available; fallback to GIF.

## <Card.Article>
- Shows cover, title, date, category; click to /articles/[slug].
- Landscape thumb (min 3:2) with object-fit: cover.

## <Card.Portfolio>
- Portrait thumb; click to /portfolio/[slug].

## <MasonryFeed>
- Uniform column width, variable card height.
- Accepts array of articles/portfolio items.

## <Grid3x3> and <Grid4x4>
- Strict grids with pagination controls (SSR links).

## <RichText>
- Portable Text renderer; supports images with captions/alt.
