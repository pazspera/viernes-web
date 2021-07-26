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

// Recorrer e imprimir arreglo de cast img
document.getElementById('current_movie_cast').innerHTML = `
${currentMovie.cast.map(function(cast){
  return `
  <figure class="pelicula__actor col-6 col-sm-4">
    <img src="../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${cast.img}" alt="${cast.actor}">
    <figcaption class="pelicula__actor__nombre">${cast.actor}</figcaption>
  </figure>
  `;
}).join('')}`;

// Armar img que va hidden
/* 
Recorrer array fila_img, si class == 'hidden_first', escribir el div de la img en una variable y agregar esa variable al final del loop
Si class == 'always_show', pasar al loop 
*/
let img_hidden = '';
let fila_img = currentMovie.fila_img;

// Recorrer e imprimir arreglo de img de las películas
document.getElementById('current_movie_img').innerHTML = `
${currentMovie.fila_img.map(function(fila_img){
  if(fila_img.class == 'always_show'){
    return `
    <div class="img-fluid col-12 col-md-6 col-xxl-4 pelicula__img">
        <img src="../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${fila_img.img}" alt="${fila_img.alt}">
    </div>
    `;
  } else if(fila_img.class == 'hidden_first'){
    return `
    <div class="img-fluid d-none d-xxl-block col-xxl-4 pelicula__img">
      <img src="../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${fila_img.img}" alt="${fila_img.alt}">
    </div>
    `;
  }
}).join('')}`;

// Generar automáticamente las cards relacionadas de películas
/* 
Agregar a todas las películas un array con tags que se van a comparar
Recorrer peliculas.js buscando las películas que tengan tags similares a los tags del current
Basta con que tengan un tag similar para agregarlos a un array nuevo de películas relacionadas que se va a iterar cada vez que se carga la página
¿Usar un random para iterar en el array de relacionadas?
Igualmente incluir un límite de 2 películas a mostrar por vez
*/

let currentMovieTags = currentMovie.tags;
let arrayTagsEnComun = [];
/* 
function tagsEnComun(currentPeli, allPelis){
  for(let i = 0; i < allPelis.length; i++){
    for(let j = 0; j < cr)
  }
}

 */