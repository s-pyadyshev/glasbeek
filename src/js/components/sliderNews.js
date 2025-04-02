import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const sliderNews = (function () {
  const init = function () {
    const swiperNews = new Swiper(".slider-news", {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        nextEl: ".swiper-button-next.news-next",
        prevEl: ".swiper-button-prev.news-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2.5,
          spaceBetween: 36,
        },
      },
    });

    window.swiperNews = swiperNews;
  };

  return {
    init,
  };
})();
