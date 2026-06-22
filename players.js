// players.js — Squad grid + player profile modal
(function () {

  const grid   = document.getElementById('playersGrid');
  const modal  = document.getElementById('playerModal');
  const mClose = document.getElementById('modalClose');
  const mCont  = document.getElementById('modalContent');
  if (!grid) return;

  function renderPlayers(roleFilter = 'all') {
    const players = roleFilter === 'all'
      ? MI.players
      : MI.players.filter(p => p.role === roleFilter);

    grid.innerHTML = players.map((p, i) => `
      <div class="player-card glow-hover reveal lift" data-index="${MI.players.indexOf(p)}" style="transition-delay:${i * 0.06}s">
        <div class="player-avatar">
          ${p.initial}
          ${p.isCaptain ? '<span style="position:absolute;top:8px;left:10px;font-size:0.65rem;background:#C9A227;color:#0A1628;padding:2px 6px;border-radius:3px;font-weight:700;letter-spacing:0.06em;">C</span>' : ''}
          <span class="player-number">${p.number}</span>
        </div>
        <div class="player-info">
          <div class="player-name">${p.name}</div>
          <div class="player-role">${roleLabel(p.role)}</div>
          <div class="player-country">${p.country}</div>
          <div class="player-key-stat">${p.keyStat}</div>
        </div>
      </div>
    `).join('');

    setTimeout(() => {
      grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }, 50);

    // Click to open modal
    grid.querySelectorAll('.player-card').forEach(card => {
      card.addEventListener('click', () => openModal(MI.players[+card.dataset.index]));
    });
  }

  function roleLabel(role) {
    const map = { batsman: 'Batter', bowler: 'Bowler', allrounder: 'All-Rounder', wk: 'Wicket-Keeper' };
    return map[role] || role;
  }

  function openModal(p) {
    const statKeys = Object.keys(p.stats);
    const statHTML = statKeys.map(k => `
      <div class="modal-stat">
        <div class="modal-stat-val">${p.stats[k]}</div>
        <div class="modal-stat-key">${k.toUpperCase()}</div>
      </div>
    `).join('');

    mCont.innerHTML = `
      <div class="modal-player-header">
        <div class="modal-avatar">${p.initial}</div>
        <div>
          <div class="modal-name">${p.name} ${p.isCaptain ? '<span style="font-size:0.9rem;color:var(--gold)">(C)</span>' : ''}</div>
          <div class="modal-meta">${roleLabel(p.role)} · ${p.country} · #${p.number}</div>
        </div>
      </div>
      <div class="modal-stats-grid">${statHTML}</div>
      <div class="modal-bio">${p.bio}</div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  mClose && mClose.addEventListener('click', closeModal);
  modal  && modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Role filter buttons
  document.querySelectorAll('.squad-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.squad-filter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPlayers(btn.dataset.role);
    });
  });

  renderPlayers();
})();
