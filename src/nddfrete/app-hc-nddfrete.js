// Importação das funções úteis
import { getCurrentLanguage } from '../js/utils/getLanguage';
import { getCurrentProduct } from '../js/utils/getProduct';
import { redirectLinks } from '../js/utils/redirect';
import { handleRoute } from '../js/utils/route';
import { removeOldComponent } from '../js/utils/removeOldComponent';

// Funções de tradução
import { translateTiles } from '../js/components/translation/tiles';
import { translateCategories } from '../js/components/translation/categories';
import { translateHeaderLinks } from '../js/components/translation/headerLinks';
import { translatePlaceholderSearchBar } from '../js/utils/placeholder';
import { formatBreadcrumbs } from '../js/utils/breadcrumbs';
import { createTimeToReadComponent } from '../js/components/header-bar/time-to-read';
import { renderArticleFeedbackComponent } from '../js/components/article-feedback/article-feedback';

// Parâmetros comuns
const languagePicked = getCurrentLanguage();
const currentProduct = getCurrentProduct();
const commonParams = { product: currentProduct, language: languagePicked };

// Configuração de rotas e funções
handleRoute({
    functions: {
        removeOldComponent,
        renderArticleFeedbackComponent,
        translatePlaceholderSearchBar,
        redirectLinks,
        formatBreadcrumbs,
        createTimeToReadComponent
    },
    params: {
        renderArticleFeedbackComponentParams: { language: languagePicked },
        redirectLinksParams: commonParams,
        translatePlaceholderSearchBarParams: { language: languagePicked },
        createTimeToReadComponentParams: { language: languagePicked }
    }
});
