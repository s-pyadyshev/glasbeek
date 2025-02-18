import { debounce } from "../helpers.js";

export const relocateContact = (() => {
  const init = () => {
    const cardContact = document.querySelector(".card--contact");
    const contactForm = document.querySelector(".form--contact");
    const pageHeaderAside = document.querySelector(
      ".page-header__aside--contact"
    );

    if (!cardContact || !contactForm || !pageHeaderAside) {
      return;
    }

    const relocateCardContact = debounce(() => {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        contactForm.after(cardContact);
      } else {
        if (!cardContact.contains(pageHeaderAside)) {
          pageHeaderAside.prepend(cardContact);
        }
      }
    }, 200);

    relocateCardContact();

    window.addEventListener("resize", () => {
      relocateCardContact();
    });
  };

  return {
    init,
  };
})();
