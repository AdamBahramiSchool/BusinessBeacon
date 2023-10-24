import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
  />
);

export default PrivateRoute;

/*
this file makes it so that if isAuthenticated is set to false, navigate to login. To implement in routing,
call privateRoute in App.js, and if the useState in App.js receives a isAuthenticated True, then only
grant access to route '/home'
*/