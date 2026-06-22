// main.js — Core interactions: navbar, counters, reveal, hamburger
(function () {

  // ─── NAVBAR ──────────────────────────────────
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    updateActiveNav();
  });

  hamburger && hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  function updateActiveNav() {
    const sections = ['home','schedule','squad','stats','news','fan-zone'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100) current = id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  // ─── COUNTER ANIMATION ────────────────────────
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let countersStarted = false;

  function startCounters() {
    if (countersStarted) return;
    countersStarted = true;
    counters.forEach(el => {
      const target = +el.dataset.target;
      const duration = 1800;
      const start = performance.now();
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
      }
      requestAnimationFrame(update);
    });
  }

  const statsBar = document.querySelector('.quick-stats');
  if (statsBar) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) startCounters(); });
    }, { threshold: 0.3 });
    obs.observe(statsBar);
  }

  // ─── SCROLL REVEAL ────────────────────────────
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // Also observe dynamically added .reveal elements (for schedule/squad)
  const mutObs = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
  });
  mutObs.observe(document.body, { childList: true, subtree: true });

  // ─── HERO ENTRANCE ANIMATION ──────────────────
  const heroContent = document.querySelector('.hero-content');
  const heroTrophy  = document.querySelector('.hero-trophy-block');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    setTimeout(() => {
      heroContent.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }
  if (heroTrophy) {
    heroTrophy.style.opacity = '0';
    heroTrophy.style.transform = 'translateY(30px)';
    setTimeout(() => {
      heroTrophy.style.transition = 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s';
      heroTrophy.style.opacity = '1';
      heroTrophy.style.transform = 'translateY(0)';
    }, 200);
  }

  // ─── DUPLICATE TICKER for seamless loop ───────
  const tickerContent = document.querySelector('.ticker-content');
  if (tickerContent) {
    tickerContent.innerHTML += tickerContent.innerHTML;
  }

})();
