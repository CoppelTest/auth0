document.addEventListener('DOMContentLoaded', function () {
    console.log("-> 1. El script se ha iniciado después de cargar el DOM.");

    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    if (auth0Wrapper) {
        console.log("-> auth0Wrapper encontrado. Se removerá su estilo al final.");
    }

    try {
        // --- SECCIÓN 1: Selección de elementos del DOM ---
        console.log("-> 2. Buscando elementos del DOM...");
        
        const mainElement = document.querySelector('main');
        if (!mainElement) {
            throw new Error("No se pudo encontrar el elemento 'main'. El script se detiene.");
        }
        
        const divs = mainElement.querySelectorAll('div');
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

        const indexOffset = promptAlertDiv != null ? 1 : 0;
        const div8 = divs[8 + indexOffset];
        const div15 = divs[15 + indexOffset];
        const div17 = divs[17 + indexOffset];
        
        console.log(`-> 2a. Valores de los elementos clave:
        - inputCode: ${inputCode ? 'Encontrado' : 'NO ENCONTRADO'}
        - btnLogin: ${btnLogin ? 'Encontrado' : 'NO ENCONTRADO'}
        - errorSpan: ${errorSpan ? 'Encontrado' : 'NO ENCONTRADO'}
        - emptyError: ${emptyError ? 'Encontrado' : 'NO ENCONTRADO'}`);

        // --- SECCIÓN 2: Aplicación de estilos iniciales (sin errores) ---
        console.log("-> 3. Aplicando estilos y clases base...");

        mainElement.classList.remove('_widget', 'c7f43d5ad');
        if (title) title.className = 'title-container';
        if (subTitle) subTitle.className = 'subtitle-container';
        if (btnLogin) btnLogin.className = 'button-normal';
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
        if (button) button.classList.add('link');
        if (footer) footer.style.marginTop = 'auto';

        // --- SECCIÓN 3: Lógica condicional de errores con SWITCH ---
        console.log("-> 4. Evaluando el estado de los errores...");
        
        const hasPromptAlertError = promptAlertDiv?.offsetHeight > 0;
        const hasGeneralError = (errorSpan?.offsetHeight > 0) || (emptyError?.offsetHeight > 0);

        console.log(`- ¿Hay un error general? ${hasGeneralError}`);
        console.log(`- ¿Hay un error de alerta? ${hasPromptAlertError}`);
        
        let errorType = 'noError';
        if (hasGeneralError) {
            errorType = 'generalError';
        } else if (hasPromptAlertError) {
            errorType = 'promptAlertError';
        }
        
        switch (errorType) {
            case 'generalError':
                console.log("-> 4a. Aplicando estilos para 'Error General'.");
                if (btnLogin) btnLogin.style.marginTop = '20px';
                if (inputCode) inputCode.style.border = '1px solid red';
                if (div15) div15.style.display = 'none';
                if (checkBoxContainer) checkBoxContainer.style.paddingTop = '20px';
                if (div17) div17.style.display = 'none';
                break;

            case 'promptAlertError':
                console.log("-> 4b. Aplicando estilos para 'Error de Alerta'.");
                if (btnLogin) btnLogin.style.marginTop = '70px';
                if (inputCode) inputCode.style.border = '';
                if (div15) div15.style.display = 'none';
                if (checkBoxContainer) checkBoxContainer.style.paddingTop = '20px';
                if (div17) div17.style.display = 'none';
                break;

            case 'noError':
            default:
                console.log("-> 4c. No se encontraron errores. Aplicando estilos por defecto.");
                if (btnLogin) btnLogin.style.marginTop = '20px';
                if (inputCode) inputCode.style.border = '';
                if (div15) div15.style.display = '';
                if (checkBoxContainer) checkBoxContainer.style.paddingTop = '15px';
                if (div17) div17.style.display = 'none';
                break;
        }
        
    } catch (error) {
        // --- SECCIÓN DE MANEJO DE ERRORES ---
        console.error("-> ❗ Hubo un error grave en la ejecución del script:", error);
    } finally {
        // --- FINALIZACIÓN ---
        console.log("-> 5. Fin del script. Se removerá el 'display' del contenedor.");
        if (auth0Wrapper) {
            auth0Wrapper.style.removeProperty('display');
        }
    }
});
