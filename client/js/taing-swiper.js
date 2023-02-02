export const swiperSlide = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 5,
  slidesPerGroup: 5,
  loopFillGroupWithBlank: true,

  keyboard: {
    enabled: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

const hero = new Swiper('.hero', {
  // cssMode: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  }
})

const event = new Swiper('.event', {
  // cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  spaceBetween: 30,
  freeMode: true
})
