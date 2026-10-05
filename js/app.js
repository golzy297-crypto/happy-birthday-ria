/**
 * =====================================================================
 * OUR LITTLE CORNER OF TIME — "SINCE THE LAST TIME..."
 * APPLICATION ENGINE FOR RIA & DHRUV'S 10 BESPOKE CHAPTERS
 * =====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.memoryData;
  if (!data) {
    console.error('memoryData not loaded.');
    return;
  }

  // Initial Render of all 10 Chapters
  renderAllChapters();

  // Setup Global Lightbox
  setupPhotoLightbox();

  // Setup Ambient Music Toggle
  setupAmbientControls();

  // Setup Scroll Animations
  setupScrollAnimations();

  // -------------------------------------------------------------
  // MASTER RENDER PIPELINE
  // -------------------------------------------------------------
  function renderAllChapters() {
    renderOpening(data.opening, data.couple);
    renderChapter1_Paper(data.chapter1_firstPaper);
    renderChapter2_Squash(data.chapter2_squash);
    renderChapter3_ACL(data.chapter3_aclComeback);
    renderChapter4_Birthday(data.chapter4_birthdaySurprise);
    renderChapter5_Airport(data.chapter5_airport);
    renderChapter6_Distance(data.chapter6_longDistance);
    renderChapter7_Odds(data.chapter7_odds);
    renderChapter8_Fights(data.chapter8_pettyFights);
    renderChapter9_Appreciation(data.chapter9_appreciation);
    renderChapter10_Today(data.chapter10_today, data.couple);
  }

  // -------------------------------------------------------------
  // OPENING HERO (WITH CLEAN 10 CHAPTER LIST)
  // -------------------------------------------------------------
  function renderOpening(opening, couple) {
    const prefaceEl = document.getElementById('hero-preface-lines');
    const headlineEl = document.getElementById('hero-headline');
    const subtitleEl = document.getElementById('hero-subtitle');
    const listEl = document.getElementById('hero-chapters-list');
    const startBtn = document.getElementById('hero-start-btn');

    if (prefaceEl && opening.preface) {
      prefaceEl.innerHTML = opening.preface.map(line => `
        <p class="hero-preface-line">${escapeHtml(line)}</p>
      `).join('');
    }

    if (headlineEl) headlineEl.textContent = opening.headline || 'Since the last time…';
    if (subtitleEl) subtitleEl.textContent = opening.subtitle || '';

    if (listEl && opening.chaptersList) {
      listEl.innerHTML = opening.chaptersList.map(ch => `
        <a href="#chapter-${ch.num}" class="chapter-list-item">
          <span class="chapter-item-num">${ch.num}</span>
          <span class="chapter-item-title">${escapeHtml(ch.title)}</span>
        </a>
      `).join('');
    }

    if (startBtn) {
      startBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const ch1 = document.getElementById('chapter-01');
        if (ch1) ch1.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // -------------------------------------------------------------
  // CHAPTER 01 — FIRST PAPER ACCEPTANCE 📝
  // -------------------------------------------------------------
  function renderChapter1_Paper(paper) {
    const card = document.getElementById('chapter1-card');
    if (!card || !paper) return;

    card.innerHTML = `
      <div class="paper-journal-header">
        <span class="paper-acceptance-status">${escapeHtml(paper.statusBadge || 'ACCEPTED')}</span>
        <span class="paper-journal-name">Research Milestone</span>
      </div>

      <div class="paper-inner-grid">
        <div class="paper-photo-frame" onclick="window.openLightbox('${paper.photo}', '${escapeHtml(paper.title)}', 'Academic Milestone', '${escapeHtml(paper.story)}')">
          <img src="${paper.photo}" alt="${escapeHtml(paper.title)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/fallback.svg'">
        </div>
        <div class="paper-content-col">
          <p class="paper-story-prose">${escapeHtml(paper.story)}</p>
          <div class="paper-quote-callout">“${escapeHtml(paper.quote)}”</div>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // CHAPTER 02 — OUR ONE-YEAR SQUASH ARC 🏸
  // -------------------------------------------------------------
  function renderChapter2_Squash(squash) {
    const container = document.getElementById('chapter2-container');
    if (!container || !squash) return;

    container.innerHTML = `
      <div class="squash-video-card">
        <video controls playsinline preload="metadata" poster="${squash.poster || 'assets/images/fallback.svg'}" src="${squash.video}">
          Your browser does not support HTML5 video.
        </video>
        <div class="squash-video-banner">
          <span>🎾 One Year on Court • Video Centerpiece</span>
          <span>Sound &amp; Fullscreen Ready</span>
        </div>
      </div>

      <div class="squash-scoreboard">
        <h3 class="scoreboard-title">🏸 Match Records &amp; Quirks</h3>
        <div class="stats-rows-list">
          ${squash.stats.map(s => `
            <div class="stat-row-item">
              <span class="stat-label">${escapeHtml(s.label)}</span>
              <span class="stat-value">${escapeHtml(s.value)}</span>
            </div>
          `).join('')}
        </div>
        <p class="squash-story-text">“${escapeHtml(squash.story)}”</p>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // CHAPTER 03 — ACL: THE COMEBACK 📄 → 🏆
  // -------------------------------------------------------------
  function renderChapter3_ACL(acl) {
    const card = document.getElementById('chapter3-card');
    if (!card || !acl) return;

    card.innerHTML = `
      <div class="acl-reviews-container">
        <div class="acl-reviews-header">
          <span class="acl-reviews-title">Initial Submission Reviews</span>
          <span style="font-size: 0.76rem; color: #A37068; font-weight: 700;">DECISION: MAJOR REVISION</span>
        </div>
        <div class="acl-reviews-grid">
          ${acl.badReviews.map(r => `
            <div class="acl-review-bubble">
              <div class="reviewer-name">
                <span>${escapeHtml(r.reviewer)}</span>
                <span class="reviewer-score">${escapeHtml(r.score)}</span>
              </div>
              <p class="reviewer-comment">“${escapeHtml(r.comment)}”</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="acl-cooked-banner">
        <div class="acl-cooked-quote">“${escapeHtml(acl.cookedQuote)}”</div>
        <div class="acl-revision-pill">⚡ REVISION MODE ACTIVATED ⚡</div>
      </div>

      <p style="font-size: 0.98rem; color: var(--text-dark-secondary); line-height: 1.7; text-align: center; max-width: 700px; margin: 0 auto 24px;">
        ${escapeHtml(acl.rebuttalStory)}
      </p>

      <div class="acl-victory-grid">
        <div class="acl-photo-wrap" onclick="window.openLightbox('${acl.photo}', 'ACL Acceptance', 'Victory', '${escapeHtml(acl.rebuttalStory)}')">
          <img src="${acl.photo}" alt="ACL Accepted" loading="lazy" onerror="this.onerror=null;this.src='assets/images/fallback.svg'">
        </div>
        <div class="acl-victory-content">
          <div class="acl-accepted-badge">${escapeHtml(acl.finalVerdict)}</div>
          <p style="font-size: 0.95rem; color: var(--text-dark-secondary); line-height: 1.6;">
            “${escapeHtml(acl.quotes[0])}”
          </p>
          <div class="acl-score-quote">“${escapeHtml(acl.quotes[1])}”</div>
        </div>
      </div>
    `;
  }

  // -------------------------------------------------------------
  // CHAPTER 04 — THE BIRTHDAY SURPRISE 🎂
  // -------------------------------------------------------------
  function renderChapter4_Birthday(birthday) {
    const card = document.getElementById('chapter4-card');
    if (!card || !birthday) return;

    card.innerHTML = `
      <div class="candle-glow-accent">🕯️</div>
      <div class="symmetry-callout-text">“${escapeHtml(birthday.symmetryNote)}”</div>
      
      <div class="birthday-surprise-photo-wrap" onclick="window.openLightbox('${birthday.photo}', '${escapeHtml(birthday.title)}', 'Birthday Surprise', '${escapeHtml(birthday.story)}')">
        <img src="${birthday.photo}" alt="${escapeHtml(birthday.title)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/fallback.svg'">
      </div>

      <p class="birthday-prose-text">${escapeHtml(birthday.story)}</p>
      <div style="font-family: var(--font-serif-editorial); font-size: 1.25rem; font-style: italic; color: var(--accent-bronze); text-align: center; margin-top: 16px;">
        “${escapeHtml(birthday.quote)}”
      </div>
    `;
  }

  // -------------------------------------------------------------
  // CHAPTER 05 — THE AIRPORT ✈️
  // -------------------------------------------------------------
  function renderChapter5_Airport(airport) {
    const card = document.getElementById('chapter5-card');
    if (!card || !airport) return;

    card.innerHTML = `
      <div class="airport-departure-badge">✈️ ${escapeHtml(airport.date)}</div>

      <div class="airport-photo-frame" onclick="window.openLightbox('${airport.photo}', '${escapeHtml(airport.title)}', '${escapeHtml(airport.date)}', '${escapeHtml(airport.story)}')">
        <img src="${airport.photo}" alt="${escapeHtml(airport.title)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/fallback.svg'">
      </div>

      <p class="airport-prose">${escapeHtml(airport.story)}</p>
      <div class="airport-quiet-quote">“${escapeHtml(airport.quote)}”</div>
    `;
  }

  // -------------------------------------------------------------
  // CHAPTER 06 — LONG DISTANCE 🌎
  // -------------------------------------------------------------
  function renderChapter6_Distance(distance) {
    const container = document.getElementById('chapter6-card');
    if (!container || !distance) return;

    container.innerHTML = `
      <div class="clocks-card">
        <div class="timezone-pair">
          <div class="tz-box">
            <div class="tz-city">${escapeHtml(distance.timezones.her.city)}</div>
            <div class="tz-label">${escapeHtml(distance.timezones.her.zone)}</div>
          </div>
          <div style="font-size: 1.5rem; color: var(--accent-gold); align-self: center;">⇄</div>
          <div class="tz-box">
            <div class="tz-city">${escapeHtml(distance.timezones.him.city)}</div>
            <div class="tz-label">${escapeHtml(distance.timezones.him.zone)}</div>
          </div>
        </div>
        <p class="distance-story-text">${escapeHtml(distance.story)}</p>
      </div>

      <div class="distance-screenshots-deck">
        ${distance.screenshots.map(s => `
          <div class="distance-screen-card" onclick="window.openLightbox('${s.photo}', 'Across 8,000 Miles', 'Time Zones', '${escapeHtml(s.caption)}')">
            <div class="screen-media-frame">
              <img src="${s.photo}" alt="${escapeHtml(s.caption)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/fallback.svg'">
            </div>
            <div class="screen-caption">“${escapeHtml(s.caption)}”</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------
  // CHAPTER 07 — THE ODDS: 97.3% 📊
  // -------------------------------------------------------------
  function renderChapter7_Odds(odds) {
    const card = document.getElementById('chapter7-odds-card');
    if (!card || !odds) return;

    card.innerHTML = `
      <div class="odds-big-stat">${escapeHtml(odds.statValue || '97.3%')}</div>
      <p class="odds-subtitle">“${escapeHtml(odds.subtitle)}”</p>

      <div class="odds-metrics-grid">
        ${odds.metrics.map(m => `
          <div class="odds-metric-item">
            <span class="odds-metric-label">${escapeHtml(m.label)}</span>
            <span class="odds-metric-val">${escapeHtml(m.value)}</span>
          </div>
        `).join('')}
      </div>

      <div class="odds-verdict-banner">
        ✦ ${escapeHtml(odds.verdict)} ✦
      </div>
      <p style="font-size: 0.88rem; color: var(--text-dark-muted); margin-top: 14px; font-style: italic;">
        ${escapeHtml(odds.note)}
      </p>
    `;
  }

  // -------------------------------------------------------------
  // CHAPTER 08 — OUR PETTY FIGHTS™ ⚡
  // -------------------------------------------------------------
  function renderChapter8_Fights(fights) {
    const card = document.getElementById('chapter8-fights-card');
    if (!card || !fights) return;

    card.innerHTML = `
      <div class="fights-playful-part">
        <p class="playful-lead-text">“${escapeHtml(fights.playfulOpening)}”</p>
      </div>
      <div class="fights-sincere-part">${escapeHtml(fights.sincereReflection)}</div>
      <div class="fights-quote-box">“${escapeHtml(fights.quote)}”</div>
    `;
  }

  // -------------------------------------------------------------
  // CHAPTER 09 — THINGS I DON'T SAY ENOUGH ABOUT YOU 🌸
  // -------------------------------------------------------------
  function renderChapter9_Appreciation(her) {
    const grid = document.getElementById('chapter9-traits-grid');
    if (!grid || !her) return;

    grid.innerHTML = her.traits.map(t => `
      <div class="her-trait-card reveal-on-scroll">
        <h4 class="her-trait-lead">${escapeHtml(t.lead)}</h4>
        <p class="her-trait-body">${escapeHtml(t.text)}</p>
      </div>
    `).join('');
  }

  // -------------------------------------------------------------
  // CHAPTER 10 — TODAY & UNWRITTEN ENDING 🎂
  // -------------------------------------------------------------
  function renderChapter10_Today(today, couple) {
    const bannerEl = document.getElementById('today-unwritten-banner');
    const wishBox = document.getElementById('today-birthday-card');
    const salutationEl = document.getElementById('letter-salutation-display');
    const bodyEl = document.getElementById('letter-body-prose-display');
    const signoffEl = document.getElementById('letter-signoff-display');
    const sigEl = document.getElementById('letter-signature-display');
    const returnBtn = document.getElementById('btn-return-start');

    if (bannerEl && today.transitionLines) {
      bannerEl.innerHTML = `
        <div class="unwritten-lines-flow">
          ${today.transitionLines.map((line, idx) => `
            <p class="${idx === today.transitionLines.length - 1 ? 'emphasis' : ''}">
              ${escapeHtml(line)}
            </p>
          `).join('')}
        </div>
      `;
    }

    if (wishBox && today.birthdayWish) {
      wishBox.innerHTML = `
        <h2 class="today-birthday-headline">${escapeHtml(today.birthdayWish.headline)}</h2>
        <div class="today-wishes-flow">
          ${today.birthdayWish.wishes.map((w, idx) => `
            <p class="${idx === today.birthdayWish.wishes.length - 1 ? 'grateful-closing' : ''}">
              ${escapeHtml(w)}
            </p>
          `).join('')}
        </div>
      `;
    }

    if (salutationEl) salutationEl.textContent = `Dear ${couple.herName || 'Ria'},`;
    if (bodyEl && today.finalLetter) bodyEl.textContent = today.finalLetter.body;
    if (signoffEl && today.finalLetter) signoffEl.textContent = today.finalLetter.closing;
    if (sigEl) sigEl.textContent = couple.myName || 'Dhruv';

    if (returnBtn) {
      returnBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const ch1 = document.getElementById('chapter-01');
        if (ch1) ch1.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // -------------------------------------------------------------
  // LIGHTBOX MODAL
  // -------------------------------------------------------------
  function setupPhotoLightbox() {
    window.openLightbox = (src, title, tag, story) => {
      let lb = document.getElementById('photo-lightbox-modal');
      if (!lb) {
        lb = document.createElement('div');
        lb.id = 'photo-lightbox-modal';
        lb.className = 'memory-modal-overlay';
        lb.innerHTML = `
          <div class="memory-modal-box">
            <button class="modal-close-btn" id="lb-close-btn">✕</button>
            <div class="modal-media-header" style="height: 380px;">
              <img id="lb-image" src="" alt="Memory">
            </div>
            <div class="modal-content-body">
              <div class="modal-meta-row">
                <span class="modal-date" id="lb-tag"></span>
              </div>
              <h3 class="modal-title" id="lb-title"></h3>
              <p class="modal-text" id="lb-story"></p>
            </div>
          </div>
        `;
        document.body.appendChild(lb);

        lb.addEventListener('click', (e) => {
          if (e.target === lb || e.target.id === 'lb-close-btn') {
            lb.classList.remove('open');
            document.body.style.overflow = '';
          }
        });
      }

      document.getElementById('lb-image').src = src;
      document.getElementById('lb-tag').textContent = tag || '';
      document.getElementById('lb-title').textContent = title || '';
      document.getElementById('lb-story').textContent = story || '';

      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const lb = document.getElementById('photo-lightbox-modal');
        if (lb) lb.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // -------------------------------------------------------------
  // AMBIENT CONTROLS
  // -------------------------------------------------------------
  function setupAmbientControls() {
    const ambientBtn = document.getElementById('ambient-sound-toggle');
    if (ambientBtn) {
      ambientBtn.addEventListener('click', () => {
        if (window.ambientSound) {
          const isPlaying = window.ambientSound.toggle();
          if (isPlaying) {
            ambientBtn.classList.add('active');
            ambientBtn.querySelector('.ambient-btn-text').textContent = 'Gentle Ambience: On';
          } else {
            ambientBtn.classList.remove('active');
            ambientBtn.querySelector('.ambient-btn-text').textContent = 'Gentle Ambience: Muted';
          }
        }
      });
    }
  }

  // -------------------------------------------------------------
  // SCROLL ANIMATIONS
  // -------------------------------------------------------------
  function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
