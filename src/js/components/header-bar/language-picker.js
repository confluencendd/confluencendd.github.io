import { showHeaderBarComponent } from "./header-bar";

export function createlanguagePicker() {

    const languages = window.scrollHelpCenter.languageLinksForPage;

    const divLanguagePicker = document.createElement('div');
    const ulLanguagePickerOptions = document.createElement('ul');

    divLanguagePicker.appendChild(ulLanguagePickerOptions);



    languages.forEach(language => {

        //let helpCenterUrlBase = 'https://helpcenter-testes.ndd.tech/'

        let helpCenterUrlBase = window.location.origin;
        language.toLanguageLink = language.toLanguageLink.replace('../../..', helpCenterUrlBase)

        const liLanguageItem = document.createElement('li');
        const linkLanguage = document.createElement('a');

        liLanguageItem.appendChild(linkLanguage);

        linkLanguage.href = language.toLanguageLink;
        linkLanguage.textContent = language.displayName;

        ulLanguagePickerOptions.appendChild(liLanguageItem);


    });


    showHeaderBarComponent(divLanguagePicker);
}