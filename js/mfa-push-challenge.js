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

		const waitingTextContainer = mainElement.querySelector('div > div > div > div > div > div');
		waitingTextContainer.id = 'waiting-text-container';

		const dotIcon = waitingTextContainer ? waitingTextContainer.querySelector('span[role="img"]') : null;
		dotIcon.id = 'icon';

		const btnCopy = document.querySelector('button[name="action"][value="enter-otp-code"]');
		btnCopy.classList.add('custom-style');

		const iconElement = document.getElementById('icon');
		const svgHTML = `
	    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
	      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17632 3.82071C9.55921 4.55533 9.27407 5.46127 8.53944 5.84416C6.1358 7.09692 4.5 9.60874 4.5 12.5002C4.5 16.6423 7.85787 20.0002 12 20.0002C16.1421 20.0002 19.5 16.6423 19.5 12.5002C19.5 9.60874 17.8643 7.09692 15.4606 5.84416C14.7259 5.46127 14.4408 4.55533 14.8237 3.82071C15.2066 3.08607 16.1125 2.80092 16.8471 3.18381C20.2032 4.93296 22.5 8.4471 22.5 12.5002C22.5 18.2991 17.799 23.0002 12 23.0002C6.20101 23.0002 1.5 18.2991 1.5 12.5002C1.5 8.4471 3.79682 4.93296 7.15287 3.18381C7.88751 2.80092 8.79344 3.08607 9.17632 3.82071Z" fill="#081754"/>
	    </svg>
	  `;
		iconElement.innerHTML = svgHTML; iconElement.className = '';

		const divs = mainElement.querySelectorAll('div');
		const twelfthDiv = divs[12];
		twelfthDiv.id = 'div-notify';

		const divNotify = document.querySelector('#div-notify');
		const notifyText = divNotify ? divNotify.querySelector('p') : null;
		const resendButton = divNotify ? divNotify.querySelector('button[type="submit"]') : null;
		notifyText.id = 'notify-text';
		resendButton.id = 'resend-button';
		resendButton.classList.add('link');

		const parentDiv = document.getElementById('waiting-text-container');
		const childDiv = parentDiv.querySelector('div');
		childDiv.id = 'waiting-child-div';

		const txtsubt = document.querySelector('.subtitle-container');
		const newTxt = `
	  1- Te enviamos una notificación al siguiente dispositivo, a través de la app Auth0 Guardian. <br>
	  2- Haz clic en <b>Aprobar</b>`;
		txtsubt.innerHTML = newTxt.trim();
		const button = document.querySelector('button[name="action"][value="pick-authenticator"]');
		if (button) {
			button.classList.add('link');
		}
		const footer = document.querySelector('footer');
		footer.style.marginTop = 'auto';

		if (auth0Wrapper) {
			auth0Wrapper.style.removeProperty('display');
		}

	} catch (error) {

		auth0Wrapper.style.removeProperty('display');
	}
});
