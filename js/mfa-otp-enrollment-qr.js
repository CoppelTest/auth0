document.addEventListener('DOMContentLoaded', function () {

        const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
        const main = auth0Wrapper.querySelector('main');
        const title = auth0Wrapper.querySelector('h1');

        //const subTitle = document.querySelector('.c31b86380.ca3fde804');
        const subTitle = main?.querySelector('p');
        //const btnScan = document.querySelector('.c78dfd5b3._link-toggle-view.c7e1be07f');
        const btnScan = main?.querySelector('button[value="toggle-view"]');
         //const btnChangeMethod = document.querySelector('.c78dfd5b3.ca9aac5f4.c7e1be07f');
        const btnChangeMethod = main?.querySelector('button[value="pick-authenticator"]');
        //const btnLogin = document.querySelector('.cea6d5264.c125e81f5.c8447a25a.ca798bf5e.c48cd8769');
        const btnLogin = main?.querySelector('button[value="default"]');
        
        //const labelCode = document.querySelector('.cd36df9bd.c2d2ff081.c66f4bc7e');
        const labelCode = document.querySelector('div[data-action-text][data-alternate-action-text]');
        //const inputEnterCode = document.querySelector('.c141f6ee9.cffa611b3.text.c206ae231.ulp-field.ca2723af5');
        //const enterCode = document.querySelector('.c141f6ee9.cffa611b3.text.c206ae231.ulp-field.ca2723af5');
        //const input = document.getElementById('code');
        const inputCode = document.querySelector('[type="text"][aria-required="true"]');
        

        main.className = '';
        title.className = 'title-container';
        btnLogin.className ='button-normal';
        subTitle.className = 'subtitle-container';
        inputCode.className = 'email-input';
        labelCode.className = '';
        //enterCode.className = 'c141f6ee9 cffa611b3 text c206ae231 ulp-field';

        btnScan.classList.add('link');
        btnChangeMethod.classList.add('link');


        const errorSpan = document.getElementById('error-element-code');
        const errorSpancs = document.getElementById('error-cs-code-required');


                // Función que actualiza el estilo si hay error
        /*
        function applyErrorStyles() {
                console.log('entra a applyErrorStyles:');
                inputEnterCode.className = 'c141f6ee9 cffa611b3 text c206ae231 c2f342594 c29c5cf1d ulp-field';
                input.className = 'input ce861d26a c5e190e5a';
        }

        // Si ya existe error de código (ej. server-side render)
        if (errorSpan) {
                applyErrorStyles();
        }else{
                console.log('errorSpan:', errorSpan);
                inputEnterCode.className = 'cffa611b3 text c206ae231 ulp-field';
        }
        
        // Observa cambios en las clases del error-cs-code-required
        const observer = new MutationObserver(function (mutationsList) {
        for (const mutation of mutationsList) {
                console.log('entra a observer:');
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'class' &&
                errorSpancs.classList.contains('ulp-validator-error')
            ) {
                 
                applyErrorStyles();
            }
        }
        
    });

    if (errorSpancs) {
        observer.observe(errorSpancs, {
            attributes: true,
            attributeFilter: ['class']
        });
        
    }
    */
            if (auth0Wrapper) {
                auth0Wrapper.style.removeProperty('display');
            } 


 

    

    });
