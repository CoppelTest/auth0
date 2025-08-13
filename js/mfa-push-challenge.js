document.addEventListener('DOMContentLoaded', function () {
	const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');

	try {
		const mainElement = document.querySelector('main');
		if (!mainElement) {
			throw new Error("No se pudo encontrar el elemento 'main'. El script se detiene.");
		}
		
		// Quitar clases por defecto
		mainElement.classList.remove('_widget', 'c7f43d5ad');

		// Estilos para el título y subtítulo
		const title = mainElement.querySelector('h1');
		if (title) title.className = 'title-container';
		const subTitle = mainElement.querySelector('p');
		if (subTitle) {
			subTitle.className = 'subtitle-container';
			subTitle.style.paddingTop = '25px';
			const newTxt = `1- Te enviamos una notificación al siguiente dispositivo, a través de la app Auth0 Guardian. <br>2- Haz clic en <b>Aprobar</b>`;
			subTitle.innerHTML = newTxt.trim();
		}

		// Manipulación del icono
		const waitingTextContainer = mainElement.querySelector('div > div > div > div > div > div');
		if (waitingTextContainer) waitingTextContainer.id = 'waiting-text-container';
		const dotIcon = waitingTextContainer ? waitingTextContainer.querySelector('span[role="img"]') : null;
		if (dotIcon) dotIcon.id = 'icon';
		const iconElement = document.getElementById('icon');
		if (iconElement) {
			const svgHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.17632 3.82071C9.55921 4.55533 9.27407 5.46127 8.53944 5.84416C6.1358 7.09692 4.5 9.60874 4.5 12.5002C4.5 16.6423 7.85787 20.0002 12 20.0002C16.1421 20.0002 19.5 16.6423 19.5 12.5002C19.5 9.60874 17.8643 7.09692 15.4606 5.84416C14.7259 5.46127 14.4408 4.55533 14.8237 3.82071C15.2066 3.08607 16.1125 2.80092 16.8471 3.18381C20.2032 4.93296 22.5 8.4471 22.5 12.5002C22.5 18.2991 17.799 23.0002 12 23.0002C6.20101 23.0002 1.5 18.2991 1.5 12.5002C1.5 8.4471 3.79682 4.93296 7.15287 3.18381C7.88751 2.80092 8.79344 3.08607 9.17632 3.82071Z" fill="#081754"/></svg>`;
			iconElement.innerHTML = svgHTML;
			iconElement.className = '';
		}

		// Estilos para el botón de copiar
		const btnCopy = document.querySelector('button[name="action"][value="enter-otp-code"]');
		if (btnCopy) btnCopy.classList.add('custom-style');

		// Estilos para el footer
		const footer = document.querySelector('footer');
		if (footer) footer.style.marginTop = 'auto';

		// Otros elementos
		const parentDiv = document.getElementById('waiting-text-container');
		const childDiv = parentDiv ? parentDiv.querySelector('div') : null;
		if (childDiv) childDiv.id = 'waiting-child-div';

		const divs = mainElement.querySelectorAll('div');
		const twelfthDiv = divs[13];
		if (twelfthDiv) twelfthDiv.id = 'div-notify';
		const divNotify = document.querySelector('#div-notify');
		const notifyText = divNotify ? divNotify.querySelector('p') : null;
		const resendButton = divNotify ? divNotify.querySelector('button[type="submit"]') : null;
		if (notifyText) notifyText.id = 'notify-text';
		if (resendButton) {
			resendButton.id = 'resend-button';
			resendButton.classList.add('link');
		}

		const button = document.querySelector('button[name="action"][value="pick-authenticator"]');
		if (button) button.classList.add('link');

	} catch (error) {
		console.error("Hubo un error en la ejecución del script:", error);
	} finally {
		if (auth0Wrapper) {
			auth0Wrapper.style.removeProperty('display');
		}
	}
});
