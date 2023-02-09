import { getNode, getNodes, loadStorage, saveStorage, getInputValue, addClass, removeClass, clearContents, attr } from '../../../client/lib/index.js'

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

const showHideBtn = getNode('.show-hide')
const IDclearBtn = getNode('.deleteID')
const PWclearBtn = getNode('.deletePW')

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

// 비밀번호 표시 유무
function showHide() {
  if (attr(PW, 'type') === 'password') {
    attr(PW, 'type', 'text')
  } else {
    attr(PW, 'type', 'password')
  }
}
showHideBtn.addEventListener('click', showHide)

// input 초기화
function resetID() {
  ID.value = ''
  ID.style.border = 'none'
}
IDclearBtn.addEventListener('click', resetID)

function resetPW() {
  PW.value = ''
  PW.style.border = 'none'
}
PWclearBtn.addEventListener('click', resetPW)

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

  if (value.includes('@') && value.includes('.')) {
    ruleEmail.textContent = ''
    Email.style.border = '1px solid white'
  } else if (value === '') {
    ruleEmail.textContent = '입력한 내용이 없습니다.'
    ruleEmail.style.color = '#ff153c'
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

// function selectAll(selectAll) {
//   const checkboxes = getNodes('input[type="checkbox"]')

//   checkboxes.forEach(checkbox => {
//     checkbox.checked = selectAll.checked
//   })
// }

// function selectAll(selectAll) {
//   const checkboxes = getNodes('input[type="checkbox"]')

//   checkboxes.forEach(checkbox => {
//     checkbox.checked = selectAll.checked
//   })
// }

// console.log(getNodes('#agree-all'));

const agreeAll = getNode('#agree-all')
const above14 = document.querySelector('#above-14')
const service = document.querySelector('#service')
const personalInfo = document.querySelector('#personal-info')
const infoProviding = document.querySelector('#info-providing')
const personalInfoProviding = document.querySelector('#personal-info-providing')
const infoAgreement = document.querySelector('#info-agreement')
const smsAgreement = document.querySelector('#sms-agreement')
const emailAgreement = document.querySelector('#email-agreement')

function checkSelectAll() {
  // agree-inner-wrap 안 전체 체크박스
  const checkboxes = document.querySelectorAll('.agree-inner-wrap input[type="checkbox"]')

  // agree-inner-wrap 안 선택된 체크박스
  const checked = document.querySelectorAll('.agree-inner-wrap input[type="checkbox"]:checked')

  // select all 체크박스
  const agreeAll = document.querySelector('#agree-all')

  if (checkboxes.length === checked.length) {
    agreeAll.checked = true
  } else {
    agreeAll.checked = false
  }
}

function selectAll() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach(checkbox => {
    checkbox.checked = agreeAll.checked
  })
}

agreeAll.addEventListener('click', selectAll)

above14.addEventListener('click', checkSelectAll)
service.addEventListener('click', checkSelectAll)
personalInfo.addEventListener('click', checkSelectAll)
infoProviding.addEventListener('click', checkSelectAll)
personalInfoProviding.addEventListener('click', checkSelectAll)
infoAgreement.addEventListener('click', checkSelectAll)
smsAgreement.addEventListener('click', checkSelectAll)
smsAgreement.addEventListener('click', checkSelectAll)
emailAgreement.addEventListener('click', checkSelectAll)
