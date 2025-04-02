import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const sliderServices = (function () {
  const init = function () {
    const swiperServices = new Swiper(".slider-services", {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        nextEl: ".swiper-button-next.services-next",
        prevEl: ".swiper-button-prev.services-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.5,
          spaceBetween: 25,
        },
        1600: {
          slidesPerView: 2.5,
          spaceBetween: 25,
        },
        1921: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });

    window.swiperServices = swiperServices;
  };

  return {
    init,
  };
})();
