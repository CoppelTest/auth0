document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main._widget.c35245740');
    const title = document.querySelector('c674cdded__title');
    //const subTitle = document.querySelector('.c31b86380.ca3fde804');

    if (window.innerWidth <= 600) {
        const spaceDiv = document.querySelector('.ca40fca87.c7f03c812');
        spaceDiv.style.setProperty('padding', '0 var(--spacing-0)', 'important');
    }
    title.className = 'title-container';
    //subTitle.className = 'subtitle-container'; 
    const socialButtons = document.querySelectorAll(".c78dfd5b3.c00bfb08d.cac488521.ca0c96df3.c6b0cc0b9.c5c314304");
    document.getElementById('auth0-hidden-wrapper').style.display = 'block';
    socialButtons.forEach(button => {
        button.className = 'social-button';
        const textButton = document.querySelector('.c182328cf.c9f0ba6a4');
        textButton.className = 'text-button';
        const spanToRemove = button.querySelector('span.ca247b1a9.c0d0e7438.c2237a039');
        if (spanToRemove) {
            spanToRemove.remove();
        }
        const text = button.textContent.trim();
        if (text && text.length > 2) {
            const iconSrc = getIconForText(text);
            const iconElement = button.querySelector('span.ca247b1a9') || 
                               button.querySelector('span[class*="ca247b1a9"]') ||
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
    function getIconForText(text) {
        const lowerText = text.toLowerCase();
        const iconMap = {
            'notificación': 'https://coppeltest.github.io/auth0/assets/notification.svg',
            'google': 'https://cdn2.coppel.com/images/emarketing/Materiales/assets/google-icon.svg',
            'mensaje': 'https://coppeltest.github.io/auth0/assets/sms.svg',
            'correo': 'https://coppeltest.github.io/auth0/assets/email.svg',
            'código': 'https://coppeltest.github.io/auth0/assets/code.svg'
        };
        for (const [keyword, iconSrc] of Object.entries(iconMap)) {
            if (lowerText.includes(keyword)) {
                return iconSrc;
            }
        }
        return 'https://coppeltest.github.io/auth0/assets/sms.svg';
    }
});
