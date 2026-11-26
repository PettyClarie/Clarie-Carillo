// Clarie Carillo portfolio interactions — checked and organized.

// Friendly hello interaction
const helloButton = document.getElementById("helloButton");
const helloNote = document.getElementById("helloNote");
if (helloButton && helloNote) {
  helloButton.addEventListener("click", () => {
    helloNote.textContent = "Hello there! I'm so happy you stopped by. Have a lovely day ♡";
  });
}

// Light and dark theme switch
const themeButton = document.getElementById("themeButton");
if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const dark = document.body.classList.contains("dark-mode");
    themeButton.textContent = dark ? "☀" : "☾";
    themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  });
}

// Responsive mobile navigation
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const opened = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(opened));
    menuButton.setAttribute("aria-label", opened ? "Close menu" : "Open menu");
    menuButton.textContent = opened ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      menuButton.textContent = "☰";
    });
  });
}

// Photo gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

if (lightbox && lightboxImage && lightboxClose) {
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const imagePath = item.dataset.image;
      if (!imagePath) return;
      lightboxImage.src = imagePath;
      lightbox.hidden = false;
      lightboxClose.focus();
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

// Automatically update the copyright year
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
