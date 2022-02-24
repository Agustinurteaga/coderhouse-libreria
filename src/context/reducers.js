export const AddItem = "AddItem";
export const RemoveItem = "RemoveItem";

// adjuntar un item
const addItemCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

// remover un item
const removeItemCart = (productId, state) => {
  console.log("Remover item: " + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

// adjuntar y remover
export const shopReducer = (state, action) => {
  switch (action.type) {
    case AddItem:
      return addItemCart(action.product, state);
    case RemoveItem:
      return removeItemCart(action.productId, state);
    default:
      return state;
  }
};
