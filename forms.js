/* ============================================================
   TRINEEB TECH – FORM HANDLING
   ============================================================ */

(function () {
  'use strict';

  /* Helper: show inline feedback */
  function showFeedback(form, message, type) {
    // Remove existing
    const existing = form.querySelector('.form-feedback');
    if (existing) existing.remove();

    const el = document.createElement('div');
    el.classList.add('form-feedback', 'form-feedback--' + type);
    el.setAttribute('role', 'alert');
    el.textContent = message;

    el.style.cssText = `
      padding: 0.75rem 1rem;
      border-radius: 10px;
      font-size: 0.875rem;
      font-weight: 500;
      margin-top: 0.5rem;
      background: ${type === 'success'
        ? 'linear-gradient(135deg,rgba(184,164,122,0.15),rgba(184,164,122,0.08))'
        : 'rgba(220,53,69,0.1)'};
      border: 1px solid ${type === 'success' ? 'rgba(184,164,122,0.35)' : 'rgba(220,53,69,0.25)'};
      color: ${type === 'success' ? '#8a7a58' : '#c0392b'};
    `;

    form.appendChild(el);

    // Auto-remove after 5s
    setTimeout(function () {
      el.remove();
    }, 5000);
  }

  /* Simple email validator */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* Generic submit handler */
  function handleFormSubmit(form, successMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && !isValidEmail(emailInput.value)) {
        showFeedback(form, 'Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }

      // Simulate async submission
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(function () {
        showFeedback(form, successMsg, 'success');
        form.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1200);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const heroForm    = document.getElementById('heroForm');
    const consultForm = document.getElementById('consultForm');

    if (heroForm) {
      handleFormSubmit(
        heroForm,
        '✓ Thank you! Our team will contact you within 24 hours.'
      );
    }

    if (consultForm) {
      handleFormSubmit(
        consultForm,
        '✓ Consultation scheduled! We\'ll reach out within 24 hours to confirm your session.'
      );
    }
  });
})();
