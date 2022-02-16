import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import localStorageHandler from '../../utils/LocalStorageHandler';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = localStorageHandler.get('loggedIn');

  return (
    <Route>
      {() => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    </Route>
  );
};

export default ProtectedRoute;
