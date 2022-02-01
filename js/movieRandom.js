/* ------ VARIABLES ------ */
const URL_POSTERS = "../data/random_movies.json";
let $todasPeliculas = document.getElementById("todas_peliculas");
let $randomPeliculas = document.getElementById("random_peliculas");
let posters = document.getElementsByClassName("poster");
// Convertir posters en array para que funcione generarNumerosDistintos
// Lo convierto en array cuando se haga click en btnRandom
let arrayPosters;
let $resultadoRandom = document.getElementById("resultado_random");
let $mostrarTodasPeliculas = document.getElementById("todos_posters");
let $fragmentAll = document.createDocumentFragment();
let $fragmentRandom = document.createDocumentFragment();

/* ------ FUNCIONES ------ */
const mostrarTodasPeliculas = () => {
	/* Desaparece div de  películas random */
	$randomPeliculas.className = "d-none";
	/* Saca d-none de div todas las peliculas */
	$todasPeliculas.classList.remove("d-none");
};

const mostrarRandom = () => {
	/* Desaparece div de todas las películas  */
	$todasPeliculas.className = "d-none";
	/* Saca d-none de div de películas random */
	$randomPeliculas.classList.remove("d-none");
};

const calculoNumeroRandom = (arreglo) => {
	let numeroRandom = Math.floor(Math.random() * arreglo.length);
	return numeroRandom;
};

const verSiEstaEnArray = (elemento, arreglo) => {
	return arreglo.includes(elemento);
};

const generarNumerosDistintos = (cantidadNumAGenerar) => {
	let numerosDistintos = [];
	let contador = 0;

	do {
		let num = calculoNumeroRandom(arrayPosters);
		// Revisa si el num está en el array y repite hasta que no esté
		while (verSiEstaEnArray(num, numerosDistintos)) {
			num = calculoNumeroRandom(arrayPosters);
		}
		numerosDistintos[contador] = num;
		contador++;
	} while (contador < cantidadNumAGenerar);
	return numerosDistintos;
};

const getAllPosters = async () => {
	try {
		let res = await fetch(URL_POSTERS);
		// Data guarda objeto de todos los posters
		let data = await res.json();

		if (!res.ok)
			throw {
				status: res.status,
				statusText: res.statusText,
			};

		// Ordena alfabéticamente los posters
		data.sort(function (a, b) {
			let nameA = a.name.toUpperCase();
			let nameB = b.name.toUpperCase();

			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});

		data.forEach((poster) => {
			let $poster = document.createElement("div");
			$poster.classList.add("col-6", "col-md-4", "poster");
			let $posterLink = document.createElement("a");
			$posterLink.href = `${poster.imdb}`;
			$posterLink.target = "_blank";
			$posterLink.rel = "noreferrer";
			let $posterImg = document.createElement("img");
			$posterImg.src = `${poster.img}`;
			$posterImg.alt = `Poster ${poster.name}`;

			$posterLink.append($posterImg);
			$poster.appendChild($posterLink);
			$fragmentAll.appendChild($poster);
		});

		// Agrega fragmento al DOM
		$mostrarTodasPeliculas.appendChild($fragmentAll);
	} catch (err) {
		let message = err.statusText || "Ocurrió un error";
		console.log(message);
	}
};

function clearBox(elementID) {
	var div = document.getElementById(elementID);

	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

const getRandomPosters = async () => {
	try {
		let res = await fetch(URL_POSTERS);
		// Data guarda objeto de todos los posters
		let data = await res.json();

		if (!res.ok)
			throw {
				status: res.status,
				statusText: res.statusText,
			};

		// Genera 3 números aleatorios, los busca en arrayPosters y los imprime en DOM
		let numeros = [];
		numeros = generarNumerosDistintos(3);
		// Crea un array con solo los posters correspondientes a los números aleatorios
		let postersAleatorios = [];
		numeros.forEach((num) => {
			postersAleatorios.push(data[num]);
		});

		postersAleatorios.forEach((poster) => {
			let $poster = document.createElement("div");
			$poster.classList.add("col-6", "col-md-4", "poster");
			let $posterLink = document.createElement("a");
			$posterLink.href = `${poster.imdb}`;
			$posterLink.target = "_blank";
			$posterLink.rel = "noreferrer";
			let $posterImg = document.createElement("img");
			$posterImg.src = `${poster.img}`;
			$posterImg.alt = `Poster ${poster.name}`;

			$posterLink.append($posterImg);
			$poster.appendChild($posterLink);
			$fragmentRandom.appendChild($poster);
		});

		// Agrega fragmento al DOM
		$resultadoRandom.appendChild($fragmentRandom);
	} catch (err) {
		let message = err.statusText || "Ocurrió un error";
		console.log(message);
	}
};

/* ------ CÓDIGO ------ */
// Al cargar el documento hago que se impriman todos los posters, sino no funciona el generador de números random
document.addEventListener("DOMContentLoaded", getAllPosters);

document.addEventListener("click", (e) => {
	// Mostrar todas las pelis
	if (e.target.matches("#btn_todas")) {
		e.preventDefault();
		mostrarTodasPeliculas();
	}
	// Random de 3 pelis
	if (e.target.matches("#btn_random")) {
		e.preventDefault();
		// Crear el arrayPosters cuando se va a usar el random, si lo creo al declarar variables no se crea el array porque tienen que esperar a que se ejecute getAllPosters
		arrayPosters = Array.from(posters);
		// Borra contenido de resultado_random para que no se impriman muchos resultados juntos
		clearBox("resultado_random");
		mostrarRandom();
		getRandomPosters();
	}
});
