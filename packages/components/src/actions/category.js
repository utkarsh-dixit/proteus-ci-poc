import { requestAPICall } from "../util/network";
import { changeNetworkStatus } from "./miscActions";
import { ToastAndroid } from "react-native";
export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const SET_LOADING_PRODUCTS = "SET_LOADING_PRODUCTS";

export const getAllCategories = (callback) => async (dispatch) => {
  try {
    // ToastAndroid.show("Makiing request", ToastAndroid.LONG);
    const result = await requestAPICall("api/v1/feed/city/get/NEW_YORK/?depth=1&currency=USD&lang=en", {}, changeNetworkStatus, dispatch);
    // ToastAndroid.show("Item Length " + result.data.items.length, ToastAndroid.LONG);

    dispatch({ type: ADD_CATEGORIES, schema: result.data });
    return callback(result.data.categories);
  } catch (error) {
    return false;
  }
};

export const setLoadingProducts = (id, loading) => async (dispatch) => {
  dispatch({ SET_LOADING_PRODUCTS, id, loading });
};