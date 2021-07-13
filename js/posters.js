const arregloPosters = [
    {
        id : "vertigo",
        name : "Vertigo",
        imdb : "https://www.imdb.com/title/tt0052357/",
        img : "img/posters/poster_vertigo.jpg"
    },
    {
        id : "field_england",
        name : "A Field in England",
        imdb : "https://www.imdb.com/title/tt2375574/",
        img : "img/posters/poster_field_england.jpg"
    },
    {
        id : "dia_bestia",
        name : "El día de la bestia",
        imdb : "https://www.imdb.com/title/tt0112922/",
        img : "img/posters/poster_dia_bestia.jpg"
    },
    {
        id : "berberian",
        name : "Berberian Sound Studio",
        imdb : "https://www.imdb.com/title/tt1833844/",
        img : "img/posters/poster_berberian.jpg"
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

/*  */