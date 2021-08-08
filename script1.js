const cardManualidades = document.querySelector(".cardInventario");


//para activar la funcion mostrarInventario y mostrarla cuando carga la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarInventario(inventario);
})


//PLANTILLA PARA LAS MANUALIDADES

class producto{
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

const inventario = [];
console.log(inventario);

//hago push al inventario
inventario.push(new producto(06, "Creando nuevas Ideas...", "img/proximamente.png", "indefinido", "Creando...", 2021, "creando.html"));
inventario.push(new producto(05, '"Anillo Arañas"', "img/araña1.png", "nena", "LimpiaPipa", "08/08/2021", "gomaParaPelo.html")); 
inventario.push(new producto(04, '"Scrunchies o goma para el pelo"', "img/gomaPelo.png", "nena", "Tela", "04/08/2021", "gomaParaPelo.html")); 
inventario.push(new producto(03, '"Unicornio"', "img/unicornio1.png", "nena", "Fieltro", '20/07/2021', "unicornio.html" ));
inventario.push(new producto(02, '"Perrito de LimpiaPipas"', "img/perrito.png", "nene", "Fieltro", '14/07/2021', "perrito.html"));  
inventario.push(new producto(01, '"Principito"', "img/principito1.png", "nene", "Fieltro", '09/07/2021', "principito.html"));


//funcion para mostrar el inventario en el HTML

function mostrarInventario( inventario){
    inventario.forEach(prod1 => {
        //creo un div
        let div1 = document.createElement('div');
        //creo una clase
        div1.classList.add('cardInventario__Manualidades');
        div1.innerHTML = 
        `
        <p>${prod1.detalle}</p>
        <div class="imagen__producto">
                   <img src='${prod1.imagen}' , alt='${prod1.detalle}'>
        </div>
        <div class="card__data2">
        <p><span> Material: </span> ${prod1.material} </p>
        <p><span> Data: </span> ${prod1.fecha} </p>
        
        </div>
        <div class="botonCard">
        <a href="${prod1.enlace}">+INFO</a>
            </div>

        `
        ;
        cardManualidades.appendChild(div1);

    });
}
