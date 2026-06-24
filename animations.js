/* ============================================================
   TRINEEB TECH – SCROLL ANIMATIONS (lightweight AOS)
   ============================================================ */

(function () {
  'use strict';

  let observer;

  function init() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('aos-animate');
              // Unobserve once animated for performance
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show all immediately
      elements.forEach(function (el) {
        el.classList.add('aos-animate');
      });
    }
  }

  /* Re-init after dynamic content is rendered */
  document.addEventListener('DOMContentLoaded', function () {
    // Small delay to allow render.js to finish
    setTimeout(init, 100);
  });

  /* Expose for external calls after dynamic renders */
  window.TrineebAOS = { init: init };
})();
