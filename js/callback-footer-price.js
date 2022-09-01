(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-footerPrice-open]"),
		closeModalBtn: document.querySelector("[data-footerPrice-close]"),
		modal: document.querySelector("[data-modal-price]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
