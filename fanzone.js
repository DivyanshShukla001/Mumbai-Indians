// fanzone.js — Poll, Social Feed, Chant Board, Trivia
(function () {

  // ─────────────────────────────────────────────
  // POLL
  // ─────────────────────────────────────────────
  const pollOpts    = document.getElementById('pollOptions');
  const pollResult  = document.getElementById('pollResult');
  const pollQ       = document.getElementById('pollQuestion');
  if (pollOpts && pollQ) {
    const poll = MI.poll;
    const totalVotes = poll.options.reduce((s, o) => s + o.votes, 0);
    let voted = false;

    pollQ.textContent = poll.question;

    function renderPoll(highlight = null) {
      pollOpts.innerHTML = poll.options.map((o, i) => {
        const pct = Math.round((o.votes / totalVotes) * 100);
        return `
          <div class="poll-option ${highlight === i ? 'selected' : ''}" data-index="${i}">
            <span style="min-width:120px;font-size:0.82rem">${o.label}</span>
            ${voted
              ? `<div class="poll-bar-wrap"><div class="poll-bar" style="width:${pct}%"></div></div>
                 <span class="poll-pct">${pct}%</span>`
              : ''}
          </div>
        `;
      }).join('');

      if (!voted) {
        pollOpts.querySelectorAll('.poll-option').forEach(opt => {
          opt.addEventListener('click', () => {
            const idx = +opt.dataset.index;
            poll.options[idx].votes += 1;
            voted = true;
            renderPoll(idx);
            pollResult.style.display = 'block';
            pollResult.innerHTML = `<span style="color:var(--gold);font-size:0.8rem">✔ Thanks for voting! Total votes: ${totalVotes + 1}</span>`;
          });
        });
      }
    }

    renderPoll();
  }

  // ─────────────────────────────────────────────
  // SOCIAL WALL
  // ─────────────────────────────────────────────
  const socialFeed = document.getElementById('socialFeed');
  if (socialFeed) {
    socialFeed.innerHTML = MI.socialPosts.map(p => `
      <div class="social-post">
        <div class="handle">${p.handle}</div>
        <div class="post-text">${p.text}</div>
        <div class="post-likes">♥ ${p.likes.toLocaleString()} likes</div>
      </div>
    `).join('');
  }

  // ─────────────────────────────────────────────
  // CHANT BOARD
  // ─────────────────────────────────────────────
  const chantInput  = document.getElementById('chantInput');
  const chantSubmit = document.getElementById('chantSubmit');
  const chantDisplay= document.getElementById('chantDisplay');
  const chantFeed   = document.getElementById('chantFeed');

  const defaultChants = [
    "💙 Duniya Hila De Re… MUMBAI INDIANS! 💙",
    "🔵 Blue Army! Blue Army! We are MI! 🔵",
    "⭐ One Family! One Dream! Go MI Go! ⭐",
    "🏆 BUMRAH BUMRAH BUMRAH! 🏆",
    "🎵 Rohit Sharma… Hitman! Number One! 🎵",
  ];
  let chantIdx = 0;
  setInterval(() => {
    chantIdx = (chantIdx + 1) % defaultChants.length;
    if (chantDisplay) {
      chantDisplay.querySelector('.chant-text').style.opacity = '0';
      setTimeout(() => {
        chantDisplay.querySelector('.chant-text').textContent = defaultChants[chantIdx];
        chantDisplay.querySelector('.chant-text').style.opacity = '1';
      }, 300);
    }
  }, 4000);

  const fanNames = ["@BlueArmy_1982", "@Wankhede_Warrior", "@MI_forLife", "@Hitman_fan", "@BumrahIsGod", "@CricketLover99", "@MumbaiKaBeta", "@BlueBlooded"];

  if (chantSubmit && chantInput && chantFeed) {
    chantSubmit.addEventListener('click', submitChant);
    chantInput.addEventListener('keydown', e => { if (e.key === 'Enter') submitChant(); });

    function submitChant() {
      const val = chantInput.value.trim();
      if (!val) return;
      const handle = fanNames[Math.floor(Math.random() * fanNames.length)];
      const item = document.createElement('div');
      item.className = 'chant-item animate-slideLeft';
      item.innerHTML = `<span class="fan-tag">${handle}</span>: ${val}`;
      chantFeed.prepend(item);
      chantInput.value = '';
      // Also show in the display
      chantDisplay.querySelector('.chant-text').textContent = val;
    }
  }

  // ─────────────────────────────────────────────
  // TRIVIA
  // ─────────────────────────────────────────────
  const triviaEl = document.getElementById('triviaContent');
  if (triviaEl) {
    let qIdx = 0;
    let score = 0;

    function renderTrivia() {
      if (qIdx >= MI.trivia.length) {
        triviaEl.innerHTML = `
          <div style="text-align:center;padding:1.5rem 0">
            <div style="font-family:'Bebas Neue',sans-serif;font-size:3rem;color:var(--gold)">${score}/${MI.trivia.length}</div>
            <div style="color:var(--muted);font-size:0.85rem;margin-top:0.5rem">${scoreMsg(score)}</div>
            <button class="btn-primary" style="margin-top:1.5rem" id="restartTrivia">Play Again</button>
          </div>
        `;
        document.getElementById('restartTrivia').addEventListener('click', () => {
          qIdx = 0; score = 0; renderTrivia();
        });
        return;
      }

      const q = MI.trivia[qIdx];
      triviaEl.innerHTML = `
        <div style="font-size:0.72rem;color:var(--muted);margin-bottom:0.75rem;letter-spacing:0.08em">
          QUESTION ${qIdx + 1} OF ${MI.trivia.length} · Score: ${score}
        </div>
        <div class="trivia-q">${q.q}</div>
        <div class="trivia-opts">
          ${q.opts.map((o, i) => `<button class="trivia-opt" data-idx="${i}">${o}</button>`).join('')}
        </div>
      `;

      triviaEl.querySelectorAll('.trivia-opt').forEach(btn => {
        btn.addEventListener('click', () => {
          const chosen = +btn.dataset.idx;
          const correct = q.ans;
          const isRight = chosen === correct;
          if (isRight) score++;

          triviaEl.querySelectorAll('.trivia-opt').forEach((b, i) => {
            b.disabled = true;
            if (i === correct) b.classList.add('correct');
            else if (i === chosen && !isRight) b.classList.add('wrong');
          });

          const fb = document.createElement('div');
          fb.className = `trivia-feedback ${isRight ? 'good' : 'bad'}`;
          fb.innerHTML = `${isRight ? '✅ Correct!' : '❌ Wrong!'} ${q.exp}`;
          triviaEl.appendChild(fb);

          const nextBtn = document.createElement('button');
          nextBtn.className = 'btn-outline small trivia-next';
          nextBtn.textContent = qIdx + 1 < MI.trivia.length ? 'Next Question →' : 'See Results →';
          nextBtn.addEventListener('click', () => { qIdx++; renderTrivia(); });
          triviaEl.appendChild(nextBtn);
        });
      });
    }

    function scoreMsg(s) {
      if (s === MI.trivia.length) return "🏆 Perfect score! You're a true Blue Army legend!";
      if (s >= MI.trivia.length * 0.7) return "🎯 Great job! You really know your MI history!";
      if (s >= MI.trivia.length * 0.4) return "👍 Not bad! Keep brushing up on MI trivia.";
      return "💙 Keep watching MI and you'll ace it next time!";
    }

    renderTrivia();
  }

})();
