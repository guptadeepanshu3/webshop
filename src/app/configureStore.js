// Deepanshu
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import productReducer from './state/reducers/productReducer';
import categoryReducer from './state/reducers/categoryReducer';
import cartReducer from './state/reducers/cartReducer';
import loginReducer from './state/reducers/loginReducer'
import {reducer as formReducer} from 'redux-form';
import logger from 'redux-logger'
import thunk from 'redux-thunk';


export function cacheMiddleware(store){
    return function (nextFunc) {
        return function (action) {
            console.log('CACHE MIDDLEWARE', action);

            const result = nextFunc(action);
            if (action.type && action.type.indexOf('CART') >= 0) {
                const state = store.getState();
                console.log(state,'state')
                let cartArray=[];
                cartArray=state.cartReducer.cartItems
              //  console.log(,"cart in cache")
                localStorage.setItem("cartItems", JSON.stringify(cartArray))
            }
            // const state = store.getState();
            // window.localStorage.setItem("state", state)
            return result;
        }
    }
}

const configureStore = () => {
    const rootReducer = combineReducers({ productReducer, categoryReducer, cartReducer, loginReducer, form: formReducer })

    // const counterFromLocalStorage = parseInt(window.localStorage.getItem("state")) || 0;
    // console.log('storage', counterFromLocalStorage)


    const store = createStore(rootReducer,
        applyMiddleware(
            logger,cacheMiddleware, thunk));

    return store;
}

export default configureStore;
