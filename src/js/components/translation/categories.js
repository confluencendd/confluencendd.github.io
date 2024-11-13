import categoriesResources from './resources/categoriesResources.json'

export function translateCategories({product, language}) {
    const categories = document.querySelectorAll(".portal__content__heading h2");

    if (!categoriesResources[product]) {
        console.warn(`WARNING: This product ${product} does not exist on categoriesResources.`);
        return;
    }

    if (!categoriesResources[product][language]) {
        console.warn(`WARNING: There are not translations ${language.toUpperCase()} for Categories at Product: ${product}. \n Check the categoriesResources Object`);
        return;
    }

    categories.forEach(category => {
        const categoryName = category.textContent;

        const categoryText = categoriesResources[product]?.[language]?.[categoryName]?.text;

        if (!categoryText) {
            console.warn(`WARNING: There are not translations ${language.toUpperCase()} for this category: ${categoryName}. \n Check the categoriesResources Object`);
            return;
        }
        category.textContent = categoryText;
    });
}