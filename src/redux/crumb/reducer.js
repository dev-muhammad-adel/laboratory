import actionTypes from "./actions";

const initialState = {
  crumbs: [],
};

const crumbReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.set:
      return {
        ...state,
        crumbs: action.payload,
      };
    default:
      return state;
  }
};

export default crumbReducer;
