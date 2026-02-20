import { defineField, defineType } from "sanity";
import { BiShapePolygon } from "react-icons/bi";

export default defineType({
  name: "mermaid",
  title: "Mermaid Diagram",
  type: "object",
  icon: BiShapePolygon,
  fields: [
    defineField({
      name: "code",
      title: "Mermaid Code",
      type: "text",
      rows: 10,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
  ],
  preview: {
    select: {
      code: "code",
    },
    prepare({ code }) {
      return {
        title: "Mermaid Diagram",
        subtitle: code,
      };
    },
  },
});
