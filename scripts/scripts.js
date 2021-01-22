// Header
$(document).ready(function(){
  $('.nav-btn').click(function(){
    $(".nav").toggleClass("nav-active");
  });
});

// Slider
new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
