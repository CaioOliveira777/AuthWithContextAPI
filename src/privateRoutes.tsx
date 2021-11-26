import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const RoutesPrivate = ({ component: Component, ...rest }) => {
  const checkToken = cookies.get("token");

  return (
    <Route
      {...rest}
      render={() =>
        checkToken ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default RoutesPrivate;
