/* ============================================================
   TRINEEB TECH – MAIN / INIT
   ============================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ── Smooth scroll for anchor links ─────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const navHeight = document.getElementById('navbar').offsetHeight;
        const top       = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    /* ── Keyboard accessibility for cards ───────────────── */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        const el = document.activeElement;
        if (el && el.matches('.service-card, .solution-card, .portfolio-card, .industry-card')) {
          e.preventDefault();
          el.click();
        }
      }
    });

    /* ── Sticky WhatsApp CTA ─────────────────────────────── */
    const wa = document.createElement('a');
    wa.href          = 'https://wa.me/1234567890?text=Hello%20Trineeb%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project.';
    wa.target        = '_blank';
    wa.rel           = 'noopener noreferrer';
    wa.setAttribute('aria-label', 'Chat on WhatsApp');
    wa.innerHTML     = '<i class="fa-brands fa-whatsapp"></i>';
    wa.style.cssText = `
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 999;
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, #25d366, #128c7e);
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      box-shadow: 0 6px 24px rgba(37,211,102,0.45);
      transition: all 0.3s ease;
      text-decoration: none;
    `;

    wa.addEventListener('mouseenter', function () {
      wa.style.transform   = 'scale(1.12) translateY(-3px)';
      wa.style.boxShadow   = '0 10px 32px rgba(37,211,102,0.6)';
    });

    wa.addEventListener('mouseleave', function () {
      wa.style.transform   = 'scale(1) translateY(0)';
      wa.style.boxShadow   = '0 6px 24px rgba(37,211,102,0.45)';
    });

    document.body.appendChild(wa);

    /* ── Scroll-to-top button ────────────────────────────── */
    const scrollBtn = document.createElement('button');
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.innerHTML     = '<i class="fa-solid fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 96px;
      right: 28px;
      z-index: 999;
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, #b8a47a, #8a7a58);
      color: #fff;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      box-shadow: 0 4px 16px rgba(184,164,122,0.4);
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    `;

    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollBtn.style.opacity        = '1';
        scrollBtn.style.pointerEvents  = 'all';
      } else {
        scrollBtn.style.opacity        = '0';
        scrollBtn.style.pointerEvents  = 'none';
      }
    }, { passive: true });

    document.body.appendChild(scrollBtn);

    /* ── Page fade-in ─────────────────────────────────────── */
    document.body.style.opacity    = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.style.opacity = '1';
      });
    });

  });
})();
