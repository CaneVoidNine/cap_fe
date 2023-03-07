import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useReducer } from "react";
import storage from "redux-persist/lib/storage";
import workReducer from "./workReducer";
import userReducer from "./userReducer";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: "somekey",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const bigReducer = combineReducers({
  user: userReducer,
  work: workReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
