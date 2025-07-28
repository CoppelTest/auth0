document.addEventListener("DOMContentLoaded", function() {
            // Función para extraer dinámicamente los textos de los botones
            function extractButtonTexts() {
                const buttonTexts = [];
                
                // Buscar el elemento main
                const mainElement = document.querySelector('main');
                if (!mainElement) {
                    console.log('No se encontró el elemento main');
                    return buttonTexts;
                }
                
                // Buscar todos los elementos span con clase button-text (formato original) dentro de main
                const buttonTextElements = mainElement.querySelectorAll('span[class*="button-text"]');
                
                buttonTextElements.forEach(element => {
                    const text = element.textContent.trim();
                    if (text && !buttonTexts.includes(text)) {
                        buttonTexts.push(text);
                    }
                });
                
                // Buscar elementos span con clases específicas del nuevo formato (c182328cf c9f0ba6a4) dentro de main
                const newFormatElements = mainElement.querySelectorAll('span.c182328cf.c9f0ba6a4');
                
                newFormatElements.forEach(element => {
                    const text = element.textContent.trim();
                    if (text && !buttonTexts.includes(text)) {
                        buttonTexts.push(text);
                    }
                });
                
                // Buscar también elementos span que contengan estas clases de manera más flexible dentro de main
                const flexibleElements = mainElement.querySelectorAll('span[class*="c182328cf"], span[class*="c9f0ba6a4"]');
                
                flexibleElements.forEach(element => {
                    const text = element.textContent.trim();
                    if (text && !buttonTexts.includes(text) && !buttonTexts.includes(text)) {
                        buttonTexts.push(text);
                    }
                });
                
                // Buscar elementos span dentro de botones que contengan texto dentro de main
                const buttonSpans = mainElement.querySelectorAll('button span');
                
                buttonSpans.forEach(element => {
                    const text = element.textContent.trim();
                    if (text && text.length > 0 && !buttonTexts.includes(text) && 
                        !element.classList.contains('ca247b1a9')) { // Excluir elementos de iconos
                        buttonTexts.push(text);
                    }
                });
                
                // Buscar también por el texto completo de cada botón (concatenando todos los spans)
                const allButtons = mainElement.querySelectorAll('button');
                allButtons.forEach(button => {
                    const spans = button.querySelectorAll('span');
                    let fullButtonText = '';
                    
                    spans.forEach(span => {
                        const spanText = span.textContent.trim();
                        if (spanText && !span.classList.contains('ca247b1a9')) {
                            fullButtonText += spanText + ' ';
                        }
                    });
                    
                    fullButtonText = fullButtonText.trim();
                    if (fullButtonText && !buttonTexts.includes(fullButtonText)) {
                        buttonTexts.push(fullButtonText);
                    }
                });
                
                console.log('Búsqueda realizada dentro del elemento main');
                return buttonTexts;
            }
            
            // Función para crear nuevos botones
            function createDynamicButtons() {
                const buttonTexts = extractButtonTexts();
                const container = document.getElementById('dynamic-buttons-container');
                
                if (!container) return;
                
                // Limpiar contenedor
                container.innerHTML = '';
                
                // Filtrar textos válidos (excluir textos vacíos o muy cortos)
                const validTexts = buttonTexts.filter(text => 
                    text && text.trim().length > 0 && text.trim().length < 100
                );
                
                console.log('Todos los textos de botones encontrados:', validTexts);
                
                // Crear botones para todos los textos encontrados
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
                    button.style.borderRadius = '999px';
                    button.style.padding = '16px 20px';
                    button.style.fontFamily = "'Helvetica Neue', sans-serif";
                    button.style.fontWeight = '600';
                    button.style.fontSize = '16px';
                    button.style.lineHeight = '24px';
                    button.style.width = '100%';
                    button.style.height = 'auto';
                    button.style.display = 'flex';
                    button.style.alignItems = 'center';
                    button.style.justifyContent = 'flex-start';
                    button.style.gap = '12px';
                    button.style.transition = 'all 0.2s ease';
                    button.style.boxShadow = 'none';
                    
                    // Efecto hover
                    button.addEventListener('mouseenter', function() {
                        this.style.backgroundColor = '#F8F9FA';
                        this.style.borderColor = '#006FB9';
                    });
                    
                    button.addEventListener('mouseleave', function() {
                        this.style.backgroundColor = '#FFFFFF';
                        this.style.borderColor = '#E0E0E0';
                    });
                    
                    // Crear icono (usar iconos diferentes según el texto)
                    const iconContainer = document.createElement('div');
                    iconContainer.style.width = '24px';
                    iconContainer.style.height = '24px';
                    iconContainer.style.display = 'flex';
                    iconContainer.style.alignItems = 'center';
                    iconContainer.style.justifyContent = 'center';
                    iconContainer.style.flexShrink = '0';
                    
                    // Asignar iconos según el texto
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
                        // Icono por defecto
                        iconSrc = 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/rebranding/Spot_Actions.svg';
                    }
                    
                    const icon = document.createElement('img');
                    icon.src = iconSrc;
                    icon.alt = 'Icon';
                    icon.style.width = '24px';
                    icon.style.height = '24px';
                    icon.style.objectFit = 'contain';
                    
                    iconContainer.appendChild(icon);
                    
                    // Crear contenedor de texto
                    const textContainer = document.createElement('div');
                    textContainer.style.flex = '1';
                    textContainer.style.textAlign = 'left';
                    
                    const span = document.createElement('span');
                    span.className = 'button-text';
                    span.textContent = text;
                    span.style.color = '#081754';
                    span.style.fontWeight = '600';
                    
                    textContainer.appendChild(span);
                    
                    // Agregar elementos al botón
                    button.appendChild(iconContainer);
                    button.appendChild(textContainer);
                    buttonDiv.appendChild(button);
                    container.appendChild(buttonDiv);
                    
                    // Buscar el botón original correspondiente y agregar evento click
                    button.addEventListener('click', function() {
                        console.log('Botón dinámico clickeado:', text);
                        
                        // Buscar el botón original que contenga este texto
                        const originalButton = findOriginalButton(text);
                        
                        if (originalButton) {
                            console.log('Ejecutando acción nativa del botón original');
                            originalButton.click();
                        } else {
                            console.log('No se encontró el botón original para:', text);
                        }
                    });
                });
                
                console.log('Botones dinámicos creados con todos los textos:', validTexts);
            }
            
            // Función para encontrar el botón original
            function findOriginalButton(text) {
                // Buscar el elemento main
                const mainElement = document.querySelector('main');
                if (!mainElement) {
                    console.log('No se encontró el elemento main para buscar botón original');
                    return null;
                }
                
                console.log('Buscando botón original para texto:', text);
                
                // Buscar todos los botones dentro de main
                const allButtons = mainElement.querySelectorAll('button');
                console.log('Total de botones encontrados:', allButtons.length);
                
                // Buscar por texto exacto en todos los botones
                for (const button of allButtons) {
                    const spans = button.querySelectorAll('span');
                    
                    for (const span of spans) {
                        const spanText = span.textContent.trim();
                        console.log('Comparando:', `"${spanText}"` + ' vs ' + `"${text}"`);
                        
                        // Comparación exacta (case insensitive)
                        if (spanText.toLowerCase() === text.toLowerCase()) {
                            console.log('¡Match exacto encontrado!', button);
                            return button;
                        }
                    }
                }
                
                // Si no se encuentra por action, buscar por texto exacto
                for (const button of allButtons) {
                    const spans = button.querySelectorAll('span');
                    
                    for (const span of spans) {
                        const spanText = span.textContent.trim();
                        console.log('Comparando:', `"${spanText}"` + ' vs ' + `"${text}"`);
                        
                        // Comparación exacta (case insensitive)
                        if (spanText.toLowerCase() === text.toLowerCase()) {
                            console.log('¡Match exacto encontrado!', button);
                            return button;
                        }
                    }
                }
                
                // Si no hay match exacto, buscar por contenido parcial pero más específico
                for (const button of allButtons) {
                    const spans = button.querySelectorAll('span');
                    let buttonText = '';
                    
                    // Concatenar todos los textos del botón
                    spans.forEach(span => {
                        const spanText = span.textContent.trim();
                        if (spanText && !span.classList.contains('ca247b1a9')) { // Excluir iconos
                            buttonText += spanText + ' ';
                        }
                    });
                    
                    buttonText = buttonText.trim();
                    console.log('Texto completo del botón:', `"${buttonText}"`);
                    
                    // Comparación más específica
                    if (buttonText.toLowerCase().includes(text.toLowerCase()) && 
                        text.toLowerCase().includes(buttonText.toLowerCase())) {
                        console.log('¡Match por contenido completo!', button);
                        return button;
                    }
                }
                
                console.log('No se encontró botón original para:', text);
                return null;
            }
            
            // Ejecutar la creación de botones dinámicos
            createDynamicButtons();
        });
