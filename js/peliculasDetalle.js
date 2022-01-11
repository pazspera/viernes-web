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
        let $fragmentImgRow = document.createDocumentFragment();
        let $fragmentBtnNav = document.createDocumentFragment();
        
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
        
        // Imprimir img_row
        let $imgRow = document.createElement('section');
        $imgRow.classList.add('main-img');
        $imgRow.id = 'current_movie_img';
        let $rowImgRow = document.createElement('div');
        $rowImgRow.classList.add('row', 'g-0');

        currentMovie.img_row.forEach(img => {
            if(img.class === 'always_show'){
                let $imgDiv = document.createElement('div');
                $imgDiv.classList.add('img-fluid', 'col-12', 'col-md-6', 'col-xxl-4', 'pelicula__img');
                let $img = document.createElement('img');
                $img.src = `../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${img.img}`;
                $img.alt = `${img.alt}`;

                $imgDiv.appendChild($img);
                $fragmentImgRow.appendChild($imgDiv);
            } else if(img.class === 'hidden_first') {
                let $imgDiv = document.createElement('div');
                $imgDiv.classList.add('img-fluid', 'd-none', 'd-xxl-block', 'col-xxl-4', 'pelicula__img');
                let $img = document.createElement('img');
                $img.src = `../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${img.img}`;
                $img.alt = `${img.alt}`;

                $imgDiv.appendChild($img);
                $fragmentImgRow.appendChild($imgDiv);
            }
        });

        $rowImgRow.appendChild($fragmentImgRow);
        $imgRow.appendChild($rowImgRow);

        // Btns navegación entre pelis
        // En base al index de la peli actual, busca los index de la peli anterior y siguiente. Usa el valor de link_page de esas pelis para imprimir los btn para navegar entre pelis
       let currentMovieIndex = data.findIndex(movie => movie.id === currentMovieId);
       let nextMovieIndex = currentMovieIndex - 1;
       let previousMovieIndex = currentMovieIndex + 1;
       let nextMovieLinkPage;
       let previousMovieLinkPage;
       
       // Contenedor para los btn
       let $btnNav = document.createElement('section');
       $btnNav.classList.add('main', 'text');
       $btnNav.id = 'current_movie_btn_nav';
       let $containerBtnNav = document.createElement('div');
       $containerBtnNav.classList.add('container');
       let $rowBtnNav = document.createElement('div');
       $rowBtnNav.classList.add('row');

       // Recupera el link de la peli siguiente a la actual
       if(nextMovieIndex === -1) {
           nextMovieLinkPage = '';
       } else {
           nextMovieLinkPage = data[nextMovieIndex].link_page;
       }

       // Recupera el link de la peli anterior a la actual
       if(previousMovieIndex > data.length -1) {
           // Validación en caso de que sea la 1er peli
           previousMovieLinkPage = '';
       } else {
           previousMovieLinkPage = data[previousMovieIndex].link_page;
       }

       // Si currentMovie es la primera peli que vimos
       if(currentMovieIndex === (data.length -1) && previousMovieLinkPage === ''){
           let $emptyPreviousBtn = document.createElement('div');
           $emptyPreviousBtn.classList.add('col-6');
           let $nextBtn = document.createElement('div');
           $nextBtn.classList.add('col-6', 'd-flex', 'flex-row-reverse');
           let $nextBtnLink = document.createElement('a');
           $nextBtnLink.href = nextMovieLinkPage;
           $nextBtnLink.classList.add('btn', 'btn__primary', 'btn--previous');
           $nextBtnLink.textContent = 'Viernes Siguiente';

           $nextBtn.appendChild($nextBtnLink);
           $fragmentBtnNav.appendChild($emptyPreviousBtn);
           $fragmentBtnNav.appendChild($nextBtn);
       }

       // Si currentMovie es la última peli que vimos
       if(currentMovieIndex === 0 && nextMovieIndex === -1){
           let $previousBtn = document.createElement('div');
           $previousBtn.classList.add('col-6');
           let $previousBtnLink = document.createElement('a');
           $previousBtnLink.href = previousMovieLinkPage;
           $previousBtnLink.classList.add('btn', 'btn--previous', 'btn__primary');
           $previousBtnLink.textContent = 'Viernes Anterior';
           let $emptyNextBtn = document.createElement('div');
           $emptyNextBtn.classList.add('col-6');

           $previousBtn.appendChild($previousBtnLink);
           $fragmentBtnNav.appendChild($previousBtn);
           $fragmentBtnNav.appendChild($emptyNextBtn);
       }

       // Se imprimen ambos btn
       if((currentMovieIndex !== (peliculasCards.length - 1) && previousMovieLinkPage !== '')) {
           let $previousBtn = document.createElement('div');
           $previousBtn.classList.add('col-6');
           let $previousBtnLink = document.createElement('a');
           $previousBtnLink.href = previousMovieLinkPage;
           $previousBtnLink.classList.add('btn', 'btn--previous', 'btn__primary');
           $previousBtnLink.textContent = 'Viernes Anterior';
           let $nextBtn = document.createElement('div');
           $nextBtn.classList.add('col-6', 'd-flex', 'flex-row-reverse');
           let $nextBtnLink = document.createElement('a');
           $nextBtnLink.href = nextMovieLinkPage;
           $nextBtnLink.classList.add('btn', 'btn__primary', 'btn--previous');
           $nextBtnLink.textContent = 'Viernes Siguiente';

           $previousBtn.appendChild($previousBtnLink);
           $fragmentBtnNav.appendChild($previousBtn);
           $nextBtn.appendChild($nextBtnLink);
           $fragmentBtnNav.appendChild($nextBtn);
       }

       console.log('currentMovieIndex', currentMovieIndex);
       console.log('nextMovieIndex', nextMovieIndex);
       console.log(nextMovieLinkPage);
       console.log(previousMovieLinkPage);

       $rowBtnNav.appendChild($fragmentBtnNav);
       $containerBtnNav.appendChild($rowBtnNav);
       $btnNav.appendChild($containerBtnNav);

        // Agregar a main todos los fragmentos
        $fragmentMain.appendChild($sinopsis);
        $fragmentMain.appendChild($cast);
        $fragmentMain.appendChild($trailer);
        $fragmentMain.appendChild($imgRow);
        $fragmentMain.appendChild($btnNav);
        $main.appendChild($fragmentMain);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(message);
    }
}


/* ------ CÓDIGO ------ */
document.addEventListener('DOMContentLoaded', getMovieInfo);