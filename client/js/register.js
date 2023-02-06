import { getNode, getNodes } from '../lib/dom/getNode.js'
import { loadStorage, saveStorage } from '../lib/utils/storage.js'
import { getInputValue } from '../lib/dom/getInputValue.js'
import { addClass, removeClass } from '../lib/dom/css.js'

const ID = getNode('#inputID')
const PW = getNode('#inputPW')
const checkPW = getNode('#checkPW')
const Email = getNode('#inputEmail')
const rules = getNode('.gray-500')
const loginBtn = getNode('.login-btn')

const ruleID = getNode('.ruleID')
const rulePW = getNode('.rulePW')
const ruleCheckPW = getNode('.ruleCheckPW')
const ruleEmail = getNode('.ruleEmail')

// 영어, 숫자 포함
function isEngNum(value) {
  let count = 0

  for (let i = 0; i < value.length; i++) {
    if ((value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122) || (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57)) count += 1
  }

  if (value.length === count) {
    return true
  } else {
    return false
  }
}

// 영어, 숫자, 특수문자 포함
function isSpecialStr(value) {
  let count = 0

  for (let i = 0; i < value.length; i++) {
    if (
      (value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122) ||
      (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) ||
      (value.charCodeAt(i) >= 35 && value.charCodeAt(i) <= 38) ||
      value.charCodeAt(i) === 33 ||
      value.charCodeAt(i) === 42 ||
      value.charCodeAt(i) === 64 ||
      value.charCodeAt(i) === 94 ||
      value.charCodeAt(i) === 126
    ) {
      count += 1
    }
  }

  if (value.length === count) {
    return true
  } else {
    return false
  }
}

// 아이디 조건
function ValidID() {
  let value = getInputValue(ID)

  if (value.length >= 6 && value.length <= 12 && isEngNum(value)) {
    ruleID.textContent = '영문 또는 영문, 숫자 조합 6~12자리'
    ruleID.style.color = 'var(--gray-500)'
    ID.style.border = '1px solid white'
  } else if (value === '') {
    ruleID.textContent = '입력한 내용이 없습니다.'
    ruleID.style.color = '#ff153c'
    ID.style.border = 'none'
  } else {
    ruleID.textContent = '영문 또는 영문, 숫자 조합 6~12자리로 입력해주세요.'
    ruleID.style.color = '#ff153c'
    ID.style.border = 'none'
  }
}
ID.addEventListener('keyup', ValidID)

// 비밀번호 조건
function ValidPW() {
  let value = getInputValue(PW)

  if (value.length >= 8 && value.length <= 15 && isSpecialStr(value)) {
    rulePW.textContent = '영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리'
    rulePW.style.color = 'var(--gray-500)'
    PW.style.border = '1px solid white'
  } else if (value === '') {
    rulePW.textContent = '입력한 내용이 없습니다.'
    rulePW.style.color = '#ff153c'
    PW.style.border = 'none'
  } else {
    rulePW.textContent = '영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리로 입력해주세요.'
    rulePW.style.color = '#ff153c'
    PW.style.border = 'none'
  }
}
PW.addEventListener('keyup', ValidPW)

// 비밀번호 확인
function ValidCheckPW() {
  let value = getInputValue(checkPW)

  if (value === PW.value) {
    ruleCheckPW.textContent = ''
    checkPW.style.border = '1px solid white'
  } else if (value === '') {
    ruleCheckPW.textContent = '입력한 내용이 없습니다.'
    checkPW.style.border = 'none'
  } else {
    ruleCheckPW.textContent = '비밀번호와 일치하지 않습니다. 다시 입력해주세요'
    ruleCheckPW.style.color = '#ff153c'
    checkPW.style.border = 'none'
  }
}
checkPW.addEventListener('keyup', ValidCheckPW)

// 이메일 조건
function ValidEmail() {
  let value = getInputValue(Email)

  if (value.includes('@') === true && value.includes('.') === true) {
    ruleEmail.textContent = ''
    Email.style.border = '1px solid white'
  } else if (value === '') {
    ruleEmail.textContent = '입력한 내용이 없습니다.'
    Email.style.border = 'none'
  } else {
    ruleEmail.textContent = '올바른 이메일 형식이 아닙니다.'
    ruleEmail.style.color = '#ff153c'
    Email.style.border = 'none'
  }
}
Email.addEventListener('keyup', ValidEmail)

// 가입하기 버튼
function submitBtn() {
  //조건 일치
  addClass('loginBtn', 'is-active')
  //조건 일치 x
  removeClass('loginBtn', 'is-active')
}
loginBtn.addEventListener('click', submitBtn)
