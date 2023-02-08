export const swiperSlide = new Swiper('.contents__inner', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  keyboard: {
    enabled: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  }
})

// ^ 티빙에서 꼭 봐야하는 콘텐츠 영역 Swiper
export const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      slidesPerGroup: 5
    },
    1024: {
      slidesPerView: 8,
      slidesPerGroup: 8
    }
  }
  // autoplay: {
  // delay: 2500,
  // disableOnInteraction: false,
  // }
})

//^ 실시간 인기 프로그램 Swiper
export const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1024: {
      slidesPerView: 8,
      slidesPerGroup: 8
    }
  }
})

//^ 오직 티빙에만 있어요 Swiper
export const swiper3 = new Swiper('.mySwiper3', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1024: {
      slidesPerView: 7,
      slidesPerGroup: 7
    }
  }
  // autoplay: {
  // delay: 3500,
  // disableOnInteraction: false,
  // }
})

export const hero = new Swiper('.hero', {
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
