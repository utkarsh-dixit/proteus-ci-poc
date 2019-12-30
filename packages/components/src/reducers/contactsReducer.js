// import { COUNTER_CHANGE } from '../constants';
import { SAVE_CONTACTS, ADD_CONTACT, CLEAR_CONTACTS } from "../actions/contacts";


const initialState = {
    list: [],
    lastSync: null
};

export const contacts = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CONTACTS:
            return {
                ...state,
                list: action.contacts,
                lastSync: Date.now()/1000
            };
        case ADD_CONTACT:
            return {
                ...state,
                list: [...state.list, action.contact],
                lastSync: Date.now()/1000
            }
        case CLEAR_CONTACTS:
            return {
                ...state,
                list: [],
                lastSync: null
            }
        default:
            return state;
    }
}