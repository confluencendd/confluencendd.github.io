# Função: `translateTiles(product, lang)`

Esta função traduz os títulos e descrições dos elementos "tiles" (selecionados por um atributo `data-vp-id="portal-space-tile"`) para o idioma especificado, usando um objeto de recursos de tradução chamado `tilesResources`.

## Importação:
```javascript
import tilesResources from '../../resources/tilesResources.json';
```
O arquivo tilesResources.json contém as traduções dos tiles para diferentes produtos e idiomas. Ele segue uma estrutura onde as traduções estão organizadas por produto e, dentro de cada produto, por idioma.

## Parâmetros:
- `product (String)`: Nome do produto cujos tiles serão traduzidos.
- `lang (String)`: Código de idioma para o qual os tiles serão traduzidos (por exemplo, 'en' para inglês, 'pt' para português).

### Exemplo de estrutura do tilesResources.json:
```json
{
    "productA": {
        "en": {
            "Tile1": {
                "headline": "Headline One",
                "description": "Description for Tile One"
            },
            "Tile2": {
                "headline": "Headline Two",
                "description": "Description for Tile Two"
            }
        },
        "pt": {
            "Tile1": {
                "headline": "Título Um",
                "description": "Descrição para Tile Um"
            },
            "Tile2": {
                "headline": "Título Dois",
                "description": "Descrição para Tile Dois"
            }
        }
    }
}
```
## Funcionamento:
Seleção dos elementos tile:
A função seleciona todos os elementos com o atributo `data-vp-id="portal-space-tile"`, que são considerados os tiles a serem traduzidos:
```javascript
const tiles = document.querySelectorAll('[data-vp-id="portal-space-tile"]');
```
### Validação do produto e idioma:
A função verifica se o product passado está presente no objeto tilesResources.
Verifica se o idioma (lang) está disponível para o produto especificado.
Caso o produto ou o idioma não sejam encontrados, são exibidos avisos no console.

### Processamento de cada tile:
- Para cada tile, a função busca o título (headline) e a descrição (description) correspondentes no idioma especificado dentro do tilesResources.
- Atualiza o texto dos elementos .`tile__headline` a (cabeçalho) e .`tile__description span` (descrição) com as traduções correspondentes.
- Se a tradução para o tile ou idioma não for encontrada, um aviso é emitido no console.

### Exemplo de uso:
```javascript
translateTiles('productA', 'en');
```
Neste exemplo, todos os tiles do produto productA serão traduzidos para inglês, assumindo que as traduções estão presentes no arquivo tilesResources.json.

## Tratamento de erros e avisos:

- **Produto não encontrado:** Exibe um aviso caso o produto não exista no objeto tilesResources:
```console
WARNING: This product ${product} does not exist on tilesResources
```
- **Idioma não encontrado:** Exibe um aviso caso o idioma não esteja disponível para o produto selecionado:
```console
WARNING: There are not translations ${lang.toUpperCase()} for Tiles at Product: ${product}.
```
- **Tile não encontrado:** Exibe um aviso caso a tradução para um tile específico não esteja disponível no idioma desejado:
```console
WARNING: There are not translations ${lang.toUpperCase()} for this tile: ${tileName}.
```

## Considerações:
- A função espera que o arquivo tilesResources.json siga uma estrutura específica de produto/idioma/tile.
- Caso a página não tenha nenhum elemento com o atributo data-vp-id="portal-space-tile", a função simplesmente não realizará nenhuma ação.
- O console é utilizado para emitir avisos em caso de falhas, como produto, idioma ou tiles não encontrados.