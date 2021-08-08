// Ordenar el array por fecha vista, la más reciente primero
const peliculasCardsOrdenadas = peliculasCards.slice().sort((a, b) => b.date_seen - a.date_seen);

// Crear un sub-array con las últimas 6 pelis vistas
const ultimas6Peliculas = peliculasCardsOrdenadas.slice(0,6);

// Printear las cards del sub-array 
document.getElementById('peliculas-cards-index').innerHTML = `
${ultimas6Peliculas.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="pages/${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// Actualizar hero index con los datos de la última película vista
document.getElementById('hero_index').innerHTML = `
    <div class="hero" id="${peliculasCardsOrdenadas[0].id}">
        <div class="hero__cartel">
            <p class="hero__leyenda">El viernes pasado vimos</p>
            <h3 class="hero__titulo">${peliculasCardsOrdenadas[0].name} (${peliculasCardsOrdenadas[0].year})</h3>
        </div>
    </div>
`;