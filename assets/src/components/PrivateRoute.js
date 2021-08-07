import {Redirect, Route} from "react-router-dom";
import React from "react";

const PrivateRoute = ({path, isAuthenticated, component}) => {
    return isAuthenticated ? (
        <Route path={path} component={component} />
    ) : (
        <Redirect to={"/login"} />
    );
}

export default PrivateRoute;