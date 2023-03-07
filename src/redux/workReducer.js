import { SET_USER_INFO, UPDATE_USER_DETAILS } from "./actions";

const initialState = {
  userInfo: {},
};

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    case UPDATE_USER_DETAILS:
      return { ...state, userInfo: { ...state.userInfo, ...action.payload } };
    default:
      return state;
  }
};
export default workReducer;
