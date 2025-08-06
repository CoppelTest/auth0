document.addEventListener('DOMContentLoaded', function () {
        const mainElement = document.querySelector('main');
        const title = mainElement.querySelector('h1');
        const subTitle = mainElement.querySelector('p');
        const txtCode = mainElement.querySelectorAll('section div > div')[5];
        const btnCopyCode = mainElement.querySelector('button[type="button"]');
        const spanCopy = btnCopyCode ? btnCopyCode.querySelector('span');
        const btnScan = mainElement?.querySelector('button[value="toggle-view"]');
        const btnChangeMethod = mainElement?.querySelector('button[value="pick-authenticator"]');

        mainElement.classList.remove('_widget', 'c7f43d5ad');
        title.className = 'title-container';
        subTitle.className = 'subtitle-container';
        txtCode.classList.add('mi-multiline');
        btnCopyCode.classList.add('btn-copy-code');
        spanCopy.classList.add('span-copy-style');
        btnScan.classList.add('link');
        btnChangeMethod.classList.add('link');
});
