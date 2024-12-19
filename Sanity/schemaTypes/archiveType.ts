import {defineType, defineField} from 'sanity'

export const archiveType = defineType({
    name: 'archiveType',
  title: 'Archive File',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        storeOriginalFilename: true
      }
    })
  ]
})
