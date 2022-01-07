/* 
    - Al cargar el documento, buscar en historial_pelis.json el año en el que estamos
    - El año puede estar indicado en el id del hero, de la misma manera que uso el id para imprimir el contenido de las páginas individuales
    - Después que itere por todos los meses que haya cargados en ese año
    - Al entrar al mes, primero que imprima el mes.title en un h2
    - Después itera por mes.movies e imprime todas las cards que encuentra
*/

/* ------ VARIABLES ------ */
let currentYear = document.getElementById('current_year').getAttribute('class');
let URL_JSON = `../data/movies_${currentYear}.json`;

let $mainContent = document.getElementById('main-content');
let $fragment = document.createDocumentFragment();

/* ------ FUNCIONES ------ */

const getAll = async () => {
    try {
        let res = await fetch(URL_JSON);
        // Data guarda el objeto entero de las pelis del año
        let data = await res.json();

        if(!res.ok) throw {
            status: res.status,
            statusText: res.statusText
        }
        
        data.forEach(month => {
            // Crea section con container para cada mes
            let $section = document.createElement('section');
            $section.classList.add('container');

            // Agrega título
            let $title = document.createElement('h2');
            $title.innerHTML = month.title;
            $section.appendChild($title);

            // Agrega row
            let $row = document.createElement('div');
            $row.classList.add('row', 'grid-peliculas');
            $section.appendChild($row);

            // Recorre array movies y crea cards para cada una
            month.movies.forEach(movie => {
                // Crea card y sus clases
                let $card = document.createElement('div');
                $card.classList.add('card', 'card-pelicula', 'col-12', 'col-lg-6');

                // Img 
                let $img = document.createElement('img');
                $img.src = `../${movie.img_card}`;
                $img.alt = movie.img_card_alt;
                $img.classList.add('card-img-top');
                $card.appendChild($img);

                // Card body
                let $cardBody = document.createElement('div');
                $cardBody.classList.add('card-body', 'card-pelicula__contenido');
                let $cardTitle = document.createElement('h3');
                $cardTitle.classList.add('card-pelicula__titulo');
                let $cardLink = document.createElement('a');
                $cardLink.href = `peliculas/${movie.link_page}`;
                $cardLink.classList.add('stretched-link');
                $cardLink.innerHTML = `${movie.name} (${movie.year})`;
                $cardBody.appendChild($cardTitle);
                $cardTitle.appendChild($cardLink);
                $card.appendChild($cardBody);
                
                // Agrega card a row
                $row.appendChild($card);
            })

            // Agrega sección a fragmento
            $fragment.appendChild($section);
        })

        $mainContent.appendChild($fragment);

    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(message);
    }
}

document.addEventListener('DOMContentLoaded', getAll);

