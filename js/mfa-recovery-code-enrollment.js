document.addEventListener('DOMContentLoaded', function () {
        
        const main = document.querySelector('main._widget.caa90f795'); 
        const title = document.querySelector('h1.cded47f4b.c3871ca44');
        const subTitle = document.querySelector('.c31b86380.ca3fde804');
        const btnContinue = document.querySelector('.cea6d5264.c125e81f5.c8447a25a.ca798bf5e.c354a5c85');
        const spanSavedCode = document.querySelector('.cdf1d7eb2.c2baadf66');
        
        main.classList.remove('_widget', 'caa90f795');        
        title.className = 'title-container';
        subTitle.className = 'subtitle-container';
        btnContinue.className ='button-normal';
        spanSavedCode.classList.add('text');
        const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
            if (auth0Wrapper) {
                auth0Wrapper.style.removeProperty('display');
                auth0Wrapper.style.setProperty('height', 'inherit', 'important');
            } 

    });
