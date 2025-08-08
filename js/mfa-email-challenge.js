document.addEventListener('DOMContentLoaded', function () {
  const mainElement = document.querySelector('main');
	mainElement.classList.remove('_widget', 'c7f43d5ad');
	const title = mainElement.querySelector('h1');
	title.className = 'title-container';
	const subTitle = mainElement.querySelector('p');
	subTitle.className = 'subtitle-container';
	const btnLogin = mainElement?.querySelector('button[value="default"]');
	btnLogin.className ='button-normal';
	btnLogin.style.marginTop = '60px';

	const divCodeInput = mainElement.querySelector('div[data-action-text=""]');
	const labelCode = document.querySelector('div[data-action-text][data-alternate-action-text]');
	const inputCode = divCodeInput ? divCodeInput.querySelector('input[name="code"]') : null;
	const label = mainElement.querySelector('#code-label'); 
	const errorSpan = document.getElementById('error-element-code');
	inputCode.className = 'email-input';
    labelCode.className = '';
    btnLogin.className ='button-normal';
    label.style.color = '#081754';
    label.style.lineHeight = '24px';
	const emptyError = document.getElementById('error-cs-code-required');
	if (inputCode && btnLogin) {
        if ((errorSpan && errorSpan.offsetHeight > 0) || (emptyError  && emptyError .offsetHeight > 0) ) {
			inputCode.style.border = '1px solid red';
			btnLogin.style.marginTop = '80px';
        } else {
			inputCode.style.border = '1px solid #C9C9C9';
			btnLogin.style.marginTop = '60px';
        }
    }
	const divs = document.querySelectorAll('main div');
	const div16 = divs[16];
	div16.style.display = 'none';
	const div8 = divs[8];
	div8.style.borderRadius = '8px';
	div8.style.border = '1px solid #BDBDBD';
	div8.style.background = '#BDBDBD';
	div8.style.overflow = 'hidden';
	div8.style.color = '#717171';
	div8.style.textOverflow = 'ellipsis';
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
