import { requestAPICall } from "../util/network";
import { changeNetworkStatus } from "./miscActions";

export const ADD_PRODUCTS_IN_CATEGORIES = "ADD_PRODUCTS_IN_CATEGORIES";
export const ADD_PRODUCTS_IN_CATEGORIES_IN_BATCH = "ADD_PRODUCTS_IN_CATEGORIES_IN_BATCH";

export const getProductsFromCategory = (category_id, offset = 0, limit = 5) => async (dispatch) => {
    try {
        const result = await requestAPICall(`api/v1/product/listing/list-by/category?categoryId=${category_id}&offset=${offset}&limit=${limit}`, {}, changeNetworkStatus, dispatch);

        return dispatch({ type: ADD_PRODUCTS_IN_CATEGORIES, products: result.data.items, category_id });
    } catch (error) {
        return false;
    }
};

export const getProductsFromCategoryInBatch = (category_ids, offset = 0, limit = 5) => async (dispatch) => {
    try {
        const out = {};
        for(let i = 0; i < category_ids.length && i < limit; i++){
            const result = await requestAPICall(`api/v1/product/listing/list-by/category?categoryId=${category_ids[i]}&offset=${offset}&limit=${limit}`, {}, changeNetworkStatus, dispatch);
            out[category.id] = [
                ...out[category_ids[i]],
                ...result.data.items
            ];
            // console.log(result);
        }

        return dispatch({ type: ADD_PRODUCTS_IN_CATEGORIES_IN_BATCH, products: out });
    } catch (error) {
        return false;
    }
};
