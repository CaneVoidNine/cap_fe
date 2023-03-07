import { configureStore } from "@reduxjs/toolkit";
import workReducer from "./workReducer";
const bigReducer = {
  work: workReducer,
};
const store = configureStore({
  reducer: bigReducer,
});

export default store;
