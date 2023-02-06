let list = document.querySelector('.contents__list')

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

async function tivingFun() {
  let response = await fetch('http://localhost:3000/tivingFun')
    .then(response => response.json())
    .then(data =>
      data.map(item => {
        let onLi = document.createElement('li')
        let onImg = document.createElement('img')
        onLi.classList.add('contents__item')
        onImg.setAttribute('src', `${item.image}`)
        onImg.setAttribute('alt', `${item.description}`)
        onLi.appendChild(onImg)
        list.appendChild(onLi)
      })
    )
    .then(() => {
      settingSwipers()
    })
}
tivingFun()

let doubleList = document.querySelector('.slow-swiper')
console.log(doubleList)
async function wantFun1() {
  let response = await fetch('http://localhost:3000/wantFun')
    .then(response => response.json())
    .then(data =>
      data.map(item => {
        let onLi = document.createElement('li')
        let onImg = document.createElement('img')
        onLi.classList.add('swiper-slide')
        onImg.setAttribute('src', `${item.image}`)
        // onImg.setAttribute('alt', `${item.description}`)
        onLi.appendChild(onImg)
        doubleList.appendChild(onLi)
      })
    )
}
wantFun1()

let doubleList2 = document.querySelector('.fast-swiper ')
console.log(doubleList2)

async function wantFun2() {
  let response = await fetch('http://localhost:3000/wantFun')
    .then(response => response.json())
    .then(data =>
      data.map(item => {
        let onLi = document.createElement('li')
        let onImg = document.createElement('img')
        onLi.classList.add('swiper-slide')
        onImg.setAttribute('src', `${item.image}`)
        // onImg.setAttribute('alt', `${item.description}`)
        onLi.appendChild(onImg)
        doubleList2.appendChild(onLi)
      })
    )
    .then(() => {
      settingSwipers()
    })
}
wantFun2()
