// Detectar el desplazamiento y aplicar animaciones cuando el usuario baja en la pantalla
document.addEventListener('scroll', function () {
    const capsules = document.querySelectorAll('.fade-in');
    const triggerHeight = window.innerHeight * 0.8;

    capsules.forEach(capsule => {
        const capsuleTop = capsule.getBoundingClientRect().top;
        if (capsuleTop < triggerHeight) {
            capsule.classList.add('visible');
        }
    });
});
