/**
 * Função que serve para executar os scripts dependendo da rota.
 * 
 * @param {object} function - Nome da função que será executada.
 * @param {object} params - Parâmetros que devem ser passados as funções.
 * 
 */

export function handleRoute({ functions, params }) {
    const currentUrl = window.location.href;

    // funções executadas em todas as páginas

    if (functions.removeOldComponent) {

        functions.removeOldComponent();

    }


    if (functions.translateHeaderLinks) {

        functions.translateHeaderLinks(params.translateHeaderLinksParams);

    }


    if (functions.translatePlaceholderSearchBar) {

        functions.translatePlaceholderSearchBar(params.translatePlaceholderSearchBarParams);

    }

    if (functions.setRobotsMetaTag) {

        functions.setRobotsMetaTag(params.setRobotsMetaTagParams)

    }


    // Funções executadas em todas as páginas exceto na home
    if (!isHomePage(currentUrl)) {


        if (functions.renderArticleFeedbackComponent) {

            functions.renderArticleFeedbackComponent(params.renderArticleFeedbackComponentParams);

        }

        if (functions.formatBreadcrumbs) {

            functions.formatBreadcrumbs(params.formatBreadcrumbsParams);

        }

        if (functions.createTimeToReadComponent) {

            functions.createTimeToReadComponent(params.createTimeToReadComponentParams);

        }

    }

    // Funções executadas apenas na home
    if (isHomePage(currentUrl)) {

        if (functions.translateTiles) {

            functions.translateTiles(params.translateTilesParams);

        }

        if (functions.translateCategories) {

            functions.translateCategories(params.translateCategoriesParams);

        }

        if (functions.redirectLinks) {

            functions.redirectLinks(params.redirectLinksParams);

        }

    }

}

function isHomePage(url) {

    const baseUrls = [
        'https://helpcenter-testes.ndd.tech',
        'https://helpcenter-nddorbix.ndd.tech',
        'https://helpcenter-nddprint.ndd.tech',
        'https://helpcenter-kubo.ndd.tech',
        'https://helpcenter-nddmove.ndd.tech',
        'https://helpcenter-nddcargo.ndd.tech',
        'https://helpcenter-nddspace.ndd.tech',
        'https://helpcenter-nddfreteembarcador.ndd.tech/',
        'https://helpcenter.nddelog.com/',
        'https://helpcenter-nddelog.scrollhelp.site/'
    ];

    const languages = ['', '?l=pt', '?l=en', '?l=es', '?l=it'];

    return baseUrls.some(baseUrl =>
        languages.some(lang => url === `${baseUrl}/${lang}`)
    );

}

function isReleasePage(url) {
    return url.includes('/release-notes/');
}

function isSecurityPage(url) {
    return url.includes('/seguranca-e-compliance/');
}