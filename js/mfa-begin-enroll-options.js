document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main._widget.c1ea0cbeb');
    const title = document.querySelector('h1.cded47f4b');
    const subTitle = document.querySelector('.c31b86380.ca3fde804');

    main.classList.remove('_widget', 'c1ea0cbeb');
    title.className = 'title-container';
    subTitle.className = 'subtitle-container';
    
    // Procesar botones específicos: agregar clase y reemplazar iconos
    const socialButtons = document.querySelectorAll(".cea6d5264.c6a8be725.c6b0cc0b9.cba3063e3.cbd8a087f");
    socialButtons.forEach(button => {
        // Agregar clase social-button
        button.className = 'social-button';
        const textButton = document.querySelector('.c182328cf.c9f0ba6a4');
        textButton.className = 'text-button';
        // Obtener el texto del botón directamente
        const text = button.textContent.trim();
        
        if (text && text.length > 2) {
            console.log('Texto del botón encontrado:', text);
            
            // Obtener el icono correspondiente
            const iconSrc = getIconForText(text);
            
            // Buscar el elemento de icono existente
            const iconElement = button.querySelector('span.ca247b1a9') || 
                               button.querySelector('span[class*="ca247b1a9"]') ||
                               button.querySelector('span:first-child');
            
            if (iconElement && iconSrc) {
                // Aplicar el icono como background-image con !important para sobrescribir el existente
                iconElement.style.setProperty('background-image', `url("${iconSrc}")`, 'important');
                iconElement.style.setProperty('background-size', '24px 24px', 'important');
                iconElement.style.setProperty('background-repeat', 'no-repeat', 'important');
                iconElement.style.setProperty('background-position', 'center', 'important');
                iconElement.style.setProperty('width', '24px', 'important');
                iconElement.style.setProperty('height', '24px', 'important');
                iconElement.style.setProperty('display', 'inline-block', 'important');
                
                // Limpiar cualquier contenido existente (iconos, texto, etc.)
                iconElement.innerHTML = '';
                
                console.log('Icono aplicado como background-image para:', text, 'con:', iconSrc);
            }
        }
    });

    // Función para obtener el icono basado en el texto del botón
    function getIconForText(text) {
        const lowerText = text.toLowerCase();
        
        // Mapeo dinámico de texto a iconos
        const iconMap = {
            'google': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/google-icon.svg',
            'authenticator': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/google-icon.svg',
            'correo': 'https://coppeltest.github.io/auth0/assets/email.svg',
            'email': 'https://coppeltest.github.io/auth0/assets/email.svg',
            'mensaje': 'https://coppeltest.github.io/auth0/assets/sms.svg',
            'sms': 'https://coppeltest.github.io/auth0/assets/sms.svg',
            'texto': 'https://coppeltest.github.io/auth0/assets/sms.svg',
            'guardian': 'https://coppeltest.github.io/auth0/assets/notification.svg',
            'notificación': 'https://coppeltest.github.io/auth0/assets/notification.svg',
            'notification': 'https://coppeltest.github.io/auth0/assets/notification.svg',
            'recupera': 'https://coppeltest.github.io/auth0/assets/code.svg',
            'código': 'https://coppeltest.github.io/auth0/assets/code.svg',
            'code': 'https://coppeltest.github.io/auth0/assets/code.svg',
            'llave': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/rebranding/fingerprint.svg',
            'security': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/rebranding/fingerprint.svg',
            'seguridad': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/rebranding/fingerprint.svg',
            'passkey': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/rebranding/fingerprint.svg',
            'microsoft': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/microsoft-icon.svg',
            'apple': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/apple-icon.svg'
        };
        
        // Buscar coincidencias en el texto
        for (const [keyword, iconSrc] of Object.entries(iconMap)) {
            if (lowerText.includes(keyword)) {
                return iconSrc;
            }
        }
        
        // Icono por defecto si no hay coincidencias
        return 'https://coppeltest.github.io/auth0/assets/sms.svg';
    }
});
