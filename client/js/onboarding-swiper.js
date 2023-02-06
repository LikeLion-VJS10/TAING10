// 스와이퍼 라이브러리 설정
function settingSwipers() {
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
}

function renderMovieList() {
  // 동적으로 가져온 영화 데이터를 화면에 렌더링
}

function fetchMovieData() {
  // 서버에 영화 데이터 요청
  // 프로미스 객체 반환
  return fetch('....')
}

export function init() {
  fetchMovieData()
    .then(() => {
      return renderMovieList()
    })
    .then(() => {
      settingSwipers()
    })
}

// init()

// function assignSlowSwiper(target) {
//   let swiper = new Swiper(target, {
//     slidesPerView: 5,
//     spaceBetween: 10,

//     autoplay: {
//       delay: 0 //add
//     },
//     speed: 7000,
//     loop: true,
//     allowTouchMove: false, //드래그 슬라이드 막음
//     loopAdditionalSlides: 1,
//     loopFillGroupWithBlank: true
//   })
// }

// function renderMovieData() {}

// async function fetchMovieData() {
//   try {
//     const res = await fetch('....')
//     const data = await res.json()
//     const slowSliderContainer = renderMovieList(data)
//     assignSlowSwiper(slowSliderContainer)
//   } catch (error) {
//     console.error(error.message)
//   }
// }

// // assignSlowSwiper()
