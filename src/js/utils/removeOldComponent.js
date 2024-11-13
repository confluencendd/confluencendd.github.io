// Esta função é temporária e deverá ser removida quando todos os Help Centers
// forem migrados para a nova estrutura custom-scripts
// Esta função remove o parágrafo contendo a informação {{component-feedback-article}}
export function removeOldComponent() {
    const html_paragraphs = Array.from(document.querySelectorAll("p"));
    const paragraphToRemove = html_paragraphs.find(text => text.innerText === '{{component-feedback-article}}');

    if (paragraphToRemove) {

        paragraphToRemove.remove();
        console.warn("O parágrafo {{component-feedback-article}} foi removido nesta página");

    }
}