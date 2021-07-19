// Buscar nombre id de la película de la página
let currentMovieId = document.getElementById('current_movie').getAttribute('class');

// Devuelve objeto del array peliculasCards con el id de la película
let currentMovie = peliculasCards.find(function(pelicula){
    if(pelicula.id === currentMovieId){
        return true;
    }
});

// Imprimir hero con datos objeto del array peliculasCards
document.getElementById('current_movie_hero').innerHTML = `
    <div class="hero-grid__img" id="${currentMovie.id}"></div>
      <div class="hero-grid__cartel">
        <h1 class="hero-grid__titulo">${currentMovie.nombre} (${currentMovie.anio})</h1>
        <p class="hero-grid__texto">${currentMovie.director}</p>
        <p class="hero-grid__texto">${currentMovie.duracion}</p>
        <p class="hero-grid__texto-final">Elección de ${currentMovie.pick}</p>
      </div> 
`;
