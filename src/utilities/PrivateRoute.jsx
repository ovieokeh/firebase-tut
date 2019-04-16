/* eslint-disable no-alert */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, user, ...rest }) {
  if (!user) {
    window.alert('You must be signed in to access that page');
    return <Redirect to="/" />;
  }

  return (
    <Route {...rest} render={props => <Component {...props} />} />
  );
}

export default PrivateRoute;
