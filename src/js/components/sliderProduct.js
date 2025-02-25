import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
export const sliderProduct = (function () {
  const init = function () {
    const swiper = new Swiper(".slider-product", {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button",
      },
      spaceBetween: 50,
    });
  };

  return {
    init,
  };
})();
