import ScrollMagic from "scrollmagic";

export const stickyCard = (() => {
  let scene = null;
  let controller = null;

  const init = () => {
    const stopElement = document.querySelector(".sticky-stop");
    const stickyElementWrapper = document.querySelector(".page-header__aside");
    const stickyElement = document.querySelector(".sticky");

    if (!stopElement || !stickyElementWrapper || !stickyElement) {
      console.error("Required elements not found");
      return;
    }

    if (controller) {
      controller.destroy(true);
    }
    controller = new ScrollMagic.Controller();

    setupScene(stickyElement, stickyElementWrapper, stopElement);

    const handleResize = () => {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        scene.setPin(stickyElement, { pushFollowers: false });
      } else {
        scene.removePin(stickyElement, true);
      }
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);

    return () => {
      cleanup(debouncedResize);
    };
  };

  const setupScene = (stickyElement, stickyElementWrapper, stopElement) => {
    if (scene) {
      scene.destroy(true);
    }

    const stickyElementWrapperPaddingTop = parseFloat(
      window.getComputedStyle(stickyElementWrapper).paddingTop
    );

    scene = new ScrollMagic.Scene({
      triggerElement: stickyElement,
      triggerHook: 0,
      offset: -stickyElementWrapperPaddingTop,
      duration: () => stopElement.offsetHeight,
    }).addTo(controller);

    if (window.matchMedia("(min-width: 1200px)").matches) {
      scene.setPin(stickyElement, { pushFollowers: false });
    }
  };

  const cleanup = (debouncedResize) => {
    if (scene) {
      scene.destroy(true);
      scene = null;
    }
    if (controller) {
      controller.destroy(true);
      controller = null;
    }
    window.removeEventListener("resize", debouncedResize);
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  return {
    init,
  };
})();
