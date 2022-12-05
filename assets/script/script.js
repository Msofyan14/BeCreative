$(document).ready(()=>{
    $(document).scroll(()=>{
        $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
    })
})

var swiper = new Swiper(".mySwiperTesti", {
    spaceBetween: 20,
    slidePerView: 1,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay:1200,
    },
    breakpoints: {
        768:{
            slidePerView:2,
        },
        1200:{
            slidePerView:3,
        }
    }
  });