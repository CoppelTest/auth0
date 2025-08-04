document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main._widget.c4a74ed23');
    const title = document.querySelector('h1.cded47f4b');
    const subTitle = document.querySelector('.cdf1d7eb2.c2baadf66');
    main.classList.remove('_widget', 'c1ea0cbeb');
    title.className = 'title-container';
    subTitle.className = 'subtitle-container';
    const countryCodeButton = document.querySelector('button[value="pick-country-code"]');
    if (countryCodeButton) {
        countryCodeButton.classList.add('country-code-selector');
        countryCodeButton.disabled = true;
        const countryLabel = document.createElement('label');
        countryLabel.textContent = 'Celular';
        countryLabel.className = 'country-label';
        countryCodeButton.parentNode.insertBefore(countryLabel, countryCodeButton);
        const countryTextSpan = countryCodeButton.querySelector('span.c8e25e3d0');
        countryTextSpan.textContent = '+52';
        countryTextSpan.classList.add('country-text-span');
        const spanToRemove = countryCodeButton.querySelector('span.ca247b1a9.c0d0e7438');
        spanToRemove.remove();
        const spanImage = countryCodeButton.querySelector('span.ca247b1a9.c2a310de9.c32beeb11');
        if (spanImage) {
            spanImage.classList.add('cf2b3b200');
            spanImage.classList.remove('c32beeb11');
        }
    }
    const phoneLabel = document.querySelector('#phone-label');
    phoneLabel.classList.add('phone-label');
    const phoneForm = document.querySelector('.ce1f80875.c2ff167ed');
    const phoneDiv = phoneForm.querySelector('.cd0bf197b.c9172280c');
    phoneDiv.classList.add('phone-div');
    const btnContinueMethod = document.querySelector('button.cea6d5264.c125e81f5.c8447a25a');
    btnContinueMethod.className = 'button-normal';
    const btnChangeMethod = document.querySelector('button[value="pick-authenticator"]');
    btnChangeMethod.classList.add('link');
    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    if (auth0Wrapper) {
        auth0Wrapper.style.removeProperty('display');
        auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
});
