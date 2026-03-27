const hamburgerInput = document.querySelector('.hamburger-menu input');

if (hamburgerInput) {
	hamburgerInput.addEventListener('change', function () {
		const isExpanded = this.checked;
		this.setAttribute('aria-expanded', isExpanded);
	});
}
