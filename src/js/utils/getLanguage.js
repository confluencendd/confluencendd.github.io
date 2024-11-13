export function getCurrentLanguage() {
    const buttonChangeLanguage = document.querySelector('[data-vp-id="language-picker-footer-button"]');
    return buttonChangeLanguage?.getAttribute('lang') || 'pt'; // Default to Portuguese if language was not found
}