

export const setCartItem = () => ({
  type: "TOGGLE_CART_HIDDEN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type:'REMOVE_ITEM',
  payload:item
});

export const reduceQuantity=(item)=>({

  type:'REDUCE_QUANTITY',
  payload:item



})
export const increaseQuantity=(item)=>({

  type:'INCREASE_QUANTITY',
  payload:item



})