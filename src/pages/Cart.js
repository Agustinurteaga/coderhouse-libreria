import React, { useContext, useEffect } from "react";
import ShopContext from "../context/shop-context";
import MainNavigation from "../components/MainNavigation";
import "./Cart.css";

const CartPage = props => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  //  reactjs.org/docs/fragments.html
  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No hay items seleccionados</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeItemCart.bind(
                    this,
                    cartItem.id
                  )}>
                  Quitar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};


export default CartPage;
