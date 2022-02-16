/* ------ VARIABLES ------ */
let currentYear = document.getElementById("current_year").getAttribute("class");
let URL_JSON = `../data/movies_${currentYear}.json`;

let $mainContent = document.getElementById("main-content");
let $fragment = document.createDocumentFragment();

/* ------ FUNCIONES ------ */
const getAll = async () => {
	try {
		let res = await fetch(URL_JSON);
		// Data guarda el objeto entero de las pelis del año
		let data = await res.json();

		if (!res.ok)
			throw {
				status: res.status,
				statusText: res.statusText,
			};

		data.forEach((month) => {
			// Crea section con container para cada mes
			let $section = document.createElement("section");
			$section.classList.add("container");

			// Agrega título
			let $title = document.createElement("h2");
			$title.textContent = month.title;
			$section.appendChild($title);

			// Agrega row
			let $row = document.createElement("div");
			$row.classList.add("row", "grid-peliculas");
			$section.appendChild($row);

			// Recorre array movies y crea cards para cada una
			month.movies.forEach((movie) => {
				// Crea card y sus clases
				let $card = document.createElement("div");
				$card.classList.add("card", "card-pelicula", "col-12", "col-lg-6");

				// Img
				let $img = document.createElement("img");
				$img.src = `../${movie.img_card}`;
				$img.alt = movie.img_card_alt;
				$img.classList.add("card-img-top");
				$card.appendChild($img);

				// Card body
				let $cardBody = document.createElement("div");
				$cardBody.classList.add("card-body", "card-pelicula__contenido");
				let $cardTitle = document.createElement("h3");
				$cardTitle.classList.add("card-pelicula__titulo");
				let $cardLink = document.createElement("a");
				$cardLink.href = `peliculas/${movie.link_page}`;
				$cardLink.classList.add("stretched-link");
				$cardLink.textContent = `${movie.name} (${movie.year})`;
				$cardBody.appendChild($cardTitle);
				$cardTitle.appendChild($cardLink);
				$card.appendChild($cardBody);

				// Agrega card a row
				$row.appendChild($card);
			});

			// Agrega sección a fragmento
			$fragment.appendChild($section);
		});

		$mainContent.appendChild($fragment);
	} catch (err) {
		let message = err.statusText || "Ocurrió un error";
		console.log(message);
	}
};

/* ------ CÓDIGO ------ */
document.addEventListener("DOMContentLoaded", getAll);
