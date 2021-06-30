/* 
Al hacer click en seleccion_todos, lo que quiero que pase es:
- el div con todos los posters pasa de display none a display block
- el div con seleccion_random pasa a tener display none (esto para que no estén los dos activos al mismo tiempo)

Al hacer click en seleccion_random
- revertir las clases de display a la inversa que con seleccion_todos

La funcion primero tiene que getElementsByClassName y juntar en un array todos los posters
En seleccion_todos, lo que hace es hacer que aparezcan todos los elementos del array
En seleccion_random, lo que hace es seleccionar 3 números random entre 0 y array.length, y devolverlos en resultado

*/


function mostrarTodasPeliculas(){
    /* Desaparece div de  películas random */
    let random_peliculas = document.getElementById('random_peliculas');
    random_peliculas.className = 'd-none';
    /* Saca d-none de div todas las peliculas */
    let todas_peliculas = document.getElementById('todas_peliculas');
    todas_peliculas.classList.remove('d-none');

}

function calcularRandomPeliculas(){
    /* Desaparece div de todas las películas  */
    let todas_peliculas = document.getElementById('todas_peliculas');
    todas_peliculas.className = 'd-none';
    /* Saca d-none de div de películas random */
    let random_peliculas = document.getElementById('random_peliculas');
    random_peliculas.classList.toggle ('d-none');
}