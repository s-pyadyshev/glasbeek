import Swiper from "swiper";
import { Autoplay, Grid } from "swiper/modules";

export const sliderClients = (function () {
  const init = function () {
    const swiperClients = new Swiper(".slider-clients", {
      modules: [Autoplay, Grid],
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
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
