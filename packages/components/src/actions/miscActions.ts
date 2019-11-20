export const CHANGE_NETWORK_TYPE = "CHANGE_NETWORK_TYPE";

export const changeNetworkStatus = (status: any) => (dispatch: any) => {
    dispatch({
    type: CHANGE_NETWORK_TYPE,
    payload: status,
    });
 };
