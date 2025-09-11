(function () {
  const btn = document.querySelector('#theme-toggle');
  const query = window.matchMedia('(prefers-color-scheme: dark)');
  const theme = query.matches ? 'dark' : 'light';

  if (theme && ['dark', 'light'].includes(theme)) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  query.addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  });

  btn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
  });
})();
