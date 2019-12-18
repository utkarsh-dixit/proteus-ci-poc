import { CHANGE_NETWORK_TYPE, TURN_ON_SSR } from "../actions/miscActions";

export function misc(state = { network: true, ssr: false }, action) {
  switch (action.type) {
    case CHANGE_NETWORK_TYPE:
      return {
        ...state,
        network: action.payload,
      };
    case TURN_ON_SSR:
      return {
        ...state,
        ssr: true
      }
    default:
      return state;
  }
}
