import { combineReducers } from 'redux';
import { category } from "./category";
import { product } from "./productReducer";
import { misc } from "./miscReducer";
import { city } from "./cityReducer";
import { contacts } from "./contactsReducer";

export default combineReducers(
    {
        category,
        product,
        misc,
        city,
        contacts
    }
);