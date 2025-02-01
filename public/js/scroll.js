function onScroll() {
  const header = document.getElementById("header");
  header.classList[window.scrollY ? "add" : "remove"]("scrolled");
}

document.addEventListener("scroll", onScroll);