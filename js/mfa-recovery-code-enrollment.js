document.addEventListener('DOMContentLoaded', function () {

        const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
        const main = document.querySelector('main');
        const title = document.querySelector('h1');
        const subTitle = main?.querySelector('p');
        const headerContainer = auth0Wrapper.querySelector('header');
        const btnContinue = document.querySelector('button[value="default"]');
        const btnCopyCode = main?.querySelector('button'); 


        main.className = '';
        headerContainer.classList.add('header-container');
        title.className = 'title-container';
        subTitle.className = 'subtitle-container';
        btnContinue.className ='button-normal';

        const checkbox = document.querySelector('input[type="checkbox"]');
        const checkBoxContainer = checkbox?.closest('div');
        checkbox.className ='';
        checkBoxContainer.classList.add('custom-checkbox-container');
        if (btnCopyCode) {
          btnCopyCode.classList.add('btn-copy-code');
          btnCopyCode.classList.add('span-copy-style');

        }
        if (auth0Wrapper) {
            auth0Wrapper.style.removeProperty('display');
            auth0Wrapper.style.setProperty('height', 'inherit', 'important');
         } 

    });
