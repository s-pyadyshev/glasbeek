export const mobileMenu = (() => {
  const init = () => {
    const mobileMenuOpen = document.querySelector(".js-open-menu");
    const menu = document.querySelector(".menu");
    const splashTitle = document.querySelector(
      ".menu-splash__title .scribble svg"
    );

    if (!mobileMenuOpen) {
      return;
    }

    const mobileMenuClose = document.querySelector(".js-close-menu");
    const body = document.querySelector("body");

    mobileMenuOpen.addEventListener("click", function () {
      body.classList.toggle("menu-active");
      menu.classList.add("menu--open");
      menu.classList.remove("menu--closed");
      mobileMenuClose.focus();
      splashTitle.setAttribute("data-scrollspy", "animate");
    });

    mobileMenuClose.addEventListener("click", function () {
      $(".menu__link").css("opacity", "1");
      $(".menu__link.dropdown").removeClass("active");
      $(".js-dropdown").removeClass("is-open");
      $(".js-dropdown").next().removeClass("show");
      $(".js-dropdown").next().slideUp(0);
      body.classList.toggle("menu-active");
      menu.classList.add("menu--closed");
      menu.classList.remove("menu--open");
      splashTitle.removeAttribute("data-scrollspy");
    });
  };

  return {
    init,
  };
})();
