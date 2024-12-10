function onScroll() {
  const header = document.getElementById("header");

  console.log(window.scrollY);
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", onScroll);