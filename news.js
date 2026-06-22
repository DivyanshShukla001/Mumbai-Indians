// news.js — News cards rendering
(function () {

  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  grid.innerHTML = MI.news.map((n, i) => `
    <div class="news-card glow-hover reveal lift" style="transition-delay:${i * 0.08}s">
      <div class="news-card-header" data-emoji="${n.emoji}">
        <span class="news-tag">${n.tag}</span>
      </div>
      <div class="news-body">
        <div class="news-title">${n.title}</div>
        <div class="news-excerpt">${n.excerpt}</div>
        <div class="news-date">📅 ${n.date}</div>
      </div>
    </div>
  `).join('');

  // Reveal on scroll
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  grid.querySelectorAll('.reveal').forEach(el => obs.observe(el));

})();
