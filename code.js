const botonesCategorias = document.querySelectorAll('.btnCategoria');
const items = document.querySelectorAll('.item');

botonesCategorias.forEach(btn => {
    btn.addEventListener('click', function() {
        const categoria = this.getAttribute('data-categoria');
        ocultarTodosLosItems();
        document.querySelectorAll('.' + categoria).forEach(item => {
            item.style.display = 'block';
        });
    });
});

function ocultarTodosLosItems() {
    items.forEach(item => {
        item.style.display = 'none';
    });
}
