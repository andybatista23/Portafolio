// Animación al desplazarse
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".skill, .proyecto");
    const opciones = {
        threshold: 0.5,
    };

    const mostrarElemento = (entradas, observador) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    };

    const observador = new IntersectionObserver(mostrarElemento, opciones);

    elementos.forEach((el) => {
        observador.observe(el);
        el.classList.add("oculto");
    });
});
