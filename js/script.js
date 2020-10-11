const all_button = $('.caourusel__item__all');
const web_button = $('.caourusel__item__web');
const bot_button = $('.caourusel__item__bot');

function ibg() {
  $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length> 0){
      $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
    }
  });
}

ibg();
all_button.click (function() {
  $('.portfolio__item__web').css('display', 'block');
  $('.portfolio__item__bot').css('display', 'block');
})

web_button.click (function() {
  $('.portfolio__item__web').css('display', 'block');
  $('.portfolio__item__bot').css('display', 'none');
})

bot_button.click (function() {
  $('.portfolio__item__web').css('display', 'none');
  $('.portfolio__item__bot').css('display', 'block');
})
