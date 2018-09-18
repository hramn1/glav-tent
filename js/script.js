'use strict';
const mobileWidth = window.matchMedia('(max-width: 767px)');
var swiperHeader = new Swiper('.header-slider .swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  effect: 'coverflow',
  speed: 900,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 100,
    stretch: 100,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiperClinica = new Swiper('.slider-clinica .swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
if(mobileWidth.matches) {
  var swiperDoctor = new Swiper('.doctor .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 900,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  });
} else {
  var swiperDoctor = new Swiper('.doctor .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 900,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  });
}
var swiperTestimionals = new Swiper('.testimonials .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  speed: 1900,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiperVieo = new Swiper('.video-onas .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  speed: 1900,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
