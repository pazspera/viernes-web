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
        let $container = document.createElement('div');
        $container.classList.add('container');
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
        $container.appendChild($sinopsisCol);
        $sinopsis.appendChild($container);
        $fragmentMain.appendChild($sinopsis);
        $main.appendChild($fragmentMain);
        
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(message);
    }
}


/* ------ CÓDIGO ------ */
document.addEventListener('DOMContentLoaded', getMovieInfo);