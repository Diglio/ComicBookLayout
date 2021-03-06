$(document).ready(function(){
  $('.about').click(function(){
    if($(this).hasClass('grown')){
      $(this).animate({height: '385%', width: '200%', left: '0', margin: '15px'},500, 'linear').removeClass('grown');
      $('.home-wrap').css('background-color', 'grey');
      $('.alignBottom').css('opacity', '0');
      $('.alignTop').css('opacity', '0');
      $('.youtube').css('opacity', '0');
      $('.mike-faq').css('opacity', '1');

    } else {
      $(this).animate({height: '220%', width: '100%', left: '100%', margin: '0'}, 500, 'linear').addClass('grown');
      $('.home-wrap').css('background-color', 'white');
      $('.alignBottom').css('opacity', '1');
      $('.alignTop').css('opacity', '1');
      $('.youtube').css('opacity', '1');
      $('.mike-faq').css('opacity', '0');
    }
  });
  $('.setup').click(function(){
    if($(this).hasClass('grown')){
      $(this).animate({height: '101%', width: '47%', right: '25%', margin: '15px'},500, 'linear').removeClass('grown');
      $(this).css('position', 'absolute');
      $(this).css('z-index', '11');
      $('.home-wrap').css('background-color', 'grey');
      $('.alignTop').css('opacity', '0');
      $('.alignCenter').css('opacity', '0');
      $('.social').css('opacity', '0');
      $('.setup-images').css('opacity', '1');
    } else {
      $(this).animate({height: '80%', width: '54%', right: '0', margin: '0'},500, 'linear').addClass('grown');
      $(this).css('position', 'relative');
      $(this).css('z-index', '0');
      $('.home-wrap').css('background-color', 'white');
      $('.alignTop').css('opacity', '1');
      $('.alignCenter').css('opacity', '1');
      $('.social').css('opacity', '1');
      $('.setup-images').css('opacity', '0');
    }
  });
});
