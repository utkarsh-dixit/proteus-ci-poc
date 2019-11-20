import { requestAPICall } from "../util/network";
import { changeNetworkStatus } from "./miscActions";

export const ADD_CATEGORIES = "ADD_CATEGORIES";

export const getAllCategories = (callback) => async (dispatch) => {
    try {
      const result = await requestAPICall("category/list-by/city?cityCode=NEW_YORK", {}, changeNetworkStatus, dispatch);
      dispatch({type: ADD_CATEGORIES, categories: result.data.items});
      return callback(result.data.items);
    } catch (error) {
      return false;
    }
};
