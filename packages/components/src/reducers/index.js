import { combineReducers } from 'redux';
import { category } from "./category";
import { product } from "./productReducer";
import { misc } from "./miscReducer";

export default combineReducers(
    {
        category,
        product,
        misc
    }
);