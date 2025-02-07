import "./vendor.js";
import { accordion } from "./components/accordion.js";
import { mobileMenu } from "./components/mobile-menu.js";
import { sliderNews } from "./components/sliderNews.js";
import { sliderPhoto } from "./components/sliderPhoto.js";
import { sliderServices } from "./components/sliderServices.js";
import { tabs } from "./components/tabs.js";
import { toggle } from "./components/toggle.js";
import { scrollspy } from "./components/scrollspy.js";
import { Sticky } from "./vendor/sticky-js.js";

window.addEventListener(
  "load",
  () => {
    accordion.init();
    mobileMenu.init();
    sliderNews.init();
    sliderPhoto.init();
    sliderServices.init();
    tabs.init();
    toggle.init();
    scrollspy.init();
    const rellax = new Rellax(".rellax");
    const sticky = new Sticky(".sticky");

    function initDropdown() {
      $(".js-dropdown").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);

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
          $this.next().find(".menu__link").css("opacity", "1");
        }
      });
    }

    initDropdown();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
