import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    test: defineCollection({
      type: 'data',
      source: 'test.json',
      schema: z.object({
        movies: z.array(
          z.object({
            name: z.string(),
            id: z.string(),
            year: z.number(),
          })
        )
      })
    }),
    random: defineCollection({
      type: 'page',
      source: 'random.json',
      schema: z.object({
        id: z.string(),
        name: z.string(),
        imdb: z.string(),
        img: z.string(),
      })
    })
  }
})