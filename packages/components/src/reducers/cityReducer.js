// import { COUNTER_CHANGE } from '../constants';
import { ADD_BANNERS } from "../actions/city";


const initialState = {
    banners: [
    ]
};
export const city = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BANNERS:
            return {
                ...state,
                banners: action.banners
            };
        default:
            return state;
    }
}