$(document).ready(()=>{
    $(document).scroll(()=>{
        $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
    })
})

// var swiper = new Swiper(".mySwiperTesti", {
//     slidePerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     autoplay: {
//         delay:1200,
//     },
//     breakpoints: {
//         768:{
//             slidePerView:2,
//         },
//         1200:{
//             slidePerView:3,
//         }
//     }
//   });

var swiper = new Swiper(".mySwiperTesti", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
            delay:1200,
     },
  });