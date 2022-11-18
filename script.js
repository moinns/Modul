const swiper = new Swiper('.image-slider', {
  speed: 800,

  loop: false,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
    autoplay: {
      delay: 2000,
    },
  centeredSlides: true,
});
