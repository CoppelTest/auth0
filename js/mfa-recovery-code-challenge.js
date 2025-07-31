    document.addEventListener('DOMContentLoaded', function () {
             
        const main = document.querySelector('main._widget.c750085ad'); 
        const title = document.querySelector('h1.cded47f4b.c3871ca44');
        const subTitle = document.querySelector('.c31b86380.ca3fde804');
        const btnContinue = document.querySelector('.cea6d5264.c125e81f5.c8447a25a.ca798bf5e.c48cd8769');
        const inputEnterCode = document.querySelector('.c141f6ee9.cffa611b3.text.c206ae231.ulp-field.ca2723af5');
    
        const labelCode = document.querySelector('.cd36df9bd.c2d2ff081.c66f4bc7e');
        const input = document.getElementById('code');
        const btnChangeMethod = document.querySelector('.c78dfd5b3.ca9aac5f4.c7e1be07f');

        const form = document.querySelector('form[data-form-primary="true"]');

        main.classList.remove('_widget', 'c750085ad');        
        title.className = 'title-container';
        subTitle.className = 'subtitle-container';
        btnContinue.className ='button-normal';
                                    
        //inputEnterCode.className = 'c141f6ee9 cffa611b3 text c206ae231 ulp-field';
        //inputEnterCode.className = 'c141f6ee9 cffa611b3 text c206ae231 c2f342594 c29c5cf1d ulp-field';
        //labelCode.className = 'c2d2ff081 c66f4bc7e';
        //input.className = 'email-input input ce861d26a c5e190e5a';
        btnChangeMethod.classList.add('link');
        const errorSpan = document.getElementById('error-element-code');
        console.log('errorSpan:', errorSpan);

        
        document.getElementById('auth0-hidden-wrapper').style.display = 'block';
       
    });
