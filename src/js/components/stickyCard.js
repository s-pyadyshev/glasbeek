import ScrollMagic from "scrollmagic";

export const stickyCard = (() => {
  const init = () => {
    const stopElement = document.querySelector(".sticky-stop");

    const stickyElementWrapper = document.querySelector(".page-header__aside");
    const stickyElement = document.querySelector(".sticky");

    if (!stopElement || !stickyElementWrapper || !stickyElement) {
      return;
    }

    if (stopElement && stickyElement && stickyElementWrapper) {
      const stickyElementWrapperPaddingTop = parseFloat(
        window.getComputedStyle(stickyElementWrapper).paddingTop
      );

      const controller = new ScrollMagic.Controller();
      const scene = new ScrollMagic.Scene({
        triggerElement: stickyElement,
        triggerHook: 0,
        offset: -70,
        duration: getDuration,
      }).addTo(controller);

      if (window.matchMedia("(min-width: 1200px)").matches) {
        scene.setPin(stickyElement, { pushFollowers: false });
      }

      window.addEventListener("resize", () => {
        if (window.matchMedia("(min-width: 1200px)").matches) {
          scene.setPin(stickyElement, { pushFollowers: false });
        } else {
          scene.removePin(stickyElement, true);
        }
      });

      function getDuration() {
        return stopElement.offsetHeight - stickyElementWrapperPaddingTop;
      }
    }
  };

  return {
    init,
  };
})();
