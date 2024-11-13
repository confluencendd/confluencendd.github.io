export function getCurrentProduct() {
    const productUrl = document.URL.split('-')
    const productName = productUrl[1].split('.');
    const currentProduct = productName[0].toLowerCase().trim()
    
    return currentProduct;

}