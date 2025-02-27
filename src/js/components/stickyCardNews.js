import ScrollMagic from "scrollmagic";

export const stickyCardNews = (() => {
  let controller = null;
  let scene = null;

  const init = () => {
    const stopElement = document.querySelector(".sticky-stop");
    const stickyElementWrapper = document.querySelector(".page-header__aside");
    const stickyElement = document.querySelector(".sticky");

    if (!stopElement || !stickyElementWrapper || !stickyElement) {
      return;
    }

    controller = new ScrollMagic.Controller();
    setupScene(stickyElement, stickyElementWrapper, stopElement);

    updatePinState(stickyElement);
    window.addEventListener("resize", () => onWindowResize(stickyElement));
  };

  const setupScene = (stickyElement, stickyElementWrapper, stopElement) => {
    const stickyElementWrapperPaddingTop = parseFloat(
      window.getComputedStyle(stickyElementWrapper).paddingTop
    );

    scene = new ScrollMagic.Scene({
      triggerElement: stickyElement,
      triggerHook: 0,
      offset: -stickyElementWrapperPaddingTop,
      duration: getDuration(stopElement),
    }).addTo(controller);
  };

  const getDuration = (stopElement) => {
    return stopElement.offsetHeight;
  };

  const updatePinState = (stickyElement) => {
    if (!scene) return;

    if (window.matchMedia("(min-width: 1200px)").matches) {
      scene.setPin(stickyElement, { pushFollowers: false });
    } else {
      scene.removePin(stickyElement, true);
    }
  };

  const onWindowResize = (stickyElement) => {
    updatePinState(stickyElement);
  };

  const destroy = () => {
    if (controller) {
      controller.destroy(true);
      controller = null;
    }
    if (scene) {
      scene.destroy(true);
      scene = null;
    }
    window.removeEventListener("resize", onWindowResize);
  };

  return {
    init,
    destroy,
  };
})();
