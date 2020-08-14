import * as Types from '../actions/types';

var data = JSON.parse(localStorage.getItem('CART'));
const initiaState = data?data:[];

const cart =(state=initiaState,action)=>{
    var {product,quantity}=action;
    var index =-1;
    switch(action.type){
        case Types.ADD_PRODUCT_CART:
            index = findProductCart(state,product);
           if(index!==-1){
               state[index].quantity+=quantity;
           }
           else{
            state.push({
                product,quantity
            });
           }
           localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_CART:
            index = findProductCart(state,product);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            console.log(state)
            return [...state];
            default : return [...state];
    }
}

const  findProductCart=(cart,product)=>{
    var index =-1;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            if(cart[i].product.id===product.id){
                index=i;
                break;
            }
        }
    }
    return index;

}

export default  cart;