import { throttle, isElementCompletelyInViewport } from "../helpers.js";

const applyScrollspyClasses = (elements) => {
  elements.forEach((element) => {
    if (isElementCompletelyInViewport(element)) {
      const animationClass = element.dataset.scrollspy;

      element.classList.add("animate__animated");
      element.classList.add(animationClass);
    }
  });
};

export const scrollspy = (function () {
  const init = function () {
    const scrollspyElements = document.querySelectorAll("[data-scrollspy]");

    if (!scrollspyElements.length) {
      return;
    }
    if (document.body.classList.contains("menu-active") === false) {
      return;
    }
    applyScrollspyClasses(scrollspyElements);

    document.addEventListener(
      "scroll",
      throttle(() => {
        applyScrollspyClasses(scrollspyElements);
      }, 100)
    );
  };

  return {
    init,
  };
})();
