(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-footer-open]"),
		closeModalBtn: document.querySelector("[data-footer-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
