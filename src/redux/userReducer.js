import { LIKE_WORK, SAVE_TOKEN, SAVE_USER, SAVE_USERS } from "./actions";

const initialState = {
  users: [],
  user: [],
  accessToken: "",
  likes: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return { ...state, accessToken: action.payload };
    case SAVE_USER:
      return { ...state, user: action.payload };
    case SAVE_USERS:
      return { ...state, users: action.payload };
    case LIKE_WORK:
      return { ...state, likes: action.payload };
    default:
      return state;
  }
};

export default userReducer;
