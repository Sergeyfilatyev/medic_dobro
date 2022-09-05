(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-footerService-open]"),
		closeModalBtn: document.querySelector("[data-footerService-close]"),
		modal: document.querySelector("[data-modal-service]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
