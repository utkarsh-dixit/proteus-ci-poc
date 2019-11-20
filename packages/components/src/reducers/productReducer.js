// import { COUNTER_CHANGE } from '../constants';
import { ADD_PRODUCTS_IN_CATEGORIES } from "../actions/product";


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
        default:
            return state;
    }
}