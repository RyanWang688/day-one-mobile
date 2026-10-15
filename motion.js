// Motion follows navigation state; updates within the route editor stay immediate.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const easing = 'cubic-bezier(.22,1,.36,1)';
  const running = new Set();
  const tabs = ['home', 'explore', 'simulate', 'account'];
  const snapshot = () => ({tab: state.tab, screen: state.screen, editing: !!state.inlineEditing,
    node: state.screen === 'navigation' ? currentTripNode() : null});
  let previous = snapshot();
  let action = '';
  const play = (element, frames, duration = 260, delay = 0) => {
    if (!element || reduced.matches || !element.animate) return;
    const animation = element.animate(frames, {duration, delay, easing, fill: 'backwards'});
    running.add(animation);
    animation.finished.catch(() => {}).finally(() => running.delete(animation));
  };
  const cancel = () => { running.forEach(a => a.cancel()); running.clear(); };
  document.addEventListener('click', e => {
    action = e.target.closest('[data-action]')?.dataset.action || '';
  }, true);
  reduced.addEventListener('change', () => { if (reduced.matches) cancel(); });

  const baseRender = render;
  render = function(reset = true) {
    const next = snapshot();
    const changed = next.tab !== previous.tab || next.screen !== previous.screen;
    const editingChanged = next.editing !== previous.editing;
    const nodeChanged = next.node && previous.node && next.node !== previous.node;
    const oldCounts = ['.ask-message', '.sc-message'].map(s => document.querySelectorAll(s).length);
    cancel();
    baseRender(reset);
    if (changed) {
      const tabChange = next.tab !== previous.tab;
      const back = /back|cancel|return|^root$/.test(action) ||
        ['home', 'explore', 'account', 'scenarioSelect'].includes(next.screen);
      const direction = tabChange ? Math.sign(tabs.indexOf(next.tab) - tabs.indexOf(previous.tab)) || 1 : back ? -1 : 1;
      const content = document.querySelector(next.tab === 'simulate' ? '#journey' : '#content');
      // Opacity doesn't change the containing block of fixed maps, headers or sheets.
      play(content, [{opacity: .72}, {opacity: 1}], 200);
      if (next.tab !== 'simulate') {
        const blocks = [...content.children].filter(el => {
          if (el.matches('.topbar,.brand,.bottom-action') || getComputedStyle(el).position === 'fixed') return false;
          if (el.matches('.map,.preview-map,.ar-ui') || el.querySelector('.leaflet-container,.ar-ui')) return false;
          return ![...el.querySelectorAll('*')].some(child => getComputedStyle(child).position === 'fixed');
        });
        blocks.slice(0, 8).forEach((el, i) => play(el,
          [{transform: `translateX(${direction * (tabChange ? 10 : 18)}px)`}, {transform: 'translateX(0)'}], 280, Math.min(i * 12, 48)));
        play(content.querySelector('.topbar [role="heading"]'),
          [{opacity: .4, transform: `translateX(${direction * 8}px)`}, {opacity: 1, transform: 'translateX(0)'}], 240);
      }
      const active = document.querySelector('#nav .active .icon');
      if (tabChange) play(active, [{transform: 'scale(.85)'}, {transform: 'scale(1.06)', offset: .65}, {transform: 'scale(1)'}], 300);
      if (next.screen === 'navigation') play(document.querySelector('.current-place-card'),
        [{opacity: .5, transform: 'translateY(18px)'}, {opacity: 1, transform: 'translateY(0)'}], 320);
      if (['complete', 'scenarioComplete'].includes(next.screen)) play(document.querySelector('.summary-kicker .icon,.sc-success'),
        [{opacity: 0, transform: 'scale(.85)'}, {opacity: 1, transform: 'scale(1)'}], 360, 80);
    } else if (editingChanged) {
      play(document.querySelector('.preview-body'), [{opacity: .5, transform: 'translateY(12px)'}, {opacity: 1, transform: 'translateY(0)'}], 280);
    } else if (nodeChanged) {
      play(document.querySelector('.current-place-card'), [{opacity: .4, transform: 'translateX(16px)'}, {opacity: 1, transform: 'translateX(0)'}], 280);
    } else {
      ['.ask-message', '.sc-message'].forEach((selector, i) => {
        [...document.querySelectorAll(selector)].slice(oldCounts[i]).forEach((el, n) => play(el,
          [{opacity: 0, transform: 'translateY(10px)'}, {opacity: 1, transform: 'translateY(0)'}], 260, Math.min(n * 35, 70)));
      });
    }
    previous = next;
    action = '';
  };

  // Native dialogs retain focus handling, Escape and immediate dismissal.
  const dialogs = new MutationObserver(records => {
    for (const record of records) {
      const candidates = record.type === 'attributes' ? [record.target] : [...record.addedNodes];
      for (const node of candidates) {
        if (node.nodeType !== 1 || !node.matches('dialog[open]')) continue;
        if (node.getAnimations().length) continue;
        play(node, [{opacity: 0, transform: 'translateY(18px) scale(.985)'}, {opacity: 1, transform: 'translateY(0) scale(1)'}], 280);
      }
    }
  });
  dialogs.observe(document.body, {childList: true, subtree: true, attributes: true, attributeFilter: ['open']});
})();
