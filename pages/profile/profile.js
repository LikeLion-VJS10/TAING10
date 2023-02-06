const mainTxt = document.querySelector('.profile-title__main');
const subTxt = document.querySelector('.profile-title__sub');
const editBtn = document.querySelector('.profile-edit__button');
const editImg = Array.from(document.querySelectorAll('.profile-img-list i'));
const activeProfile = document.querySelector('.active');
console.log(activeProfile)


function onEdit() {
  if(!!(editImg[0].classList.contains('fa-lock'))){
  editBtn.style.cssText = "color:black; background-color:white; font-weight: 700";
  editBtn.textContent = "완료";
  mainTxt.textContent = "프로필 편집";
  subTxt.textContent = "편집할 프로필을 선택해주세요.";
  editImg.forEach(
    function(currentElement, index){
      currentElement.classList.toggle('fa-lock');
      currentElement.classList.toggle('fa-pencil');
      }
    )
    activeProfile.classList.toggle('a11yHidden')
    // activeProfile.classList.toggle('profile-img__wrap--shadow')
    return
  }
  else if(!!(editImg[0].classList.contains('fa-pencil'))){
    editBtn.style.cssText = "var(--gray-300); background-color:inherit;";
    editBtn.textContent = "프로필 편집";
    mainTxt.textContent = "프로필 선택";
    subTxt.textContent = "시청할 프로필을 선택해주세요.";
    editImg.forEach(
      function(currentElement, index){
        currentElement.classList.toggle('fa-lock');
        currentElement.classList.toggle('fa-pencil');
        }
      )
      activeProfile.classList.toggle('a11yHidden')
      
    return
  }
}

editBtn.addEventListener('click', ()=>{
  onEdit();
});
