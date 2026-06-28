// ===============================
// GSAP CONFIGURACIÓN
// ===============================

gsap.registerPlugin(ScrollTrigger);

// ===============================
// HERO ANIMATION
// ===============================

gsap.from(".hero-title", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out",
  delay: 1.8
});

gsap.from(".hero-description", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  delay: 2.1
});

gsap.from(".hero-buttons", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out",
  delay: 2.3
});

// ===============================
// SECCIONES CON SCROLL
// ===============================

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out"
  });
});

// ===============================
// CONTADORES ANIMADOS
// ===============================

const counters = document.querySelectorAll(".counter");

function animateCounters() {
  counters.forEach((counter) => {
    const counterPosition = counter.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.85;

    if (counterPosition < screenPosition && !counter.classList.contains("counted")) {
      counter.classList.add("counted");

      const target = Number(counter.dataset.target);
      let current = 0;
      const increment = target / 90;

      function updateCounter() {
        current += increment;

        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      updateCounter();
    }
  });
}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);


// ===============================
// EFECTO LUZ EN TARJETAS
// ===============================

const glowCards = document.querySelectorAll(
  ".about-card, .solar-feature, .industrial-card, .electromechanical-card, .energy-card, .maintenance-card, .technology-card, .process-step, .dashboard-card"
);

glowCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

// ===============================
// ANIMACIÓN MONITOR SOLAR
// ===============================

const solarMonitor = document.querySelector(".solar-monitor-visual");

function animateSolarMonitor() {
  if (!solarMonitor) return;

  const monitorTop = solarMonitor.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (monitorTop < triggerPoint && !solarMonitor.classList.contains("solar-active")) {
    const bars = solarMonitor.querySelectorAll(".solar-bars span");
    const batteryFill = solarMonitor.querySelector(".battery-fill");

    bars.forEach((bar, index) => {
      const height = bar.dataset.height;

      setTimeout(() => {
        bar.style.setProperty("--h", height);
      }, index * 120);
    });

    if (batteryFill) {
      batteryFill.style.setProperty("--battery", batteryFill.dataset.battery);
    }

const solarNumbers = solarMonitor.querySelectorAll(".solar-number");

solarNumbers.forEach((number) => {
  const target = Number(number.dataset.value);
  let current = 0;
  const increment = target / 80;

  function updateSolarNumber() {
    current += increment;

    if (current < target) {
      number.textContent = target % 1 === 0
        ? Math.ceil(current)
        : current.toFixed(1);

      requestAnimationFrame(updateSolarNumber);
    } else {
      number.textContent = target;
    }
  }

  updateSolarNumber();
});

    solarMonitor.classList.add("solar-active");
  }
}

window.addEventListener("scroll", animateSolarMonitor);
window.addEventListener("load", animateSolarMonitor);

// ===============================
// POTENCIA SOLAR EN VIVO
// ===============================

const livePower = document.querySelector(".solar-live-power");

if (livePower) {
  setInterval(() => {
    const value = (8.55 + Math.random() * 0.35).toFixed(2);
    livePower.textContent = value;
  }, 1200);
}

// ===============================
// SERVICIOS PREMIUM V2
// Cambio automático de fotos
// ===============================

const premiumServiceCards = document.querySelectorAll(".premium-service-card");

premiumServiceCards.forEach((card) => {
  const bg = card.querySelector(".premium-service-bg");
  const images = card.dataset.images.split(",");
  let index = 0;

  bg.style.backgroundImage = `url("assets/images/${images[0]}")`;

  setInterval(() => {
    index = (index + 1) % images.length;
    bg.style.opacity = "0";

    setTimeout(() => {
      bg.style.backgroundImage = `url("assets/images/${images[index]}")`;
      bg.style.opacity = "1";
    }, 450);
  }, 4000);

  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

// ===============================
// CONTADORES WHY EATP
// ===============================

const whyCounters = document.querySelectorAll(".why-counter");

function animateWhyCounters() {
  whyCounters.forEach((counter) => {
    const position = counter.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;

    if (position < trigger && !counter.classList.contains("counted")) {
      counter.classList.add("counted");

      const target = Number(counter.dataset.target);
      let current = 0;
      const increment = target / 90;

      function update() {
        current += increment;

        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      }

      update();
    }
  });
}

window.addEventListener("scroll", animateWhyCounters);
window.addEventListener("load", animateWhyCounters);