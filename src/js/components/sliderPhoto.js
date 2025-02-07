import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
export const sliderPhoto = (function () {
  const init = function () {
    const swiper = new Swiper(".slider-photo", {
      modules: [Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 25,
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
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
  };

  return {
    init,
  };
})();
