import axios from "axios";
import url from "url";
import {BASE_API_URL} from "../config/";

// Send API Request and execute function in case of request fail.
export const requestAPICall = async (endpoint, payload, callback, dispatch) => {
    let result: any;
    const request = Object.entries(payload).length === 0 ? axios.get(url.resolve(BASE_API_URL, endpoint)) : axios.post(url.resolve(BASE_API_URL, endpoint), payload);
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
