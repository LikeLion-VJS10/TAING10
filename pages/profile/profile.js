const mainTxt = document.querySelector('.profile-title__main');
const subTxt = document.querySelector('.profile-title__sub');
const editBtn = document.querySelector('.profile-edit__button');
const editImg = Array.from(document.querySelectorAll('.profile-img-list i'));
console.log(editImg);

function onEdit() {
  editBtn.style.cssText="color:black; background-color: white; ";
  editBtn.textContent = "완료";
  mainTxt.textContent = "프로필 편집";
  subTxt.textContent = "편집할 프로필을 선택해주세요.";
  editImg.forEach(
    function(currentElement, index){
      currentElement.classList.toggle('fa-lock');
      currentElement.classList.toggle('fa-pencil');
    }
  )
}

editBtn.addEventListener('click', ()=>{
  onEdit();
});
