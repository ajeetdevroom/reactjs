// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './authService';

const PrivateRoute = ({ component: Component, requiredRoles, ...rest }) => {
  const isAuthorized = () => {
    // Implement logic to check if user has required roles/permissions
    // Example: const userRoles = getUserRoles();
    // return requiredRoles.every(role => userRoles.includes(role));
    return true; // Placeholder, replace with actual logic
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
