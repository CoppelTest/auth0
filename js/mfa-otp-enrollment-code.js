document.addEventListener('DOMContentLoaded', function () {
        const mainElement = document.querySelector('main');
        const title = mainElement.querySelector('h1');
        const subTitle = mainElement.querySelector('p');

        mainElement.classList.remove('_widget', 'c7f43d5ad');
        title.className = 'title-container';
        subTitle.className = 'subtitle-container';
});
