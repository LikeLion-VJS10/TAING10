import { insertBefore, insertLast } from './insert.js'

//^ 실시간 인기 프로그램 list 만들기
export const createLiveRankProgram = ({
  // 기본값 + 구조분해할당 하기위해 이렇게 한다! 많이 사용되지 않는다.
  id = '',
  rank = '',
  name = '',
  description = '',
  image = ''
} = {}) => {
  return /* html */ `
    <li class="swiper-slide">
      <figure>
        <a href="./">
          <img src="../../client/assets/img/desktop/live/${image}" alt="${description}" />
          <figcaption>
            <span class="taing-live-rank-ordered">${rank}</span>
            ${name}
          </figcaption>
        </a>
      </figure>
    </li>
  `
}

export const renderLiveRankProgram = (target, data) => {
  insertLast(target, createLiveRankProgram(data))
}

//^ 스피너
const createSpinner = (size = 100, loadingMessage = '목록을 불러옵니다') => {
  return /* html */ `
  <figure class="loadingSpinner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="184px" height="184px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <circle cx="84" cy="50" r="10" fill="#ec0e1d">
      <animate attributeName="r" repeatCount="indefinite" dur="0.6097560975609756s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
      <animate attributeName="fill" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#ec0e1d;#f4a203;#04a8f8;#f2e905;#ec0e1d" begin="0s"></animate>
  </circle><circle cx="16" cy="50" r="10" fill="#ec0e1d">
    <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
    <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
  </circle><circle cx="50" cy="50" r="10" fill="#f2e905">
    <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.6097560975609756s"></animate>
    <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.6097560975609756s"></animate>
  </circle><circle cx="84" cy="50" r="10" fill="#04a8f8">
    <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2195121951219512s"></animate>
    <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2195121951219512s"></animate>
  </circle><circle cx="16" cy="50" r="10" fill="#f4a203">
    <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.8292682926829267s"></animate>
    <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.8292682926829267s"></animate>
  </circle>
  </svg>
    <figcaption>${loadingMessage}</figcaption>
  </figure>
  `
}

export const renderSpinner = target => {
  insertLast(target, createSpinner())
}
