// Crear array de pelis de Junio 2021
const peliculasJunio21 = peliculasCards.slice().sort((a) => a.fecha_vista.getFullYear() === 2021 && a.fecha_vista.getMonth() === 5);
console.log(peliculasJunio21);

// Busca las películas de Julio 2021
document.getElementById('pelis_junio_21').innerHTML = `
${peliculasJunio21.map(function(pelicula_card){
    if(pelicula_card.fecha_vista.getMonth() === 7){
        return `
        <div class="card card-pelicula col-12 col-lg-6">
            <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
            <div class="card-body card-pelicula__contenido">
                <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
            </div>
        </div>
        `;    
    }
}).join('')}`;


// Crear array de pelis de Julio 2021
const peliculasJulio21 = peliculasCards.slice().sort((a) => a.fecha_vista.getMonth() === 6);
console.log(peliculasJulio21);

// Busca las películas de Julio 2021
document.getElementById('pelis_julio_21').innerHTML = `
${peliculasJulio21.map(function(pelicula_card){
    if(pelicula_card.fecha_vista.getMonth() === 7){
        return `
        <div class="card card-pelicula col-12 col-lg-6">
            <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
            <div class="card-body card-pelicula__contenido">
                <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
            </div>
        </div>
        `;    
    }
}).join('')}`;
