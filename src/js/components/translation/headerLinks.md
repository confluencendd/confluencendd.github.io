# Função: `translateHeaderLinks(product, lang)`

Esta função traduz os textos dos links do cabeçalho (selecionados por `li.render-links--link a`) para o idioma especificado, usando um objeto de recursos de tradução chamado `headerLinksResources`.

## Importação:

A função começa importando o arquivo de recursos de tradução:
```javascript
import headerLinksResources from '../../resources/headerLinksResources.json';
```

O arquivo `headerLinksResources.json` contém as traduções dos links de cabeçalho para diferentes produtos e idiomas. Ele segue uma estrutura onde as traduções estão organizadas por produto e, dentro de cada produto, por idioma.

## Parâmetros:
- `product` (String): Nome do produto cujos links de cabeçalho serão traduzidos.
- `lang` (String): Código de idioma para o qual os links serão traduzidos (por exemplo, `'en'` para inglês, `'pt'` para português).

## Exemplo de estrutura do `headerLinksResources.json`:
```json
{
    "productA": {
        "en": {
            "Home": { "text": "Home" },
            "About": { "text": "About Us" }
        },
        "pt": {
            "Home": { "text": "Início" },
            "About": { "text": "Sobre Nós" }
        }
    }
}

```

## Funcionamento:

### Seleção dos elementos de link:
A função seleciona todos os elementos de link dentro de `li.render-links--link a`, que são os links do cabeçalho a serem traduzidos:
```javascript
const links = document.querySelectorAll("li.render-links--link a");
```

### Validação do produto e idioma:
A função verifica se o `product` passado está presente no objeto `headerLinksResources`. Verifica também se o idioma (`lang`) está disponível para o produto especificado. Caso o produto ou o idioma não sejam encontrados, são exibidos avisos no console.

### Processamento de cada link:
Para cada link, a função busca o texto correspondente no idioma especificado dentro do `headerLinksResources`. O texto do link é "sanitizado", removendo espaços extras e quebras de linha:
```javascript
let linkSanitized = linkName.trim();  
linkSanitized = linkSanitized.replace(/\n/g, '');
```
Se a tradução para o link não for encontrada, um aviso é emitido no console. Caso a tradução seja encontrada, o texto do link é atualizado e o atributo `target="_blank"` é adicionado para abrir o link em uma nova aba.

## Exemplo de uso:

translateHeaderLinks('productA', 'en');

Neste exemplo, todos os links de cabeçalho do produto `productA` serão traduzidos para inglês, assumindo que as traduções estão presentes no arquivo `headerLinksResources.json`.

## Tratamento de erros e avisos:

- **Produto não encontrado**: Exibe um aviso caso o produto não exista no objeto `headerLinksResources`:

WARNING: This product ${product} does not exist on headerLinksResources

- **Idioma não encontrado**: Exibe um aviso caso o idioma não esteja disponível para o produto selecionado:

WARNING: There are not translations ${lang.toUpperCase()} for Header links at Product: ${product}.

- **Link não encontrado**: Exibe um aviso caso a tradução para um link específico não esteja disponível no idioma desejado:

WARNING: There are not translations ${lang.toUpperCase()} for this link: ${linkSanitized}.

## Considerações:

- A função espera que o arquivo `headerLinksResources.json` siga uma estrutura específica de produto/idioma/link.
- Caso a página não tenha nenhum elemento de link dentro de `li.render-links--link a`, a função simplesmente não realizará nenhuma ação.
- O console é utilizado para emitir avisos em caso de falhas, como produto, idioma ou links não encontrados.
- Todos os links traduzidos terão o atributo `target="_blank"` para garantir que abram em uma nova aba.
