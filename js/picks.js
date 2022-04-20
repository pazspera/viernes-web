/* ------ VARIABLES ------ */
const d = document;
const URL_MOVIES_PICKS = "../data/info_movies.json";
const currentPicker = d.getElementById("current_pick").getAttribute("class");
let $pickedRow = d.getElementById("pickedRow");

/* ------ FUNCIONES ------ */
const getPickedMovies = async () => {
  try {
    let res = await fetch(URL_MOVIES_PICKS);
    let data = await res.json();
    // Regular Expression para buscar en data todos los picks de currentPicker
    // independientemente de mayúsculas y minúsculas
    let regex = new RegExp(currentPicker, "i");
    // Pelis elegidas por currentPicker
    let pickedMovies = data.filter((movie) => {
		console.log(movie.pick_category);
      return movie.pick_category.match(regex);
    });

    if (!res.ok) {
      throw {
        status: res.status,
        statusText: res.statusText,
      };
    }

    // Recorre array movies y crea cards para cada una
    pickedMovies.forEach((movie) => {
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
      $pickedRow.appendChild($card);
    });
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    console.log(message);
  }
};

/* ------ CÓDIGO ------ */
d.addEventListener("DOMContentLoaded", getPickedMovies);
