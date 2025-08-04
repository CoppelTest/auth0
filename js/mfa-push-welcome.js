document.addEventListener('DOMContentLoaded', function () {
  // Función para agregar clase a un elemento
  const addClass = (selector, className) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.add(className);
    }
  };

  // Función para aplicar estilo en línea
  const applyStyle = (selector, styles) => {
    const element = document.querySelector(selector);
    if (element) {
      Object.assign(element.style, styles);
    }
  };

  // Función para agregar estilos CSS al documento
  const addStyle = (css) => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);
  };

  // Modificaciones del contenedor principal
  const mainContainer = document.querySelector('main._widget');
  if (mainContainer) {
    mainContainer.classList.remove('_widget', 'c7f43d5ad');
  }

  // Modificar el título y subtítulo
  addClass('h1.cded47f4b', 'title-container');
  const pageSubTitle = document.querySelector('.c31b86380.ca3fde804');
  if (pageSubTitle) {
    pageSubTitle.className = 'subtitle-container';
    pageSubTitle.style.paddingTop = '25px';
  }

  // Eliminar clase de un div específico
  const specificDiv = document.querySelector('div.c004e7dda');
  if (specificDiv) {
    specificDiv.className = '';
  }

  // Cambiar clases y aplicar estilos para los botones sociales
  addClass('div.cea6d5264', 'social-button');
  addClass('span.ca247b1a9', 'icon');
  addClass('span.ca247b1a9.c3a7348c2', 'icon');

  // Modificar el botón "Continuar"
  const continueButton = document.querySelector('button.cea6d5264.c125e81f5.c8447a25a.c87c7c5b1.c99f1fda7');
  if (continueButton) {
    continueButton.className = 'button-normal';
    continueButton.style.fontSize = '14px';
  }

  // Agregar estilos dinámicamente
  addStyle(`
    .icon {
      position: relative;
      display: block;
      top: 8px !important;
      left: 8px !important;
    }
    button:focus, a:focus {
      outline: none;
    }
    .link {
      color: #1c42e8 !important;
      font-size: 16px !important;
    }
  `);

  // Modificar los spans dentro de los botones sociales
  const socialButtonSpans = document.querySelectorAll('.social-button span');
  socialButtonSpans.forEach(span => {
    span.style.color = '#081754';
    span.style.fontFamily = 'var(--Family-body, Poppins)';
  });

  // Aplicar la clase "link" al botón de autenticación
  const authButton = document.querySelector('button[name="action"][value="pick-authenticator"]');
  if (authButton) {
    authButton.classList.add('link');
  }

  // Ajustar el footer
  const footer = document.querySelector('footer');
  if (footer) {
    footer.style.marginTop = 'auto';
  }
});
