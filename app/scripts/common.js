export function common() {
  const menuBtn = document.getElementById('nav-icon');
  const menu = document.getElementById('js-top-menu');

  function showMenu(evt) {
    evt.preventDefault();
    menu.classList.toggle('is-visible');
    menuBtn.classList.toggle('open');
  }

  menuBtn.addEventListener('click', showMenu);
}
