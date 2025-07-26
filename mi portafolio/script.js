document.addEventListener('DOMContentLoaded', function() {

    //
    // ==========================================================
    //   LÓGICA PARA EL PRELOADER CINEMATOGRÁFICO
    // ==========================================================
    //
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const progressBar = document.querySelector('.preloader-progress-bar .progress');
        const animTextElement = document.getElementById('anim-text');
        const totalDuration = 9000;
        const animateText = (text) => {
            animTextElement.innerHTML = '';
            const letters = text.split('');
            letters.forEach((letter, index) => {
                const span = document.createElement('span');
                span.textContent = letter === ' ' ? '\u00A0' : letter;
                span.style.animation = `text-reveal 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 50}ms forwards`;
                animTextElement.appendChild(span);
            });
        };
        const updateProgress = (progress) => { progressBar.style.width = `${progress}%`; };
        const hidePreloader = () => { preloader.classList.add('preloader-hidden'); };
        setTimeout(() => { preloader.classList.add('act-1'); animateText("CONSTRUYENDO ARQUITECTURA DIGITAL"); updateProgress(33); }, 500);
        setTimeout(() => { preloader.classList.remove('act-1'); preloader.classList.add('act-2'); animateText("DEPURANDO CADA LÍNEA DE CÓDIGO"); updateProgress(66); }, 3500);
        setTimeout(() => { preloader.classList.remove('act-2'); preloader.classList.add('act-3'); animateText("ACTIVANDO PROTOCOLO DE DESPLIEGUE"); updateProgress(100); }, 6500);
        setTimeout(hidePreloader, totalDuration);
    }

    //
    // ==========================================================
    //   FUNCIONALIDAD DEL SITIO
    // ==========================================================
    //

    // --- 1. ANIMACIÓN DE TEXTO CON TYPED.JS ---
    const options = { strings: ['con la cabeza', 'con motivacion', 'con un poco de entusiasmo y un chin de aburrimiento'], typeSpeed: 50, backSpeed: 30, backDelay: 2000, loop: true, smartBackspace: true };
    if (document.getElementById('typed-text')) {
        const typed = new Typed('#typed-text', options);
    }
    
    // --- 2. HEADER CON SCROLL ---
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => { if (window.scrollY > 50) { header.classList.add('scrolled'); } else { header.classList.remove('scrolled'); } });
    }

    // --- 3. ANIMACIÓN DE ENTRADA AL HACER SCROLL (REVEAL) ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));

    // --- 4. SCROLL SUAVE PARA LOS ENLACES DEL MENÚ ---
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });

    // --- 5. LÓGICA PARA EL FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('contact-status');

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        
        statusMessage.style.color = 'var(--color-text-muted)';
        statusMessage.textContent = 'Enviando...';

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                statusMessage.style.color = 'var(--color-primary-glow)';
                statusMessage.textContent = "¡Gracias! Tu mensaje ha sido enviado.";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        statusMessage.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        statusMessage.style.color = 'var(--color-accent-hot)';
                        statusMessage.textContent = "Error al enviar el mensaje. Inténtalo de nuevo.";
                    }
                })
            }
        } catch (error) {
            statusMessage.style.color = 'var(--color-accent-hot)';
            statusMessage.textContent = "Error de conexión. Inténtalo de nuevo.";
        }
    }

    if (contactForm) {
        contactForm.addEventListener("submit", handleSubmit);
    }
});