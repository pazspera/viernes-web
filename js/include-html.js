let $footer = document.getElementById('footer');
let $header = document.getElementById('header');

const loadHTMLSection = (element, path) => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', (e) => {
        // Solo ejecutar cuando readyState esté ready
        if(xhr.readyState !== 4) return;
        
        // Si readyState es entre 200 y 300, ejecutar programación
        if(xhr.status >= 200 && xhr.status < 300){
            element.outerHTML = xhr.responseText;
        } else {
            console.log('Ocurrió un error con la respuesta del servidor');
            element.outerHTML = `Error ${xhr.status} `
        }
    });
    
    xhr.open('GET', path);
    xhr.send(); 
}

window.addEventListener('DOMContentLoaded', loadHTMLSection($header,'assets/header.html'));
window.addEventListener('DOMContentLoaded', loadHTMLSection($footer,'assets/footer.html'));