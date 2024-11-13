# Este componente permique que possamos criar elementos no Header Bar de cada página do Help Center

## Função: `createTimeToReadComponent(lang)`

Esta função cria um componente que exibe o tempo estimado de leitura do conteúdo principal da página, traduzido para o idioma especificado.

## Importação:
```javascript
import { createTimeToReadComponent } from '../components/header-bar/header-bar';
```

## Parâmetro:
- `lang` (String): Código de idioma para o qual a mensagem de tempo estimado será traduzida (por exemplo, `'en'` para inglês, `'pt'` para português, `'es'` para espanhol).

## Funcionamento:

### Verificação da existência do componente:
A função começa verificando se o componente já existe na página:
```javascript
if (document.querySelector('.time-to-read')) {
    console.warn('Time to read already exists on this page.');
    return;
}
```

Se o componente já estiver presente, a função emite um aviso e não faz nada.

### Criação dos elementos:
A função cria um `div` e um `span` para exibir o tempo de leitura:
```javascript
const divTimeToRead = document.createElement('div');
const spanTimeToRead = document.createElement('span');
```
Os elementos são estilizados adicionando classes CSS:
```javascript
divTimeToRead.classList.add('wrap-header-bar');
spanTimeToRead.classList.add('time-to-read');
```
### Cálculo do tempo de leitura:
O tempo estimado de leitura é calculado chamando a função `readTime`, que recebe o ID do elemento que contém o conteúdo principal:
```javascript
const estimatedTime = readTime('main-content');
```

### Tradução do tempo de leitura:
A função define um objeto de traduções para os diferentes idiomas:
```javascript
const translations = {
    pt: `${estimatedTime} minuto(s) estimado(s) para leitura`,
    en: `${estimatedTime} minute(s) estimated for reading`,
    es: `${estimatedTime} minuto(s) estimado(s) de lectura`
};
```
O texto do `span` é atualizado com a tradução correspondente ao idioma especificado:
```javascript
spanTimeToRead.textContent = translations[lang] || translations['pt'];
```
Caso a tradução não esteja disponível, um aviso é emitido:

```javascriptif (!translations[lang]) {
    console.warn(`WARNING: Translation for ${lang.toUpperCase()} is not available.`);
```
### Exibição do componente:
O `span` é adicionado ao `div`, e o componente é exibido na página chamando a função `showHeaderBarComponent`:
```javascript
divTimeToRead.appendChild(spanTimeToRead);
showHeaderBarComponent(divTimeToRead);
```

## Função: `readTime(elementId, wordsPerMinute = 200)`

Esta função calcula o tempo estimado de leitura com base na contagem de palavras no elemento especificado.

### Parâmetro:
- `elementId` (String): ID do elemento cujo conteúdo deve ser analisado.
- `wordsPerMinute` (Number): A taxa de leitura em palavras por minuto (valor padrão é 200).

### Funcionamento:
A função começa buscando o elemento com o ID especificado:
```javascript
const element = document.getElementById(elementId);
```
Se o elemento não for encontrado, um aviso é emitido:
```javascript
if (!element) {
    console.warn(`WARNING: No content found in the specified element ${elementId}.`);
    return;
}
```
O texto do elemento é extraído e o número de palavras é calculado:
```javascript
const text = element.innerText || element.textContent;
const words = text.trim().split(/\s+/).length;
const minutes = Math.ceil(words / wordsPerMinute);
```
A função retorna o tempo estimado em minutos.

## Função: `showHeaderBarComponent(component)`

Esta função exibe o componente no cabeçalho da página.

### Parâmetro:
- `component` (HTMLElement): O componente a ser adicionado ao cabeçalho.

### Funcionamento:
A função busca o elemento de cabeçalho:
```javascript
const headerContent = document.querySelector('header.article-header');
```
Se o elemento não for encontrado, um aviso é emitido:
```javascript
if (!headerContent) {
    console.warn('WARNING: Header element not found.');
    return;
}
```
O componente é adicionado ao cabeçalho:
```javascript
headerContent.appendChild(component);
```
## Exemplo de uso:
```javascript
createTimeToReadComponent('en');
```
Neste exemplo, um componente de tempo estimado de leitura será criado e exibido em inglês, assumindo que o conteúdo principal está presente no elemento com ID `'main-content'`.

## Tratamento de erros e avisos:

- **Componente já existente**: Exibe um aviso caso o componente de tempo de leitura já exista na página:
```console
WARNING: Time to read already exists on this page.
```
- **Conteúdo não encontrado**: Exibe um aviso se não houver conteúdo no elemento especificado:
```console
WARNING: No content found in the specified element ${elementId}.
```
- **Cabeçalho não encontrado**: Exibe um aviso se o elemento de cabeçalho não for encontrado:
```console
WARNING: Header element not found.
```
- **Tradução não disponível**: Exibe um aviso se a tradução para o idioma especificado não estiver disponível:
```console
WARNING: Translation for ${lang.toUpperCase()} is not available.
```
## Considerações:

- A função espera que exista um elemento com o ID `'main-content'` que contenha o texto para calcular o tempo de leitura.
- O componente será adicionado apenas uma vez, mesmo que a função seja chamada várias vezes.
- O console é utilizado para emitir avisos em caso de falhas, como componentes ou elementos não encontrados.
