export function showHeaderBarComponent(component) {
    const headerContent = document.querySelector('header.article-header');
    if (!headerContent) {
        console.warn('WARNING: Header element not found.');
        return;
    }

    const divWrapHeaderBar = document.createElement('div');

    divWrapHeaderBar.classList.add('wrap-header-bar');
    divWrapHeaderBar.appendChild(component);

    headerContent.appendChild(divWrapHeaderBar);
}