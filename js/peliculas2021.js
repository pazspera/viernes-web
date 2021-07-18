// ENERO 2021
// Crear un array con las peliculas de Mayo 2021
const peliculasEnero21 = peliculasCards.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 0);

// Ordenar películas, la más vieja primero
peliculasEnero21.sort((a,b) => a.fecha_vista - b.fecha_vista);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_enero_21').innerHTML = `
${peliculasEnero21.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// FEBRERO 2021
// Crear un array con las peliculas de Mayo 2021
const peliculasFebrero21 = peliculasCards.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 1);

// Ordenar películas, la más vieja primero
peliculasFebrero21.sort((a,b) => a.fecha_vista - b.fecha_vista);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_febrero_21').innerHTML = `
${peliculasFebrero21.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// MARZO 2021
// Crear un array con las peliculas de Mayo 2021
const peliculasMarzo21 = peliculasCards.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 2);

// Ordenar películas, la más vieja primero
peliculasMarzo21.sort((a,b) => a.fecha_vista - b.fecha_vista);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_marzo_21').innerHTML = `
${peliculasMarzo21.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// ABRIL 2021
// Crear un array con las peliculas de Mayo 2021
const peliculasAbril21 = peliculasCards.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 3);

// Ordenar películas, la más vieja primero
peliculasAbril21.sort((a,b) => a.fecha_vista - b.fecha_vista);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_abril_21').innerHTML = `
${peliculasAbril21.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// MAYO 2021
// Crear un array con las peliculas de Mayo 2021
const peliculasMayo21 = peliculasCards.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 4);

// Ordenar películas, la más vieja primero
peliculasMayo21.sort((a,b) => a.fecha_vista - b.fecha_vista);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_mayo_21').innerHTML = `
${peliculasMayo21.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// JUNIO 2021
// Crear un array con las peliculas de Junio 2021
const peliculasJunio21 = peliculasCards.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 5);

// Ordenar películas, la más vieja primero
peliculasJunio21.sort((a,b) => a.fecha_vista - b.fecha_vista);

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

// JULIO 2021
// Crear un array con las películas de Julio 2021
const peliculasJulio21 = peliculasCards.filter(a => a.fecha_vista.getFullYear() == 2021 && a.fecha_vista.getMonth() == 6);

// Ordenar películas, la más vieja primero
peliculasJulio21.sort((a,b) => a.fecha_vista - b.fecha_vista);

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