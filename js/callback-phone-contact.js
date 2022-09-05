(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-callbackPhoneContact-open]"),
		closeModalBtn: document.querySelector("[data-callbackPhoneContact-close]"),
		modal: document.querySelector("[data-modal-contact]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
