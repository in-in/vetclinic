const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');

ham.addEventListener('click', function () {
  ham.classList.toggle('is-active');
  menu.classList.toggle('menu--mobile');
});
