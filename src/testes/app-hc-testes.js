// Importação das funções uteis para as rotinas
import { getCurrentLanguage } from '../js/utils/getLanguage'
import { getCurrentProduct } from '../js/utils/getProduct';
import { redirectLinks } from '../js/utils/redirect';
import { handleRoute } from '../js/utils/route'
import { removeOldComponent } from '../js/utils/removeOldComponent'

// Funções de tradução dos textos do Help Center
import { translateTiles } from '../js/components/translation/tiles';
import { translateCategories } from '../js/components/translation/categories';
import { translateHeaderLinks } from '../js/components/translation/headerLinks';
import { translatePlaceholderSearchBar } from '../js/utils/placeholder';

import { formatBreadcrumbs } from '../js/utils/breadcrumbs';
import { createTimeToReadComponent } from '../js/components/header-bar/time-to-read';

import { renderArticleFeedbackComponent } from '../js/components/article-feedback/article-feedback';

// Parâmetros para execução das funções
const languagePicked = getCurrentLanguage();
console.log(languagePicked);

const currentProduct = getCurrentProduct();
const commonParams = { product: currentProduct, language: languagePicked };

handleRoute({
    functions: {
        removeOldComponent,
        renderArticleFeedbackComponent,
        //translateTiles,
        //translateCategories,
        //translateHeaderLinks,
        translatePlaceholderSearchBar,
        redirectLinks,
        formatBreadcrumbs,
        createTimeToReadComponent
    },
    params: {
        renderArticleFeedbackComponentParams: { language: languagePicked },
        // translateTilesParams: commonParams,
        // translateCategoriesParams: commonParams,
        // translateHeaderLinksParams: commonParams,
        redirectLinksParams: commonParams,
        translatePlaceholderSearchBarParams: { language: languagePicked },
        createTimeToReadComponentParams: { language: languagePicked }

    }
});