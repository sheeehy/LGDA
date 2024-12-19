
import { defineType, defineField } from "sanity";

export const paragraphType = defineType({
    name: "introductionParagraph",
  title: "Conference Paragraph",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
    }),
  ],
});
