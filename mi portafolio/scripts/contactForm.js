/**
 * Módulo del Formulario de Contacto
 * Gestiona el envío del formulario a través de AJAX/Fetch.
 */
export function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const statusMessage = document.getElementById('contact-status');

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        if (statusMessage) {
            statusMessage.style.color = 'var(--color-text-muted)';
            statusMessage.textContent = 'Enviando...';
        }

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                if (statusMessage) {
                    statusMessage.style.color = 'var(--color-primary-glow)';
                    statusMessage.textContent = "Listo, mensaje enviado.";
                }
                form.reset();
            } else {
                if (statusMessage) {
                    statusMessage.style.color = 'var(--color-accent-hot)';
                    statusMessage.textContent = "Hubo un error. Intenta de nuevo.";
                }
            }
        } catch (error) {
            if (statusMessage) {
                statusMessage.style.color = 'var(--color-accent-hot)';
                statusMessage.textContent = "Falló la conexión. Revisa el internet.";
            }
        }
    }

    contactForm.addEventListener("submit", handleSubmit);
}
