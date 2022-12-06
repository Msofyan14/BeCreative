$(document).ready(()=>{
    $(document).scroll(()=>{
        $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
    })
})

//swiper js
var swiper = new Swiper(".mySwiperTesti", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
            delay:1200,
     },
     breakpoints: {
        768:{
            slidesPerView:2,
        },
        1200: {
            slidesPerView:3,
        }
     }
  });