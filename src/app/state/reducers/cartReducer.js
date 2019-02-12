// Sowmiya
import * as ActionTypes from "../action-types";

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item, qty=1) => {
    const cartItem = itemInCart(cart, item)
    return cartItem === undefined
        ? [...cartWithoutItem(cart, item), { ...item, quantity: qty }]
        : [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

const removeFromCart = (cart, item) => {
    return item.quantity === 1
        ? [...cartWithoutItem(cart, item)]
        : [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 }]
}
const removeAllFromCart = (cart, item) => {
    return [...cartWithoutItem(cart, item)]
}
console.log(localStorage.getItem("cartItems"),'cart')
const counterFromLocalStorage =localStorage.getItem("cartItems")

const INITIAL_STATE = {
    cartItems: counterFromLocalStorage?JSON.parse(counterFromLocalStorage)  :[]
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CART:
            let addCart = addToCart(state.cartItems, action.payload.item,action.payload.qty);
            return { ...state, cartItems: addCart }

        case ActionTypes.REMOVE_CART:
            let removeCart = removeFromCart(state.cartItems, action.payload);
            return { ...state, cartItems: removeCart }
            
        case ActionTypes.REMOVE_ALL:
            let removeAllCart = removeAllFromCart(state.cartItems, action.payload);
            return { ...state, cartItems: removeAllCart }

        default:
            return state;
    }
}

export default cartReducer