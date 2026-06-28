// ===============================
// SCROLL PREMIUM CON LENIS
// ===============================

const lenis = new Lenis({
  duration: 1.25,
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

function showElementsOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", showElementsOnScroll);
window.addEventListener("load", showElementsOnScroll);