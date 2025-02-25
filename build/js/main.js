/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileMenu: function() { return /* binding */ mobileMenu; }
/* harmony export */ });
const mobileMenu = (() => {
  const init = () => {
    const mobileMenuToggle = document.querySelector(".js-toggle-menu");
    if (!mobileMenuToggle) {
      return;
    }
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    mobileMenuToggle.addEventListener("click", function () {
      if (!mobileMenuToggle.classList.contains("active")) {
        mobileMenuToggle.classList.add("active");
        body.classList.toggle("menu-active");
        menu.classList.add("menu--open");
        menu.classList.remove("menu--closed");
      } else {
        mobileMenuToggle.classList.remove("active");
        $(".menu__link").css("opacity", "1");
        $(".menu__link.dropdown").removeClass("active");
        $(".js-dropdown").removeClass("is-open");
        $(".js-dropdown").next().removeClass("show");
        $(".js-dropdown").next().slideUp(0);
        body.classList.toggle("menu-active");
        menu.classList.add("menu--closed");
        menu.classList.remove("menu--open");
      }
    });
  };
  return {
    init
  };
})();

/***/ }),

/***/ "./src/js/components/relocateContact.js":
/*!**********************************************!*\
  !*** ./src/js/components/relocateContact.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   relocateContact: function() { return /* binding */ relocateContact; }
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/js/helpers.js");

const relocateContact = (() => {
  const init = () => {
    const cardContact = document.querySelector(".card--contact");
    const contactForm = document.querySelector(".form--contact");
    const pageHeaderAside = document.querySelector(".page-header__aside--contact");
    if (!cardContact || !contactForm || !pageHeaderAside) {
      return;
    }
    const relocateCardContact = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        contactForm.after(cardContact);
      } else {
        if (!cardContact.contains(pageHeaderAside)) {
          pageHeaderAside.prepend(cardContact);
        }
      }
    }, 200);
    relocateCardContact();
    window.addEventListener("resize", () => {
      relocateCardContact();
    });
  };
  return {
    init
  };
})();

/***/ }),

/***/ "./src/js/components/scrollspy.js":
/*!****************************************!*\
  !*** ./src/js/components/scrollspy.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollspy: function() { return /* binding */ scrollspy; }
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/js/helpers.js");

const applyScrollspyClasses = elements => {
  elements.forEach(element => {
    if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isElementCompletelyInViewport)(element)) {
      if (element.classList.contains("no-animate")) {
        return;
      }
      const animationClass = element.dataset.scrollspy;
      element.classList.add("animate__animated");
      element.classList.add(animationClass);
    }
  });
};
const scrollspy = function () {
  const init = function () {
    const scrollspyElements = document.querySelectorAll("[data-scrollspy]");
    if (!scrollspyElements.length) {
      return;
    }
    applyScrollspyClasses(scrollspyElements);
    document.addEventListener("scroll", (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.throttle)(() => {
      applyScrollspyClasses(scrollspyElements);
    }, 100));
  };
  return {
    init
  };
}();

/***/ }),

/***/ "./src/js/components/sliderClients.js":
/*!********************************************!*\
  !*** ./src/js/components/sliderClients.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderClients: function() { return /* binding */ sliderClients; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


const sliderClients = function () {
  const init = function () {
    const swiperClients = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-clients", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Grid],
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 60
        }
      }
    });
  };
  return {
    init
  };
}();

/***/ }),

/***/ "./src/js/components/sliderNews.js":
/*!*****************************************!*\
  !*** ./src/js/components/sliderNews.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderNews: function() { return /* binding */ sliderNews; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


const sliderNews = function () {
  const init = function () {
    const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-news", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      slidesPerView: 1,
      spaceBetween: 18,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      },
      breakpoints: {
        768: {
          slidesPerView: 2.5,
          spaceBetween: 36
        },
        1200: {
          slidesPerView: 2.5
        }
      }
    });
  };
  return {
    init
  };
}();

/***/ }),

/***/ "./src/js/components/sliderPhoto.js":
/*!******************************************!*\
  !*** ./src/js/components/sliderPhoto.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderPhoto: function() { return /* binding */ sliderPhoto; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


const sliderPhoto = function () {
  const init = function () {
    const swiperPhoto = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-photo", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      slidesPerView: 1.5,
      spaceBetween: 25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      },
      breakpoints: {
        768: {
          slidesPerView: 2.5,
          spaceBetween: 25
        }
      }
    });
  };
  return {
    init
  };
}();

/***/ }),

/***/ "./src/js/components/sliderProduct.js":
/*!********************************************!*\
  !*** ./src/js/components/sliderProduct.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderProduct: function() { return /* binding */ sliderProduct; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


const sliderProduct = function () {
  const init = function () {
    const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-product", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      },
      spaceBetween: 50
    });
  };
  return {
    init
  };
}();

/***/ }),

/***/ "./src/js/components/sliderServices.js":
/*!*********************************************!*\
  !*** ./src/js/components/sliderServices.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderServices: function() { return /* binding */ sliderServices; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


const sliderServices = function () {
  const init = function () {
    const swiperServices = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider-services", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      },
      breakpoints: {
        768: {
          slidesPerView: 1.5,
          spaceBetween: 25
        },
        1600: {
          slidesPerView: 2.5,
          spaceBetween: 25
        }
      }
    });
  };
  return {
    init
  };
}();

/***/ }),

/***/ "./src/js/components/splash.js":
/*!*************************************!*\
  !*** ./src/js/components/splash.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splash: function() { return /* binding */ splash; }
/* harmony export */ });
const splash = (() => {
  const init = () => {
    const splashElement = document.querySelector(".splash");
    if (!splashElement) {
      return;
    }
    if (window.location.pathname === "/" || window.location.pathname === "/en" || window.location.pathname === "/de") {
      const scribble = splashElement.querySelector(".scribble svg");
      if (!sessionStorage.getItem("splashShown")) {
        splashElement.classList.add("active");
        scribble.classList.toggle("animate__animated");
        setTimeout(() => {
          splashElement.classList.remove("active");
        }, 3000);
        sessionStorage.setItem("splashShown", "true");
      } else {
        splashElement.classList.remove("active");
      }
    }
  };
  return {
    init
  };
})();

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabs: function() { return /* binding */ tabs; }
/* harmony export */ });
const tabs = (() => {
  const init = () => {
    const tabContainers = document.querySelectorAll("[data-tabs]");
    if (!tabContainers.length) {
      return;
    }
    const dataTabsContent = document.querySelectorAll(`[data-tabs-content] > [data-tab-content]`);
    dataTabsContent.forEach(item => {
      if (!item.classList.contains("is-active")) {
        item.classList.add("visually-hidden");
      }
    });
    tabContainers.forEach(tabContainer => {
      const currentTab = tabContainer.getAttribute("data-tabs");
      tabContainer.addEventListener("click", event => {
        const target = event.target;
        if (!target.hasAttribute("data-tab")) {
          return;
        }
        const tabButton = target;
        const tabId = tabButton.getAttribute("data-tab");
        const matchingTabDataAll = document.querySelectorAll(`[data-tabs-content="${currentTab}"] > [data-tab-content]`);
        const matchingTabData = document.querySelector(`[data-tabs-content="${currentTab}"] > [data-tab-content="${tabId}"]`);
        const activeTabContent = document.querySelector(`[data-tabs-content="${currentTab}"] > [data-tab-content].is-active`);
        const activeTabButton = document.querySelector(`[data-tabs=${currentTab}] > button.is-active`);
        const tabButtonAll = document.querySelectorAll(`[data-tabs=${currentTab}] > button`);
        matchingTabDataAll.forEach(item => {
          item.classList.add("visually-hidden");
          item.classList.remove("is-active");
        });
        activeTabContent.classList.remove("is-active");
        activeTabButton.classList.remove("is-active");
        tabButtonAll.forEach(item => item.classList.remove("is-active"));
        matchingTabData.classList.add("is-active");
        matchingTabData.classList.remove("visually-hidden");
        tabButton.classList.add("is-active");
      });
    });
  };
  return {
    init
  };
})();

/***/ }),

/***/ "./src/js/components/toggle.js":
/*!*************************************!*\
  !*** ./src/js/components/toggle.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggle: function() { return /* binding */ toggle; }
/* harmony export */ });
const toggle = (() => {
  const init = () => {
    const collapseLinks = document.querySelectorAll("[data-collapse-target]");
    if (!collapseLinks.length) {
      return;
    }
    collapseLinks.forEach(link => {
      link.addEventListener("click", event => {
        const collapseTarget = event.target.dataset.collapseTarget;
        const collapseTargets = document.querySelectorAll(`[data-collapse-target="${collapseTarget}"]`);
        const target = document.querySelector(`[data-collapse-content="${collapseTarget}"]`);
        target.classList.toggle("active");
        collapseTargets.forEach(target => target.classList.toggle("active"));
      });
    });
  };
  return {
    init
  };
})();

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: function() { return /* binding */ debounce; },
/* harmony export */   isElementCompletelyInViewport: function() { return /* binding */ isElementCompletelyInViewport; },
/* harmony export */   isElementInViewport: function() { return /* binding */ isElementInViewport; },
/* harmony export */   throttle: function() { return /* binding */ throttle; }
/* harmony export */ });
function debounce(func, wait) {
  let timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}

// const onType = debounce(() => {
//   // send request
// }, 500);

// const searchField = document.querySelector("#searchField");

// searchField.addEventListener("keydown", onType);

function throttle(func, wait) {
  let waiting = false;
  return function () {
    if (waiting) {
      return;
    }
    waiting = true;
    setTimeout(() => {
      func.apply(this, arguments);
      waiting = false;
    }, wait);
  };
}

// Usage
// const onScroll = throttle(() => {}, 100);

// document.addEventListener("scroll", onScroll);

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}
function isElementCompletelyInViewport(element) {
  let coordinates = element.getBoundingClientRect();
  if (coordinates.right > window.innerWidth || coordinates.bottom > window.innerHeight) {
    return false;
  }
  if (coordinates.top < 0 || coordinates.left < 0) {
    return false;
  }
  return true;
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.js */ "./src/js/vendor.js");
/* harmony import */ var _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-menu.js */ "./src/js/components/mobile-menu.js");
/* harmony import */ var _components_sliderNews_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sliderNews.js */ "./src/js/components/sliderNews.js");
/* harmony import */ var _components_sliderPhoto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sliderPhoto.js */ "./src/js/components/sliderPhoto.js");
/* harmony import */ var _components_sliderServices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sliderServices.js */ "./src/js/components/sliderServices.js");
/* harmony import */ var _components_sliderProduct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sliderProduct.js */ "./src/js/components/sliderProduct.js");
/* harmony import */ var _components_sliderClients_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sliderClients.js */ "./src/js/components/sliderClients.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");
/* harmony import */ var _components_toggle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toggle.js */ "./src/js/components/toggle.js");
/* harmony import */ var _components_scrollspy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/scrollspy.js */ "./src/js/components/scrollspy.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var _components_splash_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/splash.js */ "./src/js/components/splash.js");
/* harmony import */ var _components_relocateContact_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/relocateContact.js */ "./src/js/components/relocateContact.js");













window.addEventListener("load", () => {
  _components_splash_js__WEBPACK_IMPORTED_MODULE_11__.splash.init();
  _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__.mobileMenu.init();
  _components_sliderNews_js__WEBPACK_IMPORTED_MODULE_2__.sliderNews.init();
  _components_sliderPhoto_js__WEBPACK_IMPORTED_MODULE_3__.sliderPhoto.init();
  _components_sliderServices_js__WEBPACK_IMPORTED_MODULE_4__.sliderServices.init();
  _components_sliderProduct_js__WEBPACK_IMPORTED_MODULE_5__.sliderProduct.init();
  _components_sliderClients_js__WEBPACK_IMPORTED_MODULE_6__.sliderClients.init();
  _components_tabs_js__WEBPACK_IMPORTED_MODULE_7__.tabs.init();
  _components_toggle_js__WEBPACK_IMPORTED_MODULE_8__.toggle.init();
  _components_scrollspy_js__WEBPACK_IMPORTED_MODULE_9__.scrollspy.init();
  _components_relocateContact_js__WEBPACK_IMPORTED_MODULE_12__.relocateContact.init();
  const rellax = new Rellax(".rellax");
  const stopElement = document.querySelector(".sticky-stop");
  const stickyElementWrapper = document.querySelector(".page-header__aside");
  const stickyElement = document.querySelector(".sticky");
  if (stopElement && stickyElement && stickyElementWrapper) {
    const stickyElementWrapperPaddingTop = parseFloat(window.getComputedStyle(stickyElementWrapper).paddingTop);
    const controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_10__.Controller();
    const scene = new scrollmagic__WEBPACK_IMPORTED_MODULE_10__.Scene({
      triggerElement: stickyElement,
      triggerHook: 0,
      offset: -70,
      duration: getDuration
    }).addTo(controller);
    if (window.matchMedia("(min-width: 1200px)").matches) {
      scene.setPin(stickyElement, {
        pushFollowers: false
      });
    }
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        scene.setPin(stickyElement, {
          pushFollowers: false
        });
      } else {
        scene.removePin(stickyElement, true);
      }
    });
    function getDuration() {
      return stopElement.offsetHeight - stickyElementWrapperPaddingTop;
    }
  }
  function initDropdown() {
    $(".js-dropdown").on(window.matchMedia("(min-width: 1200px)").matches ? "mouseenter" : "click", function (e) {
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
    });
  }
  initDropdown();
  document.querySelector("body").classList.add("page-loaded");
}, false);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_rellax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/rellax.js */ "./src/js/vendor/rellax.js");


/***/ }),

/***/ "./src/js/vendor/rellax.js":
/*!*********************************!*\
  !*** ./src/js/vendor/rellax.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Rellax = factory();
  }
})(typeof window !== "undefined" ? window : global, function () {
  var Rellax = function (el, options) {
    "use strict";

    var self = Object.create(Rellax.prototype);
    var posY = 0;
    var screenY = 0;
    var posX = 0;
    var screenX = 0;
    var blocks = [];
    var pause = true;

    // check what requestAnimationFrame to use, and if
    // it's not supported, use the onscroll event
    var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
      return setTimeout(callback, 1000 / 60);
    };

    // store the id for later use
    var loopId = null;

    // Test via a getter in the options object to see if the passive property is accessed
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        }
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
    } catch (e) {}

    // check what cancelAnimation method to use
    var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;

    // check which transform property to use
    var transformProp = window.transformProp || function () {
      var testEl = document.createElement("div");
      if (testEl.style.transform === null) {
        var vendors = ["Webkit", "Moz", "ms"];
        for (var vendor in vendors) {
          if (testEl.style[vendors[vendor] + "Transform"] !== undefined) {
            return vendors[vendor] + "Transform";
          }
        }
      }
      return "transform";
    }();

    // Default Settings
    self.options = {
      speed: -2,
      verticalSpeed: null,
      horizontalSpeed: null,
      breakpoints: [576, 768, 1201],
      center: false,
      wrapper: null,
      relativeToWrapper: false,
      round: true,
      vertical: true,
      horizontal: false,
      verticalScrollAxis: "y",
      horizontalScrollAxis: "x",
      callback: function () {}
    };

    // User defined options (might have more in the future)
    if (options) {
      Object.keys(options).forEach(function (key) {
        self.options[key] = options[key];
      });
    }
    function validateCustomBreakpoints() {
      if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
        var isAscending = true;
        var isNumerical = true;
        var lastVal;
        self.options.breakpoints.forEach(function (i) {
          if (typeof i !== "number") isNumerical = false;
          if (lastVal !== null) {
            if (i < lastVal) isAscending = false;
          }
          lastVal = i;
        });
        if (isAscending && isNumerical) return;
      }
      // revert defaults if set incorrectly
      self.options.breakpoints = [576, 768, 1201];
      console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
    }
    if (options && options.breakpoints) {
      validateCustomBreakpoints();
    }

    // By default, rellax class
    if (!el) {
      el = ".rellax";
    }

    // check if el is a className or a node
    var elements = typeof el === "string" ? document.querySelectorAll(el) : [el];

    // Now query selector
    if (elements.length > 0) {
      self.elems = elements;
    }

    // The elements don't exist
    else {
      console.warn("Rellax: The elements you're trying to select don't exist.");
      return;
    }

    // Has a wrapper and it exists
    if (self.options.wrapper) {
      if (!self.options.wrapper.nodeType) {
        var wrapper = document.querySelector(self.options.wrapper);
        if (wrapper) {
          self.options.wrapper = wrapper;
        } else {
          console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
          return;
        }
      }
    }

    // set a placeholder for the current breakpoint
    var currentBreakpoint;

    // helper to determine current breakpoint
    var getCurrentBreakpoint = function (w) {
      var bp = self.options.breakpoints;
      if (w < bp[0]) return "xs";
      if (w >= bp[0] && w < bp[1]) return "sm";
      if (w >= bp[1] && w < bp[2]) return "md";
      return "lg";
    };

    // Get and cache initial position of all elements
    var cacheBlocks = function () {
      for (var i = 0; i < self.elems.length; i++) {
        var block = createBlock(self.elems[i]);
        blocks.push(block);
      }
    };

    // Let's kick this script off
    // Build array for cached element values
    var init = function () {
      for (var i = 0; i < blocks.length; i++) {
        self.elems[i].style.cssText = blocks[i].style;
      }
      blocks = [];
      screenY = window.innerHeight;
      screenX = window.innerWidth;
      currentBreakpoint = getCurrentBreakpoint(screenX);
      setPosition();
      cacheBlocks();
      animate();

      // If paused, unpause and set listener for window resizing events
      if (pause) {
        window.addEventListener("resize", init);
        pause = false;
        // Start the loop
        update();
      }
    };

    // We want to cache the parallax blocks'
    // values: base, top, height, speed
    // el: is dom object, return: el cache values
    var createBlock = function (el) {
      var dataPercentage = el.getAttribute("data-rellax-percentage");
      var dataSpeed = el.getAttribute("data-rellax-speed");
      var dataXsSpeed = el.getAttribute("data-rellax-xs-speed");
      var dataMobileSpeed = el.getAttribute("data-rellax-mobile-speed");
      var dataTabletSpeed = el.getAttribute("data-rellax-tablet-speed");
      var dataDesktopSpeed = el.getAttribute("data-rellax-desktop-speed");
      var dataVerticalSpeed = el.getAttribute("data-rellax-vertical-speed");
      var dataHorizontalSpeed = el.getAttribute("data-rellax-horizontal-speed");
      var dataVerticalScrollAxis = el.getAttribute("data-rellax-vertical-scroll-axis");
      var dataHorizontalScrollAxis = el.getAttribute("data-rellax-horizontal-scroll-axis");
      var dataZindex = el.getAttribute("data-rellax-zindex") || 0;
      var dataMin = el.getAttribute("data-rellax-min");
      var dataMax = el.getAttribute("data-rellax-max");
      var dataMinX = el.getAttribute("data-rellax-min-x");
      var dataMaxX = el.getAttribute("data-rellax-max-x");
      var dataMinY = el.getAttribute("data-rellax-min-y");
      var dataMaxY = el.getAttribute("data-rellax-max-y");
      var mapBreakpoints;
      var breakpoints = true;
      if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
        breakpoints = false;
      } else {
        mapBreakpoints = {
          xs: dataXsSpeed,
          sm: dataMobileSpeed,
          md: dataTabletSpeed,
          lg: dataDesktopSpeed
        };
      }

      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
      // ensures elements are positioned based on HTML layout.
      //
      // If the element has the percentage attribute, the posY and posX needs to be
      // the current scroll position's value, so that the elements are still positioned based on HTML layout
      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
      if (self.options.relativeToWrapper) {
        var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
      }
      var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;
      var posX = self.options.horizontal ? dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
      var blockTop = posY + el.getBoundingClientRect().top;
      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
      var blockLeft = posX + el.getBoundingClientRect().left;
      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

      // apparently parallax equation everyone uses
      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
      if (self.options.center) {
        percentageX = 0.5;
        percentageY = 0.5;
      }

      // Optional individual block speed as data attr, otherwise global speed
      var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self.options.speed;
      var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
      var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;

      // Optional individual block movement axis direction as data attr, otherwise global movement direction
      var verticalScrollAxis = dataVerticalScrollAxis ? dataVerticalScrollAxis : self.options.verticalScrollAxis;
      var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;
      var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);

      // ~~Store non-translate3d transforms~~
      // Store inline styles and extract transforms
      var style = el.style.cssText;
      var transform = "";

      // Check if there's an inline styled transform
      var searchResult = /transform\s*:/i.exec(style);
      if (searchResult) {
        // Get the index of the transform
        var index = searchResult.index;

        // Trim the style to the transform point and get the following semi-colon index
        var trimmedStyle = style.slice(index);
        var delimiter = trimmedStyle.indexOf(";");

        // Remove "transform" string and save the attribute
        if (delimiter) {
          transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "");
        } else {
          transform = " " + trimmedStyle.slice(11).replace(/\s/g, "");
        }
      }
      return {
        baseX: bases.x,
        baseY: bases.y,
        top: blockTop,
        left: blockLeft,
        height: blockHeight,
        width: blockWidth,
        speed: speed,
        verticalSpeed: verticalSpeed,
        horizontalSpeed: horizontalSpeed,
        verticalScrollAxis: verticalScrollAxis,
        horizontalScrollAxis: horizontalScrollAxis,
        style: style,
        transform: transform,
        zindex: dataZindex,
        min: dataMin,
        max: dataMax,
        minX: dataMinX,
        maxX: dataMaxX,
        minY: dataMinY,
        maxY: dataMaxY
      };
    };

    // set scroll position (posY, posX)
    // side effect method is not ideal, but okay for now
    // returns true if the scroll changed, false if nothing happened
    var setPosition = function () {
      var oldY = posY;
      var oldX = posX;
      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
      // If option relativeToWrapper is true, use relative wrapper value instead.
      if (self.options.relativeToWrapper) {
        var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
        posY = scrollPosY - self.options.wrapper.offsetTop;
      }
      if (oldY != posY && self.options.vertical) {
        // scroll changed, return true
        return true;
      }
      if (oldX != posX && self.options.horizontal) {
        // scroll changed, return true
        return true;
      }

      // scroll did not change
      return false;
    };

    // Ahh a pure function, gets new transform value
    // based on scrollPosition and speed
    // Allow for decimal pixel values
    var updatePosition = function (percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
      var result = {};
      var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
      var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));
      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
      return result;
    };

    // Remove event listeners and loop again
    var deferredUpdate = function () {
      window.removeEventListener("resize", deferredUpdate);
      window.removeEventListener("orientationchange", deferredUpdate);
      (self.options.wrapper ? self.options.wrapper : window).removeEventListener("scroll", deferredUpdate);
      (self.options.wrapper ? self.options.wrapper : document).removeEventListener("touchmove", deferredUpdate);

      // loop again
      loopId = loop(update);
    };

    // Loop
    var update = function () {
      if (setPosition() && pause === false) {
        animate();

        // loop again
        loopId = loop(update);
      } else {
        loopId = null;

        // Don't animate until we get a position updating event
        window.addEventListener("resize", deferredUpdate);
        window.addEventListener("orientationchange", deferredUpdate);
        (self.options.wrapper ? self.options.wrapper : window).addEventListener("scroll", deferredUpdate, supportsPassive ? {
          passive: true
        } : false);
        (self.options.wrapper ? self.options.wrapper : document).addEventListener("touchmove", deferredUpdate, supportsPassive ? {
          passive: true
        } : false);
      }
    };

    // Transform3d on parallax element
    var animate = function () {
      var positions;
      for (var i = 0; i < self.elems.length; i++) {
        // Determine relevant movement directions
        var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
        var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
        var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
        var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
        var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
        var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;
        var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);
        var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX);

        // Subtracting initialize value, so element stays in same spot as HTML
        positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
        var positionY = positions.y - blocks[i].baseY;
        var positionX = positions.x - blocks[i].baseX;

        // The next two "if" blocks go like this:
        // Check if a limit is defined (first "min", then "max");
        // Check if we need to change the Y or the X
        // (Currently working only if just one of the axes is enabled)
        // Then, check if the new position is inside the allowed limit
        // If so, use new position. If not, set position to limit.

        // Check if a min limit is defined
        if (blocks[i].min !== null) {
          if (self.options.vertical && !self.options.horizontal) {
            positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
          }
          if (self.options.horizontal && !self.options.vertical) {
            positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
          }
        }

        // Check if directional min limits are defined
        if (blocks[i].minY != null) {
          positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
        }
        if (blocks[i].minX != null) {
          positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
        }

        // Check if a max limit is defined
        if (blocks[i].max !== null) {
          if (self.options.vertical && !self.options.horizontal) {
            positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
          }
          if (self.options.horizontal && !self.options.vertical) {
            positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
          }
        }

        // Check if directional max limits are defined
        if (blocks[i].maxY != null) {
          positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
        }
        if (blocks[i].maxX != null) {
          positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
        }
        var zindex = blocks[i].zindex;

        // Move that element
        // (Set the new translation and append initial inline transforms.)
        var translate = "translate3d(" + (self.options.horizontal ? positionX : "0") + "px," + (self.options.vertical ? positionY : "0") + "px," + zindex + "px) " + blocks[i].transform;
        self.elems[i].style[transformProp] = translate;
      }
      self.options.callback(positions);
    };
    self.destroy = function () {
      for (var i = 0; i < self.elems.length; i++) {
        self.elems[i].style.cssText = blocks[i].style;
      }

      // Remove resize event listener if not pause, and pause
      if (!pause) {
        window.removeEventListener("resize", init);
        pause = true;
      }

      // Clear the animation loop to prevent possible memory leak
      clearLoop(loopId);
      loopId = null;
    };

    // Init
    init();

    // Allow to recalculate the initial values whenever we want
    self.refresh = init;
    return self;
  };
  return Rellax;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkninelines_template"] = self["webpackChunkninelines_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map