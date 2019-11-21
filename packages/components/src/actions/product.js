import { requestAPICall } from "../util/network";
import { changeNetworkStatus } from "./miscActions";

export const ADD_PRODUCTS_IN_CATEGORIES = "ADD_PRODUCTS_IN_CATEGORIES";

export const getProductsFromCategory = (category_id, offset = 0, limit = 5) => async (dispatch) => {
    try {
        const result = await requestAPICall(`product/listing/list-by/category?categoryId=${category_id}&offset=${offset}&limit=${limit}`, {}, changeNetworkStatus, dispatch);

        return dispatch({ type: ADD_PRODUCTS_IN_CATEGORIES, products: result.data.items, category_id });
    } catch (error) {
        return false;
    }
};
