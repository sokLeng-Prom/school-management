import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../static/const";

const PrivateRoute = ({ component: Component, props, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(properties) =>
        isLoggedIn() ? (
          <Component {...properties} {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
};

export default PrivateRoute;
