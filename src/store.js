import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
