<script setup lang="ts">
import type { Movie } from "~/types/movie.ts";

const exampleMovie: Movie = {
  "id": "climax",
  "name": "Climax",
  "year": 2018,
  "date_seen": "2020-06-26T03:00:00.000Z",
  "img_card": "/img/cards/card_climax.jpg",
  "img_card_alt": "Televisor antiguo con vhs al costado y una mujer hablando en la pantalla",
  "link_page": "climax.html",
  "pick": "Loco",
  "pick_category": "Loco",
  "sinopsis": "Uno grupo de bailarines franceses se reúne en una escuela abandonada y remota para ensayar en una noche invernal. Una fiesta que iba a durar toda la noche se transforma en una pesadilla plagada de alucinaciones cuando descubren que su sangría está envenenada con LSD.",
  "director": "Gaspar Noé",
  "duration": "1h 37min",
  "trailer": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Hi69nL_VrTE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
  "trailer_link": "https://www.youtube.com/watch?v=Hi69nL_VrTE",
  "cast": [
    {
      "img": "cast_1.jpg",
      "actor": "Sofia Boutella"
    },
    {
      "img": "cast_2.jpg",
      "actor": "Romain Guillermic"
    },
    {
      "img": "cast_3.jpg",
      "actor": "Kiddy Smile"
    }
  ],
  "img_row": [
    {
      "img": "img_1.jpg",
      "alt": "Mujer en un baño oscuro lavándose las manos",
      "class": "always_show"
    },
    {
      "img": "img_2.jpg",
      "alt": "Bowl de sangría",
      "class": "always_show"
    },
    {
      "img": "img_3.jpg",
      "alt": "Mujer caminando por un pasillo, la imagen está invertida y parece estar caminando en el techo",
      "class": "hidden_first"
    }
  ]
};
</script>

<template>
  <div class="bg-accent-100">
    <div class="container mx-auto px-4 my-6">
      <div class="grid grid-cols-12 gap-4 mt-12">
        <div class="col-span-3">
          <ButtonPrimary to="/">Button test</ButtonPrimary>
        </div>
        <div class="col-span-6">
          <CardMovie :movie="exampleMovie" />
        </div>
      </div>
    </div>
    <TypographyChart />
  </div>
</template>
