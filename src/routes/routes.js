import React from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";
import PrivateRouter from "./private-route";
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

        <PrivateRouter component={Cart} path="/carrinho" />
        <PrivateRouter exact component={Home} path="/" />
        <PrivateRouter component={About} path="/about" />
        <PrivateRouter component={Products} path="/produtos" />

        <PrivateRouter component={Admin} path={paths.Order} isAdmin />
        <PrivateRouter component={Admin} path={paths.Products} isAdmin />
        <PrivateRouter component={Admin} path={paths.NewProduct} isAdmin />
        <PrivateRouter component={Admin} path={paths.EditProduct} isAdmin />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
