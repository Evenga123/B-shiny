const headingTextUpdates = new Map([
  ["#hero-title", "Atnaujiname ne tik automobilio blizgesį – atgaiviname jo sielą"],
  ["#why-title", "Poliravimas atkuria ne tik blizgesį, bet ir tikrąją automobilio išvaizdą"]
]);

headingTextUpdates.forEach((text, selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
});

const serviceDescriptions = new Map([
  [
    ".service-polish p",
    "Profesionalus kėbulo poliravimas leidžia atkurti prarastą automobilio išvaizdą. Pašalinami smulkūs įbrėžimai, paviršiaus nelygumai bei oksidacijos požymiai, o lakas įgauna gilų, sodrų blizgesį ir veidrodinį atspindį. Kruopščiai atlikta lako korekcija išryškina tikrąją automobilio spalvą ir sugrąžina naujo automobilio įspūdį."
  ],
  [
    ".service-interior p",
    "Salono giluminis valymas pašalina susikaupusius nešvarumus net sunkiai pasiekiamose vietose. Specialiomis priemonėmis išvalomos sėdynės, kiliminė danga, plastiko detalės bei kiti paviršiai, pašalinamos dėmės, nemalonūs kvapai ir bakterijos. Po valymo salonas tampa gaivus, higieniškas ir malonus kasdieniam naudojimui."
  ],
  [
    ".service-headlights p",
    "Laikui bėgant žibintų paviršius praranda skaidrumą, pagelsta ir tampa matinis, dėl ko sumažėja apšvietimo efektyvumas. Poliravimo ir atkūrimo proceso metu pašalinamas pažeistas sluoksnis, atkuriamas skaidrumas bei pagerinamas šviesos pralaidumas. Tai ne tik pagerina automobilio estetiką, bet ir prisideda prie saugesnio vairavimo."
  ],
  [
    ".service-coating p",
    "Keraminės ir nano technologijomis paremtos dangos sukuria papildomą apsauginį sluoksnį ant automobilio paviršiaus. Jos apsaugo laką nuo UV spindulių, purvo, cheminių medžiagų ir kasdienio aplinkos poveikio. Dėl hidrofobinių savybių automobilis ilgiau išlieka švarus, lengviau prižiūrimas ir išsaugo nepriekaištingą blizgesį."
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
