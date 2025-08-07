document.addEventListener('DOMContentLoaded', function () {
    const logoViejo = document.getElementById('custom-prompt-logo');
    if (logoViejo) {
        logoViejo.remove();
    }
    const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
    
    if (auth0Wrapper) {
        auth0Wrapper.style.removeProperty('display');
        auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
});
