export const CHANGE_NETWORK_TYPE = "CHANGE_NETWORK_TYPE";
export const TURN_ON_SSR = "TURN_ON_SSR";

export const changeNetworkStatus = (status: any) => (dispatch: any) => {
    dispatch({
    type: CHANGE_NETWORK_TYPE,
    payload: status,
    });
 };

 export const turnOnSSR = () => (dispatch: any) => {
     dispatch({type: TURN_ON_SSR});
 }