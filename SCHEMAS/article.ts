export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() },
    { name: 'date', type: 'datetime', initialValue: () => new Date().toISOString() },
    { name: 'category', type: 'string', options: { list: ['brief','notes-on-art'] }, validation: Rule => Rule.required() },
    { name: 'coverMedia', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', validation: Rule => Rule.required() }] },
    { name: 'body', type: 'array', of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', validation: Rule => Rule.required() }] },
      ]
    },
    { name: 'gallery', type: 'array', of: [
        { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string' }] },
        { type: 'file' }
      ]
    },
    { name: 'credits', type: 'text' },
    { name: 'seo', type: 'object', fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'ogImage', type: 'image' }
      ]
    }
  ]
}
