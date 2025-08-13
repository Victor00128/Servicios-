/**
 * Script Principal (Punto de Entrada)
 *
 * Este script utiliza módulos de ES6 para organizar el código.
 * Importa funcionalidades desde archivos separados y las inicializa
 * cuando el contenido del DOM está completamente cargado.
 */

import { initPreloader } from './preloader.js';
import { initTyped, initScrollReveal } from './animations.js';
import { initHeaderScroll, initSmoothScroll } from './ui.js';
import { initContactForm } from './contactForm.js';

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initTyped();
    initScrollReveal();
    initHeaderScroll();
    initSmoothScroll();
    initContactForm();
});
