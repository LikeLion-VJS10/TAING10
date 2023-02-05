/* global gsap */


import {
  attr,
  tiger,
  delayP,
  insertLast,
  changeColor,
  getNode as $,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

// rendingUserList 함수 만들기
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.


//! 실시간 인기 프로그램 만들기

const liveRankProgram = $('.taing-live-rank__list');

async function redingProgramInfo() {

  renderSpinner(liveRankProgram)

  try{
    await delayP(1000)

    $('.')

  }


}



// const userCardContainer = $('.user-card-inner');

// async function rendingUserList() {

//   renderSpinner(userCardContainer)

//   try{
//     await delayP(2000)

//     $('.loadingSpinner').remove();

//     let response = await tiger.get( 'http://localhost:3000/users' );
  
//     let userData = response.data;
//     // userData.forEach(data=> renderUserCard(userCardContainer,data))
//     userData.forEach((data)=> {
//       renderUserCard(userCardContainer,data)
//     })
  
//     changeColor('.user-card');
    
//     gsap.to(gsap.utils.toArray('.user-card'),{
//       x:0,
//       opacity:1,
//       duration:1.5,
//       stagger: 0.2,
//     })
//   }catch(err){
//     // console.log(err);
//     renderEmptyCard(userCardContainer)

//   }
// }

// rendingUserList();



// // 삭제 버튼을 클릭하면 콘솔창에 '삭제' 글자가 출력이 될 수 있도록 만들어 주세요.



// function handler(e){
//   let deleteButton = e.target.closest('button');
//   let article = e.target.closest('article');
  
//   if(!deleteButton || !article) return; // 버튼이 아니면 실행 안함 
//   // if(!article) return; // 누른 대상의 인접한 대상이 article이 아니면 실행 안함.

   
//   let id = attr(article,'data-index').slice(5);

//   // await tiger.delete(`http://localhost:3000/users/${id}`)

//   // userCardContainer.innerHTML = '';
//   // rendingUserList();




//   tiger.delete(`http://localhost:3000/users/${id}`).then(()=>{
//     userCardContainer.innerHTML = '';
//     rendingUserList();
//   })
// }


// userCardContainer.addEventListener('click',handler)