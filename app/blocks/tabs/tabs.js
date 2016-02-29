import $ from 'jquery';

$(function () {
  $('.tab-links a').on('click', function (e) {
    const currentAttrValue = $(this).attr('href');
    $('.tab-content ' + currentAttrValue).show().siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });
});
