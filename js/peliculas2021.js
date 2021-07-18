// Crear un array con las peliculas de Junio 2021
const peliculasJunio21 = peliculasCardsOrdenadas.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 5);

// Printear las cards del subarray de Julio 2021
document.getElementById('pelis_junio_21').innerHTML = `
${peliculasJunio21.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// Crear un array con las películas de Julio 2021
const peliculasJulio21 = peliculasCardsOrdenadas.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 6);

// Printear las cards del subarray de Julio 2021
document.getElementById('pelis_julio_21').innerHTML = `
${peliculasJulio21.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;