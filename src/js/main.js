import "./vendor.js";
import { mobileMenu } from "./components/mobile-menu.js";
import { sliderNews } from "./components/sliderNews.js";
import { sliderPhoto } from "./components/sliderPhoto.js";
import { sliderServices } from "./components/sliderServices.js";
import { sliderProduct } from "./components/sliderProduct.js";
import { sliderClients } from "./components/sliderClients.js";
import { tabs } from "./components/tabs.js";
import { toggle } from "./components/toggle.js";
import { scrollspy } from "./components/scrollspy.js";
import { splash } from "./components/splash.js";
import { relocateContact } from "./components/relocateContact.js";
import { relocateContactNews } from "./components/relocateContactNews.js";
import { relocateContactNewsDetail } from "./components/relocateContactNewsDetail.js";

window.addEventListener("load", () => {
  splash.init();
  mobileMenu.init();
  sliderServices.init();
  sliderNews.init();
  sliderPhoto.init();
  sliderProduct.init();
  sliderClients.init();
  tabs.init();
  toggle.init();
  scrollspy.init();
  relocateContact.init();
  relocateContactNews.init();
  relocateContactNewsDetail.init();

  if (window.matchMedia("(min-width: 768px)").matches) {
    if (document.querySelector(".slider-services")) {
      window.swiperServices.slideTo(swiperServices.slides.length);
    }
    if (document.querySelector(".slider-news")) {
      window.swiperNews.slideTo(0);
    }
  }

  const rellax = new Rellax(".rellax");

  function initDropdown() {
    $(".js-dropdown").on(
      window.matchMedia("(min-width: 1200px)").matches ? "mouseenter" : "click",
      function (e) {
        e.preventDefault();
        let $this = $(this);

        if ($this.next().hasClass("show")) {
          $this.removeClass("is-open");
          $this.next().removeClass("show");
          $this.next().fadeOut(500);
          $(".menu__link").css("opacity", "1");
          $this.removeClass("active");
        } else {
          $this.addClass("is-open");
          $this.next().toggleClass("show");
          $this.next().fadeIn(500);
          $this.addClass("active");
          $(".menu__link").css("opacity", "0.5");
          $(".menu__link").css("border-bottom", "1px solid transparent");
          $this.next().find(".menu__link").css("opacity", "1");
        }
      }
    );
  }

  initDropdown();
  document.querySelector("body").classList.add("page-loaded");
});
