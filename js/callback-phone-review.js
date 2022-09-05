(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-callbackPhoneReview-open]"),
		closeModalBtn: document.querySelector("[data-callbackPhoneReview-close]"),
		modal: document.querySelector("[data-modal-review]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
