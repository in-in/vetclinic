import $ from 'jquery';

$(function () {
  $('.tabLink a').on('click', function (e) {
    const currentAttrValue = $(this).attr('href');
    $('.tabContent ' + currentAttrValue).show().siblings().hide();
    $(this).parent('li').addClass('tabLink__item--active').siblings().removeClass('tabLink__item--active');
    e.preventDefault();
  });
});
