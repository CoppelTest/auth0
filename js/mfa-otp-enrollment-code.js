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
		const btnContinue = mainElement?.querySelector('button[value="default"]')
		const label = mainElement.querySelector('#code-label');
		const errorSpan = document.getElementById('error-element-code');
		const errorSpancs = document.getElementById("error-cs-code-required");

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
		btnContinue.className = 'button-normal';
		btnContinue.style.setProperty("margin-top", "22%", "important");
		label.style.color = '#081754';
		label.style.lineHeight = '24px';

		if (errorSpan) {
      inputCode.style.border = "1px solid red";
      btnContinue.style.setProperty("margin-top", "22%", "important");
    } else {
      console.log("errorSpan:", errorSpan);
      inputCode.style.border = "1px solid #C9C9C9";
    }

    const observer = new MutationObserver(function (mutationsList) {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          errorSpancs.classList.contains("ulp-validator-error")
        ) {
          inputCode.style.border = "1px solid red";
          btnContinue.style.setProperty("margin-top", "22%", "important");
        }
      }
    });

    if (errorSpancs) {
      observer.observe(errorSpancs, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
		if (auth0Wrapper) {
			auth0Wrapper.style.removeProperty('display');
		}

	} catch (error) {

		auth0Wrapper.style.removeProperty('display');
	}
});
