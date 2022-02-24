import React from "react";

//https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
//reemplazar por firebase

export default React.createContext({
  products: [
    { id: "1", title: "Size 1", price: 10 },
    { id: "2", title: "Size 2", price: 20 },
    { id: "3", title: "Size 3", price: 30 },
    { id: "4", title: "Size 4", price: 40 }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
