import {
  CLEAR_USER,
  LIKE_WORK,
  SAVE_CALENDAR,
  SAVE_TOKEN,
  SAVE_USER,
  SAVE_USERS,
  UNLIKE_WORK,
} from "./actions";

const initialState = {
  users: [],
  user: [],
  accessToken: "",
  calendar: [],
  likes: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return { ...state, accessToken: action.payload };
    case SAVE_USER:
      return { ...state, user: action.payload };
    case CLEAR_USER:
      return { ...state, user: [] };
    case SAVE_USERS:
      return { ...state, users: action.payload };
    case LIKE_WORK:
      console.log(state.user.likes);
      const likes = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      const updatedLikes = [...new Set([...state.user.likes, ...likes])].filter(
        Boolean
      );
      if (updatedLikes.length !== state.user.likes.length) {
        return {
          ...state,
          user: { ...state.user.likes, likes: updatedLikes },
        };
      }
      return state;
    case UNLIKE_WORK:
      return {
        ...state,
        user: {
          ...state.user,
          likes: state.user.likes.filter((like) => like !== action.payload),
        },
      };
    case SAVE_CALENDAR:
      const newEntry = action.payload;
      const currentCalendar = state.calendar;
      let updatedCalendar;

      if (Array.isArray(currentCalendar)) {
        updatedCalendar = [...currentCalendar, newEntry];
      } else {
        updatedCalendar = [newEntry];
      }

      return {
        ...state,
        calendar: updatedCalendar,
      };
    case "CLEAR_CALENDAR":
      return {
        ...state,

        calendar: [],
      };
    default:
      return state;
  }
};

export default userReducer;
