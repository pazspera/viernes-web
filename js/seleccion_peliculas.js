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

let todas_peliculas = document.getElementById('todas_peliculas');
let random_peliculas = document.getElementById('random_peliculas');
let array_peliculas = document.getElementsByClassName('poster');
let resultado_random = document.getElementById('resultado_random');

function mostrarTodasPeliculas(){
    /* Desaparece div de  películas random */
    random_peliculas.className = 'd-none';
    /* Saca d-none de div todas las peliculas */
    todas_peliculas.classList.remove('d-none');

    // Borra contenido random_peliculas para que no se agreguen demasiadas selecciones
    // random_peliculas.innerHTML = '';
}

function calcularRandomPeliculas(){
    let contador = 0;
    // Borra contenido de resultado_random para que se ejecute el do
    resultado_random.innerHTML = '';
    
    /* Desaparece div de todas las películas  */
    todas_peliculas.className = 'd-none';
    /* Saca d-none de div de películas random */
    random_peliculas.classList.remove('d-none');

    // Revisa si resultado_random está vacío para evitar que
    // se agreguen muchos grupos de 3 a resultado_random
    if(resultado_random.innerHTML === ''){
        // Generar 3 números aleatorios
        do{
            // Generar # random del array_peliculas
            let peli_seleccionada = calculoNumeroRandom(array_peliculas);
            console.log(peli_seleccionada);
            resultado_random.innerHTML += array_peliculas[peli_seleccionada].outerHTML;
            // Eliminar valor del random del array_peliculas
            // array_peliculas.splice(peli_seleccionada, 1);
            contador++;
        }while(contador < 3);
    } 
}

function calculoNumeroRandom(arreglo){
    let numeroRandom = Math.floor(Math.random() * arreglo.length);
    return numeroRandom;
}

function verSiEstaEnArray(elemento, arreglo){
    return arreglo.includes(elemento);
}

function generarNumerosDistintos(cantidadNumAGenerar){
    let numerosDistintos = [];
    let contador = 0;

    do{
        let num = calculoNumeroRandom(array_peliculas);
        // Revisa si el num está en el array y repite hasta que no esté
        while(verSiEstaEnArray(num, numerosDistintos)){
            num = calculoNumeroRandom(array_peliculas);
        }
        numerosDistintos[contador] = num;
        contador++;
    }while(contador < cantidadNumAGenerar);
    return numerosDistintos;
}