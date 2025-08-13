/**
 * Módulo del Preloader
 * Orquesta la animación de bienvenida multi-fase.
 */
export function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const progressBar = document.querySelector('.preloader-progress-bar .progress');
    const animTextElement = document.getElementById('anim-text');
    const totalDuration = 9000; // Duración total en milisegundos

    const animateText = (text) => {
        if (!animTextElement) return;
        animTextElement.innerHTML = '';
        const letters = text.split('');
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter; // Usa non-breaking space
            span.style.animation = `text-reveal 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 50}ms forwards`;
            animTextElement.appendChild(span);
        });
    };

    const updateProgress = (progress) => {
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    };

    const hidePreloader = () => {
        preloader.classList.add('preloader-hidden');
    };

    // Secuencia de animación
    setTimeout(() => {
        preloader.classList.add('act-1');
        animateText("Armando el esqueleto...");
        updateProgress(33);
    }, 500);

    setTimeout(() => {
        preloader.classList.remove('act-1');
        preloader.classList.add('act-2');
        animateText("Matando bichos...");
        updateProgress(66);
    }, 3500);

    setTimeout(() => {
        preloader.classList.remove('act-2');
        preloader.classList.add('act-3');
        animateText("Encendiendo los motores...");
        updateProgress(100);
    }, 6500);

    setTimeout(hidePreloader, totalDuration);
}
