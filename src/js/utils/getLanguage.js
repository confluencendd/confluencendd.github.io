export function getCurrentLanguage() {
    const buttonChangeLanguage = document.querySelector('[data-vp-id="language-picker-footer-button"]');

    return buttonChangeLanguage ? buttonChangeLanguage.getAttribute('lang') : 'pt'
}