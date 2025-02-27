import ScrollMagic from "scrollmagic";

export const stickyCard = (() => {
  let scene = null;
  let controller = null;

  const init = () => {
    const stopElement = document.querySelector(".sticky-stop");
    const stickyElementWrapper = document.querySelector(".page-header__aside");
    const stickyElement = document.querySelector(".sticky");

    // Exit if required elements are missing
    if (!stopElement || !stickyElementWrapper || !stickyElement) {
      return;
    }

    // Initialize ScrollMagic controller
    controller = new ScrollMagic.Controller();

    // Set up the initial scene
    setupScene(stickyElement, stickyElementWrapper, stopElement);

    // Handle window resize with debouncing
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        scene.setPin(stickyElement, { pushFollowers: false });
      } else {
        scene.removePin(stickyElement, true);
      }
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);

    // Cleanup function to destroy the scene and remove event listeners
    return () => {
      if (scene) {
        scene.destroy(true);
      }
      window.removeEventListener("resize", debouncedResize);
    };
  };

  // Set up the ScrollMagic scene
  const setupScene = (stickyElement, stickyElementWrapper, stopElement) => {
    if (scene) {
      scene.destroy(true); // Clean up existing scene if it exists
    }

    const stickyElementWrapperPaddingTop = parseFloat(
      window.getComputedStyle(stickyElementWrapper).paddingTop
    );

    // Create a new ScrollMagic scene
    scene = new ScrollMagic.Scene({
      triggerElement: stickyElement,
      triggerHook: 0,
      offset: -stickyElementWrapperPaddingTop,
      duration: () => stopElement.offsetHeight, // Dynamic duration based on stopElement height
    }).addTo(controller);

    // Set pinning only for large screens
    if (window.matchMedia("(min-width: 1200px)").matches) {
      scene.setPin(stickyElement, { pushFollowers: false });
    }
  };

  // Debounce function to limit the rate of resize event handling
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
