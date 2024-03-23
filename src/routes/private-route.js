import React from "react";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { Header } from "../components/Header";
import { Footer } from "../components";

function PrivateRouter({ component, ...rest }) {

    const user = localStorage.getItem('dadosLocal:userData')

    if (!user) {
        return <Redirect to="login" />
    }

    return (
        <>
            <Header />
           
            <Route {...rest} component={component} />
            <Footer/>
        </>
    )
}

export default PrivateRouter

PrivateRouter.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}