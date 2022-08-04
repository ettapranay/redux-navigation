export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export function loadProduct(products) { // add product
    return {
        type: LOAD_PRODUCTS,
        products: {
            ...products,

        }
    }
}


