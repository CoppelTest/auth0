document.addEventListener('DOMContentLoaded', function () {

        const main = document.querySelector('main._widget');
        const title = document.querySelector('h1.cded47f4b');
        const subTitle = document.querySelector('.c31b86380.ca3fde804');
        const btnScan = document.querySelector('.c78dfd5b3._link-toggle-view.c7e1be07f');
        const btnChangeMethod = document.querySelector('.c78dfd5b3.ca9aac5f4.c7e1be07f');
        const btnLogin = document.querySelector('.cea6d5264.c125e81f5.c8447a25a.ca798bf5e.c48cd8769');
        const labelCode = document.querySelector('.cd36df9bd.c2d2ff081.c66f4bc7e');
        const inputEnterCode = document.querySelector('.c141f6ee9.cffa611b3.text.c206ae231.ulp-field.ca2723af5');
        const enterCode = document.querySelector('.c141f6ee9.cffa611b3.text.c206ae231.ulp-field.ca2723af5');
        const input = document.getElementById('code');

        main.classList.remove('_widget', 'c7f43d5ad');
        title.className = 'title-container';
        btnLogin.className ='button-normal';
        subTitle.className = 'subtitle-container';
        input.className = 'email-input';
        labelCode.className = 'c2d2ff081 c66f4bc7e';
        enterCode.className = 'c141f6ee9 cffa611b3 text c206ae231 ulp-field';
        btnScan.classList.add('link');
        btnChangeMethod.classList.add('link');


        const errorSpan = document.getElementById('error-element-code');
        const errorSpancs = document.getElementById('error-cs-code-required');


                // Función que actualiza el estilo si hay error
        function applyErrorStyles() {
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
        const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
            if (auth0Wrapper) {
                auth0Wrapper.style.removeProperty('display');
            } 


 

    

    });
