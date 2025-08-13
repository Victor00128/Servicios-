/**
 * Módulo de Animaciones
 * Gestiona la animación de texto con Typed.js y las animaciones de entrada.
 */

// Inicializa la animación de texto mecanografiado
export function initTyped() {
    const typedElement = document.getElementById('typed-text');
    if (typeof Typed !== 'undefined' && typedElement) {
        const options = {
            strings: ['a mi manera.', 'con buen código.', 'y bastante café.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            smartBackspace: true
        };
        new Typed('#typed-text', options);
    }
}

// Inicializa la animación de revelado al hacer scroll
export function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
}
