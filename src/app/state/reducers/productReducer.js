// Deepanshu

import * as ActionTypes from "../action-types";

const INITIAL_STATE = {
    topProducts: [],
    allProducts: [],
    filteredProducts: [],
    loaded: false,
    Product: {}
}

function searchProduct(keyword, allProducts) {
    let filtered = allProducts;

    filtered = allProducts.filter(product =>

        product.name.toLowerCase().match(keyword.toLowerCase(), 'g')

    );

    return (filtered.length < 1) ? [] : filtered;
}
export default
    function productReducer(state = INITIAL_STATE, action) {
    console.log("product reducer ", state, action);

    switch (action.type) {
        case ActionTypes.TOP_PRODUCTS:
            return { ...state, topProducts: action.payload };
        case ActionTypes.ALL_PRODUCTS:
            return { ...state, allProducts: action.payload, filteredProducts: action.payload };
        case ActionTypes.PRODUCTS_LOADED:
            return { ...state, loaded: action.payload }
        case ActionTypes.SET_PRODUCT:
            return { ...state, Product: action.payload };
        case ActionTypes.SEARCH_PRODUCT:
            return { ...state, filteredProducts: searchProduct(action.payload, state.allProducts) };
        default:
            return state;
    }

}