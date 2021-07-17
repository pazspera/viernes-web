document.getElementById('pelis_julio_21').innerHTML = `

${peliculasCardsOrdenadas.map(function(pelicula_card){
    if(pelicula_card.fecha_vista.getMonth() === 7){
        return `
        <div class="card card-pelicula col-12 col-lg-6">
            <img src="${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
            <div class="card-body card-pelicula__contenido">
                <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_pagina}" class=" stretched-link">${pelicula_card.nombre} (${pelicula_card.anio})</a></h2>
            </div>
        </div>
        `;    
    }
}).join('')}`;
