import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, user, ...rest }) {
  if (user) return <Redirect to="/protected" />;

  return (
    <Route {...rest} render={props => <Component {...props} />} />
  );
}

export default PublicRoute;
