import React, { useReducer } from "react";
import ShopContext from "./shop-context";
import { shopReducer, AddItem, RemoveItem } from "./reducers";

//listado de productos
const GlobalState = props => {
  const products = [
    { id: "1", title: "Size 1", price: 10 },
    { id: "2", title: "Size 2", price: 20 },
    { id: "3", title: "Size 3", price: 30 },
    { id: "4", title: "Size 4", price: 40 }
  ];
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

//Adherir
  const addItemCart = product => {
    setTimeout(() => {
      dispatch({ type: AddItem, product: product });
    }, 700);
  };
  
//Remover
  const removeItemCart = productId => {
    setTimeout(() => {
      dispatch({ type: RemoveItem, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addItemCart: addItemCart,
        removeItemCart: removeItemCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
