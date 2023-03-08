import { FETCH_WORK, SAVE_WORK } from "./actions";

const initialState = {
  workouts: [],
};

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORK:
      return { state, workouts: action.payload };

    default:
      return state;
  }
};
export default workReducer;
