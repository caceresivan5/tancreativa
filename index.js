const cardIndex = document.querySelector(".card1");


//para activar la funcion mostrarInventario y mostrarla cuando carga la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarInventario(inventarioIndex);
})


//PLANTILLA PARA LAS MANUALIDADES

class productoIndex{
    constructor(id, detalle, imagen, genero, material, fecha, enlace){
        this.id = id,
        this.detalle = detalle,
        this.imagen = imagen,
        this.genero = genero,
        this.material = material,
        this.fecha = fecha,
        this.enlace = enlace
    }
}

//creo inventario y lo agrego al array

const inventarioIndex = [];
console.log(inventarioIndex);

//hago push al inventario
inventarioIndex.push(new productoIndex(04, '"Scrunchies"', "img/gomaPelo.png", "nena", "Tela", "04/08/2021", "gomaParaPelo.html")); 
inventarioIndex.push(new productoIndex(02, '"Unicornio"', "img/unicornio1.png", "nena", "Fieltro", '20/07/2021', "unicornio.html" ));
inventarioIndex.push(new productoIndex(02, '"Perrito"', "img/perrito.png", "nene", "LimpiaPipas", '14/07/2021', "perrito.html"));  

//funcion para mostrar el inventario en el HTML

function mostrarInventario( inventarioIndex){
    inventarioIndex.forEach(prod2 => {
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
        cardIndex.appendChild(div2);

    });
}
