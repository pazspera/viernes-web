// Buscar nombre id de la película de la página
let currentMovieId = document.getElementById('current_movie').getAttribute('class');

// Devuelve objeto del array peliculasCards con el id de la película
let currentMovie = peliculasCards.find(function(pelicula){
    if(pelicula.id === currentMovieId){
        return true;
    }
});

// Revisa si el pick es del Loco o del Pollo para agregar el "el"
let nombrePick = currentMovie.pick;
let textoPick = '';
function revisarPick(nombrePick){
    if(nombrePick === 'Pollo' || nombrePick === 'Loco'){
      return textoPick = 'Elección del ' + nombrePick;
    } else {
      return textoPick = 'Elección de ' + nombrePick;
    }
}
revisarPick(nombrePick);

// Imprimir hero con datos objeto del array peliculasCards
document.getElementById('current_movie_hero').innerHTML = `
    <div class="hero-grid__img" id="${currentMovie.id}"></div>
      <div class="hero-grid__cartel">
        <h1 class="hero-grid__titulo">${currentMovie.nombre} (${currentMovie.anio})</h1>
        <p class="hero-grid__texto">${currentMovie.director}</p>
        <p class="hero-grid__texto">${currentMovie.duracion}</p>
        <p class="hero-grid__texto-final">${textoPick}</p>
      </div> 
`;

// Imprimir sinopsis
document.getElementById('current_movie_sinopsis').innerHTML = `
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="pelicula__sinopsis">
          <h2 class="main__titulo">Sinopsis</h2>
          <p class="pelicula__sinopsis__texto">${currentMovie.sinopsis}</p>
        </div>
      </div>
    </div>
  </div>
`;

