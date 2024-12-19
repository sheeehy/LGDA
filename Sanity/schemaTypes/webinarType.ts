import { defineType, defineField } from 'sanity'

type MediaParent = { type?: 'pdf' | 'video' }

export const webinarType = defineType({
  name: 'webinar',
  title: 'Webinar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [
        defineField({
          name: 'mediaItem',
          title: 'Media Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'PDF', value: 'pdf' },
                  { title: 'Video', value: 'video' },
                ],
              },
              validation: (Rule) =>
                Rule.required().custom((type) => {
                  if (type !== 'pdf' && type !== 'video') {
                    return 'Type must be either "pdf" or "video"'
                  }
                  return true
                }),
            }),
            defineField({
              name: 'file',
              title: 'File',
              type: 'file',
              hidden: ({ parent }) => (parent as MediaParent)?.type !== 'pdf',
              validation: (Rule) =>
                Rule.custom((file, context) => {
                  const parent = context.parent as MediaParent
                  if (parent?.type === 'pdf' && !file) {
                    return 'PDF file is required for PDF type'
                  }
                  return true
                }),
            }),
            defineField({
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              hidden: ({ parent }) => (parent as MediaParent)?.type !== 'video',
              validation: (Rule) =>
                Rule.uri({ scheme: ['http', 'https'] }).custom((url, context) => {
                  const parent = context.parent as MediaParent
                  if (parent?.type === 'video' && !url) {
                    return 'Video URL is required for video type'
                  }
                  return true
                }),
            }),
          ],
        }),
      ],
    }),
  ],
})
