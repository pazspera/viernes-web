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
        let $fragmentHero = document.createDocumentFragment();
        
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

        console.log(data);
        console.log(currentMovie);
        console.log(namePick);
        console.log(textPick);
        console.log($hero);
        
        
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(message);
    }
}


/* ------ CÓDIGO ------ */
document.addEventListener('DOMContentLoaded', getMovieInfo);