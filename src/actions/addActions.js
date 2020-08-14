import {ADD_PRODUCT_CART} from './types'

export const addCart = (productName)=>{
    return (dispatch) =>{
        console.log('add to cart');
        console.log('product',productName)
       const pr= JSON.parse( localStorage.setItem('cart',productName));
        const name = JSON.parse(localStorage.getItem('cart'));
        console.log(name)
        dispatch({
            type:ADD_PRODUCT_CART,
            payload: productName
        });
    }
}