/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mobileMenu: function() { return /* binding */ mobileMenu; }\n/* harmony export */ });\nconst mobileMenu = (() => {\n  const init = () => {\n    const mobileMenuToggle = document.querySelector(\".js-toggle-menu\");\n    if (!mobileMenuToggle) {\n      return;\n    }\n    const menu = document.querySelector(\".menu\");\n    const body = document.querySelector(\"body\");\n    mobileMenuToggle.addEventListener(\"click\", function () {\n      if (!mobileMenuToggle.classList.contains(\"active\")) {\n        mobileMenuToggle.classList.add(\"active\");\n        body.classList.toggle(\"menu-active\");\n        menu.classList.add(\"menu--open\");\n        menu.classList.remove(\"menu--closed\");\n      } else {\n        mobileMenuToggle.classList.remove(\"active\");\n        $(\".menu__link\").css(\"opacity\", \"1\");\n        $(\".menu__link.dropdown\").removeClass(\"active\");\n        $(\".js-dropdown\").removeClass(\"is-open\");\n        $(\".js-dropdown\").next().removeClass(\"show\");\n        $(\".js-dropdown\").next().slideUp(0);\n        body.classList.toggle(\"menu-active\");\n        menu.classList.add(\"menu--closed\");\n        menu.classList.remove(\"menu--open\");\n      }\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/mobile-menu.js?");

/***/ }),

/***/ "./src/js/components/relocateContact.js":
/*!**********************************************!*\
  !*** ./src/js/components/relocateContact.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   relocateContact: function() { return /* binding */ relocateContact; }\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/helpers.js\");\n\nconst relocateContact = (() => {\n  const init = () => {\n    const cardContact = document.querySelector(\".card--contact\");\n    const contactForm = document.querySelector(\".form--contact\");\n    const pageHeaderAside = document.querySelector(\".page-header__aside--contact\");\n    if (!cardContact || !contactForm || !pageHeaderAside) {\n      return;\n    }\n    const relocateCardContact = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {\n      if (window.matchMedia(\"(max-width: 1024px)\").matches) {\n        contactForm.after(cardContact);\n      } else {\n        if (!cardContact.contains(pageHeaderAside)) {\n          pageHeaderAside.prepend(cardContact);\n        }\n      }\n    }, 200);\n    relocateCardContact();\n    window.addEventListener(\"resize\", () => {\n      relocateCardContact();\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/relocateContact.js?");

/***/ }),

/***/ "./src/js/components/relocateContactNewsDetail.js":
/*!********************************************************!*\
  !*** ./src/js/components/relocateContactNewsDetail.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   relocateContactNewsDetail: function() { return /* binding */ relocateContactNewsDetail; }\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _stickyCardNews_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stickyCardNews.js */ \"./src/js/components/stickyCardNews.js\");\n\n\nconst relocateContactNewsDetail = (() => {\n  const init = () => {\n    const cardContact = document.querySelector(\".card-contact\");\n    const articleSlider = document.querySelector(\".article__slider\");\n    const pageHeaderAside = document.querySelector(\".page-header__aside\");\n    if (!cardContact || !articleSlider || !pageHeaderAside) {\n      return;\n    }\n    const relocateCardContact = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {\n      if (window.matchMedia(\"(max-width: 1199px)\").matches) {\n        articleSlider.after(cardContact);\n      } else {\n        if (!cardContact.contains(pageHeaderAside)) {\n          pageHeaderAside.prepend(cardContact);\n          if (pageHeaderAside.querySelector(\".card-contact\")) {\n            _stickyCardNews_js__WEBPACK_IMPORTED_MODULE_1__.stickyCardNews.init();\n          }\n        }\n      }\n    }, 300);\n    relocateCardContact();\n    window.addEventListener(\"resize\", relocateCardContact);\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/relocateContactNewsDetail.js?");

/***/ }),

/***/ "./src/js/components/scrollspy.js":
/*!****************************************!*\
  !*** ./src/js/components/scrollspy.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollspy: function() { return /* binding */ scrollspy; }\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/helpers.js\");\n\nconst applyScrollspyClasses = elements => {\n  elements.forEach(element => {\n    if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isElementCompletelyInViewport)(element)) {\n      if (element.classList.contains(\"no-animate\")) {\n        return;\n      }\n      const animationClass = element.dataset.scrollspy;\n      element.classList.add(\"animate__animated\");\n      element.classList.add(animationClass);\n    }\n  });\n};\nconst scrollspy = function () {\n  const init = function () {\n    const scrollspyElements = document.querySelectorAll(\"[data-scrollspy]\");\n    if (!scrollspyElements.length) {\n      return;\n    }\n    applyScrollspyClasses(scrollspyElements);\n    document.addEventListener(\"scroll\", (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.throttle)(() => {\n      applyScrollspyClasses(scrollspyElements);\n    }, 100));\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/scrollspy.js?");

/***/ }),

/***/ "./src/js/components/sliderClients.js":
/*!********************************************!*\
  !*** ./src/js/components/sliderClients.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderClients: function() { return /* binding */ sliderClients; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nconst sliderClients = function () {\n  const init = function () {\n    const swiperClients = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".slider-clients\", {\n      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Grid],\n      loop: true,\n      autoplay: {\n        delay: 3000\n      },\n      breakpoints: {\n        320: {\n          grid: {\n            rows: 2\n          },\n          slidesPerView: 2,\n          spaceBetween: 36\n        },\n        768: {\n          grid: {\n            rows: 2\n          },\n          slidesPerView: 3\n        },\n        1024: {\n          grid: {\n            rows: 1\n          },\n          slidesPerView: 4\n        },\n        1200: {\n          slidesPerView: 5,\n          spaceBetween: 60\n        }\n      }\n    });\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/sliderClients.js?");

/***/ }),

/***/ "./src/js/components/sliderNews.js":
/*!*****************************************!*\
  !*** ./src/js/components/sliderNews.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderNews: function() { return /* binding */ sliderNews; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nconst sliderNews = function () {\n  const init = function () {\n    const swiperNews = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".slider-news\", {\n      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],\n      slidesPerView: 1,\n      spaceBetween: 18,\n      navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\"\n      },\n      pagination: {\n        el: \".swiper-pagination\",\n        clickable: \"true\",\n        type: \"bullets\",\n        bulletElement: \"button\"\n      },\n      breakpoints: {\n        768: {\n          slidesPerView: 2.5,\n          spaceBetween: 36\n        },\n        1200: {\n          slidesPerView: 2.5\n        }\n      }\n    });\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/sliderNews.js?");

/***/ }),

/***/ "./src/js/components/sliderPhoto.js":
/*!******************************************!*\
  !*** ./src/js/components/sliderPhoto.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderPhoto: function() { return /* binding */ sliderPhoto; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nconst sliderPhoto = function () {\n  const init = function () {\n    const swiperPhoto = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".slider-photo\", {\n      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],\n      slidesPerView: 1.5,\n      spaceBetween: 25,\n      navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\"\n      },\n      pagination: {\n        el: \".swiper-pagination\",\n        clickable: \"true\",\n        type: \"bullets\",\n        bulletElement: \"button\"\n      },\n      breakpoints: {\n        768: {\n          slidesPerView: 2.5,\n          spaceBetween: 25\n        }\n      }\n    });\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/sliderPhoto.js?");

/***/ }),

/***/ "./src/js/components/sliderProduct.js":
/*!********************************************!*\
  !*** ./src/js/components/sliderProduct.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderProduct: function() { return /* binding */ sliderProduct; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nconst sliderProduct = function () {\n  const init = function () {\n    const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".slider-product\", {\n      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],\n      navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\"\n      },\n      pagination: {\n        el: \".swiper-pagination\",\n        clickable: \"true\",\n        type: \"bullets\",\n        bulletElement: \"button\"\n      },\n      spaceBetween: 50\n    });\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/sliderProduct.js?");

/***/ }),

/***/ "./src/js/components/sliderServices.js":
/*!*********************************************!*\
  !*** ./src/js/components/sliderServices.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderServices: function() { return /* binding */ sliderServices; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nconst sliderServices = function () {\n  const init = function () {\n    const swiperServices = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".slider-services\", {\n      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],\n      slidesPerView: 1,\n      spaceBetween: 15,\n      navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\"\n      },\n      pagination: {\n        el: \".swiper-pagination\",\n        clickable: \"true\",\n        type: \"bullets\",\n        bulletElement: \"button\"\n      },\n      breakpoints: {\n        768: {\n          slidesPerView: 1.5,\n          spaceBetween: 25\n        },\n        1600: {\n          slidesPerView: 2.5,\n          spaceBetween: 25\n        },\n        1921: {\n          slidesPerView: 3,\n          spaceBetween: 25\n        }\n      }\n    });\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/sliderServices.js?");

/***/ }),

/***/ "./src/js/components/splash.js":
/*!*************************************!*\
  !*** ./src/js/components/splash.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   splash: function() { return /* binding */ splash; }\n/* harmony export */ });\nconst splash = (() => {\n  const init = () => {\n    const splashElement = document.querySelector(\".splash\");\n    if (!splashElement) {\n      return;\n    }\n    if (window.location.pathname === \"/\" || window.location.pathname === \"/en\" || window.location.pathname === \"/de\") {\n      const scribble = splashElement.querySelector(\".scribble svg\");\n      if (!sessionStorage.getItem(\"splashShown\")) {\n        splashElement.classList.add(\"active\");\n        scribble.classList.toggle(\"animate__animated\");\n        setTimeout(() => {\n          splashElement.classList.remove(\"active\");\n        }, 3000);\n        sessionStorage.setItem(\"splashShown\", \"true\");\n      } else {\n        splashElement.classList.remove(\"active\");\n      }\n    }\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/splash.js?");

/***/ }),

/***/ "./src/js/components/stickyCard.js":
/*!*****************************************!*\
  !*** ./src/js/components/stickyCard.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stickyCard: function() { return /* binding */ stickyCard; }\n/* harmony export */ });\n/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ \"./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js\");\nvar _this = undefined;\n\nconst stickyCard = (() => {\n  let scene = null;\n  let controller = null;\n  const init = () => {\n    const stopElement = document.querySelector(\".sticky-stop\");\n    const stickyElementWrapper = document.querySelector(\".page-header__aside\");\n    const stickyElement = document.querySelector(\".sticky\");\n    if (!stopElement || !stickyElementWrapper || !stickyElement) {\n      console.error(\"Required elements not found\");\n      return;\n    }\n    if (controller) {\n      controller.destroy(true);\n    }\n    controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__.Controller();\n    setupScene(stickyElement, stickyElementWrapper, stopElement);\n    const handleResize = () => {\n      if (window.matchMedia(\"(min-width: 1200px)\").matches) {\n        scene.setPin(stickyElement, {\n          pushFollowers: false\n        });\n      } else {\n        scene.removePin(stickyElement, true);\n      }\n    };\n    const debouncedResize = debounce(handleResize, 100);\n    window.addEventListener(\"resize\", debouncedResize);\n    return () => {\n      cleanup(debouncedResize);\n    };\n  };\n  const setupScene = (stickyElement, stickyElementWrapper, stopElement) => {\n    if (scene) {\n      scene.destroy(true);\n    }\n    const stickyElementWrapperPaddingTop = parseFloat(window.getComputedStyle(stickyElementWrapper).paddingTop);\n    scene = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__.Scene({\n      triggerElement: stickyElement,\n      triggerHook: 0,\n      offset: -stickyElementWrapperPaddingTop,\n      duration: () => stopElement.offsetHeight\n    }).addTo(controller);\n    if (window.matchMedia(\"(min-width: 1200px)\").matches) {\n      scene.setPin(stickyElement, {\n        pushFollowers: false\n      });\n    }\n  };\n  const cleanup = debouncedResize => {\n    if (scene) {\n      scene.destroy(true);\n      scene = null;\n    }\n    if (controller) {\n      controller.destroy(true);\n      controller = null;\n    }\n    window.removeEventListener(\"resize\", debouncedResize);\n  };\n  const debounce = (func, wait) => {\n    let timeout;\n    return function () {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      clearTimeout(timeout);\n      timeout = setTimeout(() => func.apply(_this, args), wait);\n    };\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/stickyCard.js?");

/***/ }),

/***/ "./src/js/components/stickyCardNews.js":
/*!*********************************************!*\
  !*** ./src/js/components/stickyCardNews.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stickyCardNews: function() { return /* binding */ stickyCardNews; }\n/* harmony export */ });\n/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ \"./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js\");\n\nconst stickyCardNews = (() => {\n  let controller = null;\n  let scene = null;\n  const init = () => {\n    const stopElement = document.querySelector(\".sticky-stop\");\n    const stickyElementWrapper = document.querySelector(\".page-header__aside\");\n    const stickyElement = document.querySelector(\".sticky\");\n    if (!stopElement || !stickyElementWrapper || !stickyElement) {\n      return;\n    }\n    controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__.Controller();\n    setupScene(stickyElement, stickyElementWrapper, stopElement);\n    updatePinState(stickyElement);\n    window.addEventListener(\"resize\", () => onWindowResize(stickyElement));\n  };\n  const setupScene = (stickyElement, stickyElementWrapper, stopElement) => {\n    const stickyElementWrapperPaddingTop = parseFloat(window.getComputedStyle(stickyElementWrapper).paddingTop);\n    scene = new scrollmagic__WEBPACK_IMPORTED_MODULE_0__.Scene({\n      triggerElement: stickyElement,\n      triggerHook: 0,\n      offset: -stickyElementWrapperPaddingTop,\n      duration: getDuration(stopElement)\n    }).addTo(controller);\n  };\n  const getDuration = stopElement => {\n    return stopElement.offsetHeight;\n  };\n  const updatePinState = stickyElement => {\n    if (!scene) return;\n    if (window.matchMedia(\"(min-width: 1200px)\").matches) {\n      scene.setPin(stickyElement, {\n        pushFollowers: false\n      });\n    } else {\n      scene.removePin(stickyElement, true);\n    }\n  };\n  const onWindowResize = stickyElement => {\n    updatePinState(stickyElement);\n  };\n  const destroy = () => {\n    if (controller) {\n      controller.destroy(true);\n      controller = null;\n    }\n    if (scene) {\n      scene.destroy(true);\n      scene = null;\n    }\n    window.removeEventListener(\"resize\", onWindowResize);\n  };\n  return {\n    init,\n    destroy\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/stickyCardNews.js?");

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabs: function() { return /* binding */ tabs; }\n/* harmony export */ });\nconst tabs = (() => {\n  const init = () => {\n    const tabContainers = document.querySelectorAll(\"[data-tabs]\");\n    if (!tabContainers.length) {\n      return;\n    }\n    const dataTabsContent = document.querySelectorAll(`[data-tabs-content] > [data-tab-content]`);\n    dataTabsContent.forEach(item => {\n      if (!item.classList.contains(\"is-active\")) {\n        item.classList.add(\"visually-hidden\");\n      }\n    });\n    tabContainers.forEach(tabContainer => {\n      const currentTab = tabContainer.getAttribute(\"data-tabs\");\n      tabContainer.addEventListener(\"click\", event => {\n        const target = event.target;\n        if (!target.hasAttribute(\"data-tab\")) {\n          return;\n        }\n        const tabButton = target;\n        const tabId = tabButton.getAttribute(\"data-tab\");\n        const matchingTabDataAll = document.querySelectorAll(`[data-tabs-content=\"${currentTab}\"] > [data-tab-content]`);\n        const matchingTabData = document.querySelector(`[data-tabs-content=\"${currentTab}\"] > [data-tab-content=\"${tabId}\"]`);\n        const activeTabContent = document.querySelector(`[data-tabs-content=\"${currentTab}\"] > [data-tab-content].is-active`);\n        const activeTabButton = document.querySelector(`[data-tabs=${currentTab}] > button.is-active`);\n        const tabButtonAll = document.querySelectorAll(`[data-tabs=${currentTab}] > button`);\n        matchingTabDataAll.forEach(item => {\n          item.classList.add(\"visually-hidden\");\n          item.classList.remove(\"is-active\");\n        });\n        activeTabContent.classList.remove(\"is-active\");\n        activeTabButton.classList.remove(\"is-active\");\n        tabButtonAll.forEach(item => item.classList.remove(\"is-active\"));\n        matchingTabData.classList.add(\"is-active\");\n        matchingTabData.classList.remove(\"visually-hidden\");\n        tabButton.classList.add(\"is-active\");\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/tabs.js?");

/***/ }),

/***/ "./src/js/components/toggle.js":
/*!*************************************!*\
  !*** ./src/js/components/toggle.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggle: function() { return /* binding */ toggle; }\n/* harmony export */ });\nconst toggle = (() => {\n  const init = () => {\n    const collapseLinks = document.querySelectorAll(\"[data-collapse-target]\");\n    if (!collapseLinks.length) {\n      return;\n    }\n    collapseLinks.forEach(link => {\n      link.addEventListener(\"click\", event => {\n        const collapseTarget = event.target.dataset.collapseTarget;\n        const collapseTargets = document.querySelectorAll(`[data-collapse-target=\"${collapseTarget}\"]`);\n        const target = document.querySelector(`[data-collapse-content=\"${collapseTarget}\"]`);\n        target.classList.toggle(\"active\");\n        collapseTargets.forEach(target => target.classList.toggle(\"active\"));\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/toggle.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: function() { return /* binding */ debounce; },\n/* harmony export */   isElementCompletelyInViewport: function() { return /* binding */ isElementCompletelyInViewport; },\n/* harmony export */   isElementInViewport: function() { return /* binding */ isElementInViewport; },\n/* harmony export */   throttle: function() { return /* binding */ throttle; }\n/* harmony export */ });\nfunction debounce(func, wait) {\n  let timeout;\n  return function () {\n    if (timeout) {\n      clearTimeout(timeout);\n    }\n    timeout = setTimeout(() => {\n      func.apply(this, arguments);\n    }, wait);\n  };\n}\n\n// const onType = debounce(() => {\n//   // send request\n// }, 500);\n\n// const searchField = document.querySelector(\"#searchField\");\n\n// searchField.addEventListener(\"keydown\", onType);\n\nfunction throttle(func, wait) {\n  let waiting = false;\n  return function () {\n    if (waiting) {\n      return;\n    }\n    waiting = true;\n    setTimeout(() => {\n      func.apply(this, arguments);\n      waiting = false;\n    }, wait);\n  };\n}\n\n// Usage\n// const onScroll = throttle(() => {}, 100);\n\n// document.addEventListener(\"scroll\", onScroll);\n\nfunction isElementInViewport(element) {\n  const rect = element.getBoundingClientRect();\n  const windowHeight = window.innerHeight || document.documentElement.clientHeight;\n  const windowWidth = window.innerWidth || document.documentElement.clientWidth;\n  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;\n  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;\n  return vertInView && horInView;\n}\nfunction isElementCompletelyInViewport(element) {\n  let coordinates = element.getBoundingClientRect();\n  if (coordinates.right > window.innerWidth || coordinates.bottom > window.innerHeight) {\n    return false;\n  }\n  if (coordinates.top < 0 || coordinates.left < 0) {\n    return false;\n  }\n  return true;\n}\n\n//# sourceURL=webpack://ninelines-template/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.js */ \"./src/js/vendor.js\");\n/* harmony import */ var _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobile-menu.js */ \"./src/js/components/mobile-menu.js\");\n/* harmony import */ var _components_sliderNews_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sliderNews.js */ \"./src/js/components/sliderNews.js\");\n/* harmony import */ var _components_sliderPhoto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sliderPhoto.js */ \"./src/js/components/sliderPhoto.js\");\n/* harmony import */ var _components_sliderServices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sliderServices.js */ \"./src/js/components/sliderServices.js\");\n/* harmony import */ var _components_sliderProduct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sliderProduct.js */ \"./src/js/components/sliderProduct.js\");\n/* harmony import */ var _components_sliderClients_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sliderClients.js */ \"./src/js/components/sliderClients.js\");\n/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tabs.js */ \"./src/js/components/tabs.js\");\n/* harmony import */ var _components_toggle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toggle.js */ \"./src/js/components/toggle.js\");\n/* harmony import */ var _components_scrollspy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/scrollspy.js */ \"./src/js/components/scrollspy.js\");\n/* harmony import */ var _components_splash_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/splash.js */ \"./src/js/components/splash.js\");\n/* harmony import */ var _components_relocateContact_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/relocateContact.js */ \"./src/js/components/relocateContact.js\");\n/* harmony import */ var _components_relocateContactNewsDetail_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/relocateContactNewsDetail.js */ \"./src/js/components/relocateContactNewsDetail.js\");\n/* harmony import */ var _components_stickyCard_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/stickyCard.js */ \"./src/js/components/stickyCard.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"load\", () => {\n  _components_splash_js__WEBPACK_IMPORTED_MODULE_10__.splash.init();\n  _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__.mobileMenu.init();\n  _components_sliderNews_js__WEBPACK_IMPORTED_MODULE_2__.sliderNews.init();\n  _components_sliderPhoto_js__WEBPACK_IMPORTED_MODULE_3__.sliderPhoto.init();\n  _components_sliderServices_js__WEBPACK_IMPORTED_MODULE_4__.sliderServices.init();\n  _components_sliderProduct_js__WEBPACK_IMPORTED_MODULE_5__.sliderProduct.init();\n  _components_sliderClients_js__WEBPACK_IMPORTED_MODULE_6__.sliderClients.init();\n  _components_tabs_js__WEBPACK_IMPORTED_MODULE_7__.tabs.init();\n  _components_toggle_js__WEBPACK_IMPORTED_MODULE_8__.toggle.init();\n  _components_scrollspy_js__WEBPACK_IMPORTED_MODULE_9__.scrollspy.init();\n  _components_relocateContact_js__WEBPACK_IMPORTED_MODULE_11__.relocateContact.init();\n  _components_relocateContactNewsDetail_js__WEBPACK_IMPORTED_MODULE_12__.relocateContactNewsDetail.init();\n  if (document.querySelector(\".page-header--news\")) {\n    if (!document.querySelector(\".page-header--news\").classList.contains(\"page-header--news-item\")) _components_stickyCard_js__WEBPACK_IMPORTED_MODULE_13__.stickyCard.init();\n  }\n  const rellax = new Rellax(\".rellax\");\n  function initDropdown() {\n    $(\".js-dropdown\").on(window.matchMedia(\"(min-width: 1200px)\").matches ? \"mouseenter\" : \"click\", function (e) {\n      e.preventDefault();\n      let $this = $(this);\n      if ($this.next().hasClass(\"show\")) {\n        $this.removeClass(\"is-open\");\n        $this.next().removeClass(\"show\");\n        $this.next().fadeOut(500);\n        $(\".menu__link\").css(\"opacity\", \"1\");\n        $this.removeClass(\"active\");\n      } else {\n        $this.addClass(\"is-open\");\n        $this.next().toggleClass(\"show\");\n        $this.next().fadeIn(500);\n        $this.addClass(\"active\");\n        $(\".menu__link\").css(\"opacity\", \"0.5\");\n        $(\".menu__link\").css(\"border-bottom\", \"1px solid transparent\");\n        $this.next().find(\".menu__link\").css(\"opacity\", \"1\");\n      }\n    });\n  }\n  initDropdown();\n  document.querySelector(\"body\").classList.add(\"page-loaded\");\n}, false);\n\n//# sourceURL=webpack://ninelines-template/./src/js/main.js?");

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor_rellax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/rellax.js */ \"./src/js/vendor/rellax.js\");\n\n\n//# sourceURL=webpack://ninelines-template/./src/js/vendor.js?");

/***/ }),

/***/ "./src/js/vendor/rellax.js":
/*!*********************************!*\
  !*** ./src/js/vendor/rellax.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// ------------------------------------------\n// Rellax.js\n// Buttery smooth parallax library\n// Copyright (c) 2016 Moe Amaya (@moeamaya)\n// MIT license\n//\n// Thanks to Paraxify.js and Jaime Cabllero\n// for parallax concepts\n// ------------------------------------------\n\n(function (root, factory) {\n  if (typeof define === \"function\" && define.amd) {\n    // AMD. Register as an anonymous module.\n    define([], factory);\n  } else if (typeof module === \"object\" && module.exports) {\n    // Node. Does not work with strict CommonJS, but\n    // only CommonJS-like environments that support module.exports,\n    // like Node.\n    module.exports = factory();\n  } else {\n    // Browser globals (root is window)\n    root.Rellax = factory();\n  }\n})(typeof window !== \"undefined\" ? window : global, function () {\n  var Rellax = function (el, options) {\n    \"use strict\";\n\n    var self = Object.create(Rellax.prototype);\n    var posY = 0;\n    var screenY = 0;\n    var posX = 0;\n    var screenX = 0;\n    var blocks = [];\n    var pause = true;\n\n    // check what requestAnimationFrame to use, and if\n    // it's not supported, use the onscroll event\n    var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {\n      return setTimeout(callback, 1000 / 60);\n    };\n\n    // store the id for later use\n    var loopId = null;\n\n    // Test via a getter in the options object to see if the passive property is accessed\n    var supportsPassive = false;\n    try {\n      var opts = Object.defineProperty({}, \"passive\", {\n        get: function () {\n          supportsPassive = true;\n        }\n      });\n      window.addEventListener(\"testPassive\", null, opts);\n      window.removeEventListener(\"testPassive\", null, opts);\n    } catch (e) {}\n\n    // check what cancelAnimation method to use\n    var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;\n\n    // check which transform property to use\n    var transformProp = window.transformProp || function () {\n      var testEl = document.createElement(\"div\");\n      if (testEl.style.transform === null) {\n        var vendors = [\"Webkit\", \"Moz\", \"ms\"];\n        for (var vendor in vendors) {\n          if (testEl.style[vendors[vendor] + \"Transform\"] !== undefined) {\n            return vendors[vendor] + \"Transform\";\n          }\n        }\n      }\n      return \"transform\";\n    }();\n\n    // Default Settings\n    self.options = {\n      speed: -2,\n      verticalSpeed: null,\n      horizontalSpeed: null,\n      breakpoints: [576, 768, 1201],\n      center: false,\n      wrapper: null,\n      relativeToWrapper: false,\n      round: true,\n      vertical: true,\n      horizontal: false,\n      verticalScrollAxis: \"y\",\n      horizontalScrollAxis: \"x\",\n      callback: function () {}\n    };\n\n    // User defined options (might have more in the future)\n    if (options) {\n      Object.keys(options).forEach(function (key) {\n        self.options[key] = options[key];\n      });\n    }\n    function validateCustomBreakpoints() {\n      if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {\n        var isAscending = true;\n        var isNumerical = true;\n        var lastVal;\n        self.options.breakpoints.forEach(function (i) {\n          if (typeof i !== \"number\") isNumerical = false;\n          if (lastVal !== null) {\n            if (i < lastVal) isAscending = false;\n          }\n          lastVal = i;\n        });\n        if (isAscending && isNumerical) return;\n      }\n      // revert defaults if set incorrectly\n      self.options.breakpoints = [576, 768, 1201];\n      console.warn(\"Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted\");\n    }\n    if (options && options.breakpoints) {\n      validateCustomBreakpoints();\n    }\n\n    // By default, rellax class\n    if (!el) {\n      el = \".rellax\";\n    }\n\n    // check if el is a className or a node\n    var elements = typeof el === \"string\" ? document.querySelectorAll(el) : [el];\n\n    // Now query selector\n    if (elements.length > 0) {\n      self.elems = elements;\n    }\n\n    // The elements don't exist\n    else {\n      console.warn(\"Rellax: The elements you're trying to select don't exist.\");\n      return;\n    }\n\n    // Has a wrapper and it exists\n    if (self.options.wrapper) {\n      if (!self.options.wrapper.nodeType) {\n        var wrapper = document.querySelector(self.options.wrapper);\n        if (wrapper) {\n          self.options.wrapper = wrapper;\n        } else {\n          console.warn(\"Rellax: The wrapper you're trying to use doesn't exist.\");\n          return;\n        }\n      }\n    }\n\n    // set a placeholder for the current breakpoint\n    var currentBreakpoint;\n\n    // helper to determine current breakpoint\n    var getCurrentBreakpoint = function (w) {\n      var bp = self.options.breakpoints;\n      if (w < bp[0]) return \"xs\";\n      if (w >= bp[0] && w < bp[1]) return \"sm\";\n      if (w >= bp[1] && w < bp[2]) return \"md\";\n      return \"lg\";\n    };\n\n    // Get and cache initial position of all elements\n    var cacheBlocks = function () {\n      for (var i = 0; i < self.elems.length; i++) {\n        var block = createBlock(self.elems[i]);\n        blocks.push(block);\n      }\n    };\n\n    // Let's kick this script off\n    // Build array for cached element values\n    var init = function () {\n      for (var i = 0; i < blocks.length; i++) {\n        self.elems[i].style.cssText = blocks[i].style;\n      }\n      blocks = [];\n      screenY = window.innerHeight;\n      screenX = window.innerWidth;\n      currentBreakpoint = getCurrentBreakpoint(screenX);\n      setPosition();\n      cacheBlocks();\n      animate();\n\n      // If paused, unpause and set listener for window resizing events\n      if (pause) {\n        window.addEventListener(\"resize\", init);\n        pause = false;\n        // Start the loop\n        update();\n      }\n    };\n\n    // We want to cache the parallax blocks'\n    // values: base, top, height, speed\n    // el: is dom object, return: el cache values\n    var createBlock = function (el) {\n      var dataPercentage = el.getAttribute(\"data-rellax-percentage\");\n      var dataSpeed = el.getAttribute(\"data-rellax-speed\");\n      var dataXsSpeed = el.getAttribute(\"data-rellax-xs-speed\");\n      var dataMobileSpeed = el.getAttribute(\"data-rellax-mobile-speed\");\n      var dataTabletSpeed = el.getAttribute(\"data-rellax-tablet-speed\");\n      var dataDesktopSpeed = el.getAttribute(\"data-rellax-desktop-speed\");\n      var dataVerticalSpeed = el.getAttribute(\"data-rellax-vertical-speed\");\n      var dataHorizontalSpeed = el.getAttribute(\"data-rellax-horizontal-speed\");\n      var dataVerticalScrollAxis = el.getAttribute(\"data-rellax-vertical-scroll-axis\");\n      var dataHorizontalScrollAxis = el.getAttribute(\"data-rellax-horizontal-scroll-axis\");\n      var dataZindex = el.getAttribute(\"data-rellax-zindex\") || 0;\n      var dataMin = el.getAttribute(\"data-rellax-min\");\n      var dataMax = el.getAttribute(\"data-rellax-max\");\n      var dataMinX = el.getAttribute(\"data-rellax-min-x\");\n      var dataMaxX = el.getAttribute(\"data-rellax-max-x\");\n      var dataMinY = el.getAttribute(\"data-rellax-min-y\");\n      var dataMaxY = el.getAttribute(\"data-rellax-max-y\");\n      var mapBreakpoints;\n      var breakpoints = true;\n      if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {\n        breakpoints = false;\n      } else {\n        mapBreakpoints = {\n          xs: dataXsSpeed,\n          sm: dataMobileSpeed,\n          md: dataTabletSpeed,\n          lg: dataDesktopSpeed\n        };\n      }\n\n      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)\n      // ensures elements are positioned based on HTML layout.\n      //\n      // If the element has the percentage attribute, the posY and posX needs to be\n      // the current scroll position's value, so that the elements are still positioned based on HTML layout\n      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;\n      // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.\n      if (self.options.relativeToWrapper) {\n        var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;\n        wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;\n      }\n      var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;\n      var posX = self.options.horizontal ? dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;\n      var blockTop = posY + el.getBoundingClientRect().top;\n      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;\n      var blockLeft = posX + el.getBoundingClientRect().left;\n      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;\n\n      // apparently parallax equation everyone uses\n      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);\n      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);\n      if (self.options.center) {\n        percentageX = 0.5;\n        percentageY = 0.5;\n      }\n\n      // Optional individual block speed as data attr, otherwise global speed\n      var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self.options.speed;\n      var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;\n      var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;\n\n      // Optional individual block movement axis direction as data attr, otherwise global movement direction\n      var verticalScrollAxis = dataVerticalScrollAxis ? dataVerticalScrollAxis : self.options.verticalScrollAxis;\n      var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;\n      var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);\n\n      // ~~Store non-translate3d transforms~~\n      // Store inline styles and extract transforms\n      var style = el.style.cssText;\n      var transform = \"\";\n\n      // Check if there's an inline styled transform\n      var searchResult = /transform\\s*:/i.exec(style);\n      if (searchResult) {\n        // Get the index of the transform\n        var index = searchResult.index;\n\n        // Trim the style to the transform point and get the following semi-colon index\n        var trimmedStyle = style.slice(index);\n        var delimiter = trimmedStyle.indexOf(\";\");\n\n        // Remove \"transform\" string and save the attribute\n        if (delimiter) {\n          transform = \" \" + trimmedStyle.slice(11, delimiter).replace(/\\s/g, \"\");\n        } else {\n          transform = \" \" + trimmedStyle.slice(11).replace(/\\s/g, \"\");\n        }\n      }\n      return {\n        baseX: bases.x,\n        baseY: bases.y,\n        top: blockTop,\n        left: blockLeft,\n        height: blockHeight,\n        width: blockWidth,\n        speed: speed,\n        verticalSpeed: verticalSpeed,\n        horizontalSpeed: horizontalSpeed,\n        verticalScrollAxis: verticalScrollAxis,\n        horizontalScrollAxis: horizontalScrollAxis,\n        style: style,\n        transform: transform,\n        zindex: dataZindex,\n        min: dataMin,\n        max: dataMax,\n        minX: dataMinX,\n        maxX: dataMaxX,\n        minY: dataMinY,\n        maxY: dataMaxY\n      };\n    };\n\n    // set scroll position (posY, posX)\n    // side effect method is not ideal, but okay for now\n    // returns true if the scroll changed, false if nothing happened\n    var setPosition = function () {\n      var oldY = posY;\n      var oldX = posX;\n      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;\n      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;\n      // If option relativeToWrapper is true, use relative wrapper value instead.\n      if (self.options.relativeToWrapper) {\n        var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;\n        posY = scrollPosY - self.options.wrapper.offsetTop;\n      }\n      if (oldY != posY && self.options.vertical) {\n        // scroll changed, return true\n        return true;\n      }\n      if (oldX != posX && self.options.horizontal) {\n        // scroll changed, return true\n        return true;\n      }\n\n      // scroll did not change\n      return false;\n    };\n\n    // Ahh a pure function, gets new transform value\n    // based on scrollPosition and speed\n    // Allow for decimal pixel values\n    var updatePosition = function (percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {\n      var result = {};\n      var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));\n      var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));\n      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;\n      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;\n      return result;\n    };\n\n    // Remove event listeners and loop again\n    var deferredUpdate = function () {\n      window.removeEventListener(\"resize\", deferredUpdate);\n      window.removeEventListener(\"orientationchange\", deferredUpdate);\n      (self.options.wrapper ? self.options.wrapper : window).removeEventListener(\"scroll\", deferredUpdate);\n      (self.options.wrapper ? self.options.wrapper : document).removeEventListener(\"touchmove\", deferredUpdate);\n\n      // loop again\n      loopId = loop(update);\n    };\n\n    // Loop\n    var update = function () {\n      if (setPosition() && pause === false) {\n        animate();\n\n        // loop again\n        loopId = loop(update);\n      } else {\n        loopId = null;\n\n        // Don't animate until we get a position updating event\n        window.addEventListener(\"resize\", deferredUpdate);\n        window.addEventListener(\"orientationchange\", deferredUpdate);\n        (self.options.wrapper ? self.options.wrapper : window).addEventListener(\"scroll\", deferredUpdate, supportsPassive ? {\n          passive: true\n        } : false);\n        (self.options.wrapper ? self.options.wrapper : document).addEventListener(\"touchmove\", deferredUpdate, supportsPassive ? {\n          passive: true\n        } : false);\n      }\n    };\n\n    // Transform3d on parallax element\n    var animate = function () {\n      var positions;\n      for (var i = 0; i < self.elems.length; i++) {\n        // Determine relevant movement directions\n        var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();\n        var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();\n        var verticalScrollX = verticalScrollAxis.indexOf(\"x\") != -1 ? posY : 0;\n        var verticalScrollY = verticalScrollAxis.indexOf(\"y\") != -1 ? posY : 0;\n        var horizontalScrollX = horizontalScrollAxis.indexOf(\"x\") != -1 ? posX : 0;\n        var horizontalScrollY = horizontalScrollAxis.indexOf(\"y\") != -1 ? posX : 0;\n        var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);\n        var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX);\n\n        // Subtracting initialize value, so element stays in same spot as HTML\n        positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);\n        var positionY = positions.y - blocks[i].baseY;\n        var positionX = positions.x - blocks[i].baseX;\n\n        // The next two \"if\" blocks go like this:\n        // Check if a limit is defined (first \"min\", then \"max\");\n        // Check if we need to change the Y or the X\n        // (Currently working only if just one of the axes is enabled)\n        // Then, check if the new position is inside the allowed limit\n        // If so, use new position. If not, set position to limit.\n\n        // Check if a min limit is defined\n        if (blocks[i].min !== null) {\n          if (self.options.vertical && !self.options.horizontal) {\n            positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;\n          }\n          if (self.options.horizontal && !self.options.vertical) {\n            positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;\n          }\n        }\n\n        // Check if directional min limits are defined\n        if (blocks[i].minY != null) {\n          positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;\n        }\n        if (blocks[i].minX != null) {\n          positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;\n        }\n\n        // Check if a max limit is defined\n        if (blocks[i].max !== null) {\n          if (self.options.vertical && !self.options.horizontal) {\n            positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;\n          }\n          if (self.options.horizontal && !self.options.vertical) {\n            positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;\n          }\n        }\n\n        // Check if directional max limits are defined\n        if (blocks[i].maxY != null) {\n          positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;\n        }\n        if (blocks[i].maxX != null) {\n          positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;\n        }\n        var zindex = blocks[i].zindex;\n\n        // Move that element\n        // (Set the new translation and append initial inline transforms.)\n        var translate = \"translate3d(\" + (self.options.horizontal ? positionX : \"0\") + \"px,\" + (self.options.vertical ? positionY : \"0\") + \"px,\" + zindex + \"px) \" + blocks[i].transform;\n        self.elems[i].style[transformProp] = translate;\n      }\n      self.options.callback(positions);\n    };\n    self.destroy = function () {\n      for (var i = 0; i < self.elems.length; i++) {\n        self.elems[i].style.cssText = blocks[i].style;\n      }\n\n      // Remove resize event listener if not pause, and pause\n      if (!pause) {\n        window.removeEventListener(\"resize\", init);\n        pause = true;\n      }\n\n      // Clear the animation loop to prevent possible memory leak\n      clearLoop(loopId);\n      loopId = null;\n    };\n\n    // Init\n    init();\n\n    // Allow to recalculate the initial values whenever we want\n    self.refresh = init;\n    return self;\n  };\n  return Rellax;\n});\n\n//# sourceURL=webpack://ninelines-template/./src/js/vendor/rellax.js?");

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