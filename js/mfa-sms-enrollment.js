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
        const countryLabel = document.createElement('label');
        countryLabel.textContent = 'Celular';
        countryLabel.className = 'country-label';
        countryCodeButton.parentNode.insertBefore(countryLabel, countryCodeButton);
        const countryTextSpan = countryCodeButton.querySelector('span.c8e25e3d0');
        if (countryTextSpan) {
            countryTextSpan.textContent = '+52';
        }
    }
    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    if (auth0Wrapper) {
        auth0Wrapper.style.removeProperty('display');
        auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
});
