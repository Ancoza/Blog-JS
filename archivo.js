var btnMenu = document.getElementById('button');
var menu = document.getElementById('rightMenu');
var lista = document.getElementById('list');
var jsPicture = document.getElementById('jsPic');
var jqSpace = document.getElementById('JQueryObj');
var jsSpace = document.getElementById('JSObj');

window.addEventListener('DOMContentLoaded', () => {
    window.scroll({
        top:0,
        behavior: "smooth"
    });
});

btnMenu.addEventListener('click', () => {
    if(menu.classList.contains('menuDesplegado')){
        menu.classList.remove('menuDesplegado'); 
    }else {
        menu.classList.add('menuDesplegado'); 
    }
});

lista.children[0].children[0].children[0].addEventListener('click', () => {
    window.scroll({
        top: jsSpace.offsetTop - 100,
        behavior: "smooth"
    });
});

lista.children[1].children[0].children[0].addEventListener('click', () => {
    window.scroll({
        top: jqSpace.offsetTop - 100,
        behavior: "smooth"
    });
});
