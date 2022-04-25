/* ------ VARIABLES ------ */
const URL_MOVIES = "../../data/info_movies.json";
let currentMovieId = document.getElementById("current_movie").getAttribute("class");
// Variable para trabajar responsive mobile
let breakpointSize = "(min-width: 1024px)";

/* ------ FUNCIONES ------ */
// Función para adaptar contenido para mobile y desktop
const responsiveContent = (domElement, breakpointSize, mobileContent, desktopContent) => {
  let breakpoint = window.matchMedia(breakpointSize);

  const responsive = (e) => {
    if (e.matches) {
      // Al menos 1024px
      domElement.innerHTML = desktopContent;
    } else {
      // Menos de 1024px
      domElement.innerHTML = mobileContent;
    }
  };

  breakpoint.addListener(responsive);
  responsive(breakpoint);
};

const getMovieInfo = async () => {
  try {
    let res = await fetch(URL_MOVIES);
    let data = await res.json();
    let $hero = document.getElementById("current_movie_hero");
    let $main = document.getElementById("main-content");
    let $fragmentHero = document.createDocumentFragment();
    let $fragmentMain = document.createDocumentFragment();
    let $fragmentCast = document.createDocumentFragment();
    let $fragmentImgRow = document.createDocumentFragment();
    let $fragmentBtnNav = document.createDocumentFragment();

    if (!res.ok)
      throw {
        status: res.status,
        statusText: res.statusText,
      };

    // Busca en data y devuelve el objeto que corresponde a currentMovieId
    let currentMovie = data.find(function (movie) {
      if (movie.id === currentMovieId) return true;
    });

    // Revisa si el pick es del Loco o del Pollo para agregar el "el"
    let namePick = currentMovie.pick;
    // Convierte current pick a minúsculas sino no funcionan
    // los links
    let pickLink = currentMovie.pick_category.toLowerCase();
    let textPick = "";
    const checkPickName = (namePick) => {
      if (namePick === "Pollo" || namePick === "Loco") {
        return (textPick = `Elección del `);
      } else {
        return (textPick = `Elección de `);
      }
    };
    checkPickName(namePick);

    // Imprimir hero
    let $heroImg = document.createElement("div");
    $heroImg.classList.add("hero-grid__img");
    $heroImg.id = `${currentMovie.id}`;
    let $heroCartel = document.createElement("div");
    $heroCartel.classList.add("hero-grid__cartel");
    let $heroTitle = document.createElement("h1");
    $heroTitle.classList.add("hero-grid__titulo");
    $heroTitle.textContent = `${currentMovie.name} (${currentMovie.year})`;
    let $heroDirector = document.createElement("p");
    $heroDirector.classList.add("hero-grid__texto");
    $heroDirector.textContent = `Dirección: ${currentMovie.director}`;
    let $heroDuration = document.createElement("p");
    $heroDuration.classList.add("hero-grid__texto");
    $heroDuration.textContent = `${currentMovie.duration}`;
    let $heroPick = document.createElement("p");
    $heroPick.classList.add("hero-grid__texto-final");
    $heroPick.textContent = `${textPick}`;

    // Imprime el link dependiendo de pick_category para poder
    // agrupar varias personas en piden_pista.html
    let $heroPickLink = document.createElement("a");
    $heroPickLink.href = `../picks_${pickLink}.html`;
    $heroPickLink.classList.add("hero__pick-link", "link-line");
    $heroPickLink.textContent = namePick;
    $heroPick.appendChild($heroPickLink);

    $fragmentHero.appendChild($heroImg);
    $heroCartel.appendChild($heroTitle);
    $heroCartel.appendChild($heroDirector);
    $heroCartel.appendChild($heroDuration);
    $heroCartel.appendChild($heroPick);
    $fragmentHero.appendChild($heroCartel);
    $hero.appendChild($fragmentHero);

    // MAIN CONTENT
    // Imprimir sinopsis
    let $sinopsis = document.createElement("section");
    $sinopsis.classList.add("main-text");
    $sinopsis.id = "current_movie_sinopsis";
    let $containerSinopsis = document.createElement("div");
    $containerSinopsis.classList.add("container");
    let $sinopsisCol = document.createElement("div");
    $sinopsisCol.classList.add("col-12", "col-md-8", "col-lg-6");
    let $sinopsisContent = document.createElement("div");
    $sinopsisContent.classList.add("pelicula__sinopsis");
    let $sinopsisTitle = document.createElement("h2");
    $sinopsisTitle.classList.add("main__titulo");
    $sinopsisTitle.textContent = "Sinopsis";
    let $sinopsisText = document.createElement("p");
    $sinopsisText.classList.add("pelicula__sinopsis__texto");
    $sinopsisText.textContent = `${currentMovie.sinopsis}`;

    $sinopsisContent.appendChild($sinopsisTitle);
    $sinopsisContent.appendChild($sinopsisText);
    $sinopsisCol.appendChild($sinopsisContent);
    $containerSinopsis.appendChild($sinopsisCol);
    $sinopsis.appendChild($containerSinopsis);

    $fragmentMain.appendChild($sinopsis);
    $main.appendChild($fragmentMain);

    // Imprimir cast
    // Cast title
    let $cast = document.createElement("section");
    $cast.classList.add("main-text");
    $cast.id = "current_movie_cast";
    let $containerCast = document.createElement("div");
    $containerCast.classList.add("container");
    let $rowCast1 = document.createElement("div");
    $rowCast1.classList.add("row");
    let $colCast = document.createElement("div");
    $colCast.classList.add("col-12");
    let $castTitle = document.createElement("h2");
    $castTitle.classList.add("main__titulo");
    $castTitle.textContent = "Elenco";
    let $rowCast2 = document.createElement("div");
    $rowCast2.classList.add("row");
    // Cast img
    currentMovie.cast.forEach((actor) => {
      let $figure = document.createElement("figure");
      $figure.classList.add("pelicula__actor", "col-6", "col-sm-4");
      let $figureImg = document.createElement("img");
      $figureImg.src = `../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${actor.img}`;
      let $figcaption = document.createElement("figcaption");
      $figcaption.classList.add("pelicula__actor__name", "text-center");
      $figcaption.textContent = `${actor.actor}`;

      $figure.appendChild($figureImg);
      $figure.appendChild($figcaption);
      $fragmentCast.appendChild($figure);
    });

    $colCast.appendChild($castTitle);
    $rowCast1.appendChild($colCast);
    $containerCast.appendChild($rowCast1);
    $rowCast2.appendChild($fragmentCast);
    $containerCast.appendChild($rowCast2);
    $cast.appendChild($containerCast);

    $fragmentMain.appendChild($cast);
    $main.appendChild($fragmentMain);

    // Imprimir trailer
    let $trailer = document.createElement("section");
    $trailer.classList.add("main-text");
    $trailer.id = "current_movie_trailer";
    let $containerTrailer = document.createElement("div");
    $containerTrailer.classList.add("container");
    let $rowTrailer = document.createElement("div");
    $rowTrailer.classList.add("row");
    $rowTrailer.id = "rowTrailer";
    let $colTrailer1 = document.createElement("div");
    $colTrailer1.classList.add("col-12");
    let $trailerTitle = document.createElement("h2");
    $trailerTitle.classList.add("main__titulo");
    $trailerTitle.textContent = "Trailer";

    $colTrailer1.appendChild($trailerTitle);
    $rowTrailer.appendChild($colTrailer1);
    $containerTrailer.appendChild($rowTrailer);

    // Esta parte del código usa la función responsiveContent para mostrar
    // trailer en video en desktop y un btn con link en mobile
    // En $rowTrailerChangingContent se pone el contenido de ambos y va cambiando
    // Tiene que ser un string para poder pasarlo a la función, por lo que
    // no creo los elementos del DOM como en el resto de los eventos
    // Implementar esto hace que no pueda agregar el disclaimer a wayward_cloud
    // pero el beneficio que da a la carga en mobile es más importante
    let $rowTrailerChangingContent = document.createElement("div");
    $rowTrailerChangingContent.classList.add("row");
    $rowTrailerChangingContent.id = "changingRow";

    let contentTrailerMobile = `
			<div class="col">
        		<a href="${currentMovie.trailerLink}" class="btn btn__primary">Ver Trailer</a>
    		</div>`;
    let contentTrailerDesktop = `
			<div class="col col-lg-9">
				<div class="ratio ratio-16x9">
					${currentMovie.trailer}
				</div>
			</div>`;

    // Agrega disclaimer para wayward_cloud
    if (currentMovieId === "wayward_cloud") {
      contentTrailerMobile = `
			<div class="col">
        		<a href="${currentMovie.trailerLink}" class="btn btn__primary">Ver Trailer</a>
				<p class="disclaimer-text mt-2">Este trailer está restringido por edad en Youtube. Googlearlo es una opción que dejamos a tu criterio.</p>
    		</div>`;
      contentTrailerDesktop = `
			<div class="col col-lg-9">
				<div class="ratio ratio-16x9">
					${currentMovie.trailer}
				</div>
				<p class="disclaimer-text">Este trailer está restringido por edad en Youtube. Googlearlo es una opción que dejamos a tu criterio.</p>
			</div>`;
    }

    responsiveContent($rowTrailerChangingContent, breakpointSize, contentTrailerMobile, contentTrailerDesktop);

    $containerTrailer.appendChild($rowTrailerChangingContent);
    $trailer.appendChild($containerTrailer);

    $fragmentMain.appendChild($trailer);
    $main.appendChild($fragmentMain);

    // Imprimir img_row
    let $imgRow = document.createElement("section");
    $imgRow.classList.add("main-img");
    $imgRow.id = "current_movie_img";
    let $rowImgRow = document.createElement("div");
    $rowImgRow.classList.add("row", "g-0");

    currentMovie.img_row.forEach((img) => {
      if (img.class === "always_show") {
        let $imgDiv = document.createElement("div");
        $imgDiv.classList.add("img-fluid", "col-12", "col-md-6", "col-xxl-4", "pelicula__img");
        let $img = document.createElement("img");
        $img.src = `../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${img.img}`;
        $img.alt = `${img.alt}`;

        $imgDiv.appendChild($img);
        $fragmentImgRow.appendChild($imgDiv);
      } else if (img.class === "hidden_first") {
        let $imgDiv = document.createElement("div");
        $imgDiv.classList.add("img-fluid", "d-none", "d-xxl-block", "col-xxl-4", "pelicula__img");
        let $img = document.createElement("img");
        $img.src = `../../img/pelicula/${currentMovie.id}/${currentMovie.id}_${img.img}`;
        $img.alt = `${img.alt}`;

        $imgDiv.appendChild($img);
        $fragmentImgRow.appendChild($imgDiv);
      }
    });

    $rowImgRow.appendChild($fragmentImgRow);
    $imgRow.appendChild($rowImgRow);

    $fragmentMain.appendChild($imgRow);
    $main.appendChild($fragmentMain);

    // Btns navegación entre pelis
    // En base al index de la peli actual, busca los index de la peli anterior y siguiente. Usa el valor de link_page de esas pelis para imprimir los btn para navegar entre pelis
    let currentMovieIndex = data.findIndex((movie) => movie.id === currentMovieId);
    let nextMovieIndex = currentMovieIndex - 1;
    let previousMovieIndex = currentMovieIndex + 1;
    let nextMovieLinkPage;
    let previousMovieLinkPage;

    // Contenedor para los btn
    let $btnNav = document.createElement("section");
    $btnNav.classList.add("main", "text");
    $btnNav.id = "current_movie_btn_nav";
    let $containerBtnNav = document.createElement("div");
    $containerBtnNav.classList.add("container");
    let $rowBtnNav = document.createElement("div");
    $rowBtnNav.classList.add("row");

    $containerBtnNav.appendChild($rowBtnNav);
    $btnNav.appendChild($containerBtnNav);

    $fragmentBtnNav.appendChild($btnNav);
    $main.appendChild($fragmentBtnNav);

    // Recupera el link de la peli siguiente a la actual
    if (nextMovieIndex === -1) {
      nextMovieLinkPage = "";
    } else {
      nextMovieLinkPage = data[nextMovieIndex].link_page;
    }

    // Recupera el link de la peli anterior a la actual
    if (previousMovieIndex > data.length - 1) {
      // Validación en caso de que sea la 1er peli
      previousMovieLinkPage = "";
    } else {
      previousMovieLinkPage = data[previousMovieIndex].link_page;
    }

    // Si currentMovie es la primera peli que vimos
    if (currentMovieIndex === data.length - 1 && previousMovieLinkPage === "") {
      let $emptyPreviousBtn = document.createElement("div");
      $emptyPreviousBtn.classList.add("col-6");
      let $nextBtn = document.createElement("div");
      $nextBtn.classList.add("col-6", "d-flex", "flex-row-reverse");
      let $nextBtnLink = document.createElement("a");
      $nextBtnLink.href = nextMovieLinkPage;
      $nextBtnLink.classList.add("btn", "btn__primary", "btn--previous");
      $nextBtnLink.textContent = "Viernes Siguiente";

      $nextBtn.appendChild($nextBtnLink);
      $rowBtnNav.appendChild($emptyPreviousBtn);
      $rowBtnNav.appendChild($nextBtn);
    }

    // Si currentMovie es la última peli que vimos
    if (currentMovieIndex === 0 && nextMovieIndex === -1) {
      let $previousBtn = document.createElement("div");
      $previousBtn.classList.add("col-6");
      let $previousBtnLink = document.createElement("a");
      $previousBtnLink.href = previousMovieLinkPage;
      $previousBtnLink.classList.add("btn", "btn--previous", "btn__primary");
      $previousBtnLink.textContent = "Viernes Anterior";
      let $emptyNextBtn = document.createElement("div");
      $emptyNextBtn.classList.add("col-6");

      $previousBtn.appendChild($previousBtnLink);
      $rowBtnNav.appendChild($previousBtn);
      $rowBtnNav.appendChild($emptyNextBtn);
    }

    // Se imprimen ambos btn
    if (currentMovieIndex !== data.length - 1 && currentMovieIndex !== 0 && previousMovieLinkPage !== "") {
      let $previousBtn = document.createElement("div");
      $previousBtn.classList.add("col-6");
      let $previousBtnLink = document.createElement("a");
      $previousBtnLink.href = previousMovieLinkPage;
      $previousBtnLink.classList.add("btn", "btn--previous", "btn__primary");
      $previousBtnLink.textContent = "Viernes Anterior";

      $previousBtn.appendChild($previousBtnLink);
      $rowBtnNav.appendChild($previousBtn);

      let $nextBtn = document.createElement("div");
      $nextBtn.classList.add("col-6", "d-flex", "flex-row-reverse");
      let $nextBtnLink = document.createElement("a");
      $nextBtnLink.href = nextMovieLinkPage;
      $nextBtnLink.classList.add("btn", "btn__primary", "btn--previous");
      $nextBtnLink.textContent = "Viernes Siguiente";

      $nextBtn.appendChild($nextBtnLink);
      $rowBtnNav.appendChild($nextBtn);
    }
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    console.log(message);
  }
};

/* ------ CÓDIGO ------ */
document.addEventListener("DOMContentLoaded", getMovieInfo);
