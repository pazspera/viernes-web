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