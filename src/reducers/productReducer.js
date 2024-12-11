import {
  VIEW_PRODUCTS_SUCCESS,
  VIEW_PRODUCTS_FAIL,
  VIEW_ONE_PRODUCT_SUCCESS,
  VIEW_ONE_PRODUCT_FAIL,
} from "../actions/productActions";

const initialState = {
  products: [],
  // product: null,
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case VIEW_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case VIEW_ONE_PRODUCT_FAIL:
      return {
        ...state,
        products: [],
        error: action.payload,
        loading: false,
      };
    case VIEW_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default productReducer;
