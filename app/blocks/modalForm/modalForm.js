(function () {
  const modalForm = document.querySelector('.modalForm');
  const openTrigger = document.querySelectorAll('.banner--attention');
  const closeTrigger = document.querySelector('.modalForm__close');

  for (let i = 0; i < openTrigger.length; i++) {
    openTrigger[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      modalForm.classList.add('is-visible');
    }, false);
  }

  closeTrigger.addEventListener('click', function () {
    modalForm.classList.remove('is-visible');
  }, false);

})();
