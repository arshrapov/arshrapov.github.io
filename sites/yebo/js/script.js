var header = $('header');
var bars = $('.bars');
var close_btn = $('.header__close-btn');

function ibg() {
  $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length> 0){
      $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
    }
  });
}

ibg();

bars.on('click', function() {
  header.show();
  close_btn.show();
});

close_btn.on('click', function() {
  header.hide();
  close_btn.hide();
});

$(function(){
    var top;
    var height = $(window).height();
    var up = $('.up');
    up.hide();
  $(window).scroll(function(){
      // отступ сверху
      top = $(this).scrollTop();
      if ((top - height / 2) >= 0) {
        up.show();
      }
      else {
        up.hide();
      }
  });
});
