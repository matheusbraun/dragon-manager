import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Main from '../pages/Main';

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute exact path="/" component={Main} />
  </Switch>
);

export default Routes;
