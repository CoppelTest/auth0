document.addEventListener('DOMContentLoaded', function () {
        const main = document.querySelector('main._widget');
        const title = document.querySelector('h1.cded47f4b');
        const subTitle = document.querySelector('.c31b86380.ca3fde804');
        const btnScan = document.querySelector('.c78dfd5b3._link-toggle-view.c7e1be07f');
        const btnChangeMethod = document.querySelector('.c78dfd5b3.ca9aac5f4.c7e1be07f');
        const btnLogin = document.querySelector('.cea6d5264.c125e81f5.c8447a25a.ca798bf5e.c48cd8769');
        const labelCode = document.querySelector('.cd36df9bd.c2d2ff081.c66f4bc7e');
        const enterCode = document.querySelector('.c141f6ee9.cffa611b3.text.c206ae231.ulp-field.ca2723af5');
        const inputEnterCode = document.querySelector('.c141f6ee9.cffa611b3.text.c206ae231.ulp-field.ca2723af5');
        const input = document.getElementById('code');
        const btnCopyCode = document.querySelector('.cea6d5264.c6a8be725.js-required.c8447a25a.cbd8a087f.c404de425.cc0e0bd0e');
        const txtCode = document.querySelector('.input.multiline');
        const spanCopy = document.querySelector('.cea6d5264 span');

        main.classList.remove('_widget', 'c7f43d5ad');
        title.className = 'title-container';
        btnLogin.className ='button-normal';
        subTitle.className = 'subtitle-container';
        input.className = 'email-input';
        labelCode.className = 'c2d2ff081 c66f4bc7e';
        enterCode.className = '.c141f6ee9 cffa611b3 text c206ae231 ulp-field';
        btnScan.classList.add('link');
        btnChangeMethod.classList.add('link');
        btnCopyCode.classList.add('btn-copy-code');
        txtCode.classList.add('mi-multiline');
        spanCopy.classList.add('span-copy-style');
        
});
