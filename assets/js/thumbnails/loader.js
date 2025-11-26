(function() {
  const createText = (tag, text) => {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
  };

  const createVideoFrame = (item) => {
    const holder = document.createElement('div');
    holder.className = 'thumb-video';
    const frame = document.createElement('iframe');
    frame.loading = 'lazy';
    frame.src = item.embed || item.href || '';
    frame.title = item.title || 'Video';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    holder.appendChild(frame);
    return holder;
  };

  const render = (overrideConfig) => {
    const config = overrideConfig || window.thumbnailsConfig;
    if (!config || !Array.isArray(config.sections)) return;

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
        if (item.type === 'video') {
          article.classList.add('video');
        }

        if (item.type === 'video') {
          const wrapper = createVideoFrame(item);
          article.appendChild(wrapper);
        } else {
          const link = document.createElement('a');
          link.className = 'image';
          link.href = item.href;

          const img = document.createElement('img');
          img.loading = 'lazy';
          img.src = item.thumb;
          img.alt = item.title || '';
          link.appendChild(img);

          article.appendChild(link);
        }

        article.appendChild(createText('h2', item.title || ''));
        article.appendChild(createText('p', item.description || sectionConfig.defaultDescription || config.defaultDescription || ''));
        fragment.appendChild(article);
      });

      section.appendChild(fragment);
    });
  };

  window.renderThumbnails = render;

  const tryRender = () => render();
  document.addEventListener('sections:ready', tryRender);
})();
