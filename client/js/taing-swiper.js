// export const swiper = new Swiper('.swiper', {
//   loop: true,
//   slidesPerView: 5, // 현재 보여지는 슬라이드 수
//   slidesPerGroup: 5, // 슬라이드 그룹 수
//   loopFillGroupWithBlank: true, // 보여질 슬라이드 수가 적을 경우 공백대체
//   // slidesOffsetBefore: 150, // 슬라이드 처음 시작부분 여백

//   navigation: {
//     nextEl: '.swiper-button-next', // 다음 버튼 클래스명
//     prevEl: '.swiper-button-prev' // 이번 버튼 클래스명
//   }
// })

// export const hero = new Swiper('.hero', {
//   // cssMode: true,
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   keyboard: {
//     enabled: true
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false
//   }
// })

// const event = new Swiper('.event', {
//   // cssMode: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false
//   },
//   spaceBetween: 30,
//   freeMode: true
// })

//^ 티빙에서 꼭 봐야하는 콘텐츠 영역 Swiper
export const swiper = new Swiper('.mySwiper', {
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
