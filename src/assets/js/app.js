$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
  })
});



$(document).scroll(function(){
    if($(this).scrollTop() > 200) {   
        $('.sticky').css({"background-color":"#312953"});
    } 
    else {
        $('header').css({"background":"transparent"});
    }
});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$('.testimonials .bxslider').bxSlider({
  pagerCustom: '#bx-pager'
});

