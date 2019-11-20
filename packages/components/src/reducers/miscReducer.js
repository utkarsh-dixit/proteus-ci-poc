import {CHANGE_NETWORK_TYPE} from "../actions/miscActions";
export function misc(state = {network: true}, action) {
    switch (action.type) {
      case CHANGE_NETWORK_TYPE:
      return {
        ...state,
        network: action.payload,
      };
      default:
        return state;
    }
  }
