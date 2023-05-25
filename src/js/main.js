import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
swiper = null;

const initSwiper = function () {
  if (window.innerWidth < 992) {
    if (swiper == null) {
      swiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        },
      });
    }
  } else if (swiper != null) {
    swiper.destroy();
    swiper = null;
  }
};

initSwiper();
window.addEventListener("resize", initSwiper);

var burgerMenuButton = document.querySelector(".burger-menu-button");
var menu = document.querySelector(".nav-mobile");
var body = document.querySelector("body");
var openMenu = function () {
  menu.classList.toggle("is-open");
  body.classList.toggle("l-is-blocked");
};

burgerMenuButton.addEventListener("click", openMenu);

var burgerMenuButtonClose = document.querySelector(".burger-menu-button-close");
var burgerMenuLinks = document.querySelector(".nav-burger-menu-links");

var closeMenu = function () {
  menu.classList.remove("is-open");
  body.classList.remove("l-is-blocked");
};

burgerMenuButtonClose.addEventListener("click", closeMenu);
burgerMenuLinks.addEventListener("click", closeMenu);
