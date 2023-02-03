export const swiperSlide = new Swiper('.contents__inner', {
  loop: true,
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 16,
  loopFillGroupWithBlank: true,

  keyboard: {
    enabled: true
  },

//^ 티빙에서 꼭 봐야하는 콘텐츠 영역 Swiper
export const swiper = new Swiper('.mySwiper', {
  slidesPerView: 8,
  slidesPerGroup: 8,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
  // autoplay: {
  // delay: 2500,
  // disableOnInteraction: false,
  // }
})

//^ 실시간 인기 프로그램 Swiper
export const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 8,
  slidesPerGroup: 8,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
  // autoplay: {
  // delay: 3000,
  // disableOnInteraction: false,
  // reverseDirection: true,
  // }
})

//^ 오직 티빙에만 있어요 Swiper
export const swiper3 = new Swiper('.mySwiper3', {
  slidesPerView: 7,
  slidesPerGroup: 7,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
  // autoplay: {
  // delay: 3500,
  // disableOnInteraction: false,
  // }
})
