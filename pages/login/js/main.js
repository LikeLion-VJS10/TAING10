import { getNode, attr, getInputValue } from '../../../client/lib/index.js'

const ID = getNode('#ID')
const PW = getNode('#PW')
const loginBtn = getNode('.login-btn')
const showHideBtn = getNode('.show-hide')
const clear = getNode('.deleteID')
const ruleID = getNode('.ruleID')
const rulePW = getNode('.rulePW')

loginBtn.addEventListener('click', () => {
  if (loginBtn.getAttribute('onclick') === null) {
    loginBtn.setAttribute('onclick', "location.href='../taing/taing.html'")
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

ID.addEventListener('keyup', () => {
  let value = getInputValue(ID)

  if (value.includes('@') && value.includes('.')) {
    ruleID.textContent = ''
  } else {
    ruleID.textContent = '올바른 로그인 형식이 아닙니다.'
    ruleID.style.color = '#ff153c'
  }
})

PW.addEventListener('keyup', () => {
  let value = getInputValue(PW)

  if (value.length >= 8 && value.length <= 15) {
    rulePW.textContent = ''
  } else {
    rulePW.textContent = '올바른 비밀번호 형식이 아닙니다.'
    rulePW.style.color = '#ff153c'
  }
})
