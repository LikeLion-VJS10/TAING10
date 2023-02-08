import { getNode, attr } from '../../../client/lib/index.js'

const loginBtn = getNode('.login-btn')
const showHideBtn = getNode('.show-hide')
const clear = getNode('.deleteID')

loginBtn.addEventListener('click', () => {
  if (loginBtn.getAttribute('onclick') === null) {
    loginBtn.setAttribute('onclick', "location.href='http://127.0.0.1:5501/pages/taing/taing.html'")
  }
})

// input 초기화 버튼
function reset() {
  ID.value = ''
  ID.style.border = 'none'
}
clear.addEventListener('click', reset)

// 비밀번호 표시 유무
function showHide() {
  if (attr(PW, 'type') === 'password') {
    attr(PW, 'type', 'text')
  } else {
    attr(PW, 'type', 'password')
  }
}
showHideBtn.addEventListener('click', showHide)
