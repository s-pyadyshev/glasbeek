import ScrollMagic from "scrollmagic";

export const stickyCardNews = (() => {
  let controller = null;
  let scene = null;
  let resizeHandler = null;
  let isInitialized = false;

  const init = () => {
    try {
      if (isInitialized) {
        return;
      }

      const stickyElement = document.querySelector(".sticky");
      const sliderPhoto = document.querySelector(".sticky-stop-bottom");
      const stopElement = document.querySelector(".sticky-stop");

      if (!stickyElement || !sliderPhoto || !stopElement) return;

      destroy();
      controller = new ScrollMagic.Controller();
      setupScene(stickyElement, sliderPhoto, stopElement);

      resizeHandler = () =>
        onWindowResize(stickyElement, sliderPhoto, stopElement);
      window.addEventListener("resize", resizeHandler);

      isInitialized = true;
    } catch (error) {
      console.error("Failed to initialize StickyCardNews:", error);
      destroy();
    }
  };

  const setupScene = (stickyElement, sliderPhoto, stopElement) => {
    try {
      const stickyTop = getAbsoluteTop(stickyElement);
      const stickyHeight = stickyElement.offsetHeight;
      const sliderPhotoBottom =
        getAbsoluteTop(sliderPhoto) + sliderPhoto.offsetHeight;
      const stopBottom = getAbsoluteTop(stopElement) + stopElement.offsetHeight;

      const originalDuration = Math.max(
        0,
        stopBottom - stickyTop - stickyHeight
      );

      const distance = stopBottom - sliderPhotoBottom;
      const duration = Math.max(0, originalDuration - distance);
      const stickyElementWrapper = document.querySelector(
        ".page-header__aside"
      );

      if (scene) {
        scene.destroy(true);
        scene = null;
      }

      scene = new ScrollMagic.Scene({
        triggerElement: stickyElement,
        triggerHook: 0,
        duration: duration,
        offset: -parseFloat(
          window.getComputedStyle(stickyElementWrapper).paddingTop
        ),
      })
        .setPin(stickyElement, { pushFollowers: false })
        .addTo(controller || new ScrollMagic.Controller());

      return true;
    } catch (error) {
      console.error("Failed to setup scene:", error);
      return false;
    }
  };

  const onWindowResize = (stickyElement, sliderPhoto, stopElement) => {
    if (!isInitialized || !stickyElement || !sliderPhoto || !stopElement)
      return;

    if (resizeHandler.timeout) clearTimeout(resizeHandler.timeout);

    resizeHandler.timeout = setTimeout(() => {
      setupScene(stickyElement, sliderPhoto, stopElement);
    }, 100);
  };

  const destroy = () => {
    try {
      if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
        if (resizeHandler.timeout) clearTimeout(resizeHandler.timeout);
        resizeHandler = null;
      }
      if (scene) {
        scene.destroy(true);
        scene = null;
      }
      if (controller) {
        controller.destroy(true);
        controller = null;
      }
      isInitialized = false;
    } catch (error) {
      console.error("Failed to destroy StickyCardNews:", error);
    }
  };

  window.addEventListener("unload", destroy);

  return {
    init,
    destroy,
    isInitialized: () => isInitialized,
  };
})();

function getAbsoluteTop(element) {
  return element.getBoundingClientRect().top + window.scrollY;
}
