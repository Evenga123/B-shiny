const serviceDescriptions = new Map([
  [
    ".service-polish p",
    "Profesionalus kėbulo poliravimas leidžia atkurti prarastą automobilio išvaizdą. Pašalinami smulkūs įbrėžimai, paviršiaus nelygumai bei oksidacijos požymiai, o lakas įgauna gilų, sodrų blizgesį ir veidrodinį atspindį."
  ],
  [
    ".service-interior p",
    "Salono giluminis valymas pašalina susikaupusius nešvarumus net sunkiai pasiekiamose vietose. Išvalomos sėdynės, kiliminė danga, plastiko detalės, pašalinamos dėmės, nemalonūs kvapai ir bakterijos."
  ],
  [
    ".service-headlights p",
    "Poliravimo ir atkūrimo metu pašalinamas pažeistas žibintų sluoksnis, atkuriamas skaidrumas bei pagerinamas šviesos pralaidumas. Tai pagerina automobilio estetiką ir prisideda prie saugesnio vairavimo."
  ],
  [
    ".service-coating p",
    "Keraminės ir nano technologijomis paremtos dangos sukuria papildomą apsaugą nuo UV spindulių, purvo, cheminių medžiagų ir kasdienio aplinkos poveikio. Automobilis ilgiau išlieka švarus ir blizgus."
  ]
]);

serviceDescriptions.forEach((description, selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = description;
  }
});

const sectionThemes = [
  [".trust-strip", "section-dark"],
  [".intro", "section-gray"],
  [".services", "section-dark"],
  [".work-band", "section-gray"],
  [".pricing", "section-dark"],
  [".faq-section", "section-gray"],
  [".cta-band", "section-dark"]
];

sectionThemes.forEach(([selector, theme]) => {
  const section = document.querySelector(selector);
  section?.classList.add(theme, "section-transition");
});

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
