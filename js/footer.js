class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="row">
                <div class="col-11">
                    <p>Sitio desarrollado con <i class="fas fa-heart footer__heart"></i> por <a href="https://github.com/pazspera" class="link-line" target="_blank" rel="noreferrer">Paz Spera</a></p>
                </div>
                <div class="col-1 d-flex justify-content-end">
                    <a href="https://discord.gg/sHEkMhF" target="_blank" rel="noreferrer"><i class="fab fa-discord"></i></a>
                </div>
                </div>
            </div>
        </footer>
        `;
	}
}

customElements.define("footer-component", Footer);
