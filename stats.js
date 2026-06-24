/* ============================================================
   TRINEEB TECH – ANIMATED STAT COUNTERS
   ============================================================ */

(function () {
  'use strict';

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-target'), 10);
    const suffix   = el.getAttribute('data-suffix') || '';
    const duration = 2200; // ms
    const start    = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedVal = Math.round(easeOut(progress) * target);

      el.textContent = easedVal + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  function observeStats() {
    const statValues = document.querySelectorAll('.stat-value[data-target]');
    if (!statValues.length) return;

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      statValues.forEach(function (el) {
        io.observe(el);
      });
    } else {
      statValues.forEach(animateCounter);
    }
  }

  /* Stats are rendered dynamically, wait for render.js */
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(observeStats, 200);
  });
})();
