(function() {

  function buildFallback(container) {
    const sectionId = container.dataset.sectionId || '';
    const config = (window.thumbnailsConfig && Array.isArray(window.thumbnailsConfig.sections))
      ? window.thumbnailsConfig.sections.find((entry) => entry.id === sectionId)
      : null;

    if (!config) return;

    const section = document.createElement('section');
    section.id = config.id;
    if (config.className) section.className = config.className;
    if (config.galleryKey || config.key) section.dataset.galleryKey = config.galleryKey || config.key;

    const header = document.createElement('header');
    header.className = 'section-label';
    const title = document.createElement('span');
    title.className = 'section-title';
    title.textContent = config.title || '';
    const divider = document.createElement('span');
    divider.className = 'section-divider';
    divider.setAttribute('aria-hidden', 'true');
    header.appendChild(title);
    header.appendChild(divider);
    section.appendChild(header);

    if (config.meta) {
      const meta = document.createElement('p');
      meta.className = 'section-meta';
      meta.textContent = config.meta;
      section.appendChild(meta);
    }

    container.innerHTML = '';
    container.appendChild(section);
  }

  async function loadFragment(container) {
    const src = container.dataset.sectionSrc || container.dataset.section;
    const rootHolder = container.closest('[data-section-root]');
    const root = rootHolder && rootHolder.dataset.sectionRoot ? rootHolder.dataset.sectionRoot.replace(/\/$/, '') : '';
    const url = src ? (root ? `${root}/${src}` : src) : '';

    if (!url) {
      buildFallback(container);
      return;
    }

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
        return;
      }
    } catch (err) {
      console.error('Failed to load section fragment', url, err);
    }

    buildFallback(container);
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
