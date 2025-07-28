document.addEventListener("DOMContentLoaded", function() {
    function extractButtonTexts() {
        const buttonTexts = [];
        
        const buttonTextElements = document.querySelectorAll('span[class*="button-text"]');
        
        buttonTextElements.forEach(element => {
            const text = element.textContent.trim();
            if (text && !buttonTexts.includes(text)) {
                buttonTexts.push(text);
            }
        });
        
        const newFormatElements = document.querySelectorAll('span.c182328cf.c9f0ba6a4');
        
        newFormatElements.forEach(element => {
            const text = element.textContent.trim();
            if (text && !buttonTexts.includes(text)) {
                buttonTexts.push(text);
            }
        });
        
        const flexibleElements = document.querySelectorAll('span[class*="c182328cf"], span[class*="c9f0ba6a4"]');
        
        flexibleElements.forEach(element => {
            const text = element.textContent.trim();
            if (text && !buttonTexts.includes(text) && !buttonTexts.includes(text)) {
                buttonTexts.push(text);
            }
        });
        
        const buttonSpans = document.querySelectorAll('button span');
        
        buttonSpans.forEach(element => {
            const text = element.textContent.trim();
            if (text && text.length > 0 && !buttonTexts.includes(text) && 
                !element.classList.contains('ca247b1a9')) {
                buttonTexts.push(text);
            }
        });
        
        return buttonTexts;
    }
    
    function createDynamicButtons() {
        const buttonTexts = extractButtonTexts();
        const container = document.getElementById('dynamic-buttons-container');
        
        if (!container) return;
        
        container.innerHTML = '';
        
        const targetTexts = [
            'Notificación Auth0 Guardian',
            'Google Authenticator o similar',
            'Mensaje de texto'
        ];
        
        const validTexts = buttonTexts.filter(text => 
            targetTexts.some(target => 
                text.toLowerCase().includes(target.toLowerCase()) ||
                target.toLowerCase().includes(text.toLowerCase())
            )
        );
        
        console.log('Textos específicos encontrados:', validTexts);
        
        validTexts.forEach((text, index) => {
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'button-container-mfa-begin-enroll-options';
            buttonDiv.style.marginTop = index > 0 ? '12px' : '0';
            
            const button = document.createElement('button');
            button.className = 'button-normal-mfa-begin-enroll-options';
            button.style.backgroundColor = '#FFFFFF';
            button.style.color = '#1B1A16';
            button.style.cursor = 'pointer';
            button.style.border = '1px solid #E0E0E0';
            button.style.borderRadius = '8px';
            button.style.padding = '16px 20px';
            button.style.fontFamily = "'Helvetica Neue', sans-serif";
            button.style.fontWeight = '400';
            button.style.fontSize = '16px';
            button.style.lineHeight = '24px';
            button.style.width = '100%';
            button.style.height = 'auto';
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'space-between';
            button.style.transition = 'all 0.2s ease';
            button.style.boxShadow = 'none';
            
            button.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#F8F9FA';
                this.style.borderColor = '#006FB9';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#FFFFFF';
                this.style.borderColor = '#E0E0E0';
            });
            
            const iconContainer = document.createElement('div');
            iconContainer.style.width = '24px';
            iconContainer.style.height = '24px';
            iconContainer.style.display = 'flex';
            iconContainer.style.alignItems = 'center';
            iconContainer.style.justifyContent = 'center';
            iconContainer.style.flexShrink = '0';
            
            let iconSrc = '';
            if (text.toLowerCase().includes('google')) {
                iconSrc = 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/google-icon.svg';
            } else if (text.toLowerCase().includes('microsoft')) {
                iconSrc = 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/microsoft-icon.svg';
            } else if (text.toLowerCase().includes('apple')) {
                iconSrc = 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/apple-icon.svg';
            } else if (text.toLowerCase().includes('passkey') || text.toLowerCase().includes('llave')) {
                iconSrc = 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/rebranding/fingerprint.svg';
            } else if (text.toLowerCase().includes('sms') || text.toLowerCase().includes('mensaje')) {
                iconSrc = 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/NotificacionCelular.svg';
            } else if (text.toLowerCase().includes('authenticator') || text.toLowerCase().includes('guardian')) {
                iconSrc = 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/rebranding/check-mark.svg';
            } else {
                iconSrc = 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/rebranding/Spot_Actions.svg';
            }
            
            const icon = document.createElement('img');
            icon.src = iconSrc;
            icon.alt = 'Icon';
            icon.style.width = '24px';
            icon.style.height = '24px';
            icon.style.objectFit = 'contain';
            
            iconContainer.appendChild(icon);
            
            const textContainer = document.createElement('div');
            textContainer.style.flex = '1';
            textContainer.style.textAlign = 'left';
            
            const span = document.createElement('span');
            span.className = 'button-text';
            span.textContent = text;
            span.style.color = '#1B1A16';
            span.style.fontWeight = '400';
            
            textContainer.appendChild(span);
            
            button.appendChild(iconContainer);
            button.appendChild(textContainer);
            buttonDiv.appendChild(button);
            container.appendChild(buttonDiv);
            
            button.addEventListener('click', function() {
                console.log('Botón dinámico clickeado:', text);
                
                const originalButton = findOriginalButton(text);
                
                if (originalButton) {
                    console.log('Ejecutando acción nativa del botón original');
                    originalButton.click();
                } else {
                    console.log('No se encontró el botón original para:', text);
                }
            });
        });
        
        console.log('Botones dinámicos creados con textos específicos:', validTexts);
    }
    
    function findOriginalButton(text) {
        const selectors = [
            'button span',
            'span[class*="button-text"]',
            'span.c182328cf.c9f0ba6a4',
            'span[class*="c182328cf"]',
            'span[class*="c9f0ba6a4"]'
        ];
        
        for (const selector of selectors) {
            const elements = document.querySelectorAll(selector);
            for (const element of elements) {
                const elementText = element.textContent.trim();
                if (elementText.toLowerCase().includes(text.toLowerCase()) ||
                    text.toLowerCase().includes(elementText.toLowerCase())) {
                    const button = element.closest('button');
                    if (button) {
                        return button;
                    }
                }
            }
        }
        
        return null;
    }
    createDynamicButtons();
});