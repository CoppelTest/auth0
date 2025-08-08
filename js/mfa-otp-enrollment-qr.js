document.addEventListener('DOMContentLoaded', function () {

 const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
try {
      
        const main = auth0Wrapper.querySelector('main');
        const title = auth0Wrapper.querySelector('h1');

        const subTitle = main?.querySelector('p');
        const btnScan = main?.querySelector('button[value="toggle-view"]');
        const btnChangeMethod = main?.querySelector('button[value="pick-authenticator"]');
        const btnContinuar = main?.querySelector('button[value="default"]');
        
        const labelCodeContainer = document.querySelector('div[data-action-text][data-alternate-action-text]');
        const labelCode = labelCodeContainer?.querySelector('label');
        const inputCode = document.querySelector('[type="text"][aria-required="true"]');
        

        main.className = '';
        title.className = 'title-container';
        btnContinuar.className ='button-normal';
        inputCode.className = 'email-input';
        labelCodeContainer.className = '';
        labelCode.className = 'text';
        btnScan.classList.add('link');
        btnChangeMethod.classList.add('link');

        
        if (subTitle) {
          const fullText = subTitle.textContent || '';
          console.log(fullText);
          const parts = fullText.split(/2-\s*/);
          
          if (parts.length === 2) {
            const firstText = parts[0].trim(); // Esto incluirá "1- ..."
            const secondText = '2- ' + parts[1].trim();
        
            subTitle.textContent = firstText;
            subTitle.className = 'subtitle-container';
        
            const secondP = document.createElement('p');
            secondP.className = 'subtitle-container';
            secondP.textContent = secondText;
        
            subTitle.insertAdjacentElement('afterend', secondP);
          }
        }

        
        const errorSpan = document.getElementById('error-element-code');
        const errorSpancs = document.getElementById('error-cs-code-required');

        if(errorSpan){
            inputCode.style.border = '1px solid red';
            btnContinuar.style.setProperty('margin-top', '22%', 'important');
        }else{
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
            btnContinuar.style.setProperty('margin-top', '22%', 'important');
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
            } 

        } catch (error) {
        
        auth0Wrapper.style.removeProperty('display');
    }
    

    });
