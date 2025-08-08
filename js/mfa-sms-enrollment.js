document.addEventListener('DOMContentLoaded', function () {
    const logoViejo = document.getElementById('custom-prompt-logo');
    if (logoViejo) {
        logoViejo.remove();
    }
    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    const main = auth0Wrapper.querySelector('main');
    const title = auth0Wrapper.querySelector('h1');
    const subTitle = auth0Wrapper.querySelector('p');
    const header = auth0Wrapper.querySelector('header');
    const divAfterHeader = auth0Wrapper.querySelector('main > section > div > div > div');
    main.classList.remove(...main.classList);
    header.style.setProperty('margin-bottom', '25px', 'important');
    header.classList.remove(...header.classList);
    divAfterHeader.style.setProperty('padding', '0 var(--spacing-0)', 'important');
    title.className = 'title-container';
    subTitle.className = 'subtitle-container';
    
    const countryCodeButton = auth0Wrapper.querySelector('button[value="pick-country-code"]');
    if (countryCodeButton) {
        countryCodeButton.classList.add('country-code-selector');
        
        const countryLabel = document.createElement('label');
        countryLabel.textContent = 'Celular';
        countryLabel.className = 'country-label';
        countryCodeButton.parentNode.insertBefore(countryLabel, countryCodeButton);
        
        const countryTextSpan = countryCodeButton.querySelectorAll('span');
        if (countryTextSpan.length >= 3) {
            const texto = countryTextSpan[1].textContent;
            const partes = texto.split(',');
            const lada = partes[partes.length - 1].trim();
            countryTextSpan[1].textContent = lada;
            countryTextSpan[1].classList.add('country-text-span');
            countryCodeButton.removeChild(countryTextSpan[2]);
        }
    }
    
    const phoneLabel = auth0Wrapper.querySelector('#phone-label');
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
    
    const forms = divAfterHeader.querySelectorAll('div > div > form');
    let phoneDiv = '';
    if (forms.length >= 2) {
        phoneDiv = forms[1].querySelector('div > div > div > div');
        phoneDiv.classList.add('phone-div');
    }
    
    const originalPhoneInput = phoneDiv.querySelector('input[name="phone"]');
    if (originalPhoneInput) {
        const visualPhoneInput = document.createElement('input');
        visualPhoneInput.type = 'tel';
        visualPhoneInput.placeholder = phoneLabelText;
        visualPhoneInput.id = 'visual-phone-input';
        originalPhoneInput.classList.forEach(clase => {
            visualPhoneInput.classList.add(clase);
        });
        originalPhoneInput.classList.add('original-phone-input');
        visualPhoneInput.classList.add('phone-input');
        
        visualPhoneInput.addEventListener('input', function() {
            originalPhoneInput.value = this.value;
            originalPhoneInput.dispatchEvent(new Event('input', { bubbles: true }));
        });
        
        const gridContainer = document.createElement('div');
        gridContainer.classList.add('grid-container');
        
        if (countryCodeButton) {
            const countryForm = forms[0];
            if (countryForm) {
                countryForm.appendChild(gridContainer);
                gridContainer.appendChild(countryCodeButton);
            }
        }
        
        gridContainer.appendChild(visualPhoneInput);
    }
    
    const btnContinueMethod = forms[1].querySelector('button');
    btnContinueMethod.className = 'button-normal';
    const btnChangeMethod = forms[2].querySelector('button[value="pick-authenticator"]');
    btnChangeMethod.classList.add('link');
    const input = auth0Wrapper.querySelector('#visual-phone-input');
    input.focus();
    if (auth0Wrapper) {
        auth0Wrapper.style.removeProperty('display');
        auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
});
