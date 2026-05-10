import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    test: defineCollection({
      type: 'data',
      source: 'test.json',
      schema: z.object({
        name: z.string(),
        id: z.string(),
        year: z.number(),
      })
    })
  }
})