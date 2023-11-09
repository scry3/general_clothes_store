//! BOTONES PARA CAMBIAR DE SECCION

const botonesCategorias = document.querySelectorAll(".btnCategoria");
const items = document.querySelectorAll(".item");

botonesCategorias.forEach((btn) => { //recorremos cada boton(por si agrego más)
  btn.addEventListener("click", function () { //agregamos la funcion a ejecutar.
    const categoria = this.getAttribute("data-categoria"); //'this' hace referencia al boton que se este ejecutando en el momento.
    ocultarTodosLosItems(); //funcion que pone en "display: none;" todos los items a los no hace referencia ese boton.
    document.querySelectorAll("." + categoria).forEach((item) => { //toma cada item de 'categoria', y le agrega un punto parra tomarlo como clase.
      item.style.display = "block"; //hace que se muestren los items a los que hace referencia el boton presionado.
    });
  });
});

function ocultarTodosLosItems() {
  items.forEach((item) => {
    item.style.display = "none";
  });
}



//! CODIGO PARA AGREGAR ELEMENTOS MEDIANTE UN FORM
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const catalogo = document.querySelector(".container-items");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe de la manera estándar y que se refresque la pagina.
  
      // Obtenemos los valores del formulario
      const imagen = document.getElementById("imagen").files[0];
      const nombre = document.getElementById("nombre").value;
      const categoria = document.getElementById("categoria").value;
  
      // Crea un nuevo elemento div para el producto
      const nuevoProducto = document.createElement("div");
  
      // Agrega las clases "item" y la categoría como clases
      nuevoProducto.classList.add("item", categoria);
  
      // Crea una figura para la imagen
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = URL.createObjectURL(imagen);
      img.alt = "producto";
      figure.appendChild(img);
  
      // Crea un div para la información del producto
      const infoProducto = document.createElement("div");
      infoProducto.classList.add("info-product");
      const h2 = document.createElement("h2");
      h2.textContent = nombre;
      infoProducto.appendChild(h2);
  
      // Agrega la figura e información del producto al nuevo elemento
      nuevoProducto.appendChild(figure);
      nuevoProducto.appendChild(infoProducto);
  
      // Agrega el nuevo elemento al catálogo
      catalogo.appendChild(nuevoProducto);
  
      // Limpia el formulario
      formulario.reset();
    });
  });
  
  let iconShow = false;
  const formulario = document.getElementById("formulario");
  const icon = document.getElementById("container-icon");
  
  formulario.style.display = "none";

  icon.addEventListener("click", function(){ 
    iconShow = !iconShow
  
    if(iconShow == false){
      formulario.style.display = "none";
    }else if(iconShow == true){
      formulario.style.display = "block";
    }

  });
  

