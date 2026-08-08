const modal = document.querySelector("#modal");
const modalButtons = document.querySelectorAll(".js-modal");
const closeButton = document.querySelector(".close");
const menuButton = document.querySelector(".js-menu");
const estimateForm = document.querySelector("#estimate-form");

const openModal = () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
};

modalButtons.forEach((button) => button.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
menuButton.addEventListener("click", () => document.querySelector("#services").scrollIntoView());

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

estimateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  estimateForm.innerHTML = "<p class=\"form-success\">Thank you - we'll be in touch soon.</p>";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document
  .querySelectorAll(".credibility, .statement, .process, .feature, #work, .contact, .services-head, .service-list")
  .forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
