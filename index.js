const cardIndex = document.querySelector(".card1");


//para activar la funcion mostrarInventario y mostrarla cuando carga la pagina
document.addEventListener('DOMContentLoaded', () => {
    mostrarInventario(novedad);
})

//PLANTILLA PARA LAS MANUALIDADES

class producto{
    constructor(id, detalle, imagen, categoria, material, fecha, enlace, novedades){
        this.id = id,
        this.detalle = detalle,
        this.imagen = imagen,
        this.categoria = categoria,
        this.material = material,
        this.fecha = fecha,
        this.enlace = enlace,
        this.novedades = novedades
    }
}

//creo inventario y lo agrego al array

const inventario = [];
console.log(inventario);

//hago push al inventario
inventario.push(new producto(06, "Creando...", "img/proximamente.png", "indefinido", "Creando...", 2021, "creando.html","si"));
inventario.push(new producto(05, '"Anillo Arañas"', "img/araña1.png", "nena", "LimpiaPipa", "08/08/2021", "gomaParaPelo.html", "si")); 
inventario.push(new producto(04, '"Scrunchies"', "img/gomaPelo.png", "nena", "Tela", "04/08/2021", "gomaParaPelo.html", "si")); 
inventario.push(new producto(03, '"Unicornio"', "img/unicornio1.png", "munieco", "Fieltro", '20/07/2021', "unicornio.html" ));
inventario.push(new producto(02, '"Perrito"', "img/perrito.png", "nene", "LimpiaPipas", '14/07/2021', "perrito.html"));  
inventario.push(new producto(01, '"Principito"', "img/principito1.png", "munieco", "Fieltro", '09/07/2021', "principito.html"));

//FUNCION PARA GUARDAR TODO EL CONTENIDO DEL CARRITO EN EL localStorage--lo coloco en el boton VAMOS A LA CAJA
function sincronizarStorage(){
    localStorage.setItem('inventarioStorage', JSON.stringify(inventario));
}
sincronizarStorage();

//filtro el array por novedades si
const novedad = inventario.filter(elementoNovedad => elementoNovedad.novedades == "si");
//funcion para mostrar el inventario en el HTML

function mostrarInventario( novedad){
    novedad.forEach(prod2 => {
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

//tomar el array del localstorage
const inventarioMuniecos = JSON.parse(localStorage.getItem('inventarioStorage')) || [];
//filtro el localstorage por muniecos
function filtrarMunieco (){
    const munieco = inventarioMuniecos.filter(elemento => elemento.categoria === "munieco");
    localStorage.setItem('muniecosStorage', JSON.stringify(munieco));
}
