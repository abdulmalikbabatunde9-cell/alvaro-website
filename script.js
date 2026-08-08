/* ---------- nav scroll state ---------- */
const nav = document.querySelector("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- mobile menu ---------- */
const menuButton = document.querySelector(".js-menu");
const menuCloseTargets = document.querySelectorAll(".js-menu-close");
const menuLinks = document.querySelectorAll(".js-menu-link");

const openMenu = () => {
  document.body.classList.add("menu-open");
  menuButton.setAttribute("aria-expanded", "true");
};
const closeMenu = () => {
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
};

menuButton.addEventListener("click", openMenu);
menuCloseTargets.forEach((el) => el.addEventListener("click", closeMenu));
menuLinks.forEach((el) => el.addEventListener("click", closeMenu));

/* ---------- estimate modal ---------- */
const modal = document.querySelector("#modal");
const modalButtons = document.querySelectorAll(".js-modal");
const closeButton = document.querySelector(".js-close");
const estimateForm = document.querySelector("#estimate-form");

const openModal = () => {
  closeMenu();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

modalButtons.forEach((button) => button.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeMenu();
  }
});

estimateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  estimateForm.innerHTML = '<p class="form-success">Thanks — Armando will reach out within a business day.</p>';
});

/* ---------- FAQ accordion ---------- */
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    item.classList.toggle("open", !isOpen);
    question.setAttribute("aria-expanded", String(!isOpen));
  });
});

/* ---------- testimonial carousel ---------- */
const track = document.querySelector("#testimonialTrack");
const prevButton = document.querySelector(".js-prev");
const nextButton = document.querySelector(".js-next");

const scrollByCard = (direction) => {
  const card = track.querySelector(".testimonial-card");
  if (!card) return;
  const distance = card.getBoundingClientRect().width + 18;
  track.scrollBy({ left: distance * direction, behavior: "smooth" });
};

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => scrollByCard(-1));
  nextButton.addEventListener("click", () => scrollByCard(1));
}

/* ---------- animated stat counters ---------- */
const animateCount = (el) => {
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = value.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll("[data-count]").forEach(animateCount);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);
document.querySelectorAll(".stats-grid").forEach((el) => countObserver.observe(el));

/* ---------- scroll reveal ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);
document.querySelectorAll(".reveal").forEach((section) => revealObserver.observe(section));
