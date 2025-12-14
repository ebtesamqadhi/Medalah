//nav
const nav = document.querySelector("nav"),
  openNav = document.querySelector(".open-icon i"),
  closeNav = document.querySelector(".close-icon i");

openNav.addEventListener("click", () => {
  nav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("active");
});

// media menu

const mediaBtn = document.querySelector(".media"),
  mediaIcon = document.querySelector(".media i"),
  mediaMenu = document.querySelector(".media-menu");
mediaBtn.addEventListener("click", () => {
  mediaBtn.classList.toggle("active");
  mediaMenu.classList.toggle("active");
});

var swiperHome = new Swiper(".mySwiper-home", {
  direction: "vertical",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperProject = new Swiper(".mySwiper-project", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});

var swiperPublications = new Swiper(".mySwiper-publications", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});

var swiperPartners = new Swiper(".mySwiper-partners", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    300: {
      slidesPerView: 1,
    },
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
});
