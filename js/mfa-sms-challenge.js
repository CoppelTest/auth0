document.addEventListener('DOMContentLoaded', function () {
    const logoViejo = document.getElementById('custom-prompt-logo');
    if (logoViejo) {
        logoViejo.remove();
    }
    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    const main = auth0Wrapper.querySelector('main');
    const title = auth0Wrapper.querySelector('h1');
    const subTitle = auth0Wrapper.querySelector('main > section > div > div > header');
    const header = auth0Wrapper.querySelector('main > section > div > div > header');
    const divAfterHeader = auth0Wrapper.querySelector('main > section > div > div > div');
    main.classList.remove(...main.classList);
    header.style.setProperty('padding', '0 var(--spacing-0)', 'important');
    divAfterHeader.style.setProperty('padding', '0 var(--spacing-0)', 'important');
    title.className = 'title-container';
    subTitle.className = 'subtitle-container';
    
    
    if (auth0Wrapper) {
        auth0Wrapper.style.removeProperty('display');
        auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
});
