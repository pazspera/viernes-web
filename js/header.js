/* Header para index */
class Header1 extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <header class="sticky-top"> 
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                <a class="navbar-brand" href="index.html">VieRnes</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="pages/historial_peliculas.html">Historial de películas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="pages/seleccion_peliculas.html">Opciones Aleatorias</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
        `;
	}
}

customElements.define("header-component1", Header1);

/* Header para html dentro de carpeta pages */
class Header2 extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <header class="sticky-top"> 
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                <a class="navbar-brand" href="../index.html">VieRnes</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="historial_peliculas.html">Historial de películas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="seleccion_peliculas.html">Opciones Aleatorias</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
        `;
	}
}

customElements.define("header-component2", Header2);

/* Header para html dentro de carpeta peliculas */
class Header3 extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <header class="sticky-top"> 
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                <a class="navbar-brand" href="../../index.html">VieRnes</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="../historial_peliculas.html">Historial de películas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../seleccion_peliculas.html">Opciones Aleatorias</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
        `;
	}
}

customElements.define("header-component3", Header3);
