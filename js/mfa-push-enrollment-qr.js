document.addEventListener('DOMContentLoaded', function () {
  var mainWidgetContainer = document.querySelector('main._widget');
  mainWidgetContainer.classList.remove('_widget', 'c7f43d5ad');
  var pageTitle = document.querySelector('h1.cded47f4b');
  pageTitle.className = 'title-container';
  var pageSubTitle = document.querySelector('.c31b86380.ca3fde804');
  pageSubTitle.className = 'subtitle-container';
  pageSubTitle.style.paddingTop = '25px';
  var pageImage = document.querySelector('img.cbdc23fe5');
  pageImage.style.border = 'none';
  var continueButton = document.querySelector('button.cea6d5264.c6a8be725.js-required.c8447a25a.cbd8a087f.c404de425.cc0e0bd0e');
  continueButton.className = 'button-normal';
  var copyCodeLink = document.querySelector('a.cf848612d.c7e1be07f');
  copyCodeLink.style.color = 'white';
  copyCodeLink.innerText = 'Copiar como código';
  var secondButton = document.querySelector('button.c78dfd5b3.ca9aac5f4.c7e1be07f');
  secondButton.style.color = '#1C42E8';
   const linkStyle = document.createElement('style');
  linkStyle.innerHTML = `
    .link {
      color: #1c42e8 !important;
      font-size: 16px !important;
    } `;
  document.head.appendChild(linkStyle);
  const button = document.querySelector('button[name="action"][value="pick-authenticator"]');
  if (button) {
    button.classList.add('link');
  }
});
