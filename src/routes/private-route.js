import React from "react";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";

function PrivateRouter({component, ...rest}){

    const user = localStorage.getItem('dadosLocal:userData')

    if(!user){
        return<Redirect to="login"/>
    }

    return <Route {...rest} component={component}/>
}

export default PrivateRouter

PrivateRouter.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}