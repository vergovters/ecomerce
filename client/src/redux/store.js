import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import likeReducer from "./likeRedux"; 

const rootReducer = {
  cart: cartReducer,
  user: userReducer,
  like: likeReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Temporarily disable to check for issues
    }),
});