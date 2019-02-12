// Karthik

import * as ActionTypes from "../action-types";
const initialState = {
    isAuthenticatedUser: localStorage.getItem('isToken')?true:false,
    token: localStorage.getItem('isToken')?localStorage.getItem('isToken'):'',
    errorMsg: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER:
        console.log("action",action)
            if (action.loginData.username==="admin" && action.loginData.password==="admin") {
                return {
                    ...state,
                    token: action.data,
                    isAuthenticatedUser: true
                };
            }
            else {
                return {
                    ...state,
                    isAuthenticatedUser: false,
                    errorMsg:'Incorrect Username or Password!!!'
                }
            }

        case ActionTypes.LOG_OUT:
            return {
                ...state,
                isAuthenticatedUser: false
            }
        case ActionTypes.SET_ERR:
            return {
                ...state,
                errorMsg: action.error
            }
        default:
            return state
    }

}

export default loginReducer