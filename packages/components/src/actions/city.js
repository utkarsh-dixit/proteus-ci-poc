import { requestAPICall } from "../util/network";
import { changeNetworkStatus } from "./miscActions";

export const ADD_BANNERS = "ADD_BANNERS";

export const getBanners = (city_code = "NEW_YORK") => async (dispatch) => {
    try {
        const result = await requestAPICall(`api/v1/banner/list?cityName=${city_code}&platform=web`, {}, changeNetworkStatus, dispatch);
        // console.log(result.data);
        return dispatch({ type: ADD_BANNERS, banners: result.data });
    } catch (error) {
        return false;
    }
};

export const getTourGroups = (sort="POPULARITY") => async (dispatch) => {
    try {
        const result = await requestAPICall(`product/listing/list-by/category?categoryId=${category_id}&offset=${offset}&limit=${limit}`, {}, changeNetworkStatus, dispatch);

        return dispatch({ type: ADD_PRODUCTS_IN_CATEGORIES, products: result.data.items, category_id });
    } catch (error) {
        return false;
    }
};