(function() {
  const defaultDescription = 'Audiovisual highlight clip.';
  const landscapeEmbed = 'https://www.youtube.com/embed/bP-iDz6KA1E?rel=0';
  const portraitEmbed = 'https://www.youtube.com/embed/LCyngJp1JVE?rel=0';

  const buildItems = (count, embed, options = {}) => {
    return Array.from({ length: count }).map((_, index) => ({
      type: 'video',
      embed,
      href: embed,
      title: options.titlePrefix ? `${options.titlePrefix} ${index + 1}` : `Audiovisual ${index + 1}`,
      description: options.description || defaultDescription,
      portrait: !!options.portrait
    }));
  };

  const landscapeItems = buildItems(24, landscapeEmbed, { titlePrefix: 'Audiovisual clip' });
  const portraitItems = buildItems(12, portraitEmbed, { titlePrefix: 'Vertical take', portrait: true });

  const sections = [
    {
      id: 'menu-1',
      key: 'sectionOne',
      title: 'Section 1',
      defaultDescription,
      items: [...landscapeItems, ...portraitItems]
    },
    {
      id: 'menu-2',
      key: 'sectionTwo',
      title: 'Section 2',
      defaultDescription,
      items: [...landscapeItems, ...portraitItems]
    }
  ];

  window.thumbnailsConfig = {
    defaultDescription,
    sections
  };
})();
