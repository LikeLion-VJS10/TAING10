import { getNode, getNodes } from '../../../client/lib/index.js'

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
