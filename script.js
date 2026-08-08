// --- Modal Logic ---
const modal = document.querySelector("#modal");
const modalButtons = document.querySelectorAll(".js-modal");
const closeButton = document.querySelector(".close");
const estimateForm = document.querySelector("#estimate-form");

const openModal = () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};

modalButtons.forEach((btn) => btn.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

estimateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  estimateForm.innerHTML = `<h3 style="font-family: Manrope;">Thank you.</h3><p style="color: var(--text-muted);">We have received your details and will be in touch shortly.</p>`;
});

// --- Scroll Effects (Nav) ---
const nav = document.querySelector(".js-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// --- Advanced Staggered Reveal Animations ---
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      // Read data-delay attribute or default to 0
      const delay = el.getAttribute('data-delay') || 0;

      // Apply delay dynamically
      setTimeout(() => {
        el.classList.add('visible');
      }, delay);

      // Stop observing once revealed
      observer.unobserve(el);
    }
  });
}, observerOptions);

// Select all elements with the 'reveal' class
document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});