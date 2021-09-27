var btnMenu = document.getElementById('button');
var menu = document.getElementById('rightMenu');
var lista = document.getElementById('list');
var jsPicture = document.getElementById('jsPic');
var jqSpace = document.getElementById('JQueryObj');
var jsSpace = document.getElementById('JSObj');
var nuevoObjeto;
var objetosIdJs = [];
var objetosIdJq = [];

function elementosH1Conteo(b){
    var tittleElements = 0; 
    
    for(var z = 0; z < b.childElementCount; z++){
        if(jsSpace.children[z].tagName == "H1"){
            tittleElements += 1; 
        }
    };

    return tittleElements; 
};

function detectarElementosContent(){
    for(var x = 0; x < jsSpace.childElementCount; x++){
        if(jsSpace.children[x].tagName == "H1"){
            jsSpace.children[x].setAttribute('id', `tituloJs#${x}`);
            objetosIdJs.push(`${document.getElementById(jsSpace.children[x].id).id}`);
            nuevoObjeto = document.createElement('li');
            nuevoObjeto.setAttribute('onclick', 'scrollTraslationJs(this)');
            nuevoObjeto.innerHTML = document.getElementById(jsSpace.children[x].id).innerHTML;
            menu.children[1].children[0].children[0].appendChild(nuevoObjeto);
        }else {
            objetosIdJs.push("Null");
        }
    };

    for(var x = 0; x < jqSpace.childElementCount; x++){
        if(jqSpace.children[x].tagName == "H1"){
            jqSpace.children[x].setAttribute('id', `tituloJq#${x}`);
            objetosIdJq.push(`${document.getElementById(jqSpace.children[x].id).id}`);
            nuevoObjeto = document.createElement('li');
            nuevoObjeto.setAttribute('onclick', 'scrollTraslationJq(this)');
            nuevoObjeto.innerHTML = document.getElementById(jqSpace.children[x].id).innerHTML;
            menu.children[1].children[1].children[0].appendChild(nuevoObjeto);
        }else {
            objetosIdJq.push("Null");
        };
    };
};
detectarElementosContent();
function scrollTraslationJs(b){
    for(var i = 0; i < jsSpace.childElementCount; i++){
        if(jsSpace.children[i].tagName == "H1" && b.innerHTML == jsSpace.children[i].innerHTML){
            window.scroll({
                top: document.getElementById(objetosIdJs[i]).offsetTop - 100,
                behavior: "smooth"
            });
        };
    };
};

function scrollTraslationJq(b){
    for(var i = 0; i < jqSpace.childElementCount; i++){
        if(b.innerHTML == jqSpace.children[i].innerHTML && jqSpace.children[i].tagName == "H1"){
            window.scroll({
                top: document.getElementById(objetosIdJq[i]).offsetTop - 100,
                behavior: "smooth"
            });
        };
    };
};

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
