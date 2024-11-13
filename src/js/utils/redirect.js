import linksDocumentsMapResources from './resources/linksDocumentsMapResources.json'

export function redirectLinks({ product, language }) {

    const links = document.querySelectorAll('.tile__headline a');

    if (!linksDocumentsMapResources[product]) {
        console.warn(`WARNING: There are not redirects for this product ${product} \n Check the linksDocumentsMapResources Object`);
        return;
    }

    if (!linksDocumentsMapResources[product][language]) {
        console.warn(`WARNING: There are not redirects for this language ${language} \n Check the linksDocumentsMapResources Object`);
        return;
    }

    links.forEach(link => {

        const originalLink = link.href;

        if (!linksDocumentsMapResources[product][language][originalLink]) {
            //console.warn(`WARNING: This link: ${link} does not have redirects. \n Check the linksDocumentsMapResources Object`);
            return;
        }

        link.href = linksDocumentsMapResources[product][language][originalLink];
        link.setAttribute('target', '_blank');

    })
}