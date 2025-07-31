document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main._widget');
    const title = document.querySelector('h1.cded47f4b');
    const subTitle = document.querySelector('.c31b86380.ca3fde804');
    const btnScan = document.querySelector('.c78dfd5b3._link-toggle-view.c7e1be07f');

    if (main) main.classList.remove('_widget', 'c7f43d5ad');
    if (title) title.className = 'title-container';
    if (subTitle) subTitle.className = 'subtitle-container';
    
    // Agregar clase social-button a los botones específicos
    const socialButtons = document.querySelectorAll(".cea6d5264.c6a8be725.c6b0cc0b9.cba3063e3.cbd8a087f");
    socialButtons.forEach(button => {
        button.classList.add('social-button');
        console.log('Clase social-button agregada a:', button);
    });
    
    // Mostrar el wrapper oculto
    const hiddenWrapper = document.getElementById('autho-hidden-wrapper');
    if (hiddenWrapper) hiddenWrapper.style.display = 'block';

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
    
    // Función para extraer el texto del botón de manera dinámica
    function getButtonText(button) {
        // Buscar en diferentes selectores posibles para el texto
        const textSelectors = [
            'span.c182328cf.c9f0ba6a4',
            'span[class*="c182328cf"]',
            'span[class*="c9f0ba6a4"]',
            'span[class*="button-text"]',
            'span[class*="text"]',
            'span:not([class*="ca247b1a9"])', // Excluir elementos de icono
            'span'
        ];
        
        for (const selector of textSelectors) {
            const elements = button.querySelectorAll(selector);
            for (const element of elements) {
                const text = element.textContent.trim();
                // Verificar que el texto sea significativo (más de 2 caracteres y no solo espacios)
                if (text && text.length > 2 && !/^\s*$/.test(text)) {
                    // Verificar que no sea un elemento de icono
                    if (!element.classList.contains('ca247b1a9') && 
                        !element.querySelector('img') && 
                        !element.querySelector('svg')) {
                        return text;
                    }
                }
            }
        }
        
        return null;
    }
    
    // Función para reemplazar iconos en botones de manera dinámica
    function replaceButtonIcons() {
        // Usar específicamente los botones con las clases de Auth0
        const buttons = document.querySelectorAll(".cea6d5264.c6a8be725.c6b0cc0b9.cba3063e3.cbd8a087f");
        
        buttons.forEach(button => {
            // Obtener el texto del botón
            const buttonText = getButtonText(button);
            
            if (buttonText) {
                console.log('Texto del botón encontrado:', buttonText);
                
                // Obtener el icono correspondiente
                const iconSrc = getIconForText(buttonText);
                
                // Buscar el elemento de icono existente
                const iconElement = button.querySelector('span.ca247b1a9') || 
                                   button.querySelector('span[class*="ca247b1a9"]') ||
                                   button.querySelector('span:first-child');
                
                if (iconElement && iconSrc) {
                    iconElement.style.setProperty('background-image', `url("${iconSrc}")`, 'important');
                    iconElement.style.setProperty('background-size', '24px 24px', 'important');
                    iconElement.style.setProperty('background-repeat', 'no-repeat', 'important');
                    iconElement.style.setProperty('background-position', 'center', 'important');
                    iconElement.style.setProperty('width', '24px', 'important');
                    iconElement.style.setProperty('height', '24px', 'important');
                    iconElement.style.setProperty('display', 'inline-block', 'important');
                    
                    // Limpiar cualquier contenido existente (iconos, texto, etc.)
                    iconElement.innerHTML = '';
                }
            }
        });
    }
    replaceButtonIcons(replaceButtonIcons);
});
