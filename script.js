const menuToggle = document.querySelector("#menu-toggle");
const menuButton = document.querySelector("[data-menu-button]");
const menuIcon = menuButton?.querySelector("i");
const menuLinks = document.querySelectorAll("[data-menu-link]");

function setMenuState(isOpen) {
  if (!menuToggle) return;

  menuToggle.checked = isOpen;
  menuButton?.setAttribute("aria-expanded", String(isOpen));

  if (menuIcon) {
    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);
  }
}

menuToggle?.addEventListener("change", () => {
  setMenuState(menuToggle.checked);
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuState(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

const albumSlides = document.querySelectorAll(".album-slideshow .album-slide");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (albumSlides.length > 1 && !reduceMotion) {
  let currentSlide = 0;

  window.setInterval(() => {
    albumSlides[currentSlide].classList.remove("is-active");
    currentSlide = (currentSlide + 1) % albumSlides.length;
    albumSlides[currentSlide].classList.add("is-active");
  }, 3200);
}
