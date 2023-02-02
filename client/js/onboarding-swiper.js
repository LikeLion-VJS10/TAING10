let swiper = new Swiper('.slow', {
  slidesPerView: 5,
  spaceBetween: 10,

  autoplay: {
    delay: 0 //add
  },
  speed: 7000,
  loop: true,
  allowTouchMove: false, //드래그 슬라이드 막음
  loopAdditionalSlides: 1,
  loopFillGroupWithBlank: true
})
let swiper2 = new Swiper('.fast', {
  slidesPerView: 5,
  spaceBetween: 10,

  autoplay: {
    delay: 0 //add
  },
  speed: 6000,
  loop: true,
  allowTouchMove: false, //드래그 슬라이드 막음
  loopAdditionalSlides: 1,
  loopFillGroupWithBlank: true
})
