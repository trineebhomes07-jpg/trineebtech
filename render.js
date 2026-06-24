/* ============================================================
   TRINEEB TECH – RENDER / DOM BUILDERS
   ============================================================ */

/* ── Services ─────────────────────────────────────────── */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = DATA.services.map((s, i) => `
    <div class="service-card" data-aos="fade-up" data-aos-delay="${(i % 5) * 80}" tabindex="0" role="article">
      <span class="service-icon" aria-hidden="true">${s.icon}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="service-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  `).join('');
}

/* ── Industries ───────────────────────────────────────── */
function renderIndustries() {
  const grid = document.getElementById('industriesGrid');
  if (!grid) return;

  const bgColors = [
    'linear-gradient(135deg, #1a2a1a, #2d4a2d)',
    'linear-gradient(135deg, #1a1a2a, #2d2d4a)',
    'linear-gradient(135deg, #2a1a1a, #4a2d2d)',
    'linear-gradient(135deg, #1a2a2a, #2d4a4a)',
    'linear-gradient(135deg, #2a1a2a, #4a2d4a)',
    'linear-gradient(135deg, #2a2a1a, #4a4a2d)',
    'linear-gradient(135deg, #1a1a1a, #3a2d2a)',
    'linear-gradient(135deg, #1a2a20, #2d3a30)',
    'linear-gradient(135deg, #201a2a, #302d3a)',
  ];

  grid.innerHTML = DATA.industries.map((ind, i) => `
    <div class="industry-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}" tabindex="0" role="article">
      <div class="industry-bg" style="background: ${bgColors[i % bgColors.length]}" aria-hidden="true">
        ${ind.emoji}
      </div>
      <div class="industry-overlay" aria-hidden="true"></div>
      <div class="industry-content">
        <div class="industry-tag">${ind.tag}</div>
        <h3>${ind.title}</h3>
        <p>${ind.desc}</p>
      </div>
    </div>
  `).join('');
}

/* ── Solutions ────────────────────────────────────────── */
function renderSolutions() {
  const grid = document.getElementById('solutionsGrid');
  if (!grid) return;
  grid.innerHTML = DATA.solutions.map((sol, i) => `
    <div class="solution-card" data-aos="fade-up" data-aos-delay="${(i % 5) * 80}" tabindex="0" role="article">
      <span class="solution-number" aria-hidden="true">0${i + 1}</span>
      <div class="solution-icon" aria-hidden="true">
        <i class="${sol.icon}"></i>
      </div>
      <h3>${sol.title}</h3>
    </div>
  `).join('');
}

/* ── Process Timeline ─────────────────────────────────── */
function renderProcess() {
  const timeline = document.getElementById('processTimeline');
  if (!timeline) return;
  timeline.innerHTML = DATA.process.map((step, i) => `
    <div class="process-step" data-aos="fade-up" data-aos-delay="${i * 80}" role="listitem">
      <div class="step-number-wrapper">
        <div class="step-number">${step.num}</div>
        <div class="step-icon" aria-hidden="true"><i class="${step.icon}"></i></div>
      </div>
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    </div>
  `).join('');
}

/* ── Tech Stack ───────────────────────────────────────── */
function renderTechStack() {
  const grid = document.getElementById('stackGrid');
  if (!grid) return;
  grid.innerHTML = DATA.techStack.map(cat => `
    <div class="stack-category" data-aos="fade-up">
      <div class="stack-cat-header">
        <div class="stack-cat-icon" aria-hidden="true"><i class="${cat.icon}"></i></div>
        <span class="stack-cat-label">${cat.label}</span>
      </div>
      <div class="stack-items">
        ${cat.items.map(item => `
          <div class="stack-item" tabindex="0">
            <span class="stack-item-icon" aria-hidden="true">${item.icon}</span>
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Portfolio ────────────────────────────────────────── */
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  grid.innerHTML = DATA.portfolio.map((proj, i) => `
    <div class="portfolio-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 100}" tabindex="0" role="article">
      <div class="portfolio-image">
        <div class="portfolio-image-emoji" aria-hidden="true">${proj.emoji}</div>
        <div class="portfolio-image-overlay" aria-hidden="true"></div>
        <span class="portfolio-badge">${proj.badge}</span>
        <div class="portfolio-view-btn" aria-hidden="true">View Case Study →</div>
      </div>
      <div class="portfolio-body">
        <div class="portfolio-industry">${proj.industry}</div>
        <h3>${proj.title}</h3>
        <div class="portfolio-services">
          ${proj.services.map(s => `<span class="portfolio-service-tag">${s}</span>`).join('')}
        </div>
        <div class="portfolio-result">
          <i class="fa-solid fa-chart-line"></i>
          <span>${proj.result}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Stats ────────────────────────────────────────────── */
function renderStats() {
  const grid = document.getElementById('statsGrid');
  if (!grid) return;
  grid.innerHTML = DATA.stats.map((stat, i) => `
    <div class="stat-card" data-aos="fade-up" data-aos-delay="${i * 80}" role="figure">
      <div class="stat-icon" aria-hidden="true"><i class="${stat.icon}"></i></div>
      <div class="stat-value" data-target="${stat.value}" data-suffix="${stat.suffix}">
        0${stat.suffix}
      </div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

/* ── Init All Renders ─────────────────────────────────── */
function initRenders() {
  renderServices();
  renderIndustries();
  renderSolutions();
  renderProcess();
  renderTechStack();
  renderPortfolio();
  renderStats();
}

document.addEventListener('DOMContentLoaded', initRenders);
