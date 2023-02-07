import { swiperSlide, swiper, swiper2, swiper3, hero } from './taing-swiper.js'
import { attr, tiger, delayP, insertLast, getNode as $, renderLiveRankProgram } from '../lib/index.js'

const liveRankProgram = $('.taing-live-rank__list')

async function rendingProgram() {
  try {
    let response = await tiger.get('http://localhost:3000/taingContent')

    let userData = response.data
    console.log(liveRankProgram)
    userData.forEach(data => {
      renderLiveRankProgram(liveRankProgram, data)
      console.log(userData)
    })
  } catch (err) {
    alert('제공할 정보가 없습니다요')
  }
}
rendingProgram()
