// Buscar name: id de la película de la página
let currentMovieId = document.getElementById('current_movie').getAttribute('class');

// Devuelve objeto del array peliculasCards con el id de la película
let currentMovie = peliculasCards.find(function(pelicula){
    if(pelicula.id === currentMovieId){
        return true;
    }
});

// Revisa si el pick es del Loco o del Pollo para agregar el "el"
let namePick = currentMovie.pick;
let textoPick = '';
function revisarPick(namePick){
    if(namePick === 'Pollo' || namePick === 'Loco'){
      return textoPick = 'Elección del ' + namePick;
    } else {
      return textoPick = 'Elección de ' + namePick;
    }
}
revisarPick(namePick);

// Imprimir hero con datos objeto del array peliculasCards
document.getElementById('current_movie_hero').innerHTML = `
    <div class="hero-grid__img" id="${currentMovie.id}"></div>
      <div class="hero-grid__cartel">
        <h1 class="hero-grid__titulo">${currentMovie.name} (${currentMovie.year})</h1>
        <p class="hero-grid__texto">${currentMovie.director}</p>
        <p class="hero-grid__texto">${currentMovie.duration}</p>
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
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="main__titulo">Elenco</h2>
      </div>
    </div>
    <div class="row" id="current_movie_cast">
      ${currentMovie.cast.map(function(cast){
        return `
        <figure class="pelicula__actor col-6 col-sm-4">
          <img src="../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${cast.img}" alt="${cast.actor}">
          <figcaption class="pelicula__actor__name text-center">${cast.actor}</figcaption>
        </figure>
        `;
      }).join('')}
    </div>
  </div>`;

/* document.getElementById('current_movie_cast').innerHTML = `
${currentMovie.cast.map(function(cast){
  return `
  <figure class="pelicula__actor col-6 col-sm-4">
    <img src="../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${cast.img}" alt="${cast.actor}">
    <figcaption class="pelicula__actor__name text-center">${cast.actor}</figcaption>
  </figure>
  `;
}).join('')}`; */

// Armar img que va hidden
/* 
Recorrer array img_row, si class == 'hidden_first', escribir el div de la img en una variable y agregar esa variable al final del loop
Si class == 'always_show', pasar al loop 
*/
let img_hidden = '';
let img_row = currentMovie.img_row;

// Recorrer e imprimir arreglo de img de las películas
document.getElementById('current_movie_img').innerHTML = `
${currentMovie.img_row.map(function(img_row){
  if(img_row.class == 'always_show'){
    return `
    <div class="img-fluid col-12 col-md-6 col-xxl-4 pelicula__img">
        <img src="../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${img_row.img}" alt="${img_row.alt}">
    </div>
    `;
  } else if(img_row.class == 'hidden_first'){
    return `
    <div class="img-fluid d-none d-xxl-block col-xxl-4 pelicula__img">
      <img src="../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${img_row.img}" alt="${img_row.alt}">
    </div>
    `;
  }
}).join('')}`;

// Imprimir trailer
document.getElementById('current_movie_trailer').innerHTML = `
<div class="container">
<div class="row">
  <div class="col-12">
    <h2 class="main__titulo">Trailer</h2>
  </div>
  <div class="col col-lg-9" >
    <div class="ratio ratio-16x9">
      ${currentMovie.trailer}
    </div>
  </div>
</div>
</div>
`;

/* Botones anterior/siguiente para navegar entre los viernes */
/* 
- Buscar index de la current peli
- Si es index[0], imprimir solo siguiente
- Si no es index[0], revisar que index[+1] e index[-1] tengan un valor != a # en link_page
- Si es distinto, imprimir botones anterior y siguiente
- Si es # en alguno de los dos, no imprimir botones
*/

// Busca index de currentMovie en array peliculasCards
let currentMovieIndex = peliculasCards.indexOf(currentMovie);
let nextMovieIndex = currentMovieIndex -1 ;
let previousMovieIndex = currentMovieIndex + 1;

let nextMovieLinkPage;
if(nextMovieIndex === -1){
  nextMovieLinkPage = '';
} else {
  nextMovieLinkPage = peliculasCards[nextMovieIndex].link_page;
}

let previousMovieLinkPage = peliculasCards[previousMovieIndex].link_page;

// Si currentMovie es la última peli que vimos
if(currentMovieIndex === 0 && nextMovieIndex === -1) {
  document.getElementById('pelicula_btn_nav').innerHTML = `
  <div class="col-6">
    <a href="${previousMovieLinkPage}" class="btn btn__primary btn--previous">Viernes Anterior</a>          
  </div>
  <div class="col-6">
            
  </div>
  `;
}

// Si nextMovie y previousMovie no tiene rutas de enlace no se imprimen los btn
// Pero si tiene otro valor, se imprimen ambos btn
if(nextMovieLinkPage === '#' || previousMovieLinkPage === '#'){
  document.getElementById('pelicula_btn_nav').innerHTML = ``;
} else if((currentMovieIndex === 0 && nextMovieIndex === -1) && (nextMovieLinkPage !== '#' || previousMovieLinkPage !== '#')) {
  document.getElementById('pelicula_btn_nav').innerHTML = `
  <div class="col-5">
    <a href="${previousMovieLinkPage}" class="btn btn__primary btn--previous">Viernes Anterior</a>          
  </div>
  <div class="col-5 d-none">
  </div>
  `;
} else {
  document.getElementById('pelicula_btn_nav').innerHTML = `
  <div class="col-5">
    <a href="${previousMovieLinkPage}" class="btn btn__primary btn--previous">Viernes Anterior</a>          
  </div>
  <div class="col-5 d-flex flex-row-reverse">
    <a href="${nextMovieLinkPage}" class="btn btn__primary btn--previous">Viernes Siguiente</a>          
  </div>
  `;
}

// 


/* *******************************  */
// Generar automáticamente las cards relacionadas de películas
/* 
Agregar a todas las películas un array con tags que se van a comparar
Recorrer peliculas.js buscando las películas que tengan tags similares a los tags del current
Basta con que tengan un tag similar para agregarlos a un array nuevo de películas relacionadas que se va a iterar cada vez que se carga la página
¿Usar un random para iterar en el array de relacionadas?
Igualmente incluir un límite de 2 películas a mostrar por vez
*/

let currentMovieTags = currentMovie.tags;
let arrayPelisConTagsEnComun = [];

/* function compararTags(currentMovie, allMovies){
  console.log(currentMovie);
  console.log(currentMovie.tags);
  let arrayCurrentTags = currentMovie.tags; 
  // Recorre todos los tags de array allMovies
  allMovies.map(function(movie){
    let arrayTagsTemporal = movie.tags;
    for(let i = 0; i < arrayTagsTemporal.length; i++){
      for(let j = 0; j < arrayCurrentTags.length; j++){
        if(arrayTagsTemporal.includes(arrayCurrentTags[j])){
          console.log(arrayTagsTemporal[i])
        }
      }
    }
    console.log(movie.id);
    console.log(movie.tags);
  });

  /* allMovies.map(function(movie){
    console.log(movie.tags);
    // Recorrer array currentMovie y comparar tags
    for(let i = 0; i < allMovies.length; i++){
      for(let j = 0; i < currentMovie.length; j++){
        if(movie.tags.includes(currentMovie.tags[i])){
          arrayPelisConTagsEnComun.push(movie.id[i]);
        }
      }
    }
  }); 
  
  console.log(arrayPelisConTagsEnComun);
}

compararTags(currentMovie, peliculasCards); */