document.addEventListener('DOMContentLoaded', function () {
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
	dotIcon.id ='icon'; 

	const btnCopy = document.querySelector('button[name="action"][value="enter-otp-code"]');
	btnCopy.classList.add('custom-style');

	const divs = mainElement.querySelectorAll('div');
	const twelfthDiv = divs[12];
 	twelfthDiv.id = 'div-notify'; 

	const divNotify = document.querySelector('#div-notify');
	const notifyText = divNotify ? divNotify.querySelector('p') : null;
	const resendButton = divNotify ? divNotify.querySelector('button[type="submit"]') : null;
	notifyText.id = 'notify-text';
	resendButton.id = 'resend-button';
	resendButton.classList.add('link');
	
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
	const footer = document.querySelector('footer');
	footer.style.marginTop = 'auto';
});
