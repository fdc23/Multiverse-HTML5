(function() {
  const config = window.thumbnailsConfig;
  if (!config || !Array.isArray(config.sections)) return;

  const createText = (tag, text) => {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
  };

  config.sections.forEach((sectionConfig) => {
    const section = document.getElementById(sectionConfig.id);
    if (!section) return;

    section.querySelectorAll('article.thumb').forEach((thumb) => thumb.remove());

    const fragment = document.createDocumentFragment();
    sectionConfig.items.forEach((item) => {
      const article = document.createElement('article');
      article.className = 'thumb';
      if (item.portrait || item.variant === 'portrait') {
        article.classList.add('portrait');
      }

      const link = document.createElement('a');
      link.className = 'image';
      link.href = item.href;

      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = item.thumb;
      img.alt = item.title || '';
      link.appendChild(img);

      article.appendChild(link);
      article.appendChild(createText('h2', item.title || ''));
      article.appendChild(createText('p', item.description || sectionConfig.defaultDescription || config.defaultDescription || ''));
      fragment.appendChild(article);
    });

    section.appendChild(fragment);
  });
})();
