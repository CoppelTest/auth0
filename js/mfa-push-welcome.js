document.addEventListener('DOMContentLoaded', function () {
	const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
	try {
		const mainElement = document.querySelector('main');
		mainElement.classList.remove('_widget', 'c7f43d5ad');
		const title = mainElement.querySelector('h1');
		title.className = 'title-container';
		const subTitle = mainElement.querySelector('p');
		subTitle.className = 'subtitle-container';
		subTitle.style.paddingTop = '25px';

		const form = mainElement.querySelector('form');
		const buttonContainer = form.querySelector('div');
		buttonContainer.className = '';
		const appStoreLink = form.querySelector('a div');
		appStoreLink.className = 'social-button';
		const playStoreLink = form.querySelectorAll('a div')[1];
		playStoreLink.className = 'social-button';

		const appStoreIcon = appStoreLink.querySelector('span');
		const playStoreIcon = playStoreLink.querySelector('span');

		appStoreIcon.id = 'icon';
		playStoreIcon.id = 'icon';

		const styleElement = document.createElement('style');
		styleElement.innerHTML = `
  		#icon {
     		position: relative;
     		display: block;
      		top: 8px !important;
      		left: 8px !important;
 		 } `;
		document.head.appendChild(styleElement);

		const continueButton = form.querySelector('button[type="submit"]');
		continueButton.id = 'continue-button';
		continueButton.className = 'button-normal';
		continueButton.style.fontSize = '14px !important';

		const footer = document.querySelector('footer');
		footer.style.marginTop = 'auto';

		const socialButtonSpans = document.querySelectorAll('.social-button span');
		socialButtonSpans.forEach(span => {
			span.style.color = '#081754';
			span.style.fontFamily = 'var(--Family-body, Poppins)';
		});

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

		const focusStyle = document.createElement('style');
		focusStyle.innerHTML = `
		button:focus, a:focus {
		outline: none;
		} `;
		document.head.appendChild(focusStyle);
		if (auth0Wrapper) {
			auth0Wrapper.style.removeProperty('display');
		}

	} catch (error) {

		auth0Wrapper.style.removeProperty('display');
	}
});
