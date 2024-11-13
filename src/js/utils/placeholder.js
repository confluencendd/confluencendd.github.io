import placeholderResources from './resources/placeholderResources.json'

export function translatePlaceholderSearchBar({ language }) {
    const searchInput = document.querySelector('input.vp-search-input__input');

    switch (language) {
        case "pt":
            searchInput.setAttribute("placeholder", placeholderResources[language]);
            break;
        case "en":
            searchInput.setAttribute("placeholder", placeholderResources[language]);
            break;
        case "es":
            searchInput.setAttribute("placeholder", placeholderResources[language]);
            break;
        default:
            searchInput.setAttribute("placeholder", placeholderResources.pt);
            console.warn(`WARNING: There are not translations ${language.toUpperCase()} for search-box placeholder. \n Check the placeholderResources Object`);
            break;
    }
}