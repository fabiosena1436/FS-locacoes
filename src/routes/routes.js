import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";
import PrivateRoouter from "./private-route";
import Products from "../containers/Products";
import Cart from "../containers/Cart";
import { About } from "../components";
import Admin from "../containers/Admin";
import paths from "../constants/paths";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
       
        <PrivateRoouter component={Cart} path="/carrinho" />
        <PrivateRoouter exact component={Home} path="/" />
        <PrivateRoouter component={About} path="/about" />
        <PrivateRoouter component={Products} path="/produtos" />

        <PrivateRoouter component={Admin} path={paths.Order} isAdmin />
        <PrivateRoouter component={Admin} path={paths.Products} isAdmin />
        <PrivateRoouter component={Admin} path={paths.NewProduct} isAdmin />
        <PrivateRoouter component={Admin} path={paths.EditProduct} isAdmin />
      </Switch>
    </Router>
  );
}

export default Routes;
