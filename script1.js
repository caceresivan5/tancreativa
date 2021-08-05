const cardManualidades = document.querySelector(".cardInventario");


//para activar la funcion mostrarInventario y mostrarla cuando carga la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarInventario(inventario);
})


//PLANTILLA PARA LAS MANUALIDADES

class producto{
    constructor(id, detalle, imagen, genero, material, fecha){
        this.id = id,
        this.detalle = detalle,
        this.imagen = imagen,
        this.genero = genero,
        this.material = material,
        this.fecha = fecha
    }
}

//creo inventario y lo agrego al array

const inventario = [];
console.log(inventario);

//hago push al inventario
inventario.push(new producto(04, "Creando nuevas Ideas...", "img/proximamente.png", "indefinido", "Creando...", 2021)); 
inventario.push(new producto(03, "Unicornio", "img/unicornio1.png", "nena", "Fieltro", '20/07/2021' ));
inventario.push(new producto(02, "Perrito de LimpiaPipas", "img/perrito.png", "nene", "Fieltro", '14/07/2021'));  
inventario.push(new producto(01, "Principito", "img/principito1.png", "nene", "Fieltro", '09/07/2021' ));


//funcion para mostrar el inventario en el HTML

function mostrarInventario( inventario){
    inventario.forEach(prod1 => {
        //creo un div
        let div1 = document.createElement('div');
        //creo una clase
        div1.classList.add('cardInventario__Manualidades');
        div1.innerHTML = 
        `
        <div class="imagen__producto">
                   <img src='${prod1.imagen}' , alt='${prod1.detalle}'>
        </div>
        <p>${prod1.detalle}</p>
        <p>${prod1.material} </p>
        <p>${prod1.fecha} </p>
        
        
        `
        ;
        cardManualidades.appendChild(div1);

    });
}
