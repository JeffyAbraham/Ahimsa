import {
  addMultiplier,
  removeItem,
  reduceQuantity,
  increaseQuantity,
} from "./cart-utility";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };

    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addMultiplier(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    case "REDUCE_QUANTITY":
      return {
        ...state,
        cartItems: reduceQuantity(state.cartItems, action.payload),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: increaseQuantity(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
export default cartReducer;
