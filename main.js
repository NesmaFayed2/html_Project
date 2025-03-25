document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementsByClassName("navbar")[0];

  if (nav) {
    window.onscroll = function () {
      if (window.scrollY > 500) {
        nav.classList.add("fixed-bar");
      } else {
        nav.classList.remove("fixed-bar");
      }
    };
  }
});
