// Función para pasar de la bienvenida al contenido principal
function mostrarPantalla2() {
    document.getElementById('pantalla1').classList.add('hidden');
    document.getElementById('pantalla2').classList.remove('hidden');
}

// Función para manejar las cajas desplegables de los botones
function mostrarDetalle(id) {
    // Oculta todas las cajas de texto primero para que no se superpongan
    const cajas = document.querySelectorAll('.content-box');
    cajas.forEach(caja => caja.classList.add('hidden'));
    
    // Muestra únicamente la caja del botón que presionaste
    const cajaSeleccionada = document.getElementById('text-' + id);
    cajaSeleccionada.classList.remove('hidden');
}

