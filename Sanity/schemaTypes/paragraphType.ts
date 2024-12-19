import { defineType, defineField } from 'sanity'

export const paragraphType = defineType({
  name: 'introductionParagraph',
  title: 'Members Area Paragraph',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
