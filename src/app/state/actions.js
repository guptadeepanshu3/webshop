// Karthik, Soumya, Deepanshu
import * as ActionTypes from './action-types';
import axios from 'axios';
import config from '../../../src/config';

export const topProducts = (value) => ({
    type: ActionTypes.TOP_PRODUCTS,
    payload: value
})
export const allProducts = (value) => ({
    type: ActionTypes.ALL_PRODUCTS,
    payload: value
})
export const searchProduct = (value) => ({
    type: ActionTypes.SEARCH_PRODUCT,
    payload: value
})
export const categoryProducts = (value) => ({
    type: ActionTypes.CATEGORY_PRODUCTS,
    payload: value
})
export const getProduct = (value) => ({
    type: ActionTypes.SET_PRODUCT,
    payload: value
})
export const loaded = (value) => ({
    type: ActionTypes.PRODUCTS_LOADED,
    payload: value
})
export const Categories = (value) => ({
    type: ActionTypes.SET_CATEGORIES,
    payload: value
})
export const addToCart = (item, qty) => ({
    type: ActionTypes.ADD_CART,
    payload: { item, qty }
})
export const removeFromCart = (item) => ({
    type: ActionTypes.REMOVE_CART,
    payload: item
})
export const removeAllFromCart = (item) => ({
    type: ActionTypes.REMOVE_ALL,
    payload: item
})
// login
export const getDetails = (data, loginData) => ({
    type: ActionTypes.GET_USER,
    data,
    loginData
})

export const loggedOut = (data) => ({
    type: ActionTypes.LOG_OUT,
    data
})

export const setError = error => ({
    type: ActionTypes.SET_ERR,
    error
})

export function fetchTopProducts(value) {
    return function asyncCode(dispatch, getState) {
        console.log('called by thunk')
        axios.get(`${config.ALL_PRODUCTS}?_limit=${value}`)
            .then(response => {
                dispatch(topProducts(response.data));
            })
    }
}
export function fetchAllProducts() {
    return function asyncCode(dispatch, getState) {
        console.log('called by thunk')
        dispatch(loaded(false));
        axios.get(config.ALL_PRODUCTS)
            .then(response => {
                dispatch(allProducts(response.data));
                dispatch(loaded(true));
            })
    }
}
/* mismatch with APIs product fields datatypes and graphql server's product field datatypes */
// export function fetchAllProducts() {
//     return function apiCall(dispatch, getState) {
//         console.log('called by thunk')
//         dispatch(loaded(false));
//         axios({
//             url: "https://reactprojectdbserver.azurewebsites.net/graphql",
//             method: "post",
//             data: {
//                 query: `query{
//                     allProducts{
//                       name
//                       id
//                       imageUrl
//                       categoryId
//                       ratings
//                       price
//                       shortDescription
//                       ratings
//                       views
//                     }
//                   }
//     `
//             }
//         }).then(response => {
//             dispatch(allProducts(response.data.data.allProducts));
//             dispatch(loaded(true));
//         })
//     }
// }

export function fetchProduct(id) {
    return function asyncCode(dispatch, getState) {
        console.log('called by thunk')
        axios.get(`${config.ALL_PRODUCTS}?id=${id}`)
            .then(response => {
                let product = response.data;
                dispatch(getProduct(product[0]));
            })
    }
}

export function fetchCategories() {
    return function asyncCode(dispatch, getState) {
        console.log('called by thunk')
        axios.get(config.ALL_CATEGORIES)
            .then(response => {
                dispatch(Categories(response.data));
            })
    }
}
export function fetchCategoryProducts(name) {
    return async function asyncCode(dispatch, getState) {
        let id;
        console.log('called by thunk')
        dispatch(loaded(false));
        await axios.get(`${config.ALL_CATEGORIES}?name=${name}`)
            .then(response => {
                console.log(response.data, 'response')
                id = response.data[0].id;
            })
        axios.get(`${config.ALL_PRODUCTS}?categoryId=${id}`)
            .then(res => {
                dispatch(categoryProducts(res.data));
                dispatch(loaded(true));
            })

    }
}

export const login = (username, password) =>

    dispatch => {
        let data = {
            username: username,
            password: password
        }

        axios.post(config.LOGIN, data)
            .then(response => {
                localStorage.setItem('isToken', response.data.token)
                dispatch(getDetails(response.data.token, data))
            })
            .catch(
                err =>

                    dispatch(setError('Error while Fetching Data'))
            )
    }  
