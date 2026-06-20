const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const closeNavigation = () => {
  if (!navToggle || !nav) return;
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLAnchorElement) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
    }
  });
}

document.querySelectorAll(".faq-question").forEach((button) => {
  const answer = button.nextElementSibling;
  if (!(answer instanceof HTMLElement)) return;

  answer.style.maxHeight = "0px";

  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    item?.classList.toggle("is-open", !isOpen);
    answer.style.maxHeight = isOpen ? "0px" : `${answer.scrollHeight}px`;
  });
});

document.querySelectorAll("a[href^='http']").forEach((link) => {
  if (!(link instanceof HTMLAnchorElement)) return;
  if (link.origin !== window.location.origin) {
    link.rel = [link.rel, "noopener", "noreferrer"].filter(Boolean).join(" ");
  }
});
