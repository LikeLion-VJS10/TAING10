export const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 5, // 보여지는 슬라이드 수
  slidesPerGroup: 5, // 슬라이드 그룹
  spaceBetween: 16, // 슬라이드 사이 간격
  loopFillGroupWithBlank: true, // 보여질 슬라이드 수가 적을 경우 공백대체

  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼 클래스명
    prevEl: '.swiper-button-prev' // 이번 버튼 클래스명
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
