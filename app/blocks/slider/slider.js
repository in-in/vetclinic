import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
