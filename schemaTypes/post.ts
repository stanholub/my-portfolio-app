import { defineField, defineType } from "sanity";
import { BiNews } from "react-icons/bi";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: BiNews,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Engineering", value: "Engineering" },
          { title: "AI", value: "AI" },
          { title: "Career", value: "Career" },
          { title: "Tutorials", value: "Tutorials" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(10).max(200),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: 'e.g. "5 min read"',
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        {
          type: "object",
          name: "spotify",
          title: "Spotify Embed",
          fields: [
            {
              name: "url",
              type: "url",
              title: "Spotify Embed URL",
              description:
                "Paste the Spotify embed URL (e.g., https://open.spotify.com/embed/track/...)",
              validation: (rule) =>
                rule
                  .required()
                  .uri({
                    scheme: ["https"],
                    allowRelative: false,
                  })
                  .custom((url: string) => {
                    if (url && !url.includes("open.spotify.com/embed")) {
                      return 'Must be a Spotify embed URL (should contain "open.spotify.com/embed")';
                    }
                    return true;
                  }),
            },
          ],
          preview: {
            select: { url: "url" },
            prepare({ url }) {
              return {
                title: "Spotify Embed",
                subtitle: url,
              };
            },
          },
        },
      ],
    }),
  ],
});
