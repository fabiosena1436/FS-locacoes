import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";
import PrivateRoouter from "./private-route";
import Products from "../containers/Products";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoouter exact component={Home} path="/" />
                <PrivateRoouter  component={Products} path="/produtos" />
            </Switch>
        </Router>
    )
}

export default Routes