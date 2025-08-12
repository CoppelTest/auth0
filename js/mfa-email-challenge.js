document.addEventListener('DOMContentLoaded', function () {
    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    
    try {
        const mainElement = document.querySelector('main');
        const divs = document.querySelectorAll('main div');
        const promptAlertDiv = document.getElementById('prompt-alert');
        const emptyError = document.getElementById('error-cs-code-required');
        const errorSpan = document.getElementById('error-element-code');
        const title = mainElement.querySelector('h1');
        const subTitle = mainElement.querySelector('p');
        const btnLogin = mainElement?.querySelector('button[value="default"]');
        const divCodeInput = mainElement.querySelector('div[data-action-text=""]');
        const labelCode = document.querySelector('div[data-action-text][data-alternate-action-text]');
        const inputCode = divCodeInput ? divCodeInput.querySelector('input[name="code"]') : null;
        const label = mainElement.querySelector('#code-label');
        const checkbox = document.querySelector('input[type="checkbox"]');
        const checkBoxContainer = checkbox?.closest('div');
        const button = document.querySelector('button[name="action"][value="pick-authenticator"]');
        const footer = document.querySelector('footer');
        
        const indexOffset = promptAlertDiv ? 1 : 0;
        
        const div8 = divs[8 + indexOffset];
        const div15 = divs[15 + indexOffset];
        const div17 = divs[17 + indexOffset];

        mainElement.classList.remove('_widget', 'c7f43d5ad');
        if (title) title.className = 'title-container';
        if (subTitle) subTitle.className = 'subtitle-container';

        if (btnLogin) {
            btnLogin.className = 'button-normal';
        }

        if (inputCode) inputCode.className = 'email-input';
        if (labelCode) labelCode.className = '';
        if (label) {
            label.style.color = '#081754';
            label.style.lineHeight = '24px';
        }

        if (checkbox) checkbox.className = '';
        if (checkBoxContainer) checkBoxContainer.classList.add('custom-checkbox-container');
        
        if (div8) {
            div8.style.borderRadius = '8px';
            div8.style.border = '1px solid #BDBDBD';
            div8.style.background = '#BDBDBD';
            div8.style.overflow = 'hidden';
            div8.style.color = '#717171';
            div8.style.textOverflow = 'ellipsis';
        }

        if (button) {
            button.classList.add('link');
        }
        
        if (footer) {
            footer.style.marginTop = 'auto';
        }
		
        const hasPromptAlertError = promptAlertDiv && promptAlertDiv.offsetHeight > 0;
        const hasGeneralError = (errorSpan && errorSpan.offsetHeight > 0) || (emptyError && emptyError.offsetHeight > 0);

        if (hasPromptAlertError) {
            // Caso 1: Error en el div "prompt-alert" (sin borde rojo)
            if (btnLogin) btnLogin.style.marginTop = '70px'; // <-- ¡NUEVA REGLA AQUÍ!
            if (inputCode) inputCode.style.border = '';
            if (div15) div15.style.display = 'none';
            if (checkBoxContainer) checkBoxContainer.style.paddingTop = '20px';
            if (div17) div17.style.display = 'none';
            
        } else if (hasGeneralError) {
            // Caso 2: Error general (con borde rojo)
            if (btnLogin) btnLogin.style.marginTop = '20px';
            if (inputCode) inputCode.style.border = '1px solid red';
            if (div15) div15.style.display = 'none';
            if (checkBoxContainer) checkBoxContainer.style.paddingTop = '20px';
            if (div17) div17.style.display = 'none';
            
        } else {
            // Caso 3: No hay errores
            if (btnLogin) btnLogin.style.marginTop = '20px';
            if (inputCode) inputCode.style.border = '';
            if (div15) div15.style.display = '';
            if (checkBoxContainer) checkBoxContainer.style.paddingTop = '15px';
            if (div17) div17.style.display = 'none';
        }
        if (auth0Wrapper) {
            auth0Wrapper.style.removeProperty('display');
        }

    } catch (error) {
        console.error("Hubo un error en la ejecución del script:", error);
        if (auth0Wrapper) {
            auth0Wrapper.style.removeProperty('display');
        }
    }
});
