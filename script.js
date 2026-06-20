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
    background: url("assets/porsche-dark-bg.jpg") center center / cover fixed;
    opacity: 1;
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
    background: rgba(7, 9, 11, 0.18);
    content: "";
  }

  .trust-strip,
  .work-band,
  .price-grid article,
  .cta-band {
    background-color: rgba(7, 9, 11, 0.30) !important;
  }

  #kontaktai.cta-band {
    grid-template-columns: minmax(320px, 0.8fr) minmax(560px, 1.35fr);
    max-width: min(1380px, calc(100% - 48px));
    gap: clamp(28px, 4vw, 54px);
    align-items: stretch;
    padding-left: clamp(24px, 4vw, 56px);
    padding-right: clamp(24px, 4vw, 56px);
  }

  #kontaktai.cta-band > div:first-child {
    align-self: center;
  }

  .contact-panel {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    min-width: 0;
  }

  .contact-card {
    min-height: 142px;
    padding: 20px;
    background: rgba(7, 9, 11, 0.58);
    border: 1px solid var(--line);
    border-radius: var(--radius);
  }

  .contact-card:nth-child(3) {
    grid-column: span 2;
  }

  .contact-card h3 {
    margin: 0 0 10px;
    color: var(--accent);
    font-size: 16px;
    text-transform: uppercase;
  }

  .contact-card p,
  .contact-card li {
    margin: 0;
    color: rgba(246, 242, 234, 0.86);
    line-height: 1.65;
  }

  .contact-card ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px 18px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .contact-card a {
    color: var(--text);
    font-weight: 800;
  }

  .contact-note {
    margin-top: 14px !important;
    color: var(--accent) !important;
    font-weight: 800;
  }

  .contact-socials {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 14px;
  }

  .contact-socials a {
    display: inline-flex;
    align-items: center;
    min-height: 38px;
    padding: 0 14px;
    border: 1px solid rgba(214, 178, 94, 0.48);
    border-radius: var(--radius-sm);
    color: var(--accent);
    font-size: 14px;
  }

  @media (max-width: 980px) {
    #kontaktai.cta-band {
      grid-template-columns: 1fr;
      max-width: min(980px, calc(100% - 36px));
    }
  }

  @media (max-width: 640px) {
    .intro::before,
    .services::before,
    .pricing::before,
    .faq-section::before,
    .work-band::before,
    .cta-band::before {
      background-attachment: scroll;
      background-position: center center;
      opacity: 1;
    }

    #kontaktai.cta-band {
      max-width: calc(100% - 24px);
      padding-left: 18px;
      padding-right: 18px;
    }

    .contact-panel,
    .contact-card ul {
      grid-template-columns: 1fr;
    }

    .contact-card:nth-child(3) {
      grid-column: auto;
    }
  }
`;
document.head.appendChild(porscheBackgroundStyle);

const contactSection = document.querySelector("#kontaktai");
if (contactSection) {
  contactSection.innerHTML = `
    <div>
      <p class="eyebrow">Kontaktai</p>
      <h2>Susisiekite su B SHINY</h2>
      <p>Automobilio kėbulo poliravimas, cheminis salono valymas, žibintų atnaujinimas ir apsauginės dangos Klaipėdoje.</p>
      <p class="contact-note">Prieš atvykstant reikalinga registracija žinute arba telefonu.</p>
      <div class="contact-actions">
        <a class="button primary" href="tel:+37065923444">+370 659 23444</a>
        <a class="button ghost" href="https://www.google.com/maps/search/?api=1&query=%C5%A0ilut%C4%97s%20pl.%20100%2C%2095264%20Klaip%C4%97da" target="_blank" rel="noopener">Rodyti žemėlapyje</a>
      </div>
    </div>
    <div class="contact-panel" aria-label="B Shiny kontaktinė informacija">
      <article class="contact-card"><h3>Adresas</h3><p>Šilutės pl. 100<br>95264 Klaipėda</p></article>
      <article class="contact-card"><h3>Telefonas</h3><p><a href="tel:+37065923444">(8-659) 23444</a></p></article>
      <article class="contact-card"><h3>Darbo laikas</h3><ul><li>Pirmadienis: 09:00 - 18:00</li><li>Antradienis: 09:00 - 18:00</li><li>Trečiadienis: 09:00 - 18:00</li><li>Ketvirtadienis: 09:00 - 18:00</li><li>Penktadienis: 09:00 - 18:00</li><li>Šeštadienis: 10:00 - 15:00</li><li>Sekmadienis: nedirbame</li></ul></article>
      <article class="contact-card"><h3>Socialiniai tinklai</h3><div class="contact-socials"><a href="https://www.facebook.com/BSHINYKLP" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/bshiny_/" target="_blank" rel="noopener">Instagram</a></div></article>
    </div>
  `;
}

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

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const answer = item && item.querySelector(".faq-answer");
    const isOpen = button.getAttribute("aria-expanded") === "true";
    if (!item || !answer) return;
    button.setAttribute("aria-expanded", String(!isOpen));
    item.classList.toggle("is-open", !isOpen);
    answer.style.maxHeight = isOpen ? "0px" : `${answer.scrollHeight}px`;
  });
});
