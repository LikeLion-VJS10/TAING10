import { swiperSlide, swiper, swiper2, swiper3, hero } from './taing-swiper.js'
import {
  attr,
  tiger,
  delayP,
  insertLast,
  getNode as $,
  renderLiveRankProgram,
} from '../lib/index.js';



// const swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


// async function getData() {
//   let response = await fetch('http://localhost:3000/tivingFun%27')
//     .then(response => response.json())
//     .then(
//       data =>
//         data.map(item => {
//           // let listItem = list.innerHTML(<li>${item.name}</li>)
//           // list.appendChild(listItem)
//           // // document.body.appendChild(jbBtn)
//           console.log(item)
//         })
//       // console.log(data)
//     )
// }




//^ ---------------------------------------------------------------------


//! 실시간 인기 프로그램 만들기

const liveRankProgram = $('.taing-live-rank__list overflow__hidden');

async function rendingProgram() {

  try{
    await delayP(1000)

    let response = await tiger.get( 'http://localhost:3000/taingContent' );
    console.log(response);

    let userData = response.data;

    userData.forEach((data)=> {
      renderLiveRankProgram(liveRankProgram,data)

    })

  }catch(err){
    alert('제공할 정보가 없자나')
  }

  rendingProgram();

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