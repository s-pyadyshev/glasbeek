import Swiper from "swiper";
import { Autoplay, Grid } from "swiper/modules";

export const sliderClients = (function () {
  const init = function () {
    const swiperClients = new Swiper(".slider-clients", {
      modules: [Autoplay, Grid],
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        320: {
          grid: {
            rows: 2,
          },
          slidesPerView: 2,
          spaceBetween: 36,
        },
        768: {
          grid: {
            rows: 2,
          },
          slidesPerView: 3,
        },
        1024: {
          grid: {
            rows: 1,
          },
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
      },
    });
  };

  return {
    init,
  };
})();
