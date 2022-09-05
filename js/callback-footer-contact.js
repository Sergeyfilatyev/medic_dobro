(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-footerContact-open]"),
		closeModalBtn: document.querySelector("[data-footerContact-close]"),
		modal: document.querySelector("[data-modal-contact]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
