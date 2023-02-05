//필요한 돔 요소 정의하기
const mainTxt = document.querySelector('.profile-title__main');
const subTxt = document.querySelector('.profile-title__sub');
const editBtn = document.querySelector('.profile-edit__button');

//사용자가 버튼을 클릭했을때 실행되는 함수
//클릭시 실행되는 함수는 보통 on을 붙임
function onEdit() {
  console.log("test");
  // editBtn.setAttribute('color', 'white')
  //버튼 클릭시 버튼 스타일 바뀜(color, text바뀜), click
  //메인,서브 텍스트 변경됨(txt만 바뀜)) click
  //자물쇠가 연필이미지로 바뀜(폰트어썸) click
}

//이벤트 제거시는 리무브이벤트리스너
//문서객체.addEventListener(이벤트 이름, 함수)
//에딧버튼 클릭시 콜백함수onEdit 호출
editBtn.addEventListener('click', ()=>{
  onEdit();
});
    //챌1-버튼에 마우스 호버시 버튼 포커스 효과 mouseover
    //챌2-프로필 이미지에 마우스 호버시 위로 살짝 올라가는 애니메이션 mouseover