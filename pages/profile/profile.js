// export * from '../../client/lib/dom/index.js';
// export * from '../../client/lib/error/index.js';
// export * from '../../client/lib/math/index.js';
// export * from '../../client/lib/utils/index.js';


//필요한 돔 요소 정의
const mainTxt = document.querySelector('.profile-title__main');
const subTxt = document.querySelector('.profile-title__sub');
const editBtn = document.querySelector(".profile-edit__button");

//사용자가 편집하기 버튼을 클릭했을때 실행되는 함수
function onEdit() {
  console.log("test");
  // 버튼 스타일 변경
  editBtn.style.cssText="color:black; background-color: white;"
  editBtn.textContent = "완료";
  // 텍스트 변경
  mainTxt.textContent = "프로필 편집"
  subTxt.textContent = "편집할 프로필을 선택해주세요."
  //메인,서브 텍스트 변경됨(txt만 바뀜)) click
  //자물쇠가 연필이미지로 바뀜(폰트어썸) click
}

//문서객체.addEventListener(이벤트 이름, 함수)
//에딧버튼 클릭시 콜백함수onEdit 호출
editBtn.addEventListener('click', ()=>{
  onEdit();
});
    //챌1-버튼에 마우스 호버시 버튼 포커스 효과 mouseover
    //챌2-프로필 이미지에 마우스 호버시 위로 살짝 올라가는 애니메이션 mouseover