// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx",
        ui: {
          filename: {
            slugify: (values) => (values?.title || "").toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
            ui: {
              dateFormat: "YYYY-MM-DD",
              timeFormat: void 0
            }
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: ["AI", "Art", "Business", "Tools", "Personal"]
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
