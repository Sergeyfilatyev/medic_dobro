(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-footerReview-open]"),
		closeModalBtn: document.querySelector("[data-footerReview-close]"),
		modal: document.querySelector("[data-modal-review]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
