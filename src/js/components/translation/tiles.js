import tilesResources from './resources/tilesResources.json'

export function translateTiles({product, language}) {
    const tiles = document.querySelectorAll('[data-vp-id="portal-space-tile"]');    

    if (!tilesResources[product]) {
        console.warn(`WARNING: This product ${product} does not exist on tilesResources`);
        return;
    }

    if (!tilesResources[product][language]) {
        console.warn(`WARNING: There are not translations ${language.toUpperCase()} for Tiles at Product: ${product}. \n Check the tilesResources Object`);
        return;
    }

    tiles.forEach(tile => {
        const tileName = tile.getAttribute('data-vp-name');

        const { headline, description } = tilesResources[product][language][tileName] || {};

        //Text title of document
        const headlineElement = tile.querySelector('.tile__headline a');
        //Text description of document
        const descriptionElement = tile.querySelector('.tile__description span');

        if (headline) headlineElement.textContent = headline;
        if (description && descriptionElement) descriptionElement.textContent = description;
    });
}