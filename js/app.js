// ===============================
// PRELOADER
// ===============================

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 1600);
});

// ===============================
// MENÚ MÓVIL
// ===============================

const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// ===============================
// HEADER DINÁMICO AL HACER SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===============================
// LIGHTBOX GALERÍA CON NAVEGACIÓN
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxClose = document.querySelector("#lightboxClose");
const lightboxPrev = document.querySelector("#lightboxPrev");
const lightboxNext = document.querySelector("#lightboxNext");
const lightboxCounter = document.querySelector("#lightboxCounter");

let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  lightboxImage.src = galleryImages[currentImageIndex].src;
  lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

  lightboxImage.classList.add("changing");

  setTimeout(() => {
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    lightboxImage.classList.remove("changing");
  }, 220);
}

function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;

  lightboxImage.classList.add("changing");

  setTimeout(() => {
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    lightboxImage.classList.remove("changing");
  }, 220);
}

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(index);
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", showNextImage);
lightboxPrev.addEventListener("click", showPrevImage);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("active")) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") showNextImage();
  if (event.key === "ArrowLeft") showPrevImage();
});

// ===============================
// FILTROS TRABAJOS REALIZADOS
// ===============================

const workFilterButtons = document.querySelectorAll(".works-filter button");
const workItems = document.querySelectorAll(".work-item");

workFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    workFilterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    workItems.forEach((item) => {
      const category = item.dataset.category;

      if (filter === "all" || filter === category) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});