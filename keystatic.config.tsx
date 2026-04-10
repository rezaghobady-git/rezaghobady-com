import { config, collection, fields } from "@keystatic/core";

export default config({
  storage:
    process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND === "local"
      ? { kind: "local" }
      : {
          kind: "github",
          repo: {
            owner: "rezaghobady-git",
            name: "rezaghobady-com",
          },
        },

  ui: {
    brand: { name: "rezaghobady.com" },
  },

  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({
          label: "Date",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "AI", value: "AI" },
            { label: "Art", value: "Art" },
            { label: "Business", value: "Business" },
            { label: "Tools", value: "Tools" },
            { label: "Personal", value: "Personal" },
          ],
          defaultValue: "AI",
        }),
        draft: fields.checkbox({ label: "Draft" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
