export default {
  name: 'portfolioItem',
  type: 'document',
  title: 'Portfolio Item',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() },
    { name: 'date', type: 'datetime' },
    { name: 'heroMedia', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', validation: Rule => Rule.required() }] },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    { name: 'pressLinks', type: 'array', of: [{ type: 'object', fields: [
        { name: 'label', type: 'string' },
        { name: 'url', type: 'url' }
      ]}] },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'seo', type: 'object', fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'ogImage', type: 'image' }
      ]
    }
  ]
}
