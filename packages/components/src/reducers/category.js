// import { COUNTER_CHANGE } from '../constants';
import { ADD_CATEGORIES, SET_LOADING_PRODUCTS } from "../actions/category";


const initialState = {
    list: [],
    loadingProducts: {}
};
export const category = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            return {
                ...state,
                list: action.categories.reduce((prev, current) => {
                    return [...prev, {
                        id: current.id,
                        name: current.name,
                        image: current.image.url,
                        cityCode: current.cityCode,
                        canonicalUrl: current.canonicalUrl
                    }]
                }, [])
            };
        case SET_LOADING_PRODUCTS:
            return {
                ...state,
                loadingProducts: {
                    ...loadingProducts,
                    [action.id]: action.loading
                }
            }
        default:
            return state;
    }
}