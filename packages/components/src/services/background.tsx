import { ToastAndroid } from "react-native";
import { saveContacts } from "../actions/contacts";

export function handleOnContactsSyncComplete(store, event) {
    console.log("Got Contacts From Native Sync: ", Date.now());
    if (event && event.list) {
        console.log(event.list);
        if(typeof event.list === "object"){
            saveContacts(event.list)(store.dispatch);
        } else {
            saveContacts(JSON.parse(event.list))(store.dispatch);
        }
        // saveContacts(typeof event.list === "string" ? JSON.parse(event.list) : event.list)(store.dispatch);
    }
};