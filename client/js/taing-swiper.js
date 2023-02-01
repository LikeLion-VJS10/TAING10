export const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 5, // 현재 보여지는 슬라이드 수
  slidesPerGroup: 5, // 슬라이드 그룹 수
  spaceBetween: 16, // 슬라이드 사이 간격
  loopFillGroupWithBlank: true, // 보여질 슬라이드 수가 적을 경우 공백대체

  navigation: {
    nextEl: '.swiper-button-next', // 다음 버튼 클래스명
    prevEl: '.swiper-button-prev' // 이번 버튼 클래스명
  }
})
