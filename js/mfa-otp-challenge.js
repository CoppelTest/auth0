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
    const isVisible = (el) => {
    if (!el) return false;
    const style = getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
      return false;
    }
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  };
    const getIsErrorVisible = () => {
      const spanVisible = isVisible(errorSpan);
      const csVisible   = !!(errorSpancs && errorSpancs.classList.contains("ulp-validator-error"));
      return spanVisible || csVisible;
    };
    const updateErrorStyles = () => {
      const isErrorVisible =getIsErrorVisible();
      if (inputCode) {
        inputCode.style.border = getIsErrorVisible() ? "1px solid red" : "1px solid #C9C9C9";
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
    const checkboxDiv = rememberBrowserInput.closest("div");
    if (rememberBrowserInput) {
      if (checkboxDiv) {
        const adjustCheckboxMargin = () => {
          const isErrorVisible = getIsErrorVisible();
          console.log("isErrorVisible " + isErrorVisible);
          console.log("spancs " + errorSpancs);
          console.log("span " +errorSpan);
          console.log("span sin la variable, directo dom "+ document.getElementById("error-element-code"))
          if (isErrorVisible) {
            checkboxDiv.style.setProperty('margin-top', '18%', 'important');
          } else {
            console.log("entro else");
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
    const linkStyle = document.createElement('style');
    linkStyle.innerHTML = `.link { color: #1c42e8 !important; font-size: 16px !important; }`;
    document.head.appendChild(linkStyle);
    if (btnChangeMethod) {
      btnChangeMethod.classList.add("link");
    }
    function isTextMultiline(element) {
        if (!element) {
            return false;
        }
        const computedStyle = window.getComputedStyle(element);
        let lineHeight = parseFloat(computedStyle.lineHeight);
        if (isNaN(lineHeight)) {
            const fontSize = parseFloat(computedStyle.fontSize);
            lineHeight = fontSize * 1.2; 
        }
        const elementHeight = element.clientHeight;
        return elementHeight > (lineHeight + 2);
    }
    if(errorSpan !== null){
      inputCode.style.border = "1px solid red";
      setTimeout(() => {
        const isMultiLine = isTextMultiline(errorSpan);
        console.log("Es multiline " + isMultiLine);
        if (isMultiLine) {
             checkboxDiv.style.setProperty('margin-top', '25px', 'important');
        } else {
             checkboxDiv.style.setProperty('margin-top', '19%', 'important');
        }
      }, 50);
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
