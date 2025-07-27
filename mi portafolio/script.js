/* Colores */
:root {
    --color-primary-glow: #ff4d00;
    --color-accent-hot: #ff8c00;
    --color-background-deep: #0d0c0f;
    --color-surface-dark: #1a1a1d;
    --color-white: #ffffff;
    --color-text: #e0e0e0;
    --color-text-muted: #a9a29c;
    --color-glass-bg: rgba(255, 77, 0, 0.05);

    --font-family-headings: 'Orbitron', sans-serif;
    --font-family-body: 'Poppins', sans-serif;
    
    --transition-speed: 0.4s;
    --shadow-lg: 0 10px 25px rgba(255, 77, 0, 0.1);
}

/* Global */
html { scroll-behavior: smooth; box-sizing: border-box; }
*, *:before, *:after { box-sizing: inherit; }
body { 
    font-family: var(--font-family-body); 
    margin: 0; 
    line-height: 1.6; 
    background-color: var(--color-background-deep); 
    background-image: radial-gradient(ellipse at center, #1a1a1d 0%, #0d0c0f 70%);
    color: var(--color-text-muted); 
    overflow-x: hidden; 
}
h1, h2, h3, .nav-logo { font-family: var(--font-family-headings); color: var(--color-white); }
.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
.section-title { font-size: clamp(2rem, 5vw, 2.5rem); font-weight: 700; text-align: center; margin-bottom: 3rem; text-shadow: 0 0 15px rgba(255, 77, 0, 0.4); }

/* Preloader */
#preloader { background-color: var(--color-background-deep); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; display: flex; justify-content: center; align-items: center; flex-direction: column; transition: opacity 1.5s ease, visibility 1.5s ease; }
.preloader-hidden { opacity: 0; visibility: hidden; }
.preloader-content { display: flex; flex-direction: column; align-items: center; justify-content: center; }
.logo-container { width: 150px; height: 150px; margin-bottom: 3rem; position: relative; }
.animated-logo { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: visible; opacity: 0; transition: opacity 0.5s ease; }
.animated-logo .logo-part { fill: none; stroke: url(#glowGradient); stroke-width: 4; stroke-linecap: round; stroke-dasharray: 200; stroke-dashoffset: 200; }
#logo-act3 #satellite { fill: var(--color-primary-glow); stroke: none; filter: drop-shadow(0 0 10px var(--color-primary-glow)); opacity: 0; }
@keyframes draw-in { to { stroke-dashoffset: 0; } }
@keyframes glitch-effect { 0%, 100% { transform: translate(0, 0); } 20% { transform: translate(-3px, 2px); } 40% { transform: translate(2px, -3px); } 60% { transform: translate(-1px, -2px); } 80% { transform: translate(3px, 1px); } }
@keyframes pulse-effect { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
@keyframes satellite-fade-in { to { opacity: 1; } }
@keyframes text-reveal { to { opacity: 1; transform: translateY(0) scale(1); } }
#preloader.act-1 #logo-act1 { opacity: 1; }
#preloader.act-1 #logo-act1 .logo-part { animation: draw-in 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
#preloader.act-2 #logo-act2 { opacity: 1; animation: glitch-effect 0.3s infinite; }
#preloader.act-2 #logo-act2 .logo-part { stroke-dashoffset: 0; filter: drop-shadow(0 0 8px var(--color-accent-hot)); }
#preloader.act-3 #logo-act3 { opacity: 1; animation: pulse-effect 2s infinite; }
#preloader.act-3 #logo-act3 .logo-part { animation: draw-in 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards; filter: drop-shadow(0 0 15px var(--color-primary-glow)); }
#preloader.act-3 #logo-act3 #satellite { animation: satellite-fade-in 1s 1.5s forwards; }
.animated-text-container { height: 50px; text-align: center; }
#anim-text { font-family: var(--font-family-headings); font-size: 1.2rem; letter-spacing: 2px; text-transform: uppercase; color: var(--color-white); text-shadow: 0 0 8px var(--color-primary-glow); }
#anim-text span { opacity: 0; transform: translateY(20px) scale(0.8); display: inline-block; animation-fill-mode: forwards; }
.preloader-progress-bar { width: 100%; max-width: 400px; height: 3px; background-color: rgba(255, 77, 0, 0.1); border-radius: 3px; margin-top: 2rem; overflow: hidden; }
.preloader-progress-bar .progress { width: 0%; height: 100%; background: linear-gradient(90deg, var(--color-accent-hot), var(--color-primary-glow)); border-radius: 3px; transition: width 1s ease-out; box-shadow: 0 0 10px var(--color-primary-glow); }

/* Estilos Generales */
.reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.main-header { background: rgba(13, 12, 15, 0.8); backdrop-filter: blur(10px); padding: 1rem 0; position: fixed; width: 100%; z-index: 1000; border-bottom: 1px solid rgba(255, 77, 0, 0.2); }
.main-nav { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.nav-logo { color: var(--color-white); text-decoration: none; font-weight: 700; font-size: 1.5rem; text-shadow: 0 0 8px var(--color-primary-glow); }
.nav-links { margin: 0; padding: 0; list-style: none; display: flex; gap: 2.5rem; }
.nav-links li { position: relative; }
.nav-links a { color: var(--color-text-muted); text-decoration: none; font-weight: 600; font-size: 1.1rem; padding: 0.5rem 0; transition: color 0.3s ease, text-shadow 0.3s ease; }
.nav-icon { position: absolute; bottom: 100%; left: 50%; margin-bottom: 10px; font-size: 2rem; color: var(--color-primary-glow); opacity: 0; transform: translateX(-50%) translateY(15px); pointer-events: none; transition: opacity 0.3s ease, transform 0.3s ease; }
.nav-links li:hover .nav-icon { opacity: 1; transform: translateX(-50%) translateY(0); }
.nav-links li:hover a { color: var(--color-white); text-shadow: 0 0 8px var(--color-primary-glow); }
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; overflow: hidden; padding: 2rem; }
.hero-content { position: relative; z-index: 1; }
.hero-title-static, .hero-title { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; line-height: 1.2; margin: 0; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
.hero-title { color: var(--color-primary-glow); }
.hero-subtitle { font-size: clamp(1rem, 2.5vw, 1.25rem); font-weight: 300; max-width: 600px; margin: 1rem auto 2.5rem auto; color: var(--color-text-muted); }
.btn { display: inline-block; padding: 0.8rem 2.2rem; border-radius: 50px; text-decoration: none; font-weight: 600; border: 2px solid transparent; transition: all var(--transition-speed); position: relative; overflow: hidden; z-index: 1; font-family: var(--font-family-headings); cursor: pointer; }
.btn-primary { background: var(--color-primary-glow); color: var(--color-background-deep); }
.btn-primary:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 0 20px var(--color-primary-glow); background: var(--color-white); }
.btn-secondary { background: transparent; color: var(--color-primary-glow); border-color: var(--color-primary-glow); }
.btn-secondary:hover { background: var(--color-primary-glow); color: var(--color-background-deep); transform: translateY(-4px) scale(1.05); box-shadow: 0 0 20px var(--color-primary-glow); }
.glow { animation: glow-pulse 2s infinite alternate; }
@keyframes glow-pulse { from { box-shadow: 0 0 8px var(--color-primary-glow); } to { box-shadow: 0 0 25px var(--color-primary-glow), 0 0 10px var(--color-accent-hot); } }
.content-section { padding: 6rem 0; }
.bg-dark { background: var(--color-surface-dark); }
.glass { background: var(--color-glass-bg); backdrop-filter: blur(10px); border-radius: 16px; padding: 3rem; border: 1px solid rgba(255, 77, 0, 0.2); box-shadow: 0 8px 32px 0 rgba(13, 12, 15, 0.37); transition: transform var(--transition-speed), box-shadow var(--transition-speed); }
.glass:hover { transform: translateY(-10px); box-shadow: 0 12px 40px rgba(255, 77, 0, 0.15); }
.about-content { display: flex; align-items: center; gap: 3rem; }
.about-image { width: 300px; height: 300px; border-radius: 50%; object-fit: cover; border: 5px solid var(--color-primary-glow); box-shadow: 0 0 30px rgba(255, 77, 0, 0.4); }
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
.service-card { padding: 2rem; text-align: center; }
.service-card i { color: var(--color-primary-glow); margin-bottom: 1rem; text-shadow: 0 0 10px var(--color-primary-glow); }
.service-card h3 { margin-top: 0; color: var(--color-white); }
.contact-subtitle { text-align: center; max-width: 600px; margin: -2rem auto 3rem auto; }
.contact-form { max-width: 700px; margin: 0 auto; }
.form-group input, .form-group textarea { width: 100%; padding: 1rem; background-color: var(--color-surface-dark); border: 1px solid rgba(255, 77, 0, 0.2); border-radius: 8px; font-family: var(--font-family-body); color: var(--color-white); margin-bottom: 1rem; transition: border-color var(--transition-speed), box-shadow var(--transition-speed); }
.form-group input::placeholder, .form-group textarea::placeholder { color: var(--color-text-muted); }
.form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--color-primary-glow); box-shadow: 0 0 0 3px rgba(255, 77, 0, 0.3); }
.main-footer { border-top: 1px solid rgba(255, 77, 0, 0.2); color: var(--color-text-muted); text-align: center; padding: 2rem 0; }
#contact-status { text-align: center; margin-top: 1.5rem; font-family: var(--font-family-headings); font-size: 1.1rem; height: 20px; transition: color 0.3s ease; }
@media (max-width: 992px) { .about-content { flex-direction: column; text-align: center; } }
@media (max-width: 768px) { .main-nav { flex-direction: column; gap: 1rem; } .nav-links { gap: 1.5rem; } .nav-icon { display: none; } .content-section, .glass { padding: 3rem 1.5rem; } }
