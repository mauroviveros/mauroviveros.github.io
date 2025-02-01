function changeTheme(newTheme) {
  const element = document.documentElement;
  const theme = newTheme || (element.classList.contains("dark") ? "light" : "dark");
  const css = document.createElement("style");

  css.appendChild(
    document.createTextNode(/*CSS*/`
      * {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
      }
    `)
  );

  document.head.appendChild(css);
  element.classList[theme === "dark" ? "add" : "remove"]("dark");

  window.getComputedStyle(css).opacity;
  document.head.removeChild(css);
  localStorage.theme = theme;
}

function preloadTheme() {
  const theme = (() => {
    const userTheme = localStorage.theme;
    if(userTheme === "dark" || userTheme === "light") return userTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  })();

  const element = document.documentElement;
  element.classList[theme === "dark" ? "add" : "remove"]("dark");
  localStorage.theme = theme;
}

window.onload = () => {
  function initializeThemeButtons() {
    const headerThemeButton = document.getElementById("header-theme-button");
    headerThemeButton?.addEventListener("click", () => changeTheme());
  }

  function watchSystemThemeChanges() {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      const theme = e.matches ? "dark" : "light";
      localStorage.theme = theme;
      changeTheme(theme);
    });
  }

  document.addEventListener("astro:after-swap", initializeThemeButtons);
  initializeThemeButtons();
  watchSystemThemeChanges();
};

document.addEventListener("astro:after-swap", preloadTheme);

preloadTheme();
