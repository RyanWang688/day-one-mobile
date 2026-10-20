/* Smart motion: one context-aware motion layer shared by the app shell and Journey Tree.
   - Honours reduced motion; shortens motion on low-power devices or when the user taps quickly.
   - Reveals content only when it scrolls into view, never what is already on screen.
   - Sliding indicators follow the active tab across re-renders.
   - Images fade in once decoded instead of popping in. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const ease = 'cubic-bezier(.22,1,.36,1)';
  const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || !!navigator.connection?.saveData;
  let lastTap = 0, tempo = 1;
  document.addEventListener('pointerdown', () => {
    const now = performance.now();
    // Rapid, repeated input means the user knows where they are going: get out of the way.
    tempo = now - lastTap < 350 ? .55 : 1;
    lastTap = now;
  }, {capture: true, passive: true});
  const duration = ms => reduced.matches ? 0 : Math.round(ms * tempo * (lowPower ? .75 : 1));
  const play = (el, frames, ms, delay = 0) => {
    const d = duration(ms);
    if (!d || !el?.animate) return null;
    return el.animate(frames, {duration: d, delay: delay * tempo, easing: ease, fill: 'backwards'});
  };
  window.dayOneMotion = {play, duration, ease, reduced};

  /* Scroll reveal */
  const revealSelector = [
    '.jl-step-card', '.journey-app .grid > .card', '.phase-divider',
    '.home-discovery', '.trip-app .cards > .card', '.trip-app .section.card',
    '.jg-case', '.mc-task', '.mc-steps li', '.jl-checklist label', '.mc-planner', '.mc-keyinfo',
    '.lic-application details', '.jl-payment-options li', '.saved-route', '.story-card'
  ].join(',');
  const excluded = '.leaflet-container, .map, .preview-map, .ar-ui, [data-no-reveal]';
  const seen = new WeakSet();
  let batch = 0, batchTimer = 0;
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      const el = entry.target;
      if (!seen.has(el)) {
        seen.add(el);
        // Already visible when first observed: it arrived with the screen, so leave it alone.
        if (entry.isIntersecting) { io.unobserve(el); continue; }
        continue;
      }
      if (!entry.isIntersecting) continue;
      io.unobserve(el);
      const i = batch++;
      clearTimeout(batchTimer);
      batchTimer = setTimeout(() => { batch = 0; }, 120);
      play(el, [{opacity: 0, transform: 'translateY(18px) scale(.985)'}, {opacity: 1, transform: 'none'}], 440, Math.min(i * 50, 200));
    }
  }, {rootMargin: '0px 0px -6% 0px', threshold: .04}) : null;
  const observeReveal = root => {
    if (!io || !root.querySelectorAll) return;
    const nodes = root.matches?.(revealSelector) ? [root] : [];
    nodes.push(...root.querySelectorAll(revealSelector));
    for (const el of nodes) if (!el.closest(excluded)) io.observe(el);
  };

  /* Image fade-in */
  const watchImage = img => {
    if (img.complete || img.dataset.smImg || img.closest(excluded)) return;
    img.dataset.smImg = '1';
    img.classList.add('sm-img-loading');
    const done = () => {
      img.classList.remove('sm-img-loading');
      img.removeEventListener('load', done);
      img.removeEventListener('error', done);
    };
    img.addEventListener('load', done);
    img.addEventListener('error', done);
  };
  const observeImages = root => {
    if (!root.querySelectorAll) return;
    if (root.tagName === 'IMG') watchImage(root);
    root.querySelectorAll('img').forEach(watchImage);
  };

  /* Sliding tab indicators. The pill lives inside the container, so it is recreated after
     each innerHTML render and slides from the last known position. */
  const indicators = [];
  const indicator = (selector, activeSelector, className) => {
    const item = {selector, activeSelector, className, last: null};
    indicators.push(item);
    return item;
  };
  const placeIndicator = item => {
    const host = document.querySelector(item.selector);
    if (!host || host.hidden) return;
    const active = host.querySelector(item.activeSelector);
    let pill = host.querySelector(':scope > .' + item.className);
    if (!active) { pill?.remove(); return; }
    const fresh = !pill;
    if (fresh) {
      pill = document.createElement('span');
      pill.className = 'sm-indicator ' + item.className;
      pill.setAttribute('aria-hidden', 'true');
      host.prepend(pill);
      host.classList.add('sm-has-indicator');
    }
    const box = {x: active.offsetLeft, y: active.offsetTop, w: active.offsetWidth, h: active.offsetHeight};
    const set = b => {
      pill.style.width = b.w + 'px';
      pill.style.height = b.h + 'px';
      pill.style.transform = `translate(${b.x}px,${b.y}px)`;
    };
    if (fresh) {
      // Start where the previous pill was (or in place), then let the transition carry it over.
      pill.style.transition = 'none';
      set(item.last && duration(1) ? item.last : box);
      pill.getBoundingClientRect();
      pill.style.transition = '';
    }
    set(box);
    item.last = box;
  };
  indicator('.category-nav', '.active', 'sm-tab-pill');
  indicator('#nav', '.active', 'sm-nav-pill');
  const placeAll = () => indicators.forEach(placeIndicator);
  addEventListener('resize', () => requestAnimationFrame(placeAll));

  /* Header elevation once content scrolls underneath it. */
  let scrolled = false;
  const onScroll = () => {
    const next = scrollY > 4;
    if (next !== scrolled) { scrolled = next; document.documentElement.classList.toggle('sm-scrolled', next); }
  };
  addEventListener('scroll', onScroll, {passive: true});
  onScroll();

  /* One observer keeps every behaviour in sync with re-renders. */
  // Mutation callbacks run before the next paint, so indicators and image states never flash.
  const observer = new MutationObserver(records => {
    let indicatorsChanged = false;
    for (const r of records) for (const n of r.addedNodes) {
      if (n.nodeType !== 1 || n.classList.contains('sm-indicator')) continue;
      observeReveal(n);
      observeImages(n);
      indicatorsChanged = true;
    }
    if (indicatorsChanged) placeAll();
  });
  observer.observe(document.body, {childList: true, subtree: true});
  observeReveal(document.body);
  observeImages(document.body);
  placeAll();
  document.fonts?.ready.then(placeAll);
})();
