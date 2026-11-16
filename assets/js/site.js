(() => {
  const root = document.documentElement;
  const menuButton = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.site-nav');
  const themeButton = document.querySelector('.theme-toggle');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (menuButton.getAttribute('aria-expanded') !== 'true') return;
        menuButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('is-open');
        if (link.target === '_blank') menuButton.focus();
      });
    });

    menuButton.closest('header').addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || menuButton.getAttribute('aria-expanded') !== 'true') return;
      menuButton.click();
      menuButton.focus();
    });
  }

  if (themeButton) {
    themeButton.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
    themeButton.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = nextTheme;
      themeButton.setAttribute('aria-pressed', String(nextTheme === 'dark'));
      try { localStorage.setItem('site-color-theme', nextTheme); } catch (error) {}
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
