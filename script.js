const porscheBackgroundStyle = document.createElement("style");
porscheBackgroundStyle.textContent = `
  .intro,
  .services,
  .pricing,
  .faq-section,
  .work-band,
  .cta-band {
    position: relative;
    z-index: 0;
    isolation: isolate;
    overflow: hidden;
  }

  .intro::before,
  .services::before,
  .pricing::before,
  .faq-section::before,
  .work-band::before,
  .cta-band::before {
    position: absolute;
    inset: 0;
    z-index: -2;
    background: url("assets/porsche-dark-bg.jpg") center / cover fixed;
    opacity: 0.72;
    content: "";
  }

  .intro::after,
  .services::after,
  .pricing::after,
  .faq-section::after,
  .work-band::after,
  .cta-band::after {
    position: absolute;
    inset: 0;
    z-index: -1;
    background: rgba(7, 9, 11, 0.46);
    content: "";
  }

  .trust-strip,
  .work-band,
  .price-grid article,
  .cta-band {
    background-color: rgba(7, 9, 11, 0.58) !important;
  }

  @media (max-width: 640px) {
    .intro::before,
    .services::before,
    .pricing::before,
    .faq-section::before,
    .work-band::before,
    .cta-band::before {
      background-attachment: scroll;
      background-position: center top;
      opacity: 0.86;
    }
  }
`;
document.head.appendChild(porscheBackgroundStyle);

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}
