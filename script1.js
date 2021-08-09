const cardManualidades = document.querySelector(".cardInventario");


//para activar la funcion mostrarInventario y mostrarla cuando carga la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarInventario(inventarioManualidadaes);
})
//tomar el array del localstorage
const inventarioManualidadaes = JSON.parse(localStorage.getItem('inventarioStorage')) || [];

//funcion para mostrar el inventario guardado en el localStorage en la pagina manualidades

function mostrarInventario( inventarioManualidadaes){
    inventarioManualidadaes.forEach(prod1 => {
        //creo un div
        let div1 = document.createElement('div');
        //creo una clase
        div1.classList.add('cardInventario__Manualidades');
        div1.innerHTML = 
        `
        <p>${prod1.detalle}</p>
        <div class="contenedorInfo">

        <div class="imagen__producto">
                   <img src='${prod1.imagen}' , alt='${prod1.detalle}'>
        </div>
        <div class="card__data2">
        <p><span> Material: </span> ${prod1.material} </p>
        <p><span> Data: </span> ${prod1.fecha} </p>
        <div class="botonCard">
        <a   >VER</a>
            </div>
        
        </div>

        </div>
       


        `
        ;
        cardManualidades.appendChild(div1);

    });
}



