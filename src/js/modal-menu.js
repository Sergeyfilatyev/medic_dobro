(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    callback: document.querySelector('.footer__btn'),
    phoneCallback: document.querySelector('.phone-callback__btn'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.callback.addEventListener('click', toggleModal);
  refs.phoneCallback.addEventListener('click', toggleModal);
  document.addEventListener('keydown', isHiddenModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function isHiddenModal(event) {
    if (event.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  }
})();
