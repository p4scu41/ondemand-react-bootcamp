import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shoppingCartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
