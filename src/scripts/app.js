/**
 * 
 * @param {HTMLElement} idDoSite 
 */
function mudarCorDeFundo(idDoSite){
    const nota = idDoSite.getAttribute('data-nota');
    if(nota < 4){
        idDoSite.style.backgroundColor = '#FF0000';
    }
    else if (nota >= 4 && nota<=6){
        idDoSite.style.backgroundColor = '#FFFF00';
    }
    else {
        idDoSite.style.backgroundColor = '#008000';
    }
}


function load(){
    document.querySelectorAll('.botao').forEach(function(a){
        mudarCorDeFundo(a);
    })
}



