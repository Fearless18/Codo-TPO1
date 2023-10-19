function mostrarTexto(text) {
    document.getElementById('text-container').innerHTML = text;
}



const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        // Quitar la clase 'active' de todos los elementos
        items.forEach(i => i.classList.remove('active'));

        // Agregar la clase 'active' al elemento clickeado
        item.classList.add('active');
    });
});