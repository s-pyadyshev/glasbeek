import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
export const sliderNews = (function () {
  const init = function () {
    const swiper = new Swiper(".slider-news", {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 18,
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
          slidesPerView: 2.5,
          spaceBetween: 36,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 36,
        },
      },
    });
  };

  return {
    init,
  };
})();
