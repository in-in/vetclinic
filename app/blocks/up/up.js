import jQuery from 'jquery';

jQuery(document).ready(function($){
  var offset = 300,
    offset_opacity = 1300,
    scroll_top_duration = 700,
    $back_to_top = $('.up');

  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
      $back_to_top.addClass('fade-out');
    }
  });

  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
       }, scroll_top_duration
    );
  });

});
