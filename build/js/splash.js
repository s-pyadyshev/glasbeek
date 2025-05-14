window.addEventListener(
  "load",
  () => {
    const splashElement = document.querySelector(".splash");
    if (!splashElement) {
      return;
    }
    if (
      window.location.pathname === "/splash.html" ||
      window.location.pathname === "/en" ||
      window.location.pathname === "/de"
    ) {
      const scribble = splashElement.querySelector(".scribble svg");

      if (!sessionStorage.getItem("splashShown")) {
        splashElement.classList.add("active");
        scribble.classList.toggle("animate__animated");
        setTimeout(() => {
          splashElement.classList.add("loaded");
        }, 2000);
        setTimeout(() => {
          splashElement.classList.remove("active");
        }, 3000);
        sessionStorage.setItem("splashShown", "true");
      } else {
        splashElement.classList.remove("active");
        splashElement.classList.add("loaded");
      }
    }
  },
  false
);
