// stats.js — Season stats, donut chart, top performers
(function () {

  // ── Season Bars ──────────────────────────────
  const barsEl = document.getElementById('seasonBars');
  if (barsEl) {
    barsEl.innerHTML = MI.season.bars.map(b => {
      const pct = Math.round((b.val / b.max) * 100);
      return `
        <div class="season-bar-item">
          <div class="bar-label"><span>${b.label}</span><span>${b.display}</span></div>
          <div class="bar-track">
            <div class="bar-fill" style="width: 0%" data-width="${pct}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ── Top Scorers ──────────────────────────────
  const scorersEl = document.getElementById('topScorers');
  if (scorersEl) {
    scorersEl.innerHTML = MI.topScorers.map((s, i) => `
      <div class="scorer-row">
        <div class="scorer-rank">${i + 1}</div>
        <div class="scorer-info">
          <div class="scorer-name">${s.name}</div>
          <div class="scorer-team">Avg: ${s.avg}</div>
        </div>
        <div class="scorer-val">${s.runs}</div>
      </div>
    `).join('');
  }

  // ── Top Wickets ───────────────────────────────
  const wicketsEl = document.getElementById('topWickets');
  if (wicketsEl) {
    wicketsEl.innerHTML = MI.topWickets.map((w, i) => `
      <div class="scorer-row">
        <div class="scorer-rank">${i + 1}</div>
        <div class="scorer-info">
          <div class="scorer-name">${w.name}</div>
          <div class="scorer-team">Econ: ${w.economy}</div>
        </div>
        <div class="scorer-val">${w.wickets}w</div>
      </div>
    `).join('');
  }

  // ── Donut Chart (Canvas) ──────────────────────
  const canvas = document.getElementById('winLossChart');
  if (canvas) {
    drawDonut(canvas);
  }

  function drawDonut(canvas) {
    const ctx   = canvas.getContext('2d');
    const w     = canvas.width;
    const h     = canvas.height;
    const cx    = w / 2;
    const cy    = h / 2;
    const outer = Math.min(w, h) / 2 - 10;
    const inner = outer * 0.62;

    const wins   = MI.season.won;
    const losses = MI.season.lost;
    const total  = wins + losses;
    const winPct = wins / total;

    // Draw segments
    // Wins: cyan
    drawArc(ctx, cx, cy, outer, inner, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI * winPct, '#00BFFF');
    // Gap
    drawArc(ctx, cx, cy, outer, inner,
      -Math.PI / 2 + 2 * Math.PI * winPct,
      -Math.PI / 2 + 2 * Math.PI * winPct + 0.04,
      '#0A1628');
    // Losses: steel
    drawArc(ctx, cx, cy, outer, inner,
      -Math.PI / 2 + 2 * Math.PI * winPct + 0.04,
      -Math.PI / 2 + 2 * Math.PI,
      '#1E3050');

    // Center text
    ctx.fillStyle = '#E8EDF2';
    ctx.font      = 'bold 36px Bebas Neue, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${wins}/${total}`, cx, cy - 8);
    ctx.font      = '12px Inter, sans-serif';
    ctx.fillStyle = '#8A9AB5';
    ctx.fillText('WINS', cx, cy + 18);
  }

  function drawArc(ctx, cx, cy, outer, inner, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.arc(cx, cy, outer, startAngle, endAngle);
    ctx.arc(cx, cy, inner, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  // ── Animate bars on scroll ─────────────────────
  function animateBars() {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { animateBars(); obs.disconnect(); } });
    }, { threshold: 0.2 });
    obs.observe(statsSection);
  }

})();
