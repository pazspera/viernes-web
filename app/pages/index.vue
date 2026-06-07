<script setup lang="ts">
import type { Movie } from "~/types/movie.ts";
import type { RandomPoster } from "~/types/random";

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
      "name": "Sofia Boutella"
    },
    {
      "img": "cast_2.jpg",
      "name": "Romain Guillermic"
    },
    {
      "img": "cast_3.jpg",
      "name": "Kiddy Smile"
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

const exampleMovies: Movie[] = [
  {
    "id": "tokyo_godfathers",
    "name": "Tokyo Godfathers",
    "year": 2003,
    "date_seen": "2020-07-03T03:00:00.000Z",
    "img_card": "/img/cards/card_tokyo_godfathers.jpg",
    "img_card_alt": "Pareja con una niña y un bebé hablando",
    "link_page": "tokyo_godfathers.html",
    "pick": "Geor",
    "pick_category": "Geor",
    "sinopsis": "En Noche Buena, tres personas sin hogar en las calles de Tokyo encuentran a un recién nacido entre la basura e intentan encontrar a sus padres.",
    "director": "Satoshi Kon",
    "duration": "1h 33min",
    "trailer": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ZL_2E-HfIZY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    "trailer_link": "https://www.youtube.com/watch?v=ZL_2E-HfIZY",
    "cast": [
      {
        "img": "cast_1.jpg",
        "name": "Tôru Emori"
      },
      {
        "img": "cast_2.jpg",
        "name": "Yoshiaki Umegaki"
      },
      {
        "img": "cast_3.jpg",
        "name": "Aya Okamoto"
      }
    ],
    "img_row": [
      {
        "img": "img_1.jpg",
        "alt": "Tres personas cuidando un bebé",
        "class": "always_show"
      },
      {
        "img": "img_2.jpg",
        "alt": "Chica con un sombrero parada entre las góndolas de un supermercado",
        "class": "always_show"
      },
      {
        "img": "img_3.jpg",
        "alt": "Hombre mayor tomando alcohol sobre bolsas de basura",
        "class": "hidden_first"
      }
    ]
  },
  {
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
        "name": "Sofia Boutella"
      },
      {
        "img": "cast_2.jpg",
        "name": "Romain Guillermic"
      },
      {
        "img": "cast_3.jpg",
        "name": "Kiddy Smile"
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
  },
  {
    "id": "trainspotting",
    "name": "Trainspotting",
    "year": 1996,
    "date_seen": "2020-06-19T03:00:00.000Z",
    "img_card": "/img/cards/card_trainspotting.jpg",
    "img_card_alt": "Tres hombres comiendo papas fritas y hablando",
    "link_page": "trainspotting.html",
    "pick": "Loco",
    "pick_category": "Loco",
    "sinopsis": "Renton, inmerso en el mundo de las drogas de Edimburgo, intenta desintoxicarse.",
    "director": "Danny Boyle",
    "duration": "1h 33min",
    "trailer": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/8LuxOYIpu-I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    "trailer_link": "https://www.youtube.com/watch?v=8LuxOYIpu-I&feature=emb_imp_woyt",
    "cast": [
      {
        "img": "cast_1.jpg",
        "name": "Ewan McGregor"
      },
      {
        "img": "cast_2.jpg",
        "name": "Jonny Lee Miller"
      },
      {
        "img": "cast_3.jpg",
        "name": "Ewen Bremmer"
      },
      {
        "img": "cast_4.jpg",
        "name": "Robert Carlyle"
      },
      {
        "img": "cast_5.jpg",
        "name": "Kevin McKidd"
      }
    ],
    "img_row": [
      {
        "img": "img_1.jpg",
        "alt": "Cinco hombres en una cancha de fútbol posando delante de una pelota",
        "class": "always_show"
      },
      {
        "img": "img_2.jpg",
        "alt": "Hombre sentado con las piernas cruzadas frente a una cama",
        "class": "always_show"
      },
      {
        "img": "img_3.jpg",
        "alt": "Hombre reflejado en varios espejos",
        "class": "hidden_first"
      }
    ]
  },
]

const random: RandomPoster[] = [
  {
    "id": "poster_northman",
    "name": "The Northman",
    "imdb": "https://www.imdb.com/title/tt11138512",
    "src": "/img/posters/poster_northman.jpg"
  },
  {
    "id": "poster_men",
    "name": "Men",
    "imdb": "https://www.imdb.com/title/tt13841850/",
    "src": "/img/posters/poster_men.jpg"
  },
  {
    "id": "poster_misery",
    "name": "Misery",
    "imdb": "https://www.imdb.com/title/tt0100157",
    "src": "/img/posters/poster_misery.jpg"
  },
  {
    "id": "poster_get_out",
    "name": "Get Out",
    "imdb": "https://www.imdb.com/title/tt5052448/",
    "src": "/img/posters/poster_get_out.jpg"
  },
]

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

      <div class="grid grid-cols-12 gap-4 my-6">
        <RandomPoster v-for="poster in random" :poster="poster" />
      </div>
    </div>

    <MovieCast :cast="exampleMovie.cast" :movieId="exampleMovie.id" />

    <CardGrid :movies="exampleMovies" />

    <TypographyChart class="mb-32" />
  </div>
</template>
