// import { COUNTER_CHANGE } from '../constants';
import { ADD_PRODUCTS_IN_CATEGORIES, ADD_PRODUCTS_IN_CATEGORIES_IN_BATCH } from "../actions/product";


const initialState = {
    products: {

    }
};
export const product = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS_IN_CATEGORIES:
            return {
                ...state,
                products: {
                    ...state.products,
                    [action.category_id]: action.products
                }
            };
        case ADD_PRODUCTS_IN_CATEGORIES_IN_BATCH:
            return {
                ...state,
                product: {
                    ...state.products,
                    ...action.products
                }
            }
        default:
            return state;
    }
}