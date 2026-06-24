/* ============================================================
   TRINEEB TECH – TESTIMONIALS SLIDER
   ============================================================ */

(function () {
  'use strict';

  let currentIndex = 0;
  let autoInterval;
  let itemsPerSlide = 3;

  function getItemsPerSlide() {
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function renderTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    if (!track || !dotsContainer) return;

    track.innerHTML = DATA.testimonials.map(t => `
      <div class="testimonial-card" role="article">
        <div class="testimonial-stars" aria-label="5 star rating">
          ${[1,2,3,4,5].map(() => '<i class="fa-solid fa-star" aria-hidden="true"></i>').join('')}
        </div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar" aria-hidden="true">${t.initials}</div>
          <div class="testimonial-author-info">
            <h4>${t.name}</h4>
            <p>${t.company}</p>
            <span class="testimonial-project-type">${t.project}</span>
          </div>
        </div>
      </div>
    `).join('');

    renderDots(dotsContainer);
  }

  function renderDots(container) {
    itemsPerSlide = getItemsPerSlide();
    const totalSlides = Math.ceil(DATA.testimonials.length / itemsPerSlide);

    container.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('t-dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', function () {
        goTo(i);
      });
      container.appendChild(dot);
    }
  }

  function goTo(index) {
    itemsPerSlide = getItemsPerSlide();
    const totalSlides = Math.ceil(DATA.testimonials.length / itemsPerSlide);
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
    updateSlider();
  }

  function updateSlider() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;

    itemsPerSlide = getItemsPerSlide();
    const cards     = track.querySelectorAll('.testimonial-card');
    const cardWidth = cards[0] ? cards[0].offsetWidth + 24 : 0; // gap = 24px
    const offset    = currentIndex * itemsPerSlide * cardWidth;

    track.style.transform = `translateX(-${offset}px)`;

    // Update dots
    const dots = document.querySelectorAll('.t-dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function autoPlay() {
    autoInterval = setInterval(function () {
      itemsPerSlide = getItemsPerSlide();
      const totalSlides = Math.ceil(DATA.testimonials.length / itemsPerSlide);
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 4500);
  }

  function stopAutoPlay() {
    clearInterval(autoInterval);
  }

  function initTestimonials() {
    renderTestimonials();
    autoPlay();

    const wrapper = document.querySelector('.testimonials-track-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', stopAutoPlay);
      wrapper.addEventListener('mouseleave', autoPlay);

      // Touch swipe support
      let touchStartX = 0;
      wrapper.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
        stopAutoPlay();
      }, { passive: true });

      wrapper.addEventListener('touchend', function (e) {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          itemsPerSlide = getItemsPerSlide();
          const totalSlides = Math.ceil(DATA.testimonials.length / itemsPerSlide);
          if (diff > 0) {
            currentIndex = Math.min(currentIndex + 1, totalSlides - 1);
          } else {
            currentIndex = Math.max(currentIndex - 1, 0);
          }
          updateSlider();
        }
        autoPlay();
      }, { passive: true });
    }

    // Rebuild on resize
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        currentIndex = 0;
        const dotsContainer = document.getElementById('testimonialDots');
        if (dotsContainer) renderDots(dotsContainer);
        updateSlider();
      }, 250);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initTestimonials, 150);
  });
})();
