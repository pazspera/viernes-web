// Array con info de posters (todas las opciones de las películas)
const arregloPosters = [
    {
        id: 'color_space',
        name: 'Color Out of Space',
        imdb: 'https://www.imdb.com/title/tt5073642/',
        img: '../img/posters/poster_color_space.jpg',
        secondPick: 0,
    },
    {
        id: 'hellraiser',
        name: 'Hellraiser',
        imdb: 'https://www.imdb.com/title/tt0093177/',
        img: '../img/posters/poster_hellraiser.jpg',
        secondPick: 0,
    },
    {
        id: 'lamb',
        name: 'Lamb',
        imdb: 'https://www.imdb.com/title/tt9812474/',
        img: '../img/posters/poster_lamb.jpg',
        secondPick: 0,
    },
    {
        id: 'pet_sematary',
        name: 'Pet Sematary',
        imdb: 'https://www.imdb.com/title/tt0837563/',
        img: '../img/posters/poster_pet_sematary.jpg',
        secondPick: 1,
    },
    {
        id: 'green_knight',
        name: 'The Green Knight',
        imdb: 'https://www.imdb.com/title/tt9243804/',
        img: '../img/posters/poster_green_knight.jpg',
        secondPick: 1,
    },
    {
        id: 'high_life',
        name: 'High Life',
        imdb: 'https://www.imdb.com/title/tt4827558/',
        img: '../img/posters/poster_high_life.jpg',
        secondPick: 0,
    },
    {
        id: 'shining',
        name: 'The Shining',
        imdb: 'https://www.imdb.com/title/tt0081505/',
        img: '../img/posters/poster_shining.jpg',
        secondPick: 0,
    },
    {
        id: 'silence_lambs',
        name: 'The Silence of the Lambs',
        imdb: 'https://www.imdb.com/title/tt0102926/',
        img: '../img/posters/poster_silence_lambs.jpg',
        secondPick: 0,
    },
    {
        id: 'train_busan',
        name: 'Train to Busan',
        imdb: 'https://www.imdb.com/title/tt5700672/',
        img: '../img/posters/poster_train_busan.jpg',
        secondPick: 0,
    },
    {
        id: 'battle_royale',
        name: 'Battle Royale',
        imdb: 'https://www.imdb.com/title/tt0266308/',
        img: '../img/posters/poster_battle_royale.jpg',
        secondPick: 0,
    },
    {
        id: 'mandy',
        name: 'Mandy',
        imdb: 'https://www.imdb.com/title/tt6998518/',
        img: '../img/posters/poster_mandy.jpg',
        secondPick: 0,
    },
    {
        id: 'amanece_poco',
        name: 'Amanece, que no es poco',
        imdb: 'https://www.imdb.com/title/tt0094641/',
        img: '../img/posters/poster_amanece_poco.jpg',
        secondPick: 1,
    },
    {
        id: 'asi_cielo_tierra',
        name: 'Así en el cielo como en la tierra',
        imdb: 'https://www.imdb.com/title/tt0112403/',
        img: '../img/posters/poster_asi_cielo_tierra.jpg',
        secondPick: 0,
    },
    {
        id: 'dogtooth',
        name: 'Dogtooth',
        imdb: 'https://www.imdb.com/title/tt1379182/',
        img: '../img/posters/poster_dogtooth.jpg',
        secondPick: 1,
    },
    {
        id: 'love',
        name: 'Love',
        imdb: 'https://www.imdb.com/title/tt3774694/',
        img: '../img/posters/poster_love.jpg',
        secondPick: 0,
    },
    {
        id: 'uncut_gems',
        name: 'Uncut Gems',
        imdb: 'https://www.imdb.com/title/tt5727208/',
        img: '../img/posters/poster_uncut_gems.jpg',
        secondPick: 0,
    },
    {
        id: 'total_recall',
        name: 'Total Recall',
        imdb: 'https://www.imdb.com/title/tt0100802/',
        img: '../img/posters/poster_total_recall.jpg',
        secondPick: 0,
    },
    {
        id: 'enemy',
        name: 'Enemy',
        imdb: 'https://www.imdb.com/title/tt2316411/',
        img: '../img/posters/poster_enemy.jpg',
        secondPick: 0,
    },
    {
        id: 'one_i_love',
        name: 'The One I Love',
        imdb: 'https://www.imdb.com/title/tt2756032/',
        img: '../img/posters/poster_one_i_love.jpg',
        secondPick: 0,
    },
    {
        id: 'magnolia',
        name: 'Magnolia',
        imdb: 'https://www.imdb.com/title/tt0175880/',
        img: '../img/posters/poster_magnolia.jpg',
        secondPick: 0,
    },
    {   
        id: 'hard_eight',
        name: 'Hard Eight',
        imdb: 'https://www.imdb.com/title/tt0119256/',
        img: '../img/posters/poster_hard_eight.jpg',
        secondPick: 0,
    },
    {
        id: 'guns_akimbo',
        name: 'Guns Akimbo',
        imdb: 'https://www.imdb.com/title/tt6902676/',
        img: '../img/posters/poster_guns_akimbo.jpg',
        secondPick: 0,
    },
    {
        id: 'horns',
        name: 'Horns',
        imdb: 'https://www.imdb.com/title/tt1528071/',
        img: '../img/posters/poster_horns.jpg',
        secondPick: 0,
    },
    {
        id: 'fourteen',
        name: '1408',
        imdb: 'https://www.imdb.com/title/tt0450385/',
        img: '../img/posters/poster_1408.jpg',
        secondPick: 0,
    },
    {
        id: 'zatoichi',
        name: 'Zatoichi',
        imdb: 'https://www.imdb.com/title/tt0363226/',
        img: '../img/posters/poster_zatoichi.jpg',
        secondPick: 0,
    },
    {
        id: 'hana_bi',
        name: 'Hana-bi',
        imdb: 'https://www.imdb.com/title/tt0119250/',
        img: '../img/posters/poster_hana_bi.jpg',
        secondPick: 0,
    },
    {
        id: 'sonatine',
        name: 'Sonatine',
        imdb: 'https://www.imdb.com/title/tt0108188/',
        img: '../img/posters/poster_sonatine.jpg',
        secondPick: 0,
    },
    {
        id : "vertigo",
        name : "Vertigo",
        imdb : "https://www.imdb.com/title/tt0052357/",
        img : "../img/posters/poster_vertigo.jpg",
        secondPick: 0,
    },
    {
        id : "balada_triste",
        name : "Balada triste de trompeta",
        imdb :  "https://www.imdb.com/title/tt1572491/",
        img : "../img/posters/poster_balada_triste.jpg",
        secondPick: 0,
    },
    {
        id : "bill_ted",
        name : "Bill & Ted",
        imdb : "https://www.imdb.com/title/tt0096928/",
        img : "../img/posters/poster_bill_ted.jpg",
        secondPick: 0,
    },
    {
        id : "cashback",
        name : "Cashback",
        imdb :  "https://www.imdb.com/title/tt0460740/",
        img : "../img/posters/poster_cashback.jpg",
        secondPick: 0,
    },
    {
        id : "cyborg_she",
        name : "Cyborg She",
        imdb :  "https://www.imdb.com/title/tt0929860/",
        img : "../img/posters/poster_cyborg_she.png",
        secondPick: 0,
    },
    {
        id : "dead_snow2",
        name : "Dead Snow 2",
        imdb : "https://www.imdb.com/title/tt2832470/",
        img : "../img/posters/poster_dead_snow2.jpg",
        secondPick: 0,
    },
    {
        id : "death_proof",
        name : "Death Proof",
        imdb :  "https://www.imdb.com/title/tt1028528/",
        img : "../img/posters/poster_death_proof.jpg",
        secondPick: 0,
    },
    {
        id : "worry_foot",
        name : "Don't Worry, He Won't Get Far on Foot",
        imdb :  "https://www.imdb.com/title/tt6288124/",
        img : "../img/posters/poster_worry_foot.jpg",
        secondPick: 0,
    },
    {
        id : "escape_la",
        name : "Escape from Los Angeles",
        imdb :  "https://www.imdb.com/title/tt0116225/",
        img : "../img/posters/poster_escape_la.jpg",
        secondPick: 0,
    },
    {
        id : "escape_ny",
        name : "Escape from New York",
        imdb : "https://www.imdb.com/title/tt0082340/", 
        img : "../img/posters/poster_escape_ny.jpg",
        secondPick: 0,
    },
    {
        id : "fear_loathing",
        name : "Fear and Loathing in Las Vegas",
        imdb : "https://www.imdb.com/title/tt0120669/", 
        img : "../img/posters/poster_fear_loathing.jpg",
        secondPick: 0,
    },
    {
        id : "four_rooms",
        name : "Four Rooms",
        imdb :  "https://www.imdb.com/title/tt0113101/",
        img : "../img/posters/poster_four_rooms.jpg",
        secondPick: 0,
    },
    {
        id : "from_dusk",
        name : "From Dusk Till Dawn",
        imdb :  "https://www.imdb.com/title/tt0116367/",
        img : "../img/posters/poster_from_dusk.jpg",
        secondPick: 0,
    },
    {
        id : "isle_dogs",
        name : "Isle of Dogs",
        imdb : "https://www.imdb.com/title/tt5104604/", 
        img : "../img/posters/poster_isle_dogs.jpg",
        secondPick: 0,
    },
    {
        id : "la_belle_verte",
        name : "La Belle Verte",
        imdb :  "https://www.imdb.com/title/tt0115650/", 
        img : "../img/posters/poster_la_belle_verte.jpg",
        secondPick: 0,
    },
    {
        id : "melancholia",
        name : "Melancholia",
        imdb :  "https://www.imdb.com/title/tt1527186/",
        img : "../img/posters/poster_melancholia.jpg",
        secondPick: 0,
    },
    {
        id : "planet_terror",
        name : "Planet Terror",
        imdb :  "https://www.imdb.com/title/tt1077258/",
        img : "../img/posters/poster_planet_terror.jpg",
        secondPick: 0,
    },
    {
        id : "primer",
        name : "Primer",
        imdb :  "https://www.imdb.com/title/tt0390384/",
        img : "../img/posters/poster_primer.jpg",
        secondPick: 0,
    },
    {
        id : "dead_dont_die",
        name : "The Dead Don't Die",
        imdb :  "https://www.imdb.com/title/tt8695030/",
        img : "../img/posters/poster_dead_dont_die.jpg",
        secondPick: 0,
    },
    {
        id : "machinist",
        name : "The Machinist",
        imdb :  "https://www.imdb.com/title/tt0361862/",
        img : "../img/posters/poster_machinist.jpg",
        secondPick: 0,
    },
    {
        id : "darkly_noon",
        name : "The Passion of Darkly Noon",
        imdb :  "https://www.imdb.com/title/tt0114099/",
        img : "../img/posters/poster_darkly_noon.jpg",
        secondPick: 0,
    },
    {
        id : "they_live",
        name : "They Live",
        imdb :  "https://www.imdb.com/title/tt0096256/",
        img : "../img/posters/poster_they_live.jpg",
        secondPick: 0,
    },
    {
        id : "thrist",
        name : "Thrist",
        imdb :  "https://www.imdb.com/title/tt0762073/",
        img : "../img/posters/poster_thirst.jpg",
        secondPick: 0,
    },
    {
        id : "videodrome",
        name : "Videodrome",
        imdb :  "https://www.imdb.com/title/tt0052357/",
        img : "../img/posters/poster_videodrome.jpg",
        secondPick: 0,
    },
    {
        id : "field_england",
        name : "A Field in England",
        imdb : "https://www.imdb.com/title/tt2375574/",
        img : "../img/posters/poster_field_england.jpg",
        secondPick: 0,
    },
    {
        id : "dia_bestia",
        name : "El día de la bestia",
        imdb : "https://www.imdb.com/title/tt0112922/",
        img : "../img/posters/poster_dia_bestia.jpg",
        secondPick: 0,
    },
    {
        id : "berberian",
        name : "Berberian Sound Studio",
        imdb : "https://www.imdb.com/title/tt1833844/",
        img : "../img/posters/poster_berberian.jpg",
        secondPick: 0,
    }
]

// Ordena alfabéticamente las películas
arregloPosters.sort(function(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB){
        return 1;
    }
    return 0;
});

// Printea el html de cada poster en el ar
document.getElementById("posters").innerHTML = `
${arregloPosters.map(function(pelicula){
    return `
    <div class="col-6 col-md-4 poster">
        <a href="${pelicula.imdb}" target="_blank">
            <img src="${pelicula.img}" alt="Poster ${pelicula.name}">
        </a>      
    </div>
    `;
}).join('')}`;

// ***
// Funcionalidad btn seleccionar películas y todas las películas

let todas_peliculas = document.getElementById('todas_peliculas');
let random_peliculas = document.getElementById('random_peliculas');
let peliculas = document.getElementsByClassName('poster');
// Convertir peliculas en array
let array_peliculas = Array.from(peliculas);
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
        let numeros = [];
        numeros = generarNumerosDistintos(3);
        console.log(numeros);
        for(let i = 0; i < numeros.length; i++){
            resultado_random.innerHTML += array_peliculas[numeros[i]].outerHTML;
        }
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