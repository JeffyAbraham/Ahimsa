export const addMultiplier = (cartItems, currentItems) => {
  console.log('*************************')
  console.log(currentItems);
  console.log('+++++++++++++++++++++++')
  console.log(cartItems);
  console.log('******************')
  const Item = cartItems.findIndex(
    (cartItem) => cartItem.id === currentItems.id
  );
  console.log(Item);
  if (Item !== -1) {
    cartItems[Item].quantity = cartItems[Item].quantity + 1;
    return [...cartItems];
  }

  return [...cartItems, { ...currentItems, quantity: 1 }];
};

export const removeItem = (cartItems, currentItems) => {
  return cartItems.filter((cartItem) => cartItem.id !== currentItems.id);
};

export const reduceQuantity = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return removeItem(cartItems, itemToRemove);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
export const increaseQuantity = (cartItems, itemToRemove) => {
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};
