

$(window).scroll(function(){
  let sticky = $('.sticky'),
      scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
});


$(document).ready(function() {
  $('.gallery-item').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery:{
    enabled:true
  }
});
});
