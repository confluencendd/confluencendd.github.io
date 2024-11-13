# Função: `translateCategories(product, lang)`

Esta função traduz os títulos das categorias (selecionados por um elemento `h2` dentro de `.portal__content__heading`) para o idioma especificado, usando um objeto de recursos de tradução chamado `categoriesResources`.

## Importação:
```javascript
import categoriesResources from '../../resources/categoriesResources.json';
```

O arquivo `categoriesResources.json` contém as traduções das categorias para diferentes produtos e idiomas. Ele segue uma estrutura onde as traduções estão organizadas por produto e, dentro de cada produto, por idioma.

## Parâmetros:
- `product (String)`: Nome do produto cujas categorias serão traduzidas.
- `lang (String)`: Código de idioma para o qual as categorias serão traduzidas (por exemplo, 'en' para inglês, 'pt' para português).

### Exemplo de estrutura do `categoriesResources.json`:
```json
{
    "productA": {
        "en": {
            "Category1": { "text": "Category One" },
            "Category2": { "text": "Category Two" }
        },
        "pt": {
            "Category1": { "text": "Categoria Um" },
            "Category2": { "text": "Categoria Dois" }
        }
    }
}
```
## Funcionamento

1. **Seleção dos elementos de categoria:**
   A função seleciona todos os elementos h2 dentro de `.portal__content__heading`, que são considerados as categorias a serem traduzidas:
   ```javascript
   const categories = document.querySelectorAll(".portal__content__heading h2");
   ```
2. **Validação do produto e idioma:**
    - A função verifica se o product passado está presente no objeto categoriesResources.
    - Verifica se o idioma (lang) está disponível para o produto especificado.
    - Caso o produto ou o idioma não sejam encontrados, são exibidos avisos no console.
3. **Processamento de cada categoria:**
   - Para cada elemento de categoria (h2), a função busca o texto correspondente no idioma especificado dentro do categoriesResources.
   - Se a tradução para a categoria ou idioma não for encontrada, um aviso é emitido no console.
   - Caso a tradução seja encontrada, o texto da categoria é atualizado.

### Exemplo de uso:

```javascript
translateCategories('productA', 'en');
```
Neste exemplo, todas as categorias do produto productA serão traduzidas para inglês, assumindo que as traduções estão presentes no arquivo `categoriesResources.json`.


## Tratamento de erros e avisos:

- **Produto não encontrado:** Exibe um aviso caso o produto não exista no objeto categoriesResources:
```console
WARNING: This product ${product} does not exist on categoriesResources.
```

- **Idioma não encontrado:** Exibe um aviso caso o idioma não esteja disponível para o produto selecionado:
```console
WARNING: There are not translations ${lang.toUpperCase()} for Categories at Product: ${product}.
```

- **Categoria não encontrada:** Exibe um aviso caso a tradução para uma categoria específica não esteja disponível no idioma desejado:
```console
WARNING: There are not translations ${lang.toUpperCase()} for this category: ${categoryName}.
```
## Considerações:
- A função espera que o arquivo categoriesResources.json siga uma estrutura específica de produto/idioma/categoria.
- Caso a página não tenha nenhum elemento h2 dentro de .portal__content__heading, a função simplesmente não realizará nenhuma ação.
- O console é utilizado para emitir avisos em caso de falhas, como produto, idioma ou categorias não encontrados.