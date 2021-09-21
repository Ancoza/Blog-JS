var btnMenu = document.getElementById('button');
var menu = document.getElementById('rightMenu');
var lista = document.getElementById('list');

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

lista.children[0].addEventListener('click', () => {
    window.scroll({
        top:2040,
        behavior: "smooth"
    });
});