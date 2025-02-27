import { debounce } from "../helpers.js";
import { stickyCard } from "./stickyCard.js";

export const relocateContactNewsDetail = (() => {
  const init = () => {
    const cardContact = document.querySelector(".card-contact");
    const articleSlider = document.querySelector(".article__slider");
    const pageHeaderAside = document.querySelector(".page-header__aside");

    if (!cardContact || !articleSlider || !pageHeaderAside) {
      return;
    }

    const relocateCardContact = debounce(() => {
      if (window.matchMedia("(max-width: 1199px)").matches) {
        articleSlider.after(cardContact);
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
