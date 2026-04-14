import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/portfolio/**/*.md",
      schema: z.object({
        date: z.date(),
      }),
    }),
    github: defineCollection({
      type: "data",
      source: "github/*.md",
      schema: z.object({
        contributions: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
            description: z.string().optional(),
            languages: z.array(z.string()).optional(),
          }),
        ),
      }),
    }),
  },
});
