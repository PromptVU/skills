// ---- Site settings ----
// Paste your Google Analytics 4 Measurement ID here (looks like G-XXXXXXXXXX). Leave blank to keep analytics off.
var PROMPTVU_GA_ID = 'G-5FT9DS4M61';

// PromptVu site: Solutions menu, mobile menu, real-screenshot slots.
(function () {
  var btn = document.querySelector('.nav-drop-btn');
  var menu = document.getElementById('sol-menu');
  if (btn && menu) {
    var drop = btn.parentElement, closeT;
    function set(open) { menu.hidden = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    var hoverOpenedAt = 0;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      // a mouse hover just opened it: keep it open instead of toggling it shut
      if (Date.now() - hoverOpenedAt < 600) { set(true); return; }
      set(menu.hidden);
    });
    drop.addEventListener('mouseenter', function () { clearTimeout(closeT); if (window.matchMedia('(hover:hover)').matches && menu.hidden) { hoverOpenedAt = Date.now(); set(true); } });
    drop.addEventListener('mouseleave', function () { closeT = setTimeout(function () { if (window.matchMedia('(hover:hover)').matches) set(false); }, 180); });
    document.addEventListener('click', function (e) { if (!drop.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { set(false); btn.focus(); } });
  }
  var mb = document.querySelector('.menu-btn'), mm = document.getElementById('mobile-menu');
  if (mb && mm) {
    mb.addEventListener('click', function () {
      var open = mm.hidden; mm.hidden = !open; mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  // Drop a PNG at the path in data-shot and it replaces the coded mockup.
  document.querySelectorAll('.shot[data-shot]').forEach(function (slot) {
    var img = new Image();
    img.className = 'real';
    img.alt = slot.getAttribute('data-alt') || 'PromptVu screenshot';
    img.onload = function () { slot.innerHTML = ''; slot.appendChild(img); };
    img.src = slot.getAttribute('data-shot');
  });
})();

// Google Analytics 4: loads only when PROMPTVU_GA_ID is set. Tracks downloads, demo requests and AI brief copies.
(function () {
  var id = PROMPTVU_GA_ID;
  if (!id) return;
  var s = document.createElement('script');
  s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date()); gtag('config', id);
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a,button'); if (!a) return;
    var href = a.getAttribute('href') || '', label = (a.textContent || '').trim();
    if (/\.dmg($|\?)/.test(href)) gtag('event', 'download_mac', { page: location.pathname });
    else if (/book a demo|request a demo/i.test(label)) gtag('event', 'book_demo_click', { page: location.pathname });
    else if (a.classList.contains('copy-btn')) gtag('event', 'copy_ai_brief', { which: a.getAttribute('data-copy') });
    else if (/windows waitlist/i.test(label)) gtag('event', 'windows_waitlist', { page: location.pathname });
  });
})();

// ---- v3: header state, current page, scroll reveals, hero tilt ----
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.querySelector('header');

  // Header turns to frosted glass after a little scroll.
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    var mb = document.querySelector('.menu-btn');
    if (mb) mb.addEventListener('click', function () { header.classList.toggle('menu-open', mb.getAttribute('aria-expanded') === 'true'); });
  }

  // Mark the current page in the nav.
  var here = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
  document.querySelectorAll('.navlinks a[href]').forEach(function (a) {
    var t = a.getAttribute('href').split('#')[0].replace(/\.html$/, '');
    if (t && t === here && a.getAttribute('href').indexOf('#') === -1) a.setAttribute('aria-current', 'page');
  });
  if (['founders', 'sales-leaders', 'revops', 'account-executives', 'customer-success', 'onboarding', 'sales-trainers'].indexOf(here) > -1) {
    var sb = document.querySelector('.nav-drop-btn'); if (sb) sb.classList.add('current');
    document.querySelectorAll('.nav-menu a').forEach(function (a) { if (a.getAttribute('href').replace(/\.html$/, '') === here) a.setAttribute('aria-current', 'page'); });
  }

  if (reduce || !('IntersectionObserver' in window)) return;

  // Scroll reveals: section headings, cards and product windows below the fold.
  var sel = ['main section .center', 'main section > .wrap > .h2', '.who-card', '.job', '.prod-strip > .card', '.story-card',
    '.feat-grid > .card', '.obstep', '.post-card', '.access-card', '.setup-step', '.safe-note', '.copybox', '.map-table-wrap',
    '.p-quote', 'figure.card', '.cta-band', '.demo-stage', '.viewtoggle', '.panel', '.ob > .shot', '.how-step', '.seq', '.int-group',
    '.contact-card', '.book-card', '.helpgrid > .card', '.platform', 'main section .p-graphic:not(.hero .p-graphic)'].join(',');
  var vh = window.innerHeight;
  var items = Array.prototype.slice.call(document.querySelectorAll(sel)).filter(function (el) {
    return !el.closest('.hero') && !el.closest('.window') && el.getBoundingClientRect().top > vh * 0.92;
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(function (el) {
    var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) { return items.indexOf(c) > -1; });
    var i = sibs.indexOf(el);
    if (i > 0) el.style.setProperty('--rv-delay', Math.min(i, 5) * 0.07 + 's');
    el.classList.add('rv'); io.observe(el);
  });
  // Safety net: never leave anything hidden.
  setTimeout(function () { items.forEach(function (el) { el.classList.add('in'); }); }, 6000);

  // Hero product window: starts tilted back, settles flat as you scroll. Desktop only.
  var hero = document.querySelector('.hero .banner .window, .hero .p-graphic > .window');
  if (hero && window.matchMedia('(min-width: 900px)').matches) {
    hero.parentElement.classList.add('tilt-wrap'); hero.classList.add('tilt');
    var ticking = false;
    var tilt = function () {
      var r = hero.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (window.innerHeight * 0.9)));
      var k = 1 - p;
      hero.style.transform = 'rotateX(' + (k * 14).toFixed(2) + 'deg) scale(' + (1 - k * 0.04).toFixed(3) + ')';
      ticking = false;
    };
    tilt();
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(tilt); } }, { passive: true });
  }
})();

// ---- Mirrored-cursor demo: your screen drives the buyer's screen ----
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-mirror]').forEach(function (root) {
    var src = root.querySelector('.m-page[data-src]'), dst = root.querySelector('.m-page[data-dst]');
    if (!src || !dst) return;
    var cur = dst.querySelector('.m-cursor'), ghost = src.querySelector('.m-cursor');
    var marks = Array.prototype.slice.call(src.querySelectorAll('.m-mark'));
    var notes = Array.prototype.slice.call(src.querySelectorAll('.m-note'));
    var user = false, timer = null, step = 0, idle = null;

    function rel(e) { var r = src.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }; }
    function put(el, p, glide) { el.classList.toggle('glide', !!glide); el.style.left = (p.x * 100) + '%'; el.style.top = (p.y * 100) + '%'; el.classList.add('show'); }
    function ripple(page, p) { var d = document.createElement('span'); d.className = 'm-ripple'; d.style.left = (p.x * 100) + '%'; d.style.top = (p.y * 100) + '%'; page.appendChild(d); setTimeout(function () { d.remove(); }, 520); }
    function openNote(n) {
      notes.forEach(function (x) { x.classList.toggle('open', x.getAttribute('data-n') === String(n) && !x.classList.contains('open')); });
      marks.forEach(function (m) { m.classList.toggle('on', notes.some(function (x) { return x.classList.contains('open') && x.getAttribute('data-n') === m.getAttribute('data-n'); })); });
    }
    function act(a) {
      if (!a) return;
      if (a === 'bill') root.classList.toggle('annual');
      else if (a.indexOf('plan:') === 0) root.setAttribute('data-plan', a.split(':')[1]);
    }
    function hover(t) {
      [src, dst].forEach(function (pg) { pg.querySelectorAll('.hov').forEach(function (h) { h.classList.remove('hov'); }); });
      if (!t) return; var a = t.getAttribute('data-act');
      [src, dst].forEach(function (pg) { var m = pg.querySelector('[data-act="' + a + '"]'); if (m) m.classList.add('hov'); });
    }
    function center(el) {
      var r = el.getBoundingClientRect(), s = src.getBoundingClientRect();
      return { x: (r.left + r.width / 2 - s.left) / s.width, y: (r.top + r.height / 2 - s.top) / s.height };
    }

    // Live: mirror the visitor's own pointer and clicks.
    src.addEventListener('pointermove', function (e) {
      if (!user) { user = true; stop(); ghost.classList.remove('show'); }
      put(cur, rel(e), false);
      hover(e.target.closest('[data-act]'));
      clearTimeout(idle);
    });
    src.addEventListener('pointerleave', function () { cur.classList.remove('show'); hover(null); idle = setTimeout(function () { user = false; play(); }, 7000); });
    src.addEventListener('click', function (e) {
      var p = rel(e), mk = e.target.closest('.m-mark');
      if (!user) { user = true; stop(); ghost.classList.remove('show'); }
      put(cur, p, false);
      if (mk) { openNote(mk.getAttribute('data-n')); ripple(src, p); return; }   // prompts stay private
      var t = e.target.closest('[data-act]');
      ripple(src, p); ripple(dst, p);
      if (t) act(t.getAttribute('data-act'));
    });
    marks.forEach(function (m) { m.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); user = true; stop(); openNote(m.getAttribute('data-n')); } }); });

    // Autoplay: walk through the demo until the visitor takes over.
    var script = [
      { el: function () { return src.querySelector('.mp-head .m-mark'); }, note: 1, wait: 2600 },
      { el: function () { return src.querySelector('.mp-card[data-act="plan:1"] .m-mark'); }, note: 2, wait: 2800 },
      { el: function () { return src.querySelector('.mp-card[data-act="plan:1"] .mp-cta'); }, act: 'plan:1', wait: 1300 },
      { el: function () { return src.querySelector('.mp-bill .a'); }, act: 'bill', wait: 1300 },
      { el: function () { return src.querySelector('.mp-bill .m-mark'); }, note: 3, wait: 2800 },
      { el: function () { return src.querySelector('.mp-bill .m'); }, act: 'bill', wait: 1400, reset: true }
    ];
    function run() {
      if (user) return;
      var s = script[step % script.length], el = s.el(); if (!el) return;
      var p = center(el);
      put(ghost, p, true); put(cur, p, true);
      timer = setTimeout(function () {
        if (user) return;
        ripple(src, p);
        if (s.note) openNote(s.note); else { ripple(dst, p); openNote(0); act(s.act); }
        if (s.reset) root.setAttribute('data-plan', '1');
        step++; timer = setTimeout(run, s.wait);
      }, 950);
    }
    function play() { if (reduce || user) return; stop(); timer = setTimeout(run, 600); }
    function stop() { clearTimeout(timer); timer = null; }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) play(); else stop(); }); }, { threshold: 0.35 }).observe(root);
    } else play();
  });
})();

// ---- Prompt Sequence walkthrough: step through the prompts page by page ----
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-seq]').forEach(function (root) {
    var steps = Array.prototype.slice.call(root.querySelectorAll('.seq-steps i'));
    var marks = Array.prototype.slice.call(root.querySelectorAll('.seq-m'));
    var pages = Array.prototype.slice.call(root.querySelectorAll('.seq-page'));
    var box = root.querySelector('.seq-now'), btn = root.querySelector('.seq-play');
    var n = box.querySelector('.seq-now-n'), pg = box.querySelector('.seq-now-page'), ix = box.querySelector('.seq-now-i'), say = box.querySelector('.seq-now-say');
    var cur = 0, timer = null, playing = false, seen = false;
    function show(i) {
      cur = i; var s = steps[i];
      marks.forEach(function (m, k) { m.classList.toggle('on', k === i); m.classList.toggle('done', k < i); });
      pages.forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-page') === s.getAttribute('data-page')); });
      var tr = root.querySelector('.seq-track'), on = root.querySelector('.seq-page.on');
      if (tr && on && tr.scrollWidth > tr.clientWidth + 1) {
        var dx = on.getBoundingClientRect().left - tr.getBoundingClientRect().left - 4;
        tr.scrollTo({ left: tr.scrollLeft + dx, behavior: reduce ? 'auto' : 'smooth' });
      }
      box.classList.add('swap');
      setTimeout(function () {
        n.textContent = i + 1; ix.textContent = i + 1; pg.textContent = s.getAttribute('data-name'); say.textContent = s.textContent;
        box.classList.remove('swap');
      }, reduce ? 0 : 180);
    }
    function label(t) { btn.textContent = t; btn.setAttribute('aria-label', t.replace(/^\W+\s*/, '')); }
    function stop(done) { clearTimeout(timer); playing = false; label(done ? '↻ Play it again' : '▶ Play the sequence'); }
    function play() {
      playing = true; label('❚❚ Pause'); var i = (cur >= steps.length - 1) ? 0 : cur; show(i);
      (function next() { timer = setTimeout(function () { if (cur < steps.length - 1) { show(cur + 1); next(); } else stop(true); }, 3200); })();
    }
    btn.addEventListener('click', function () { if (playing) stop(false); else play(); });
    marks.forEach(function (m) { m.addEventListener('click', function () { stop(false); show(+m.getAttribute('data-step')); }); });
    show(0);
    // Plays once on its own the first time it scrolls into view.
    if (!reduce && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es, io) { es.forEach(function (e) { if (e.isIntersecting && !seen) { seen = true; io.disconnect(); play(); } }); }, { threshold: 0.5 }).observe(root);
    }
  });
})();

// ---- Story graphics: play once when they come into view ----
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  var STEP = 260;
  document.querySelectorAll('[data-story]').forEach(function (root) {
    root.classList.add('story');
    root.querySelectorAll('[data-s]').forEach(function (el) { el.style.setProperty('--s', el.getAttribute('data-s')); });
    var bars = root.querySelectorAll('.bars');
    bars.forEach(function (b) {
      var host = b.closest('[data-s]');
      b.style.setProperty('--bd', ((host ? +host.getAttribute('data-s') : 0) * STEP + 300) + 'ms');
      b.querySelectorAll('i').forEach(function (i, k) { i.style.setProperty('--b', k); });
    });
    var widths = Array.prototype.slice.call(root.querySelectorAll('[data-w]'));
    widths.forEach(function (el) { var host = el.closest('[data-s]'); el.style.setProperty('--wd', ((host ? +host.getAttribute('data-s') : 6) * STEP + 400) + 'ms'); el.style.width = '0'; });
    var counts = Array.prototype.slice.call(root.querySelectorAll('[data-count]'));
    counts.forEach(function (el) { el.textContent = '0' + (/%$/.test(el.getAttribute('data-count')) ? '%' : ''); });
    // arrows in system diagrams get a travelling dot
    root.querySelectorAll('.sys-arrow').forEach(function (a) { a.style.position = 'relative'; var d = document.createElement('span'); d.className = 'flow-dot'; a.appendChild(d); });
    root.classList.add('a-prep');
    var play = function () {
      root.classList.add('a-play');
      widths.forEach(function (el) { el.style.width = el.getAttribute('data-w'); });
      counts.forEach(function (el) {
        var raw = el.getAttribute('data-count'), pct = /%$/.test(raw), to = parseInt(raw, 10);
        var host = el.closest('[data-s]'), delay = (host ? +host.getAttribute('data-s') : 4) * STEP + 300, t0 = null;
        setTimeout(function () {
          var tick = function (t) { if (!t0) t0 = t; var p = Math.min(1, (t - t0) / 1100); p = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(to * p) + (pct ? '%' : ''); if (p < 1) requestAnimationFrame(tick); };
          requestAnimationFrame(tick);
        }, delay);
      });
      root.querySelectorAll('.typing[data-hide]').forEach(function (t) { setTimeout(function () { t.classList.add('gone'); }, +t.getAttribute('data-hide') * STEP); });
    };
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); setTimeout(play, 250); } });
    }, { threshold: 0.3 });
    io.observe(root);
  });
})();

/* Home hero: swap the last word every couple of seconds */
(function () {
  var el = document.querySelector('.hero-swap');
  if (!el || !window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var words = (el.getAttribute('data-words') || '').split('|'), i = 0, timer = null;
  if (words.length < 2) return;
  function next() {
    el.classList.add('out');
    setTimeout(function () {
      i = (i + 1) % words.length;
      var from = el.getBoundingClientRect().width;
      el.style.width = 'auto';
      el.textContent = words[i];
      var to = el.getBoundingClientRect().width;
      el.style.width = from + 'px';
      void el.offsetWidth;
      el.style.width = to + 'px';
      el.classList.remove('out'); el.classList.add('in');
      void el.offsetWidth;
      el.classList.remove('in');
    }, 280);
  }
  function start() { if (!timer) timer = setInterval(next, 1800); }
  function stop() { clearInterval(timer); timer = null; }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { es[0].isIntersecting ? start() : stop(); }).observe(el);
  } else { start(); }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
})();

/* Videos: load YouTube only when someone presses play */
(function () {
  document.querySelectorAll('.vplayer[data-yt]').forEach(function (box) {
    var btn = box.querySelector('.vplay');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + box.getAttribute('data-yt') + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
      f.title = box.getAttribute('data-title') || 'PromptVu video';
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      box.innerHTML = '';
      box.appendChild(f);
    });
  });
})();
