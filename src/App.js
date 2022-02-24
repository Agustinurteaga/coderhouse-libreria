import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalState from "./context/GlobalState";

import Contacto from './pages/Contacto';
import ProductsPage from "./pages/Products";
import Informacion from './pages/Informacion';
import CartPage from "./pages/Cart";
import "./App.css";

//Firebase
import {db} from './firebase/firebaseConfig'


const App = props => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/informacion" component={Informacion} exact />
          <Route path="/contacto" component={Contacto} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
