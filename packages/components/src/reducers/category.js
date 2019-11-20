// import { COUNTER_CHANGE } from '../constants';
import { ADD_CATEGORIES } from "../actions/category";


const initialState = {
    list: []
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
        default:
            return state;
    }
}