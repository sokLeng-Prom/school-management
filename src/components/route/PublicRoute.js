import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../static/const";

const PublicRoute = ({ component: Component, restricted, props, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(properties) =>
        isLoggedIn() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...properties} {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
