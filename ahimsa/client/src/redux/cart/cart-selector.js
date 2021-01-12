import { createSelector } from "reselect";


const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const cartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulated, currentItem) => accumulated + currentItem.quantity,
    0
  )
);

export const selectToggleCart = createSelector(
  [selectCart],
  (show) => show.hidden
);
export const SelecttotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulated, currentItem) => accumulated + (currentItem.price)*currentItem.quantity,
    0
  )
);
