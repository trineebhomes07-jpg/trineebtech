/* ============================================================
   TRINEEB TECH – HERO PARTICLES
   ============================================================ */

(function () {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const PARTICLE_COUNT = 55;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');

    const x        = Math.random() * 100;
    const y        = Math.random() * 100;
    const size     = Math.random() * 2.5 + 1;
    const duration = (Math.random() * 5 + 3).toFixed(1);
    const delay    = (Math.random() * 6).toFixed(2);

    p.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      --duration: ${duration}s;
      --delay: ${delay}s;
    `;

    container.appendChild(p);
  }
})();
