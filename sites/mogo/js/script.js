var selectedSlider = 1;
var sliders_length = 3;
var sliders = [$('.slider_1'), $('.slider_2'), $('.slider_3')];
var slides  = [$('.slide_1'), $('.slide_2'), $('.slide_3')]
var header_bg_images = ['url(./images/header/bg_1.jpg) no-repeat', 'url(./images/header/bg_2.jpg) no-repeat', 'url(./images/header/bg_3.jpg) no-repeat']
var header = $('.mainscreen');

ClickedSlider = function (index) {
  if (selectedSlider != index) {
    sliders[selectedSlider].removeClass('active');
    slides[selectedSlider].removeClass('active');

    selectedSlider = index;
    sliders[selectedSlider].addClass('active');
    slides[selectedSlider].addClass('active');
    console.log("Ave Maria!");
    header.css('background', header_bg_images[selectedSlider]);
  }
}

slides[0].click(function(){
    ClickedSlider(0);
  }
);
slides[1].click(function(){
  ClickedSlider(1);
})
slides[2].click(function(){
  ClickedSlider(2);
})

var hambrgButton = $('.hamburger__button');
var closeBrgButton = $('.close_button');
var headerNav = $('.header__nav');

hambrgButton.click(function(){
    headerNav.css('display', 'flex');
    headerNav.css('opacity', '1');

    closeBrgButton.css('display', 'flex')
    hambrgButton.css('display', 'none')
  }
)

closeBrgButton.click(function(){
    headerNav.css('display', 'none');
    headerNav.css('opacity', '0');

    closeBrgButton.css('display', 'none');
    hambrgButton.css('display', 'flex');
  }
)

function ibg() {
  $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length> 0){
      $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
    }
  });
}

ibg();
