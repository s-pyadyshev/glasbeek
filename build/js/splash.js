window.addEventListener("DOMContentLoaded", () => {
  const splashElement = document.querySelector(".splash");
  if (!splashElement) return;

  function getCookie(name) {
    let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  }

  function setCookie(name, value, hours) {
    let date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    document.cookie =
      name +
      "=" +
      value +
      "; path=/; expires=" +
      date.toUTCString() +
      "; SameSite=Lax";
  }

  if (!getCookie("splashShown")) {
    sessionStorage.setItem("originalURL", window.location.href);

    splashElement.classList.add("active", "animate__fadeInSplash");

    const scribble = splashElement.querySelector(".scribble svg");
    scribble.classList.toggle("animate__animated");

    setTimeout(() => {
      splashElement.classList.add("hidden");

      setTimeout(() => {
        document.body.classList.add("loaded");
        document.body.classList.remove("preload");
        splashElement.classList.remove("animate__fadeInSplash", "active");
      }, 500);
    }, 4000);

    setCookie("splashShown", "true", 1);
  } else {
    document.body.classList.add("loaded");
    document.body.classList.remove("preload");
    splashElement.classList.add("hidden");
  }
});
