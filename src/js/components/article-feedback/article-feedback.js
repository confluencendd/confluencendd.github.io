// Importa os textos para o componente de feedback do artigo e as opções de feedback
import articleFeedbackText from './resources/articleFeedbackText.json';
import articleFeedbackOptions from './resources/articleFeedbackOptions.json';

// Função principal que renderiza o componente de feedback ao rolar a página até um limite
export function renderArticleFeedbackComponent({ language, scrollLimit = 50 }) {

    // Cria o componente HTML de feedback baseado no idioma
    const articleFeedbackComponent = createArticleFeedbackComponent(language);

    // Insere o componente na página
    document.body.insertAdjacentHTML('beforeend', articleFeedbackComponent);

    // Configura os eventos do componente de feedback
    eventsArticleFeedback();

    // Função para monitorar o scroll e exibir o feedback após rolar até o limite
    function handleScroll() {
        if (window.scrollY >= scrollLimit) {

            const articleFeedbackContainer = document.getElementById('article-feedback-container');

            // Adiciona a classe para mostrar o componente após um pequeno atraso
            setTimeout(() => articleFeedbackContainer.classList.add('show'), 250);

            // Remove o listener de scroll para não continuar verificando
            window.removeEventListener('scroll', handleScroll);

        }
    }

    // Adiciona o evento de scroll para verificar a posição da página
    window.addEventListener('scroll', handleScroll);
}

// Função para criar o HTML do componente de feedback com base no idioma
function createArticleFeedbackComponent(language) {

    // Cria os diálogos de feedback positivo, negativo e de conclusão
    const dialogPositiveFeedback = createDialogPositiveFeedback(language);
    const dialogNegativeFeedback = createDialogNegativeFeedback(language);
    const dialogFinishFeedback = createDialogFinishFeedback(language)

    // Retorna o HTML completo para o componente de feedback
    return `
        <div class="article-feedback-container" id="article-feedback-container">
            <div class="article-feedback-header">
                <h5>${articleFeedbackText[language][0]}</h5>
                <button type="button" id="article-feedback-button-close">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="button-wrapper">
                <button type="button" class="article-feedback-button-yes" id="article-feedback-button-yes">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"/></svg>
                    ${articleFeedbackText[language][1]}
                </button>
                <button type="button" class="article-feedback-button-no" id="article-feedback-button-no">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"/></svg>
                    ${articleFeedbackText[language][2]}
                </button>
            </div>
        </div>
        ${dialogPositiveFeedback}
        ${dialogNegativeFeedback}
        ${dialogFinishFeedback}
    `;
}

// Função para configurar todos os eventos relacionados ao feedback
function eventsArticleFeedback() {

    // Seleciona os botões e elementos necessários
    const buttonClose = document.getElementById('article-feedback-button-close');

    const buttonYes = document.getElementById('article-feedback-button-yes');
    const buttonNo = document.getElementById('article-feedback-button-no');

    const optionsSendPositiveFeedback = document.querySelectorAll("input[data-input-option='positive-feedback-option']");
    const optionsSendNegativeFeedback = document.querySelectorAll("input[data-input-option='negative-feedback-option']");

    const buttonSendPositiveFeedback = document.getElementById("send_positive_feedback");
    const buttonSendNegativeFeedback = document.getElementById("send_negative_feedback");

    const buttonCancelPositiveFeedback = document.querySelectorAll('#cancel_positive_feedback');
    const buttonCancelNegativeFeedback = document.querySelectorAll('#cancel_negative_feedback');

    const buttonCloseDialog = document.querySelectorAll('#close-dialog');

    const buttonCloseFinishFeedback = document.getElementById('close_finish_feedback');

    // Evento de clique para o botão de feedback positivo
    buttonClose.addEventListener('click', (event) => {
        event.preventDefault();
        hideDialogArticleFeedback("article-feedback-container")
    });

    // Evento de clique para o botão de feedback positivo
    buttonYes.addEventListener('click', (event) => {
        event.preventDefault();
        showDialogArticleFeedback("dialog-positive-article-feedback")
    });

    // Evento de clique para o botão de feedback negativo
    buttonNo.addEventListener('click', (event) => {
        event.preventDefault();
        showDialogArticleFeedback("dialog-negative-article-feedback")
    });

    // Configura os botões de cancelamento para fechar o diálogo
    buttonCancelPositiveFeedback.forEach(action => {
        action.addEventListener('click', (event) => {
            event.preventDefault();
            hideDialogArticleFeedback("dialog-positive-article-feedback");
            hideDialogArticleFeedback("dialog-negative-article-feedback");
        });
    });
    buttonCancelNegativeFeedback.forEach(action => {
        action.addEventListener('click', (event) => {
            event.preventDefault();
            hideDialogArticleFeedback("dialog-positive-article-feedback");
            hideDialogArticleFeedback("dialog-negative-article-feedback");
        });
    });

    // Evento de clique para o botão de fechar o diálogo
    buttonCloseDialog.forEach(action => {
        action.addEventListener('click', (event) => {
            event.preventDefault();
            hideDialogArticleFeedback("dialog-positive-article-feedback");
            hideDialogArticleFeedback("dialog-negative-article-feedback");
        });
    });

    // Evento de clique para os opções do feedback
    optionsSendPositiveFeedback.forEach(radio => {
        radio.addEventListener('click', enableSendFeedbackButton);
    });
    optionsSendNegativeFeedback.forEach(radio => {
        radio.addEventListener('click', enableSendFeedbackButton);
    });

    // Configura os eventos para os botões de envio de feedback
    buttonSendPositiveFeedback.addEventListener('click', (event) => {
        event.preventDefault();
        hideDialogArticleFeedback("dialog-positive-article-feedback");
        showDialogArticleFeedback("dialog-finish-article-feedback");
        hideDialogArticleFeedbackByTime("dialog-finish-article-feedback");
        hideDialogArticleFeedbackByTime('article-feedback-container');
    });
    buttonSendNegativeFeedback.addEventListener('click', (event) => {
        event.preventDefault();
        hideDialogArticleFeedback("dialog-negative-article-feedback");
        showDialogArticleFeedback("dialog-finish-article-feedback");
        hideDialogArticleFeedbackByTime("dialog-finish-article-feedback");
        hideDialogArticleFeedbackByTime('article-feedback-container');

    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hideDialogArticleFeedback("dialog-positive-article-feedback");
            hideDialogArticleFeedback("dialog-negative-article-feedback");
        }
    });

    buttonCloseFinishFeedback.addEventListener('click', (event) => {
        event.preventDefault();
        hideDialogArticleFeedback("article-feedback-container");
        hideDialogArticleFeedback("dialog-finish-article-feedback");
    });
};

// Função para mostrar o diálogo do feedback (positivo ou negativo)
function showDialogArticleFeedback(dialogId) {
    document.getElementById(dialogId).classList.add("show");
    document.body.style.overflow = "hidden";
}

// Função para ocultar o diálogo de feedback
function hideDialogArticleFeedback(dialogId) {

    const elementToShow = document.getElementById(dialogId);

    disableSendFeedbackButton()

    uncheckOptionSelected();

    if (elementToShow.classList.contains('show')) {
        elementToShow.classList.remove("show");
        document.body.style.overflow = "auto";
    }

}

// Função que oculta o diálogo de feedback após um tempo determinado
function hideDialogArticleFeedbackByTime(dialogId) {

    setTimeout(() => {
        document.body.style.overflow = "auto";
        document.getElementById(dialogId).classList.remove("show");
    }, 5000);

}

function uncheckOptionSelected() {
    const optionsSendPositiveFeedback = document.querySelectorAll("input[data-input-option='positive-feedback-option']");
    const optionsSendNegativeFeedback = document.querySelectorAll("input[data-input-option='negative-feedback-option']");

    optionsSendPositiveFeedback.forEach(radio => {
        radio.checked = false;
    });

    optionsSendNegativeFeedback.forEach(radio => {
        radio.checked = false;
    });
}

// Função para desabilitar os botões de envio de feedback
function disableSendFeedbackButton() {
    const buttonSendNegativeFeedback = document.getElementById("send_negative_feedback");
    const buttonSendPositiveFeedback = document.getElementById("send_positive_feedback");

    if (!buttonSendPositiveFeedback.disabled) {
        buttonSendPositiveFeedback.disabled = true;
        buttonSendPositiveFeedback.classList.add('article-feedback-button-disabled');
    }

    if (!buttonSendNegativeFeedback.disabled) {
        buttonSendNegativeFeedback.disabled = true;
        buttonSendNegativeFeedback.classList.add('article-feedback-button-disabled');
    }
}

// Função para habilitar os botões de envio de feedback
function enableSendFeedbackButton() {
    const buttonSendPositiveFeedback = document.getElementById("send_positive_feedback");
    const buttonSendNegativeFeedback = document.getElementById("send_negative_feedback");

    // Ativa o botão de envio quando uma opção de feedback é selecionada
    if (buttonSendPositiveFeedback.disabled) {
        buttonSendPositiveFeedback.disabled = false;
        buttonSendPositiveFeedback.classList.remove('article-feedback-button-disabled');
    }

    if (buttonSendNegativeFeedback.disabled) {
        buttonSendNegativeFeedback.disabled = false;
        buttonSendNegativeFeedback.classList.remove('article-feedback-button-disabled');
    }

}

// Função para criar o diálogo de feedback positivo com as opções
function createDialogPositiveFeedback(language) {

    const textOptionsPositiveFeedback = articleFeedbackOptions.positive_feedback_options[language];
    const optionsPositiveFeedbackHTML = textOptionsPositiveFeedback
        .map((option, index) => `
            <div class="reason-feedback-wrapper">
                <input type="radio" class="reason-positive-feedback" name="reason-positive-feedback" id="${option}" data-input-option="positive-feedback-option">
                <label for="${option}">${articleFeedbackOptions.positive_feedback_options[language][index]}</label>
            </div>`)
        .join('');

    return `
        <div class="dialog-article-feedback" id="dialog-positive-article-feedback">
            <header class="header-dialog">
                <h4>${articleFeedbackText[language][5]}</h4>

                <a href="#" class="close-dialog" id="close-dialog">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </a>
            </header>
            <div class="dialog-article-feedback-content">
                <span>${articleFeedbackText[language][6]}</span>
                <div class="options-dialog-wrapper">
                    ${optionsPositiveFeedbackHTML}
                </div>

                <div class="comment-dialog-wrapper">
                    <label for="comment-positive-feedback">${articleFeedbackText[language][7]}</label>
                    <textarea name="comment-positive-feedback" id="comment-positive-feedback" maxlength="250"></textarea>
                    <span>${articleFeedbackText[language][8]}</span>
                </div>

                <div class="actions-wrapper">
                    <button class="cancel_positive_feedback" id="cancel_positive_feedback">${articleFeedbackText[language][9]}</button>
                    <button class="send_positive_feedback article-feedback-button-disabled" id="send_positive_feedback" disabled>${articleFeedbackText[language][10]}</button>
                </div>

            </div>
        </div>
    `;
}

// Função para criar o diálogo de feedback negativo com as opções
function createDialogNegativeFeedback(language) {

    const textOptionsNegativeFeedback = articleFeedbackOptions.negative_feedback_options[language];
    const optionsNegativeFeedbackHTML = textOptionsNegativeFeedback
        .map((option, index) => `
            <div class="reason-feedback-wrapper">
                <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="${option}" data-input-option="negative-feedback-option">
                <label for="${option}">${articleFeedbackOptions.negative_feedback_options[language][index]}</label>
            </div>`)
        .join('');

    return `
    <div class="dialog-article-feedback" id="dialog-negative-article-feedback">
            <header class="header-dialog">
                <h4>${articleFeedbackText[language][3]}</h4>  
                <a href="#" class="close-dialog" id="close-dialog">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </a>
            </header>
            <div class="dialog-article-feedback-content">
                <span>${articleFeedbackText[language][4]}</span>
                <div class="options-dialog-wrapper">
                    ${optionsNegativeFeedbackHTML}
                </div>

                <div class="comment-dialog-wrapper">
                    <label for="comment-negative-feedback">${articleFeedbackText[language][7]}</label>
                    <textarea name="comment-negative-feedback" id="comment-negative-feedback" maxlength="250"></textarea>
                    <span>${articleFeedbackText[language][8]}</span>
                </div>

                <div class="actions-wrapper">
                    <button class="cancel_negative_feedback" id="cancel_negative_feedback">${articleFeedbackText[language][9]}</button>
                    <button class="send_negative_feedback article-feedback-button-disabled" id="send_negative_feedback" disabled>${articleFeedbackText[language][10]}</button>
                </div>

            </div>
        </div>
    `;
}

// Função para criar o diálogo de conclusão de feedback
function createDialogFinishFeedback(language) {

    return `
        <div class="dialog-article-feedback" id="dialog-finish-article-feedback">
            <header class="header-dialog-finish">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 0c17.7 0 32 14.3 32 32l0 208-64 0 0-208c0-17.7 14.3-32 32-32zm96 160c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm64 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zM93.3 51.2L175.9 240l-69.9 0L34.7 76.8C27.6 60.6 35 41.8 51.2 34.7s35.1 .3 42.1 16.5zm27 221.3l-.2-.5 69.9 0 26.1 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-56 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l56 0c39.8 0 72-32.2 72-72l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6l0 8.6c0 88.4-71.6 160-160 160l-61.7 0c-42.4 0-83.1-16.9-113.1-46.9l-11.6-11.6C77.5 429.5 64 396.9 64 363l0-27c0-32.7 24.6-59.7 56.3-63.5z"/></svg>
            </header>
            <div class="dialog-article-feedback-content">

                <div class="centralize">
                    <h4 style="margin-bottom: 16px;">${articleFeedbackText[language][11]}</h4>
                    <p>${articleFeedbackText[language][12]}</p>
                    <div class="actions-wrapper">
                        <button class="close_finish_feedback" id="close_finish_feedback">${articleFeedbackText[language][13]}</button>
                    </div>
                </div>
            </div>
            <div class="timer-dialog"></div>
        </div>
    `;
}

