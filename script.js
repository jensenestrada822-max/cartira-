// Función para pasar de la bienvenida al contenido con transición calmada
function mostrarPantalla2() {
    const p1 = document.getElementById('pantalla1');
    const p2 = document.getElementById('pantalla2');

    // 1. Desvanecemos la primera pantalla suavemente
    p1.classList.add('invisible');

    // 2. Esperamos a que termine el fade-out (800ms) para cambiar de contenedor
    setTimeout(() => {
        p1.classList.add('hidden'); // Ocultamos del todo la P1
        p2.classList.remove('hidden'); // Hacemos que la P2 exista en el HTML
        
        // 3. Un mini delay para que el navegador capte el cambio y haga el fade-in suave
        setTimeout(() => {
            p2.classList.remove('invisible');
        }, 50);
    }, 800);
}

// Función para manejar las cajas desplegables con animación
function mostrarDetalle(id) {
    const cajaSeleccionada = document.getElementById('text-' + id);
    const yaEstabaActiva = cajaSeleccionada.classList.contains('active');
    
    // Cerramos todas las cajas primero
    const cajas = document.querySelectorAll('.content-box');
    cajas.forEach(caja => {
        caja.classList.remove('active');
    });
    
    // Si no estaba abierta, la abrimos
    if (!yaEstabaActiva) {
        cajaSeleccionada.classList.add('active');
    }
}
