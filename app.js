document
	.querySelector('.hamburger-menu input')
	.addEventListener('change', function () {
		const isExpanded = this.checked;
		this.setAttribute('aria-expanded', isExpanded);
	});
