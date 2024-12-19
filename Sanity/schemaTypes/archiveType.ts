import { defineType, defineField } from 'sanity'

export const archiveType = defineType({
  name: 'archiveType',
  title: 'Conference Archive File',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1900).max(new Date().getFullYear()),
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        storeOriginalFilename: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
