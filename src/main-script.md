# Script Principal de Tradução e Configuração

Este script é responsável por importar estilos e funcionalidades necessários. Ele executa todas as funções da aplicação com base na linguagem e no produto selecionados.

## Importações

As seguintes importações são feitas no início do arquivo:

- **Estilos**: Os estilos são importados a partir de um arquivo CSS específico.
```javascript
  import * as styles from '../css/theme/_nddorbix.css';
```

- **Utilitários**: Funções utilitárias para obter informações sobre a linguagem e o produto, e para executar funções com base na rota.
```javascript
  import { getCurrentLanguage } from '../js/utils/getLanguage'
  import { getCurrentProduct } from '../js/utils/getProduct';
  import { runFunctionByRoute } from '../js/utils/route'
  import { redirectLinks } from '../js/utils/redirect'
```
- **Traduções**: Funções de tradução específicas para diferentes componentes da aplicação.
```javascript
  import { translateTiles } from '../components/translation/tiles';
  import { translateCategories } from '../components/translation/categories';
  import { translateHeaderLinks } from '../components/translation/headerLinks';
  import { translatePlaceholderSearchBar } from '../components/translation/placeholder';
```

- **Breadcrumbs**: Função para formatar breadcrumbs (navegação).
```javascript

  import { formatBreadcrumbs } from '../js/utils/breadcrumbs';
```

- **Componente de Tempo de Leitura**: Função para criar um componente que indica o tempo estimado de leitura.
```javascript

  import { createTimeToReadComponent } from '../components/header-bar/header-bar';
```

## Definições de Linguagem e Produto

As variáveis `languagePicked` e `product` são definidas usando as funções utilitárias importadas:

const languagePicked = getCurrentLanguage();
const product = getCurrentProduct();

## Execução de Funções Baseadas na Rota

As seguintes funções são executadas com base na rota atual da aplicação:

- **Tradução dos Tiles**:
```javascript
  runFunctionByRoute(() => translateTiles(product, languagePicked), '/');
```
- **Tradução das Categorias**:
```javascript
  
  runFunctionByRoute(() => translateCategories(product, languagePicked), '/');
```

- **Tradução dos Links do Cabeçalho**:
```javascript
  runFunctionByRoute(() => translateHeaderLinks(product, languagePicked));
```

- **Redirecionamento de Links**:
```javascript
  runFunctionByRoute(() => redirectLinks(product, languagePicked), '/');
```

- **Tradução do Placeholder da Barra de Busca**:
```javascript
  runFunctionByRoute(() => translatePlaceholderSearchBar(languagePicked));
```

- **Formatação dos Breadcrumbs**:
```javascript
  runFunctionByRoute(() => formatBreadcrumbs());
```

- **Criação do Componente de Tempo de Leitura**:
```javascript
  runFunctionByRoute(() => createTimeToReadComponent(languagePicked));
```