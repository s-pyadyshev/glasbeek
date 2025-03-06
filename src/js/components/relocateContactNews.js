import { debounce } from "../helpers.js";
import { stickyCard } from "./stickyCard.js";

export const relocateContactNews = (() => {
  const init = () => {
    const cardContact = document.querySelector(".card-contact");
    const pagination = document.querySelector(".pagination");
    const pageHeaderAside = document.querySelector(".page-header__aside");

    if (!cardContact || !pagination || !pageHeaderAside) {
      return;
    }

    const relocateCardContact = debounce(() => {
      if (window.matchMedia("(max-width: 1199px)").matches) {
        pagination.after(cardContact);
      } else {
        if (!cardContact.contains(pageHeaderAside)) {
          pageHeaderAside.prepend(cardContact);
          if (pageHeaderAside.querySelector(".card-contact")) {
            stickyCard.init();
          }
        }
      }
    }, 300);

    relocateCardContact();

    window.addEventListener("resize", relocateCardContact);
  };

  return {
    init,
  };
})();
