document.addEventListener('DOMContentLoaded', function () {
	const mainElement = document.querySelector('main');
	mainElement.classList.remove('_widget', 'c7f43d5ad');
	const title = mainElement.querySelector('h1');
	title.className = 'title-container';
	const subTitle = mainElement.querySelector('p');
	subTitle.className = 'subtitle-container';
	subTitle.style.paddingTop = '25px';

	const linkStyle = document.createElement('style');
	linkStyle.innerHTML = `
    .link {
      color: #1c42e8 !important;
      font-size: 16px !important;
    } `;
	document.head.appendChild(linkStyle);
	const button = document.querySelector('button[name="action"][value="pick-authenticator"]');
	if (button) {
		button.classList.add('link');
	}

});
