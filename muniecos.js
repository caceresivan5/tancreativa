
const cardMuniecos = document.querySelector('.cardInventario');


//para activar la funcion mostrarInventario y mostrarla cuando carga la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarInventarioMuniecos(inventarioMuniecos);
})

//tomar el array del localstorage
const inventarioMuniecos = JSON.parse(localStorage.getItem('muniecosStorage')) || [];

function mostrarInventarioMuniecos( inventarioMuniecos){
    inventarioMuniecos.forEach(prod2 => {
        //creo un div
        let div2 = document.createElement('div');
        //creo una clase
        div2.classList.add('cardInventario__Manualidades');
        div2.innerHTML = 
        `
        <p>${prod2.detalle}</p>
        <div class="imagen__producto">
                   <img src='${prod2.imagen}' , alt='${prod2.detalle}'>
        </div>
        <div class="card__data2">
        <p><span> Material: </span> ${prod2.material} </p>
        <p><span> Data: </span> ${prod2.fecha} </p>
        
        </div>
        <div class="botonCard">
        <a href="${prod2.enlace}">+INFO</a>
            </div>

        `
        ;
        cardMuniecos.appendChild(div2);

    });
}
