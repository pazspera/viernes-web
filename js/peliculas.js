// Arreglo con todas las películas para las cards
const peliculasCards = [
    {
        id: 'outrage',
        nombre: 'Outrage',
        anio: '2010',
        fecha_vista: new Date(2021, 6, 16),
        img_card: 'img/cards/card_outrage.jpg',
        img_card_alt: 'Dos miembros de a Yakuza mirando a cámara y apuntando con un arma',
        link_pagina: '#',
        pick: 'Geor',
    },
    {
        id: 'brick',
        nombre: 'Brick',
        anio: '2005',
        fecha_vista: new Date(2021, 6, 09),
        img_card: 'img/cards/card_brick.jpg',
        img_card_alt: 'Adolescente hablando en una cabina telefónica de noche',
        link_pagina: '#',
        pick: 'Pollo',
    },
    {
        id: 'holy_motors',
        nombre: 'Holy Motors',
        anio: 2012,
        fecha_vista: new Date(2021, 6, 02),
        img_card: 'img/cards/card_holy_motors.jpg',
        img_card_alt: 'Hombre ciego de un ojo parado frente a un grupo de gente',
        link_pagina: 'peliculas/holy_motors.html',
        pick: 'la democracia',
    },
    {
        id: 'black_rainbow',
        nombre: 'Beyond the Black Rainbow',
        anio: 2010,
        fecha_vista: new Date(2021, 5, 25),
        img_card: 'img/cards/card_black_rainbow.jpg',
        img_card_alt: 'Hombre caminando en un pasillo con una luz roja de fondo',
        link_pagina: 'peliculas/black_rainbow.html',
        pick: 'Loco',
    },
    {
        id: 'rumba',
        nombre: 'Rumba',
        anio: 2008,
        fecha_vista: new Date(2021, 5, 18),
        img_card: 'img/cards/card_rumba.jpg',
        img_card_alt: 'Mujer y hombre bailando en un patio de escuela',
        link_pagina: 'peliculas/rumba.html',
        pick: 'Tutte',
    },
    {
        id: 'ravenous',
        nombre: 'Ravenous',
        anio: 1999,
        fecha_vista: new Date(2021, 5, 11),
        img_card: 'img/cards/card_ravenous.jpg',
        img_card_alt: 'Hombre con ropa manchada de sangre sonriendo en un bosque',
        link_pagina: 'peliculas/ravenous.html',
        pick: 'Paz',
    },
    {
        id: 'only_lovers',
        nombre: 'Only Lovers Left Alive',
        anio: 2013,
        fecha_vista: new Date(2021, 5, 04),
        img_card: 'img/cards/card_only_lovers.jpg',
        img_card_alt: 'Mujer y hombre mirando a cámara con un mosaico de patrones circulares de fondo',
        link_pagina: 'peliculas/only_lovers.html',
        pick: 'Geor',
    },
    {
        id: 'juan_muertos',
        nombre: 'Juan de los muertos',
        anio: 2011,
        fecha_vista: new Date(2021, 4, 28),
        img_card: 'img/cards/card_juan.jpg',
        img_card_alt: 'Hombre agarrado de la cornisa de un balcón y una mujer ayudándolo',
        link_pagina: 'peliculas/juan_muertos.html',
        pick: 'Pollo',
    },
    {
        id: 'time_gypsies',
        nombre: 'Time of the Gypsies',
        anio: 1988,
        fecha_vista: new Date(2021, 4, 21),
        img_card: 'img/cards/card_time_gypsies.jpg',
        img_card_alt: 'Grupo de personas mirando un ritual funerio en un río',
        link_pagina: 'peliculas/time_gypsies.html',
        pick: 'Loco',
    },
];

// Ordenar el array por fecha vista, la más reciente primero
const peliculasCardsOrdenadas = peliculasCards.slice().sort((a, b) => b.fecha_vista - a.fecha_vista);

/* 
    {
        id: 
        nombre:
        anio:
        fecha_vista:
        img_card:
        img_card_alt: 
        link_pagina:
        pick:
    },
*/