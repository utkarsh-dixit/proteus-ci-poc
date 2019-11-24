// import { COUNTER_CHANGE } from '../constants';
import { ADD_CATEGORIES, SET_LOADING_PRODUCTS } from "../actions/category";


const initialState = {
    schema: [],
    loadingProducts: {}
};
export const category = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            return {
                ...state,
                schema: action.schema
            };
        default:
            return state;
    }
}