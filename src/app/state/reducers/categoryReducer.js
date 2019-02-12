// Deepanshu
import * as ActionTypes from "../action-types";

const INITIAL_STATE = {
    Categories: [],
    categoryProducts:[]
}

export default
    function categoryReducer(state = INITIAL_STATE, action) {
    console.log("category reducer ", state, action);

    switch (action.type) {
        case ActionTypes.SET_CATEGORIES:
            return { ...state, Categories: action.payload };
        case ActionTypes.CATEGORY_PRODUCTS:
            return { ...state, categoryProducts: action.payload }
        default:
            return state;
    }

}