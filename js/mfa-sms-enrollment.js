document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main._widget');
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
        if (spanToRemove) {
            spanToRemove.remove();
        }
        
        const spanImage = countryCodeButton.querySelector('span.ca247b1a9.c2a310de9.c32beeb11');
        if (spanImage) {
            spanImage.classList.add('cf2b3b200');
            spanImage.classList.remove('c32beeb11');
        }
    }
    
    const phoneLabel = document.querySelector('#phone-label');
    let phoneLabelText = 'Ingresa tu celular';
    
    if (phoneLabel) {
        phoneLabel.classList.add('phone-label');
        const rawText = phoneLabel.textContent || phoneLabel.innerText || 'Ingresa tu celular';
        phoneLabelText = rawText
            .replace(/\\n/g, '')
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')
            .replace(/\s*\*\s*$/, '')
            .trim();
    }
    
    const phoneForm = document.querySelector('.ce1f80875.c2ff167ed');
    const phoneDiv = phoneForm.querySelector('.cd0bf197b.c9172280c');
    phoneDiv.classList.add('phone-div');
    
    const originalPhoneInput = document.querySelector('input[name="phone"]');
    if (originalPhoneInput) {
        originalPhoneInput.classList.add('original-phone-input');
        
        const visualPhoneInput = document.createElement('input');
        visualPhoneInput.type = 'tel';
        visualPhoneInput.placeholder = phoneLabelText;
        visualPhoneInput.id = 'visual-phone-input';
        visualPhoneInput.classList.add('input', 'ce861d26a', 'cfe8b2407', 'phone-input');
        
        visualPhoneInput.addEventListener('input', function() {
            originalPhoneInput.value = this.value;
            originalPhoneInput.dispatchEvent(new Event('input', { bubbles: true }));
        });
        
        const gridContainer = document.createElement('div');
        gridContainer.classList.add('grid-container');
        
        if (countryCodeButton) {
            const countryForm = document.querySelector('form.cb44dbdfa.ce1f80875');
            if (countryForm) {
                countryForm.appendChild(gridContainer);
                gridContainer.appendChild(countryCodeButton);
            }
        }
        
        gridContainer.appendChild(visualPhoneInput);
    }
    
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
