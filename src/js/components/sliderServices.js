import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
export const sliderServices = (function () {
  const init = function () {
    const swiperServices = new Swiper(".slider-services", {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 15,
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
    if (window.matchMedia("(min-width: 1200px)").matches) {
      swiperServices.slideTo(swiperServices.slides.length);
    }
  };

  return {
    init,
  };
})();
