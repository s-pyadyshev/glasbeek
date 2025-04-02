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
      const headerLogo = document.querySelector(".header__logo");

      if (!sessionStorage.getItem("splashShown")) {
        headerLogo.classList.add("splash-active");
        splashElement.classList.add("active");
        scribble.classList.add("animate__animated");
        setTimeout(() => {
          splashElement.classList.remove("active");
          headerLogo.classList.remove("splash-active");
          scribble.classList.remove("animate__animated");
        }, 3000);
        sessionStorage.setItem("splashShown", "true");
      } else {
        splashElement.classList.remove("active");
        headerLogo.classList.remove("splash-active");
        scribble.classList.remove("animate__animated");
      }
    }
  },
  false
);
