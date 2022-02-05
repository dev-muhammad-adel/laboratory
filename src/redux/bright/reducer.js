import { getDefaultPath } from "@iso/lib/helpers/url_sync";
import actions, { getView } from "./actions";
const preKeys = getDefaultPath();
const initState = {
  value: +localStorage.getItem("bright") || 100,
};

export default function brightReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE:
      localStorage.setItem("bright", action.payload);
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
  return state;
}
