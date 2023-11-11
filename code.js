//! BOTONES PARA CAMBIAR DE SECCION

const botonesCategorias = document.querySelectorAll(".btnCategoria");
let items = document.querySelectorAll(".item");
formulario.style.display = "none";

botonesCategorias.forEach((btn) => { //recorremos cada boton(por si agrego más)
  btn.addEventListener("click", function () { //agregamos la funcion a ejecutar.
    const categoria = this.getAttribute("data-categoria"); //'this' hace referencia al objeto que se este ejecutando en el momento.
    items = document.querySelectorAll(".item"); //para que la pagina agregue cualquier item nuevo 
    ocultarTodosLosItems(); //funcion que pone en "display: none;" todos los items a los no hace referencia ese boton.
    document.querySelectorAll("." + categoria).forEach((item) => { //toma cada item de 'categoria', y le agrega un punto parra tomarlo como clase.
      item.style.display = "block"; //hace que se muestren los items a los que hace referencia el boton presionado.
    });
  });
});



items = document.querySelectorAll(".item");

//! FUNCION PARA ACCEDER A CADA CATEGORIA DE ROPA Y SUS PRODUCTOS
/*a cada hijo de los items de ropa(top,pantalones, etc) les agregue una 'data-category' que sera igual a la clase extra dentro de cada 'hijo',
es decir que la categoria 'polo' tenddra como data category 'polo' pero su clase seguira siendo 'item top', 
y todos sus hijos tendran la clase 'item polo' */
items.forEach((item) => { 
  item.addEventListener("click", function () {
    const categoriaInterna = this.getAttribute("data-category");
    if (!item.classList.contains("final")) { // verifico si tienen la clase "final" antes de ocultar los items y mostrar los nuevos.
      ocultarTodosLosItems();
    document.querySelectorAll("." + categoriaInterna).forEach((item) => {
      item.style.display = "block";
    });
    }
  });
});





//! CODIGO PARA AGREGAR ELEMENTOS MEDIANTE UN FORM
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const catalogo = document.querySelector(".container-items");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const imagen = document.getElementById("imagen").files[0];
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;

    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList.add("item", categoria);

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = URL.createObjectURL(imagen);
    img.alt = "producto";
    figure.appendChild(img);

    const infoProducto = document.createElement("div");
    infoProducto.classList.add("info-product");
    const h2 = document.createElement("h2");
    h2.textContent = nombre;
    infoProducto.appendChild(h2);

    nuevoProducto.appendChild(figure);
    nuevoProducto.appendChild(infoProducto);

    catalogo.appendChild(nuevoProducto);

    // Oculta todos los elementos antes de mostrar los de la categoría seleccionada
    ocultarTodosLosItems();

    // Muestra los elementos de la categoría seleccionada
    document.querySelectorAll("." + categoria).forEach((item) => {
      item.style.display = "block";
    });

    // Limpia el formulario
    formulario.reset();
    ocultarFormulario();
  });

  let iconShow = false;
  const icon = document.getElementById("container-icon");

  icon.addEventListener("click", function () {
    iconShow = !iconShow;

    if (iconShow == false) {
      ocultarFormulario();
    } else if (iconShow == true) {
      mostrarFormulario();
    }
  });
});

  // Funciones para mostrar y ocultar el formulario
function mostrarFormulario() {
  formulario.style.display = "block";
}

function ocultarFormulario() {
  formulario.style.display = "none";
}

function ocultarTodosLosItems() {
  items.forEach((item) => {
    item.style.display = "none";
  });
}


