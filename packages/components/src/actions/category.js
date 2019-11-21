import { requestAPICall } from "../util/network";
import { changeNetworkStatus } from "./miscActions";
import {ToastAndroid} from "react-native";
export const ADD_CATEGORIES = "ADD_CATEGORIES";

export const getAllCategories = (callback) => async (dispatch) => {
    try {
      // ToastAndroid.show("Makiing request", ToastAndroid.LONG);
      const result = await requestAPICall("category/list-by/city?cityCode=NEW_YORK", {}, changeNetworkStatus, dispatch);
      // ToastAndroid.show("Item Length " + result.data.items.length, ToastAndroid.LONG);

      dispatch({type: ADD_CATEGORIES, categories: result.data.items});
      return callback(result.data.items);
    } catch (error) {
      return false;
    }
};
