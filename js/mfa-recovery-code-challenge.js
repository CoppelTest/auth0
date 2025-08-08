    document.addEventListener('DOMContentLoaded', function () {

        const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
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
        /*     
        const main = document.querySelector('main._widget.c750085ad'); 
        const title = document.querySelector('h1.cded47f4b.c3871ca44');
        const subTitle = document.querySelector('.c31b86380.ca3fde804');
        const btnContinue = document.querySelector('.cea6d5264.c125e81f5.c8447a25a.ca798bf5e.c48cd8769');
        const inputEnterCode = document.querySelector('.c141f6ee9.cffa611b3.text.c206ae231.ulp-field.ca2723af5');
    
        const labelCode = document.querySelector('.cd36df9bd.c2d2ff081.c66f4bc7e');
        const input = document.getElementById('code');
        const btnChangeMethod = document.querySelector('.c78dfd5b3.ca9aac5f4.c7e1be07f');

        main.classList.remove('_widget', 'c750085ad');        
        title.className = 'title-container';
        subTitle.className = 'subtitle-container';
        btnContinue.className ='button-normal';
                                    
        inputEnterCode.className = 'c141f6ee9 cffa611b3 text c206ae231 ulp-field';
        input.className = 'email-input ce861d26a c5e190e5a';
        btnChangeMethod.classList.add('link');

        const errorSpan = document.getElementById('error-element-code');

        if(errorSpan){
            console.log('errorSpan:', errorSpan);
            inputEnterCode.className = 'c141f6ee9 cffa611b3 text c206ae231 c2f342594 c29c5cf1d ulp-field';
            input.className = 'input ce861d26a c5e190e5a';
            btnContinue.style.setProperty('margin-top', '25%', 'important');
        }else{
            console.log('errorSpan:', errorSpan);
            inputEnterCode.className = 'c141f6ee9 cffa611b3 text c206ae231 ulp-field';
        }

           */ 
            if (auth0Wrapper) {
                auth0Wrapper.style.removeProperty('display');
                auth0Wrapper.style.setProperty('height', 'inherit', 'important');
            }  

        
    });
