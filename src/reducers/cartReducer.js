// cartReducer.js
import {
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  VIEW_CART_SUCCESS,
  VIEW_CART_FAIL,
  INCREASE_QUANTITY_SUCCESS,
  INCREASE_QUANTITY_FAIL,
  DECREASE_QUANTITY_SUCCESS,
  DECREASE_QUANTITY_FAIL,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAIL,
  FETCH_TOTAL_CART_ITEMS_SUCCESS,
  FETCH_TOTAL_CART_ITEMS_FAIL,
  SET_TOTAL_CART_ITEMS,
} from "../actions/cartActions";

const initialState = {
  cartItems: [],
  totalCartItems: 0,
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        loading: false,
        error: null,
      };
    case ADD_TO_CART_FAIL:
    case VIEW_CART_FAIL:
    case INCREASE_QUANTITY_FAIL:
    case DECREASE_QUANTITY_FAIL:
    case DELETE_CART_ITEM_FAIL:
    case FETCH_TOTAL_CART_ITEMS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case VIEW_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
        error: null,
      };
    case INCREASE_QUANTITY_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.CartItemID === action.payload.addedItems.CartItemID
            ? action.payload.addedItems
            : item
        ),
        loading: false,
        error: null,
      };
    case DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: action.payload, // Update cartItems with the new list after deletion
        loading: false,
        error: null,
      };
    case DELETE_CART_ITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.CartItemID !== action.payload.CartItemID
        ),
        loading: false,
        error: null,
      };
    case FETCH_TOTAL_CART_ITEMS_SUCCESS:
      console.log("Total Cart Items:", action.payload); // Log the payload to see what's being received
      return {
        ...state,
        totalCartItems: action.payload,
        loading: false,
        error: null,
      };

    case SET_TOTAL_CART_ITEMS:
      return {
        ...state,
        totalCartItems: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default cartReducer;
