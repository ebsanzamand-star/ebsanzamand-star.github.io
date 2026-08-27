// ============================================================
// EBSAN ZAMAN DIPTO — shared site behaviour
// ============================================================
(function () {
  var nav  = document.getElementById('siteNav');
  var ham  = document.getElementById('ham');
  var draw = document.getElementById('draw');
  var rm   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Nav background on scroll
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Hamburger drawer
  if (ham && draw) {
    ham.addEventListener('click', function () {
      var o = draw.classList.toggle('open');
      ham.classList.toggle('open', o);
      ham.setAttribute('aria-expanded', o);
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !draw.contains(e.target)) {
        draw.classList.remove('open');
        ham.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      }
    });
    draw.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        draw.classList.remove('open');
        ham.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll-reveal
  var revEls = document.querySelectorAll('.r, .rs');
  if (rm) {
    revEls.forEach(function (el) { el.classList.add('in'); });
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -50px 0px' });
    revEls.forEach(function (el) { io.observe(el); });
  } else {
    revEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Active nav link on scroll (one-page sections)
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[data-sec], .drawer a[data-sec]');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var secIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navLinks.forEach(function (l) {
            l.classList.toggle('active', l.dataset.sec === e.target.id);
          });
        }
      });
    }, { threshold: 0.4, rootMargin: '-' + (68) + 'px 0px -40% 0px' });
    sections.forEach(function (s) { secIo.observe(s); });
  }

  // Portfolio filter (if present)
  var btns  = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('#portGrid [data-cat]');
  if (btns.length) {
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.dataset.filter;
        cards.forEach(function (c) {
          c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
        });
      });
    });
  }

  // REC timecode
  var tcEl = document.getElementById('timecode');
  if (tcEl) {
    if (!rm) {
      var start = performance.now();
      var pad = function (n) { return String(n).padStart(2, '0'); };
      (function tick() {
        var elapsed = performance.now() - start;
        var totalFrames = Math.floor(elapsed / (1000 / 24));
        var ff = totalFrames % 24;
        var totalSeconds = Math.floor(totalFrames / 24);
        var ss = totalSeconds % 60;
        var mm = Math.floor(totalSeconds / 60) % 60;
        var hh = Math.floor(totalSeconds / 3600);
        tcEl.textContent = pad(hh) + ':' + pad(mm) + ':' + pad(ss) + ':' + pad(ff);
        requestAnimationFrame(tick);
      })();
    } else {
      tcEl.textContent = '00:00:00:00';
    }
  }
})();
