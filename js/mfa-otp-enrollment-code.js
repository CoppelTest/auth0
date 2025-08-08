document.addEventListener('DOMContentLoaded', function () {
	const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
	try {
		const mainElement = document.querySelector('main');
		const title = mainElement.querySelector('h1');
		const subTitle = mainElement.querySelector('p');
		const txtCode = mainElement.querySelectorAll('section div > div')[5];
		const btnCopyCode = mainElement.querySelector('button[type="button"]');
		const spanCopy = btnCopyCode ? btnCopyCode.querySelector('span') : null;
		const btnScan = mainElement?.querySelector('button[value="toggle-view"]');
		const btnChangeMethod = mainElement?.querySelector('button[value="pick-authenticator"]');
		const divCodeInput = mainElement.querySelector('div[data-action-text=""]');
		const labelCode = document.querySelector('div[data-action-text][data-alternate-action-text]');
		const inputCode = divCodeInput ? divCodeInput.querySelector('input[name="code"]') : null;
		const btnLogin = mainElement?.querySelector('button[value="default"]');
		const label = mainElement.querySelector('#code-label');
		const errorSpan = document.getElementById('error-element-code');

		mainElement.classList.remove('_widget', 'c7f43d5ad');
		title.className = 'title-container';
		subTitle.className = 'subtitle-container';
		txtCode.classList.add('mi-multiline');
		btnCopyCode.classList.add('btn-copy-code');
		spanCopy.classList.add('span-copy-style');
		btnScan.classList.add('link');
		btnChangeMethod.classList.add('link');
		inputCode.className = 'email-input';
		labelCode.className = '';
		btnLogin.className = 'button-normal';
		label.style.color = '#081754';
		label.style.lineHeight = '24px';

		if (inputCode && btnLogin) {
			if (errorSpan && errorSpan.offsetHeight > 0) {
				inputCode.style.border = '1px solid red';
				btnLogin.style.marginTop = '80px';
			} else {
				inputCode.style.border = '1px solid #C9C9C9';
				btnLogin.style.marginTop = '55px';
			}
		}
		if (auth0Wrapper) {
			auth0Wrapper.style.removeProperty('display');
		}

	} catch (error) {

		auth0Wrapper.style.removeProperty('display');
	}
});
