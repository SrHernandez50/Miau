function mostrarSorpresa() {
    document.getElementById('sorpresa').classList.remove('hidden');
    document.getElementById('sorpresa').classList.add('animated', 'fadeIn');
}

function irA(pagina) {
    window.location.href = pagina + ".html"; // Asegúrate de que las páginas existen
}
