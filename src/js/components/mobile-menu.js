export const mobileMenu = (() => {
  const init = () => {
    const mobileMenuToggle = document.querySelector(".js-toggle-menu");

    if (!mobileMenuToggle) {
      return;
    }

    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");

    mobileMenuToggle.addEventListener("click", function () {
      if (!mobileMenuToggle.classList.contains("active")) {
        mobileMenuToggle.classList.add("active");
        body.classList.toggle("menu-active");
        menu.classList.add("menu--open");
        menu.classList.remove("menu--closed");
      } else {
        mobileMenuToggle.classList.remove("active");
        $(".menu__link").css("opacity", "1");
        $(".menu__link.dropdown").removeClass("active");
        $(".js-dropdown").removeClass("is-open");
        $(".js-dropdown").next().removeClass("show");
        $(".js-dropdown").next().slideUp(0);
        body.classList.toggle("menu-active");
        menu.classList.add("menu--closed");
        menu.classList.remove("menu--open");
      }
    });
  };

  return {
    init,
  };
})();
