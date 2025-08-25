document.addEventListener("DOMContentLoaded", function () {
  const auth0Wrapper = document.getElementById("auth0-hidden-wrapper");
  try {
    const mainElement = document.querySelector("main");
    const btnLogin = mainElement?.querySelector('button[value="default"]');
    const divCodeInput = mainElement.querySelector('div[data-action-text=""]');
    const inputCode = divCodeInput
      ? divCodeInput.querySelector('input[name="code"]')
      : null;
    const label = mainElement.querySelector("#code-label");
    const footer = document.querySelector("footer");
    const divs = mainElement.querySelectorAll("div");
    const promptAlertDiv = document.getElementById("prompt-alert");
    const indexOffset = promptAlertDiv != null ? 1 : 0;
    const div8 = divs[8 + indexOffset];
    const div15 = divs[15 + indexOffset];
    const div17 = divs[17 + indexOffset];
    mainElement.classList.remove("_widget", "c7f43d5ad");
    if (mainElement.querySelector("h1"))
      mainElement.querySelector("h1").className = "title-container";
    if (mainElement.querySelector("p"))
      mainElement.querySelector("p").className = "subtitle-container";
    if (btnLogin) btnLogin.className = "button-normal";
    if (inputCode) {
      inputCode.className = "email-input";
      const codeInputWrapper = inputCode.closest('.input-wrapper');
      codeInputWrapper.style.setProperty('height', 'unset');
    }
    if (
      mainElement.querySelector(
        "div[data-action-text][data-alternate-action-text]"
      )
    ) {
      mainElement.querySelector(
        "div[data-action-text][data-alternate-action-text]"
      ).className = "";
    }
    if (label) {
      label.style.color = "#081754";
      label.style.lineHeight = "24px";
    }
    if (document.querySelector('input[type="checkbox"]')) {
      document.querySelector('input[type="checkbox"]').className = "";
      const checkBoxContainer = document
        .querySelector('input[type="checkbox"]')
        ?.closest("div");
      if (checkBoxContainer)
        checkBoxContainer.classList.add("custom-checkbox-container");
    }
    if (div8) {
      div8.style.borderRadius = "8px";
      div8.style.border = "1px solid #BDBDBD";
      div8.style.background = "#BDBDBD";
      div8.style.overflow = "hidden";
      div8.style.color = "#717171";
      div8.style.textOverflow = "ellipsis";
    }
    if (
      document.querySelector(
        'button[name="action"][value="pick-authenticator"]'
      )
    ) {
      document
        .querySelector('button[name="action"][value="pick-authenticator"]')
        .classList.add("link");
    }
    if (footer) footer.style.marginTop = "auto";
    function applyErrorStyles() {
      const errorSpan = document.getElementById("error-element-code");
      const emptyError = document.getElementById("error-cs-code-required");
      const promptAlertDiv = document.getElementById("prompt-alert");
      const hasGeneralError = errorSpan?.offsetHeight > 0;
      const hasEmptyError = emptyError?.offsetHeight > 0;
      const hasPromptAlertError = promptAlertDiv?.offsetHeight > 0;
      let errorType = "noError";
      if (hasGeneralError) {
        errorType = "generalError";
      } else if (hasPromptAlertError) {
        errorType = "promptAlertError";
      } else if (hasEmptyError) {
        errorType = "emptyError";
      }
      switch (errorType) {
        case "generalError":
          if (btnLogin) btnLogin.style.marginTop = "20px";
          if (inputCode) inputCode.style.border = "1px solid red";
          if (div15) div15.style.display = "none";
          if (document.querySelector(".custom-checkbox-container"))
            document.querySelector(
              ".custom-checkbox-container"
            ).style.paddingTop = "20px";
          if (div17) div17.style.display = "none";
          break;

        case "promptAlertError":
          if (btnLogin) btnLogin.style.marginTop = "70px"; // Aquí se mueve
          if (inputCode) inputCode.style.border = "";
          if (div15) div15.style.display = "none";
          if (document.querySelector(".custom-checkbox-container"))
            document.querySelector(
              ".custom-checkbox-container"
            ).style.paddingTop = "20px";
          if (div17) div17.style.display = "none";
          break;

        case "emptyError":
          console.log(
            "-> 4d. Aplicando estilos para 'Campo Vacío'. El botón se queda abajo."
          );
          if (btnLogin) btnLogin.style.marginTop = "20px";
          if (inputCode) inputCode.style.border = "1px solid red";
          if (div15) div15.style.display = "";
          if (document.querySelector(".custom-checkbox-container"))
            document.querySelector(
              ".custom-checkbox-container"
            ).style.paddingTop = "15px";
          if (div17) div17.style.display = "none";
          break;

        case "noError":
        default:
          if (btnLogin) btnLogin.style.marginTop = "20px";
          if (inputCode) inputCode.style.border = "";
          if (div15) div15.style.display = "";
          if (document.querySelector(".custom-checkbox-container"))
            document.querySelector(
              ".custom-checkbox-container"
            ).style.paddingTop = "15px";
          if (div17) div17.style.display = "none";
          break;
      }
    }
    applyErrorStyles();
    //const observer = new MutationObserver(applyErrorStyles);
    //const config = { childList: true, subtree: true, attributes: true };
    //observer.observe(mainElement, config);
  } catch (error) {
    console.error(" Hubo un error en la ejecución del script:");
  } finally {
    if (auth0Wrapper) {
      auth0Wrapper.style.removeProperty("display");
    }
  }
});
