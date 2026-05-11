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
      type: 'data',
      source: 'random.json',
      schema: z.object({
        movies: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            imdb: z.string(),
            img: z.string(),
          })
        )
      })
    }),
    movies: defineCollection({
      type: 'data',
      source: 'movies.json',
      schema: z.object({
        movies: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            year: z.number(),
            date_seen: z.string(),
            img_card: z.string(),
            img_card_alt: z.string(),
            link_page: z.string(),
            pick: z.string(),
            pick_category: z.string(),
            sinopsis: z.string(),
            director: z.string(),
            duration: z.string(),
            trailer: z.string(),
            trailer_link: z.string(),
            cast: z.array(
              z.object({
                img: z.string(),
                actor: z.string(),
              })
            ),
            img_row: z.array(
              z.object({
                img: z.string(),
                alt: z.string(),
                class: z.string(),
              })
            )
          })
        )
      })
    })
  }
})