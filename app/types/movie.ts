export interface Actor {
  img: string,
  name: string,
}

export interface MovieImage {
  img: string,
  alt: string,
  class: string,
}

export interface Movie {
  id: string,
  name: string,
  year: number,
  date_seen: string,
  img_card: string,
  img_card_alt: string,
  link_page: string,
  pick: string,
  pick_category: string,
  sinopsis: string,
  director: string,
  duration: string,
  trailer: string,
  trailer_link: string,
  cast: Actor[],
  img_row: MovieImage[],
}

export type MovieCard = Pick<Movie, "id" | "name" | "year" | "img_card" | "img_card_alt" | "link_page">