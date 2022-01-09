/* 
    - Recuperar el json
    - Convertirlo a objeto js
    - Sort array
    - Recortar array para que muestre solo las últimas 6 pelis

*/

/* ------ VARIABLES ------ */
let URL_INDEX = 'data/info_movies.json';

let $cardsContainer = document.getElementById('peliculas-cards-index');
let $heroIndex = document.getElementById('hero_index');
let $fragment = document.createDocumentFragment();
let $fragmentHero = document.createDocumentFragment();


/* ------ FUNCIONES ------ */
const getIndex = async () => {
    try {
        let res = await fetch(URL_INDEX);
        // Data guarda la res como array
        let data = await res.json();

        if(!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }

        // Ordena pelis por fecha, la más reciente primero
        let orderedMovies = data.slice().sort(function(a,b) {
            // date_seen tiene formato isodate para poder guardarse en JSON
            // Estas variables convierten el isodate a date para poder ordernar el array por fecha
            let c = new Date(a.date_seen);
            let d = new Date(b.date_seen);
            return d-c;
        })

        // Array con las últimas 6 pelis vistas
        let last6MoviesSeen = orderedMovies.slice(0,6);
        
        // Imprime las cards de las últimas 6 pelis
        last6MoviesSeen.forEach(movie => {
            // Crea div card
            let $card = document.createElement('div');
            $card.classList.add('card', 'card-pelicula', 'col-12', 'col-lg-6');

            // Img
            let $img = document.createElement('img');
            $img.src = `${movie.img_card}`;
            $img.alt = movie.img_card_alt;
            $img.classList.add('card-img-top');
            $card.appendChild($img);

            // Card body
            let $cardBody = document.createElement('div');
            $cardBody.classList.add('card-body', 'card-pelicula__contenido');
            let $cardTitle = document.createElement('h3');
            $cardTitle.classList.add('card-pelicula__titulo');
            let $cardLink = document.createElement('a');
            $cardLink.href = `pages/peliculas/${movie.link_page}`;
            $cardLink.classList.add('stretched-link');
            $cardLink.textContent = `${movie.name} (${movie.year})`;
            $cardBody.appendChild($cardTitle);
            $cardTitle.appendChild($cardLink);
            $card.appendChild($cardBody);

            // Agrega card a fragmento
            $fragment.appendChild($card);
        });

        // Agrega fragmento a cardsContainer
        $cardsContainer.appendChild($fragment);

        // Actualiza hero_index con la info de la última peli vista
        let $hero = document.createElement('div');
        $hero.id = `${last6MoviesSeen[0].id}`;
        $hero.classList.add('hero');
        let $heroCartel = document.createElement('div');
        $heroCartel.classList.add('hero__cartel');
        let $heroLeyenda = document.createElement('p');
        $heroLeyenda.classList.add('hero__leyenda');
        $heroLeyenda.textContent = 'El viernes pasado vimos';
        let $heroTitulo = document.createElement('h3');
        $heroTitulo.classList.add('hero__titulo');
        $heroTitulo.textContent = `${last6MoviesSeen[0].name} (${last6MoviesSeen[0].year})`;

        $heroCartel.appendChild($heroLeyenda);
        $heroCartel.appendChild($heroTitulo);
        $hero.appendChild($heroCartel);
        $fragmentHero.appendChild($hero);
        $heroIndex.appendChild($fragmentHero);
        
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(message);
    }
}

document.addEventListener('DOMContentLoaded', getIndex);