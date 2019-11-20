import axios from "axios";
import url from "url";
import {API_SERVER} from "../config/";

// Send API Request and execute function in case of request fail.
export const requestAPICall = async (endpoint, payload, callback, dispatch) => {
    let result: any;
    const request = Object.entries(payload).length === 0 ? axios.get(url.resolve(API_SERVER, endpoint)) : axios.post(url.resolve(API_SERVER, endpoint), payload);
    await request
    .then((res) => {
        result = res;
    }).catch((err) => {
        console.log(err.response);
      	if (typeof callback === "function" && !err.response) {
        	callback(false)(dispatch);
    	}
        throw err;
    });
    return result;
};
