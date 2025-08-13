document.addEventListener('DOMContentLoaded', function () {
    console.log("-> 1. El script se ha iniciado después de cargar el DOM.");
    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    if (auth0Wrapper) {
        console.log("-> auth0Wrapper encontrado. Se removerá su estilo al final.");
    }
    try {
        // --- SECCIÓN 1: Selección de elementos y estilos iniciales ---
        console.log("-> 2. Buscando elementos del DOM y aplicando estilos iniciales.");
        const mainElement = document.querySelector('main');
        if (!mainElement) {
            throw new Error("No se pudo encontrar el elemento 'main'. El script se detiene.");
        }
        mainElement.classList.remove('_widget', 'c7f43d5ad');
        const title = mainElement.querySelector('h1');
        if (title) {
            title.className = 'title-container';
        }
        const subTitle = mainElement.querySelector('p');
        if (subTitle) {
            subTitle.className = 'subtitle-container';
            subTitle.style.paddingTop = '25px';
        }
        const divCodeInput = mainElement.querySelector('div[data-action-text=""]');
        const labelCode = document.querySelector('div[data-action-text][data-alternate-action-text]');
        const inputCode = divCodeInput ? divCodeInput.querySelector('input[name="code"]') : null;
        const label = mainElement.querySelector('#code-label');
        if (inputCode) {
            inputCode.className = 'email-input';
        }
        if (labelCode) {
            labelCode.className = '';
        }
        if (label) {
            label.style.color = '#081754';
            label.style.lineHeight = '24px';
        }
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
        if (footer) {
            footer.style.marginTop = 'auto';
        }
        // --- SECCIÓN 2: Lógica de errores (función dinámica) ---
        const applyErrorStyles = () => {
            const btnLogin = mainElement?.querySelector('button[value="default"]');
            const errorSpan = document.getElementById('error-element-code');
            const hasGeneralError = errorSpan?.offsetHeight > 0;
            console.log(`-> 3. Evaluando el estado de errores. ¿Hay error general?: ${hasGeneralError}`);
            if (btnLogin) {
                btnLogin.className = 'button-normal';
            }
            if (inputCode && btnLogin) {
                if (hasGeneralError) {
                    inputCode.style.border = '1px solid red';
                    btnLogin.style.marginTop = '80px';
                } else {
                    inputCode.style.border = '1px solid #C9C9C9';
                    btnLogin.style.marginTop = '60px';
                }
            }
        };
        // Llamada inicial para aplicar estilos por defecto
        applyErrorStyles();
        // --- SECCIÓN 3: Observación del DOM (para capturar errores dinámicos) ---
        const observer = new MutationObserver(applyErrorStyles);
        const config = { childList: true, subtree: true, attributes: true };
        observer.observe(mainElement, config);
    } catch (error) {
        console.error("-> ❗ Hubo un error grave en la ejecución del script:", error);
    } finally {
        console.log("-> 4. Fin del script. Se removerá el 'display' del contenedor.");
        if (auth0Wrapper) {
            auth0Wrapper.style.removeProperty('display');
        }
    }
});
