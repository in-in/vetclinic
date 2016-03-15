import jQuery from 'jquery';

jQuery(document).ready(function ($) {
  const offset = 300;
  const offsetOpacity = 1300;
  const scrollDuration = 700;
  const $backToTop = $('.up');

  $(window).scroll(function () {
    ($(this).scrollTop() > offset ) ? $backToTop.addClass('is-visible') : $backToTop.removeClass('is-visible fade-out');
    if ( $(this).scrollTop() > offsetOpacity ) {
      $backToTop.addClass('fade-out');
    }
  });

  $backToTop.on('click', function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, scrollDuration);
  });
});
