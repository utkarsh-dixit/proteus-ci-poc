export const SAVE_CONTACTS = "SAVE_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";
export const CLEAR_CONTACTS = "CLEAR_CONTACTS";

interface Contact{
    id: string;
    name: string;
    phone: string;
    profilePic: string;
};

export const addContact = (contact: Contact) => async (dispatch) => {
    return dispatch({type: ADD_CONTACT, contact});
};

export const saveContacts = (contacts : Array<Contact>) => async (dispatch) => {
    return dispatch({type: SAVE_CONTACTS, contacts});
}

export const clearAllContacts = () => async (dispatch) => {
    return dispatch({type: CLEAR_CONTACTS});
}