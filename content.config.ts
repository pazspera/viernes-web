import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    test: defineCollection({
      type: 'page',
      source: 'test.json',
      schema: z.array(
        z.object({
          name: z.string(),
          id: z.string(),
          year: z.number(),
        }))
    })
  }
})