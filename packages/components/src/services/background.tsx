import { ToastAndroid } from "react-native";
import { saveContacts } from "../actions/contacts";

export function handleOnContactsSyncComplete(store, event) {
    console.log("Got Contacts From Native Sync: ", Date.now());
    console.log(event);
    if (event && event.list) {
        saveContacts(JSON.parse(event.list))(store.dispatch);
    }
};