import * as types from  './types';

export const addToCart=(product,quantity)=>{
    return{
        type: types.ADD_PRODUCT_CART,
        product,
        quantity
    }
}
export const removeToCart=(product)=>{
        return{
            type: types.DELETE_PRODUCT_CART,
            product
        
        }

}