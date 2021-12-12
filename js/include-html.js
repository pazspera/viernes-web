document.addEventListener('DOMContentLoaded', (e) => {
    const includeHTML = (el, url) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', (e) => {
            if(xhr.readyState !== 4) return;

            if(xhr.status >= 200 && xhr.status < 400) {
                el.outerHTML = xhr.responseText;
            } else {
                let message = xhr.statusText || 'Error al cargar el archivo, verifica que estés haciendo la petición por http o https';
                el.outerHTML(`<div><p>Error ${xhr.status}: ${message}</p></div>`);
            }    
        })

        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', "text/html;charset=utf-8");
        xhr.send();
    }
    
    // La función includeHTML se va a ejecutar por cada elemento que tenga data-attribute data-include
    document
    .querySelectorAll("[data-include]")
    .forEach(el => includeHTML(el, el.getAttribute('data-include')));
})