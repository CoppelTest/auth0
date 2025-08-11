    document.addEventListener('DOMContentLoaded', function () {

        const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
        try {
        const main = auth0Wrapper.querySelector('main');
        const title = auth0Wrapper.querySelector('h1');
        const subTitle = main?.querySelector('p');
        const btnContinue = main?.querySelector('button[value="default"]');
        const inputEnterCode = document.querySelector('div[data-action-text]');
        const labelCode = inputEnterCode?.querySelector('label');
        const inputCode = document.getElementById('code');
        const btnChangeMethod = main?.querySelector('button[value="pick-authenticator"]');
        
        main.className = '';
        title.className = 'title-container';
        subTitle.className = 'subtitle-container';
        btnContinue.className ='button-normal';
        inputEnterCode.className = '';
        labelCode.className = 'text';
        inputCode.className = 'email-input';
        btnChangeMethod.classList.add('link');
        console.log('prueba3');

        const errorSpan = document.getElementById('error-element-code');
        const errorSpancs = document.getElementById('error-cs-code-required');
     
        if(errorSpan){
            console.log('errorSpan:', errorSpan);
            inputCode.style.border = '1px solid red';
            btnContinue.style.setProperty('margin-top', '22%', 'important');
        }else{
            console.log('errorSpan:', errorSpan);
            inputCode.style.border = '1px solid #C9C9C9';
        }

        const observer = new MutationObserver(function (mutationsList) {
        for (const mutation of mutationsList) {
                console.log('entra a observer:');
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class' &&
                errorSpancs.classList.contains('ulp-validator-error')
            ) {
                 
            inputCode.style.border = '1px solid red';
            btnContinue.style.setProperty('margin-top', '22%', 'important');
            }
        }
        
    });

    if (errorSpancs) {
        observer.observe(errorSpancs, {
            attributes: true,
            attributeFilter: ['class']
        });
        
    }
            if (auth0Wrapper) {
                auth0Wrapper.style.removeProperty('display');
                auth0Wrapper.style.setProperty('height', 'inherit', 'important');
            }  

        } catch (error) {
        auth0Wrapper.style.removeProperty('display');
        }
    });
