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
    
    const divFather = divAfterHeader.querySelectorAll('div > div > div > div');
    let countAlert = 3;
    if (divFather[0].id === 'prompt-alert') {
        countAlert = 4;
    }
    divFather[countAlert].classList.remove(...divFather[countAlert].classList);
    const phoneSpan = divFather[countAlert].querySelector('span');
    if (phoneSpan) {
        const fullPhone = phoneSpan.textContent.trim();
        const phoneMatch = fullPhone.match(/^(\+\d+)\s(.+)$/);
        
        if (phoneMatch) {
            const lada = phoneMatch[1];
            const number = phoneMatch[2];
            
            const phoneInputsContainer = document.createElement('div');
            phoneInputsContainer.className = 'phone-inputs-container';
            
            const ladaInput = document.createElement('div');
            ladaInput.className = 'lada-input-container';
            ladaInput.classList.add('input');
            
            const flagImage = document.createElement('img');
            flagImage.src = 'https://cdn.auth0.com/ulp/react-components/0.0.0-semantically-released/img/flags/mx.svg';
            flagImage.alt = 'Bandera de México';
            flagImage.className = 'flag-image';
            
            const ladaSpan = document.createElement('span');
            ladaSpan.textContent = lada;
            ladaSpan.className = 'lada-text';
            
            ladaInput.appendChild(flagImage);
            ladaInput.appendChild(ladaSpan);
            
            const numberInputContainer = document.createElement('div');
            numberInputContainer.className = 'number-input-container';
            
            const numberInput = document.createElement('input');
            numberInput.type = 'text';
            numberInput.className = 'number-input';
            numberInput.value = number;
            numberInput.readOnly = true;
            numberInput.classList.add('input');
            
            const editButton = divFather[countAlert].querySelector('a[href*="mfa-sms-enrollment"]');
            editButton.style.display = 'none';
            
            if (editButton) {
                const newEditButton = document.createElement('button');
                newEditButton.className = 'edit-button';
                newEditButton.textContent = 'Editar';
                newEditButton.classList.add('link');
                
                const originalHref = editButton.getAttribute('href');
                if (originalHref) {
                    newEditButton.onclick = function() {
                        window.location.href = originalHref;
                    };
                }
                
                numberInputContainer.appendChild(numberInput);
                numberInputContainer.appendChild(newEditButton);
            } else {
                numberInputContainer.appendChild(numberInput);
            }
            
            phoneInputsContainer.appendChild(ladaInput);
            phoneInputsContainer.appendChild(numberInputContainer);
            
            phoneSpan.parentNode.replaceChild(phoneInputsContainer, phoneSpan);

            const countryLabel = document.createElement('label');
            countryLabel.textContent = 'Celular';
            countryLabel.className = 'country-label';
            phoneInputsContainer.parentNode.insertBefore(countryLabel, phoneInputsContainer);
        } else if (fullPhone.includes('X')) {
            const phoneInputsContainer = document.createElement('div');
            phoneInputsContainer.className = 'phone-inputs-container';
            const numberInput = document.createElement('input');
            numberInput.type = 'text';
            numberInput.className = 'number-input';
            numberInput.value = fullPhone;
            numberInput.readOnly = true;
            numberInput.classList.add('input');
            const numberInputContainer = document.createElement('div');
            numberInputContainer.className = 'number-input-container';
            numberInputContainer.appendChild(numberInput);
            phoneInputsContainer.appendChild(numberInputContainer);
            phoneSpan.parentNode.replaceChild(phoneInputsContainer, phoneSpan);
            const countryLabel = document.createElement('label');
            countryLabel.textContent = 'Celular';
            countryLabel.className = 'country-label';
            phoneInputsContainer.parentNode.insertBefore(countryLabel, phoneInputsContainer);
        }
    }
    
    const codeLabel = auth0Wrapper.querySelector('#code-label');
    codeLabel.style.display = 'none';
    let codeLabelText = 'Ingresa el código de 6 dígitos';
    
    if (codeLabel) {
        codeLabel.classList.add('code-label');
        const rawText = codeLabel.textContent || codeLabel.innerText || 'Ingresa el código de 6 dígitos';
        codeLabelText = rawText
            .replace(/\\n/g, '')
            .replace(/\n/g, '')
            .replace(/\s+/g, ' ')
            .replace(/\s*\*\s*$/, '')
            .trim();
    }
    const codeInput = auth0Wrapper.querySelector('input[name="code"]');
    if (codeInput) {
        const codeInputWrapper = codeInput.closest('.input-wrapper');
        codeInputWrapper.style.setProperty('height', 'unset');
        if (codeInputWrapper) {
            const codeLabel = document.createElement('label');
            codeLabel.textContent = codeLabelText;
            codeLabel.className = 'code-label';
            codeInputWrapper.insertBefore(codeLabel, codeInputWrapper.firstChild);
        }
    }

    const btnContinueMethod = divAfterHeader.querySelector('div > div > form > div > button');
    btnContinueMethod.className = 'button-normal';
    divFather[divFather.length - 2].classList.add('div-after-button-continue');
    const divAfterButtonContinue = divFather[divFather.length - 2].querySelector('form > button');
    divAfterButtonContinue.classList.remove(...divAfterButtonContinue.classList);
    divAfterButtonContinue.classList.add('link');
    divAfterButtonContinue.classList.add('div-bottom-link');

    const divBottomLink = divFather[divFather.length - 1].querySelector('form > button');
    divBottomLink.classList.remove(...divBottomLink.classList);
    divBottomLink.classList.add('link');
    divBottomLink.classList.add('div-bottom-link');
    
    if (auth0Wrapper) {
        auth0Wrapper.style.removeProperty('display');
        auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
});
