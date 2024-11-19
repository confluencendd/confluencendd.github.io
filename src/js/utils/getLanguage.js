export function getCurrentLanguage() {
    const buttonChangeLanguage = document.querySelector('[data-vp-id="language-picker-footer-button"]');

    if (!buttonChangeLanguage) {
        return 'pt'; // Default to Portuguese if language was not found
    }

    return buttonChangeLanguage?.getAttribute('lang');
}