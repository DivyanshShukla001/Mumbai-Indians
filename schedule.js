// schedule.js — Renders the match schedule
(function () {

  const list = document.getElementById('scheduleList');
  if (!list) return;

  function renderSchedule(filter = 'all') {
    const matches = filter === 'all'
      ? MI.schedule
      : MI.schedule.filter(m => {
          if (filter === 'upcoming') return m.status === 'upcoming';
          if (filter === 'home')     return m.type === 'home';
          if (filter === 'away')     return m.type === 'away';
          return true;
        });

    list.innerHTML = matches.map((m, i) => `
      <div class="match-card ${m.status} reveal" style="transition-delay:${i * 0.05}s">
        <div class="match-date-block">
          <div class="match-day">${m.day}</div>
          <div class="match-month">${m.month}</div>
        </div>
        <div class="match-info">
          <div class="match-teams">${formatTeams(m.teams)}</div>
          <div class="match-venue">📍 ${m.venue}</div>
          ${m.status === 'live' || m.status === 'upcoming'
            ? `<div class="match-time">🕐 ${m.time}</div>`
            : `<div class="match-time">${m.result}</div>`}
        </div>
        <div>
          <span class="match-status status-${m.status}">${statusLabel(m)}</span>
        </div>
      </div>
    `).join('');

    // Trigger reveal
    setTimeout(() => {
      list.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }, 50);
  }

  function formatTeams(teams) {
    return teams.replace(/MI/g, '<span>MI</span>');
  }

  function statusLabel(m) {
    if (m.status === 'live')     return '● LIVE';
    if (m.status === 'upcoming') return 'Upcoming';
    if (m.status === 'won')      return '✓ Won';
    if (m.status === 'lost')     return '✗ Lost';
    return m.status;
  }

  // Filter buttons
  document.querySelectorAll('.schedule-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.schedule-filter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSchedule(btn.dataset.filter);
    });
  });

  renderSchedule();
})();
