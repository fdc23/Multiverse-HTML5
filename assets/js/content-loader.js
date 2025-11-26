(function() {
  const loader = document.querySelector('.content-loader');
  if (!loader) return;

  const minVisibleMs = 1200;
  const startTime = performance.now();

  const markDone = () => {
    const elapsed = performance.now() - startTime;
    const wait = Math.max(minVisibleMs - elapsed, 0);

    window.setTimeout(() => {
      loader.classList.add('is-done');
      window.setTimeout(() => {
        if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
      }, 600);
    }, wait);
  };

  // Fall back timeout in case load takes longer.
  const fallback = window.setTimeout(markDone, 3500);

  window.addEventListener('load', () => {
    window.clearTimeout(fallback);
    markDone();
  });
})();
