document.addEventListener('DOMContentLoaded', function () {
  const mainContainer = document.querySelector('main._widget');
  mainContainer.classList.remove('_widget', 'c7f43d5ad');
  const pageTitle = document.querySelector('h1.cded47f4b');
  pageTitle.className = 'title-container';
  const pageSubTitle = document.querySelector('.c31b86380.ca3fde804');
  pageSubTitle.className = 'subtitle-container';
  pageSubTitle.style.paddingTop = '25px';
  const specificDiv = document.querySelector('div.c004e7dda');
  specificDiv.className = '';
  const socialButton = document.querySelector('div.cea6d5264');
  socialButton.className = 'social-button';
  const socialIconSpan = document.querySelector('span.ca247b1a9');
  socialIconSpan.classList.add('icon');
  const socialButtonRepeat = document.querySelector('div.cea6d5264');
  socialButtonRepeat.className = 'social-button';
  const secondSocialIconSpan = document.querySelector('span.ca247b1a9.c3a7348c2');
  secondSocialIconSpan.classList.add('icon');
  const continueButton = document.querySelector('button.cea6d5264.c125e81f5.c8447a25a.c87c7c5b1.c99f1fda7');
  continueButton.className = 'button-normal';
  continueButton.style.fontSize = '14px !important';
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
  .icon {
      position: relative;
      display: block;
      top: 8px !important;
      left: 8px !important;
  } `;
  document.head.appendChild(styleElement);
});
