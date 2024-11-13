# Função: `translatePlaceholderSearchBar(lang)`

Esta função traduz o texto do placeholder da barra de pesquisa (selecionada por `input.vp-search-input__input`) para o idioma especificado, usando um objeto de recursos de tradução chamado `placeholderResources`.

## Importação:

A função começa importando o arquivo de recursos de tradução:
```javascript
import placeholderResources from '../../resources/placeholderResources.json';
```
O arquivo `placeholderResources.json` contém as traduções dos textos de placeholder para diferentes idiomas. Ele deve seguir uma estrutura onde as traduções estão organizadas por idioma.

## Parâmetro:
- `lang` (String): Código de idioma para o qual o placeholder da barra de pesquisa será traduzido (por exemplo, `'en'` para inglês, `'pt'` para português, `'es'` para espanhol).

## Exemplo de estrutura do `placeholderResources.json`:
```json
{
    "pt": "Pesquisar...",
    "en": "Search...",
    "es": "Buscar..."
}
```
## Funcionamento:

### Seleção do elemento de entrada:
A função seleciona o elemento de entrada da barra de pesquisa:
```javascript
const searchInput = document.querySelector('input.vp-search-input__input');
```

### Tradução do placeholder:
A função utiliza um `switch` para definir o texto do placeholder com base no idioma (`lang`) fornecido:

- Para o idioma português (`"pt"`), inglês (`"en"`), ou espanhol (`"es"`), o placeholder é definido a partir do objeto `placeholderResources`.
  
- Para qualquer outro idioma (caso padrão), o placeholder é definido para o texto em português, e um aviso é exibido no console informando que não há traduções disponíveis para o idioma especificado:
```console
WARNING: There are not translations ${lang.toUpperCase()} for search-box placeholder.  
Check the placeholderResources Object.
```
## Exemplo de uso:

`translatePlaceholderSearchBar('en');`

Neste exemplo, o placeholder da barra de pesquisa será traduzido para inglês, assumindo que a tradução está presente no arquivo `placeholderResources.json`.

## Tratamento de erros e avisos:

- **Idioma não encontrado**: Exibe um aviso caso o idioma não esteja disponível nas traduções:
```console
WARNING: There are not translations ${lang.toUpperCase()} for search-box placeholder.  
Check the placeholderResources Object.
```
## Considerações:

- A função espera que o arquivo `placeholderResources.json` siga uma estrutura específica de idioma/texto.
- Caso a página não tenha nenhum elemento de entrada correspondente, a função simplesmente não realizará nenhuma ação.
- O console é utilizado para emitir avisos em caso de falhas, como idioma não encontrado.
