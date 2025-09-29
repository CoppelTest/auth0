document.addEventListener('DOMContentLoaded', function () {

    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    try {
    const main = auth0Wrapper.querySelector('main');
    const titles = auth0Wrapper.querySelectorAll('h1');
    const ulSection = auth0Wrapper.querySelector('ul');
    const header = auth0Wrapper.querySelector('header');
    const divContainer = auth0Wrapper.querySelector('header > div');
    const firstH1 = auth0Wrapper.querySelector('header > div h1');
	const secondH1 = auth0Wrapper.querySelector('header > h1');
	secondH1.style.display = 'none';
	firstH1.className = '';
    firstH1.classList.add('title-container');

    divContainer.style.setProperty('padding', '50px 0px 5px', 'important');

    if (divContainer) {
      const containerChild = divContainer.querySelector('div');
    }
    main.classList.remove(...main.classList);
    const spaceDiv = header.nextElementSibling;
    spaceDiv.style.setProperty('padding', '0px 0px', 'important');
    header.style.setProperty('border-bottom', '0px', 'important');
    if (titles.length >= 2) {
      const secondH1 = titles[1];
      secondH1.className = 'title-container';
    }

    const socialButtons = ulSection?.querySelectorAll('button');
    ulSection.classList.remove(...ulSection.classList);
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


    if (auth0Wrapper) {
        auth0Wrapper.style.removeProperty('display');
        auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }

    } catch (error) {
        
        auth0Wrapper.style.removeProperty('display');
    }
    });

