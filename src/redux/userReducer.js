import {
  LIKE_WORK,
  SAVE_CALENDAR,
  SAVE_TOKEN,
  SAVE_USER,
  SAVE_USERS,
  UNLIKE_WORK,
  CLEAR_WORK,
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
    case SAVE_USERS:
      return { ...state, users: action.payload };
    case LIKE_WORK:
      console.log(state.likes.likes);
      const likes = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      const updatedLikes = [
        ...new Set([...state.likes.likes, ...likes]),
      ].filter(Boolean);
      if (updatedLikes.length !== state.likes.likes.length) {
        return {
          ...state,
          likes: { ...state.likes.likes, likes: updatedLikes },
        };
      }
      return state;
    case UNLIKE_WORK:
      return {
        ...state,
        likes: {
          ...state.user,
          likes: state.likes.likes.filter((like) => like !== action.payload),
        },
      };
    case CLEAR_WORK:
      return {
        ...state,
        likes: {
          ...state.likes,
          likes: [], // set likes.likes to an empty array
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
