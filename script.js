// Función para pasar de la bienvenida al contenido principal
function mostrarPantalla2() {
    document.getElementById('pantalla1').classList.add('hidden');
    document.getElementById('pantalla2').classList.remove('hidden');
}

// Función para manejar las cajas con transición suave
function mostrarDetalle(id) {
    const cajaSeleccionada = document.getElementById('text-' + id);
    
    // Guardamos si la caja clickeada ya estaba abierta antes de cerrar las demás
    const yaEstabaActiva = cajaSeleccionada.classList.contains('active');
    
    // Seleccionamos todas las cajas de contenido y les quitamos el estado activo
    const cajas = document.querySelectorAll('.content-box');
    cajas.forEach(caja => {
        caja.classList.remove('active');
    });
    
    // Si NO estaba abierta, le ponemos la clase active para que se despliegue con la transición
    // Si SÍ estaba abierta, se queda cerrada (efecto acordeón completo)
    if (!yaEstabaActiva) {
        cajaSeleccionada.classList.add('active');
    }
}
