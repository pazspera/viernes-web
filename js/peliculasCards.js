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


        console.log(data);

        data.forEach(month => {
            for (let prop in month){
                console.log(`${prop}: ${month[prop]}`);
            }
        })
        // El problema es que devuelve object object en vez del objecto en sí

    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        console.log(message);
    }
}

document.addEventListener('DOMContentLoaded', getAll);

