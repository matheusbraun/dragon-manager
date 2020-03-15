import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../context/user';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() =>
        authenticated ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default RoutesPrivate;
