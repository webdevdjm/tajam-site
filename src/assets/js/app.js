$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
  })
});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$('.testimonials .bxslider').bxSlider({
  pagerCustom: '#bx-pager'
});

