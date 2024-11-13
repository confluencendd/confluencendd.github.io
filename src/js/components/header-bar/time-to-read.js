import { showHeaderBarComponent } from "./header-bar";

// Função responsável por criar o componente de tempo de leitura nas páginas
export function createTimeToReadComponent({ language }) {

    // verifica se ele já está criado
    if (document.querySelector('.time-to-read')) {
    
        console.warn('Time to read already exists on this page.');
        return;

    }

    // Cria o elemento para criar o componente e adiciona a classe
    const divTimeToRead = document.createElement('div');
    divTimeToRead.classList.add('time-to-read');

    // Captura todo o conteúdo da página baseado no elemento main-content
    const estimatedTime = readTime('main-content');

    // Resources para cada idioma
    const translations = {
        pt: `${estimatedTime} minuto(s) estimado(s) para leitura`,
        en: `${estimatedTime} minute(s) estimated for reading`,
        es: `${estimatedTime} minuto(s) estimado(s) de lectura`
    };

    // Adiciona ao componente o texto baseado no idioma se o idioma não existir ele mostra o texto em PT
    divTimeToRead.textContent = translations[language] || translations['pt'];

    // Mostra uma mensagem no console avisando que o idioma não tem tradução
    if (!translations[language]) {
        console.warn(`WARNING: Translation for ${language.toUpperCase()} is not available.`);
    }

    // Função responsável por mostrar o componente na página
    showHeaderBarComponent(divTimeToRead);
}

// Função responsável por calcular o tempo baseado no conteúdo selecionado no elemento
function readTime(elementId, wordsPerMinute = 150) {

    // Captura o elemento para ler as palavras
    const element = document.getElementById(elementId);

    // Verifica se o elemento existe na página, senão retorna uma mensagem no console
    if (!element) {
        console.warn(`WARNING: No content found in the specified element ${elementId}.`);
        return;
    }

    // Captura o texto
    const text = element.innerText || element.textContent;

    // Separa o texto em palavras
    const words = text.trim().split(/\s+/).length;

    // Calcula o tempo baseado nas palavras divididas por palavras lidas por minuto
    const minutes = Math.ceil(words / wordsPerMinute);

    //Retorna os minutos
    return minutes;
}