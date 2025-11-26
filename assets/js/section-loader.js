(function() {
  async function loadFragment(container) {
    const src = container.dataset.sectionSrc || container.dataset.section;
    if (!src) return;
    const rootHolder = container.closest('[data-section-root]');
    const root = rootHolder && rootHolder.dataset.sectionRoot ? rootHolder.dataset.sectionRoot.replace(/\/$/, '') : '';
    const url = root ? `${root}/${src}` : src;

    try {
      const response = await fetch(url);
      if (response.ok) {
        container.innerHTML = await response.text();
      }
    } catch (err) {
      console.error('Failed to load section fragment', url, err);
    }
  }

  async function loadAllFragments() {
    const targets = Array.from(document.querySelectorAll('[data-section-src],[data-section]'));
    if (!targets.length) {
      document.dispatchEvent(new CustomEvent('sections:ready'));
      return;
    }

    await Promise.all(targets.map(loadFragment));
    document.dispatchEvent(new CustomEvent('sections:ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllFragments);
  } else {
    loadAllFragments();
  }
})();
