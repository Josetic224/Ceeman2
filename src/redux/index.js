import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productReducer from "../reducers/productReducer";
//import productSliceReducer from "./productSlice";
//import withdrawalSliceReducer from "./withdrawalSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    products: productReducer,
  },
});
