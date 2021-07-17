// Arreglo con todas las películas para las cards
const peliculasCards = [
    {
        id: 'outrage',
        nombre: 'Outrage',
        anio: '2010',
        fecha_vista: new Date(2021,07, 16),
        img_card: 'img/cards/card_outrage.jpg',
        img_card_alt: 'Dos miembros de a Yakuza mirando a cámara y apuntando con un arma',
        link_pagina: '#',
        pick: 'Geor',
    },
    {
        id: 'brick',
        nombre: 'Brick',
        anio: '2005',
        fecha_vista: new Date(2021, 07, 09),
        img_card: 'img/cards/card_brick.jpg',
        img_card_alt: 'Adolescente hablando en una cabina telefónica de noche',
        link_pagina: '#',
        pick: 'Pollo',
    },
    {
        id: 'holy_motors',
        nombre: 'Holy Motors',
        anio: 2012,
        fecha_vista: new Date(2021, 07, 02),
        img_card: 'img/cards/card_holy_motors.jpg',
        img_card_alt: 'Hombre ciego de un ojo parado frente a un grupo de gente',
        link_pagina: 'pages/peliculas/holy_motors.html',
        pick: 'la democracia',
    },
    {
        id: 'black_rainbow',
        nombre: 'Beyond the Black Rainbow',
        anio: 2010,
        fecha_vista: new Date(2021, 06, 25),
        img_card: 'img/cards/card_black_rainbow.jpg',
        img_card_alt: 'Hombre caminando en un pasillo con una luz roja de fondo',
        link_pagina: 'pages/peliculas/black_rainbow.html',
        pick: 'Loco',
    },
    {
        id: 'rumba',
        nombre: 'Rumba',
        anio: 2008,
        fecha_vista: new Date(2021, 06, 18),
        img_card: 'img/cards/card_rumba.jpg',
        img_card_alt: 'Mujer y hombre bailando en un patio de escuela',
        link_pagina: 'pages/peliculas/rumba.html',
        pick: 'Tutte',
    },
    {
        id: 'ravenous',
        nombre: 'Ravenous',
        anio: 1999,
        fecha_vista: new Date(2021, 06, 11),
        img_card: 'img/cards/card_ravenous.jpg',
        img_card_alt: 'Hombre con ropa manchada de sangre sonriendo en un bosque',
        link_pagina: 'pages/peliculas/ravenous.html',
        pick: 'Paz',
    },
    {
        id: 'only_lovers',
        nombre: 'Only Lovers Left Alive',
        anio: 2013,
        fecha_vista: new Date(2021, 06, 04),
        img_card: 'img/cards/card_only_lovers.jpg',
        img_card_alt: 'Mujer y hombre mirando a cámara con un mosaico de patrones circulares de fondo',
        link_pagina: 'pages/peliculas/only_lovers.html',
        pick: 'Geor',
    },
    {
        id: 'juan_muertos',
        nombre: 'Juan de los muertos',
        anio: 2011,
        fecha_vista: new Date(2021, 05, 28),
        img_card: 'img/cards/card_juan.jpg',
        img_card_alt: 'Hombre agarrado de la cornisa de un balcón y una mujer ayudándolo',
        link_pagina: 'pages/peliculas/juan_muertos.html',
        pick: 'Pollo',
    }
];

// Ordenar el array por fecha vista, la más reciente primero
const peliculasCardsOrdenadas = peliculasCards.slice().sort((a, b) => b.fecha_vista - a.fecha_vista);

// Crear un sub-array con las últimas 6 pelis vistas
const ultimas6Peliculas = peliculasCardsOrdenadas.slice(0,6);

// Printear las cards del sub-array 
document.getElementById('peliculas-cards-index').innerHTML = `
${ultimas6Peliculas.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;



/* 
Este mismo array de cards lo puedo usar para crear las cards de cada mes. Que busque primero por año y después por mes. Podría crear sub-arrays para cada año y mes, después printear las cards de ese mes en cada div que tenga como id el año y mes (ej id="junio-2021")
*/