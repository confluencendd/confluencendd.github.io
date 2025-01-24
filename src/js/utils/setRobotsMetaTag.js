/**
 * Adiciona uma meta tag 'robots' no <head> da página. Evitando que seja indexada pelos motores de busca.
 * Serve principalmente para os Help Center internos.
 * 
 * @param {object} content - Configurações para a meta tag, ex: 'noindex' = Bloquear apenas indexação, 'nofollow' = Bloquear apenas o rastreamento de links, 'noindex, nofollow' = Bloquear indexação e rastreamento de links.
 * 
 */
export function setRobotsMetaTag({content = 'noindex'}) {

    // Verifica se a meta tag já existe para evitar duplicação
    let existingMetaTag = document.querySelector('meta[name="robots"]');

    if (existingMetaTag) {

        existingMetaTag.content = content; // Atualiza o valor se já existe

    } else {
        // Cria e adiciona a meta tag ao <head>
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = content;
        document.head.appendChild(meta);
    }
}