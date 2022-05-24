 var swiper = new Swiper(".sectionFour__middle", {
   spaceBetween: 20,
   grabCursor: true,
   loop: true,
   pagination: {
     el: ".sectionFour__middle--swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     375: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1024: {
       slidesPerView: 3,
     },
   },
 }); 