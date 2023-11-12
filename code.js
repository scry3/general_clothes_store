//! BOTONES PARA CAMBIAR DE SECCION

const botonesCategorias = document.querySelectorAll(".btnCategoria");
let items = document.querySelectorAll(".item");
let categoriaInterna;

function addNewItems() {
  items = document.querySelectorAll(".item");
  categoriaInterna = items[items.length - 1]?.getAttribute("data-category") || "";
  console.log("agregado");
}

addNewItems();
formulario.style.display = "none";

botonesCategorias.forEach((btn) => { //recorremos cada boton(por si agrego más)
  btn.addEventListener("click", function () { //agregamos la funcion a ejecutar.
    const categoria = this.getAttribute("data-categoria"); //'this' hace referencia al objeto que se este ejecutando en el momento.
    addNewItems(); //para que la pagina agregue cualquier item nuevo 
    ocultarTodosLosItems(); //funcion que pone en "display: none;" todos los items a los no hace referencia ese boton.
    mostrarItemsDeCategoria(categoria);
    document.querySelectorAll("." + categoria).forEach((item) => { //toma cada item de 'categoria', y le agrega un punto parra tomarlo como clase.
      item.style.display = "block"; //hace que se muestren los items a los que hace referencia el boton presionado.
    });
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
    const clasificacion = document.getElementById("clasificacion").value;

    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList.add("item", categoria);
    nuevoProducto.setAttribute('data-category',clasificacion);

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
    mostrarItemsDeCategoria(categoria);
    
    // Limpia el formulario
    formulario.reset();
    ocultarFormulario();
    addNewItems();
    
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




function mostrarItemsDeCategoria(categoria) {
  ocultarTodosLosItems();
  document.querySelectorAll("." + categoria).forEach((item) => {
    item.style.display = "block";
  });
}

//! FUNCION PARA ACCEDER A CADA CATEGORIA DE ROPA Y SUS PRODUCTOS
/*a cada hijo de los items de ropa(top,pantalones, etc) les agregué una 'data-category' que sera igual a la clase extra dentro de cada 'hijo',
es decir que la categoria 'polo' tendra como data category 'polo' pero su clase seguira siendo 'item top', 
y todos sus hijos tendran la clase 'item polo', 
asi cuando se haga click en la categoria polo, se muestre todo de esa categoria, pero no la foto de la categoria en si. */
document.querySelector('.container-items').addEventListener('click', function(event) {
  const targetItem = event.target.closest('.item');
  if (targetItem) {
    console.log("click");
    categoriaInterna = targetItem.getAttribute("data-category");
    if (!targetItem.classList.contains("final")) {
      ocultarTodosLosItems();
      mostrarItemsDeCategoria(categoriaInterna);
    }
  }
});




