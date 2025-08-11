document.addEventListener('DOMContentLoaded', function () {
    const logoViejo = document.getElementById('custom-prompt-logo');
    if (logoViejo) {
        logoViejo.remove();
    }
    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    try {
        const main = auth0Wrapper.querySelector('main');
        const title = auth0Wrapper.querySelector('h1');
        const subTitle = auth0Wrapper.querySelector('header > div');
        const header = auth0Wrapper.querySelector('header');
        const divAfterHeader = auth0Wrapper.querySelector('main > section > div > div > div');
        main.classList.remove(...main.classList);
        header.style.setProperty('padding', '0 var(--spacing-0)', 'important');
        divAfterHeader.style.setProperty('padding', '0 var(--spacing-0)', 'important');
        title.className = 'title-container';
        subTitle.className = 'subtitle-container';
        const socialButtons = auth0Wrapper.querySelectorAll("button");
        socialButtons.forEach(button => {
            button.className = 'social-button';
            const spans = button.querySelectorAll('span');
            if (spans.length >= 3) {
                spans[1].classList.add('text-button');
                button.removeChild(spans[2]);
            }

            const text = button.textContent.trim();
            if (text && text.length > 2) {
                const iconSrc = getIconForText(text);
                const iconElement = button.querySelector('span') || 
                                button.querySelector('span:first-child');
                if (iconElement) {
                    iconElement.className = '';
                }
                if (iconElement && iconSrc) {
                    iconElement.style.setProperty('background-image', `url("${iconSrc}")`, 'important');
                    iconElement.style.setProperty('background-size', '24px 24px', 'important');
                    iconElement.style.setProperty('background-repeat', 'no-repeat', 'important');
                    iconElement.style.setProperty('background-position', 'center', 'important');
                    iconElement.style.setProperty('width', '24px', 'important');
                    iconElement.style.setProperty('height', '24px', 'important');
                    iconElement.style.setProperty('display', 'inline-block', 'important');
                    iconElement.innerHTML = '';
                }
            }
        });
        if (auth0Wrapper) {
            auth0Wrapper.style.removeProperty('display');
            auth0Wrapper.style.setProperty('height', 'inherit', 'important');
        }
        function getIconForText(text) {
            const lowerText = text.toLowerCase();
            const iconMap = {
                'notificación': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/notification.svg',
                'google': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/google-icon.svg',
                'mensaje': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/sms.svg',
                'correo': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/email.svg',
                'código': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/code.svg'
            };
            for (const [keyword, iconSrc] of Object.entries(iconMap)) {
                if (lowerText.includes(keyword)) {
                    return iconSrc;
                }
            }
            return 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/sms.svg';
        }
    } catch (error) {
        auth0Wrapper.style.removeProperty('display');
        auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
});
