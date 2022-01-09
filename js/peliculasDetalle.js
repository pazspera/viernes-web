/* 
    - Recuperar id del body
    - Con el id, buscar el objeto de la peli para usar sus datos
    - Función para revisar si el pick es del Pollo o Loco
    - Usar html tag para hero
    - En main-content, append todas las partes que van a main-content desde JS, sin tener html en el archivo

    - Revisar funciones botones
    - Revisar funciones img_row
*/

/* ------ VARIABLES ------ */
const URL_MOVIES = '/data/info_movies.json';
let currentMovieId = document.getElementById('current_movie').getAttribute('class');


/* ------ FUNCIONES ------ */
const getMovieInfo = async () => {
    try {
        let res = await fetch(URL_MOVIES);
        let data = await res.json();
        let $hero = document.getElementById('current_movie_hero');
        let $main = document.getElementById('main-content');
        let $fragmentHero = document.createDocumentFragment();
        let $fragmentMain = document.createDocumentFragment();
        let $fragmentCast = document.createDocumentFragment();
        
        if(!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }

        // Busca en data y devuelve el objeto que corresponde a currentMovieId 
        let currentMovie = data.find(function(movie){
            if(movie.id === currentMovieId) return true;
        });
        
        // Revisa si el pick es del Loco o del Pollo para agregar el "el"
        let namePick = currentMovie.pick;
        let textPick = '';
        const checkPickName = (namePick) => {
            if(namePick === 'Pollo' || namePick === 'Loco'){
                return textPick = 'Elección del ' + namePick;
            } else {
                return textPick = 'Elección de ' + namePick;
            };
        };
        checkPickName(namePick);

        // Imprimir hero 
        let $heroImg = document.createElement('div');
        $heroImg.classList.add('hero-grid__img');
        $heroImg.id = `${currentMovie.id}`;
        let $heroCartel = document.createElement('div');
        $heroCartel.classList.add('hero-grid__cartel');
        let $heroTitle = document.createElement('h1');
        $heroTitle.classList.add('hero-grid__titulo');
        $heroTitle.textContent = `${currentMovie.name} (${currentMovie.year})`;
        let $heroDirector = document.createElement('p');
        $heroDirector.classList.add('hero-grid__texto');
        $heroDirector.textContent = `${currentMovie.director}`;
        let $heroDuration = document.createElement('p');
        $heroDuration.classList.add('hero-grid__texto');
        $heroDuration.textContent = `${currentMovie.duration}`;
        let $heroPick = document.createElement('p');
        $heroPick.classList.add('hero-grid__texto-final');
        $heroPick.textContent = `${textPick}`;

        $fragmentHero.appendChild($heroImg);
        $heroCartel.appendChild($heroTitle);
        $heroCartel.appendChild($heroDirector);
        $heroCartel.appendChild($heroDuration);
        $heroCartel.appendChild($heroPick);
        $fragmentHero.appendChild($heroCartel);
        $hero.appendChild($fragmentHero);

        // MAIN CONTENT
        // Imprimir sinopsis
        let $sinopsis = document.createElement('section');
        $sinopsis.classList.add('main-text');
        $sinopsis.id = 'current_movie_sinopsis';
        let $containerSinopsis = document.createElement('div');
        $containerSinopsis.classList.add('container');
        let $sinopsisCol = document.createElement('div');
        $sinopsisCol.classList.add('col-12', 'col-md-8', 'col-lg-6');
        let $sinopsisContent = document.createElement('div');
        $sinopsisContent.classList.add('pelicula__sinopsis');
        let $sinopsisTitle = document.createElement('h2');
        $sinopsisTitle.classList.add('main__titulo');
        $sinopsisTitle.textContent = "Sinopsis";
        let $sinopsisText = document.createElement('p');
        $sinopsisText.classList.add('pelicula__sinopsis__texto');
        $sinopsisText.textContent = `${currentMovie.sinopsis}`;

        $sinopsisContent.appendChild($sinopsisTitle);
        $sinopsisContent.appendChild($sinopsisText);
        $sinopsisCol.appendChild($sinopsisContent);
        $containerSinopsis.appendChild($sinopsisCol);
        $sinopsis.appendChild($containerSinopsis);

        // Imprimir cast 
        // Cast title
        let $cast = document.createElement('section');
        $cast.classList.add('main-text');
        $cast.id = 'current_movie_cast';
        let $containerCast = document.createElement('div');
        $containerCast.classList.add('container');
        let $rowCast1 = document.createElement('div');
        $rowCast1.classList.add('row');
        let $colCast = document.createElement('div');
        $colCast.classList.add('col-12');
        let $castTitle = document.createElement('h2');
        $castTitle.classList.add('main__titulo');
        $castTitle.textContent = 'Elenco';
        let $rowCast2 = document.createElement('div');
        $rowCast2.classList.add('row');
        // Cast img
        currentMovie.cast.forEach(actor => {
            let $figure = document.createElement('figure');
            $figure.classList.add('pelicula__actor', 'col-6', 'col-sm-4');
            let $figureImg = document.createElement('img');
            $figureImg.src = `../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${actor.img}`;
            let $figcaption = document.createElement('figcaption');
            $figcaption.classList.add('pelicula__actor__name', 'text-center');
            $figcaption.textContent = `${actor.actor}`;

            $figure.appendChild($figureImg);
            $figure.appendChild($figcaption);
            $fragmentCast.appendChild($figure);
        })

        $colCast.appendChild($castTitle);
        $rowCast1.appendChild($colCast);
        $containerCast.appendChild($rowCast1);
        $rowCast2.appendChild($fragmentCast);
        $containerCast.appendChild($rowCast2);
        $cast.appendChild($containerCast);

        // Imprimir trailer
        let $trailer = document.createElement('section');
        $trailer.classList.add('main-text');
        $trailer.id = 'current_movie_trailer';
        let $containerTrailer = document.createElement('div');
        $containerTrailer.classList.add('container');
        let $rowTrailer = document.createElement('div');
        $rowTrailer.classList.add('row');
        let $colTrailer1 = document.createElement('div');
        $colTrailer1.classList.add('col-12');
        let $trailerTitle = document.createElement('h2');
        $trailerTitle.classList.add('main__titulo');
        $trailerTitle.textContent = 'Trailer';
        let $colTrailer2 = document.createElement('div');
        $colTrailer2.classList.add('col', 'col-lg-9');
        let $trailerVideo = document.createElement('div');
        $trailerVideo.classList.add('ratio', 'ratio-16x9');
        $trailerVideo.innerHTML = `${currentMovie.trailer}`;

        $colTrailer1.appendChild($trailerTitle);
        $colTrailer2.appendChild($trailerVideo);
        $rowTrailer.appendChild($colTrailer1);
        $rowTrailer.appendChild($colTrailer2);
        $containerTrailer.appendChild($rowTrailer);
        $trailer.appendChild($containerTrailer);

        // Agregar a main todos los fragmentos
        $fragmentMain.appendChild($sinopsis);
        $fragmentMain.appendChild($cast);
        $fragmentMain.appendChild($trailer);
        $main.appendChild($fragmentMain);

        
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(message);
    }
}


/* ------ CÓDIGO ------ */
document.addEventListener('DOMContentLoaded', getMovieInfo);