// Mayo 2020
// Crear un array con las peliculas de Mayo 2021
const peliculasMayo20 = peliculasCards.filter(a => a.date_seen.getFullYear() == 2020 && a.date_seen.getMonth() == 4);

// Ordenar películas, la más vieja primero
peliculasMayo20.sort((a,b) => a.date_seen - b.date_seen);

// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_mayo_20').innerHTML = `
${peliculasMayo20.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name:} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// Junio 2020
// Crear un array con las peliculas de Mayo 2021
const peliculasJunio20 = peliculasCards.filter(a => a.date_seen.getFullYear() == 2020 && a.date_seen.getMonth() == 5);

// Ordenar películas, la más vieja primero
peliculasJunio20.sort((a,b) => a.date_seen - b.date_seen);

// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_junio_20').innerHTML = `
${peliculasJunio20.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name:} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// Julio 2020
// Crear un array con las peliculas de Mayo 2021
const peliculasJulio20 = peliculasCards.filter(a => a.date_seen.getFullYear() == 2020 && a.date_seen.getMonth() == 6);

// Ordenar películas, la más vieja primero
peliculasJulio20.sort((a,b) => a.date_seen - b.date_seen);

// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_julio_20').innerHTML = `
${peliculasJulio20.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name:} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// Agosto 2020
// Crear un array con las peliculas de Mayo 2021
const peliculasAgosto20 = peliculasCards.filter(a => a.date_seen.getFullYear() == 2020 && a.date_seen.getMonth() == 7);

// Ordenar películas, la más vieja primero
peliculasAgosto20.sort((a,b) => a.date_seen - b.date_seen);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_agosto_20').innerHTML = `
${peliculasAgosto20.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name:} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// Septiembre 2020
// Crear un array con las peliculas de Mayo 2021
const peliculasSeptiembre20 = peliculasCards.filter(a => a.date_seen.getFullYear() == 2020 && a.date_seen.getMonth() == 8);

// Ordenar películas, la más vieja primero
peliculasSeptiembre20.sort((a,b) => a.date_seen - b.date_seen);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_septiembre_20').innerHTML = `
${peliculasSeptiembre20.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name:} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// Octubre 2020
// Crear un array con las peliculas de Mayo 2021
const peliculasOctubre20 = peliculasCards.filter(a => a.date_seen.getFullYear() == 2020 && a.date_seen.getMonth() == 9);

// Ordenar películas, la más vieja primero
peliculasOctubre20.sort((a,b) => a.date_seen - b.date_seen);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_octubre_20').innerHTML = `
${peliculasOctubre20.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name:} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// Noviembre 2020
// Crear un array con las peliculas de Mayo 2021
const peliculasNoviembre20 = peliculasCards.filter(a => a.date_seen.getFullYear() == 2020 && a.date_seen.getMonth() == 10);

// Ordenar películas, la más vieja primero
peliculasNoviembre20.sort((a,b) => a.date_seen - b.date_seen);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_noviembre_20').innerHTML = `
${peliculasNoviembre20.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name:} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;

// DICIEMBRE 2020
// Crear un array con las peliculas de Mayo 2021
const peliculasDiciembre20 = peliculasCards.filter(a => a.date_seen.getFullYear() == 2020 && a.date_seen.getMonth() == 11);

// Ordenar películas, la más vieja primero
peliculasDiciembre20.sort((a,b) => a.date_seen - b.date_seen);


// Printear las cards del subarray de Mayo 2021
document.getElementById('pelis_diciembre_20').innerHTML = `
${peliculasDiciembre20.map(function(pelicula_card){
    return `
    <div class="card card-pelicula col-12 col-lg-6">
        <img src="../${pelicula_card.img_card}" alt="${pelicula_card.img_card_alt}" class="card-img-top">
        <div class="card-body card-pelicula__contenido">
            <h2 class="card-pelicula__titulo"><a href="${pelicula_card.link_page}" class=" stretched-link">${pelicula_card.name:} (${pelicula_card.year})</a></h2>
        </div>
    </div>
    `;
}).join('')}`;