$(function () {
  $('.header .nav').hover(function () {
    $('.sub_bg').toggleClass('on');
  });

  $('.mainSlide .slide_banner').slick({
    arrows: false,
    autoplay: 0.5,
    pauseOnHover: false,
  });
});
