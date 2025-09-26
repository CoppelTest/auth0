document.addEventListener("DOMContentLoaded", function () {
  const auth0Wrapper = document.getElementById("auth0-hidden-wrapper");
  try {
 	  const main = auth0Wrapper.querySelector("main");
    const title = auth0Wrapper.querySelector("h1");
    const subTitle = main?.querySelector("p");
    if (subTitle) {
      subTitle.style.paddingTop = '25px';
    }
    const btnContinue = main?.querySelector('button[value="default"]');
    const inputEnterCode = document.querySelector("div[data-action-text]");
    const labelCode = inputEnterCode?.querySelector("label");
    const inputCode = document.getElementById("code");
    const btnChangeMethod = main?.querySelector('button[value="pick-authenticator"]');
    auth0Wrapper.style.fontFamily = "'Poppins', sans-serif";
    if (main) main.className = "";
    if (title) title.className = "title-container";
    if (subTitle) subTitle.className = "subtitle-container";
    if (btnContinue) btnContinue.className = "button-normal";
    if (inputEnterCode) inputEnterCode.className = "";
    if (labelCode) labelCode.className = "text";
    if (inputCode) inputCode.className = "email-input";
    const errorSpan = document.getElementById("error-element-code");
    const errorSpancs = document.getElementById("error-cs-code-required");
    
    const updateErrorStyles = () => {
      const isErrorVisible =((errorSpan && errorSpan.offsetParent !== null) || (errorSpancs && errorSpancs.classList.contains("ulp-validator-error")));
      if (inputCode) {
        inputCode.style.border = isErrorVisible ? "1px solid red" : "1px solid #C9C9C9";
      }
    };
    updateErrorStyles();
    if (errorSpancs) {
      const observer = new MutationObserver(updateErrorStyles);
      observer.observe(errorSpancs, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
    const rememberBrowserInput = document.getElementById("rememberBrowser");
    if (rememberBrowserInput) {
      const checkboxDiv = rememberBrowserInput.closest("div");
      if (checkboxDiv) {
        const adjustCheckboxMargin = () => {
          const isErrorVisible = ((errorSpan && errorSpan.offsetParent !== null) || (errorSpancs && errorSpancs.classList.contains("ulp-validator-error")));
          if (isErrorVisible) {
            checkboxDiv.style.setProperty('margin-top', '18%', 'important');
          } else {
            checkboxDiv.style.setProperty('margin-top', '13%', 'important');
          }
        };
        adjustCheckboxMargin();
        if (errorSpancs) {
          const observerError = new MutationObserver(adjustCheckboxMargin);
          observerError.observe(errorSpancs, { attributes: true, attributeFilter: ['class'] });
        }
      }
      if (btnContinue) {
        btnContinue.style.setProperty("margin-top", "8%", "important");
      }
    } else {
      if (btnContinue) {
        btnContinue.style.setProperty("margin-top", "17%", "important");
      }
    }
    const isErrorVisible = (errorSpan && errorSpan.offsetParent !== null) || (errorSpancs && errorSpancs.classList.contains("ulp-validator-error"));
          if (isErrorVisible) {
            checkboxDiv.style.setProperty('margin-top', '20%', 'important');
            inputCode.style.border = isErrorVisible ? "1px solid red" : "1px solid #C9C9C9";
          }
    const linkStyle = document.createElement('style');
    linkStyle.innerHTML = `.link { color: #1c42e8 !important; font-size: 16px !important; }`;
    document.head.appendChild(linkStyle);
    if (btnChangeMethod) {
      btnChangeMethod.classList.add("link");
    }
    const footer = document.querySelector('footer');
    footer.style.setProperty('margin-top', 'auto', 'important');
    if (auth0Wrapper) {
      auth0Wrapper.style.removeProperty("display");
    }
  } catch (error) {
    auth0Wrapper.style.removeProperty("display");
  }
});
