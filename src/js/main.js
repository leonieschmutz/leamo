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
