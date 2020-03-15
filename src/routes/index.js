import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';
import Details from '../pages/Details';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact path="/" component={Main} />
    <PrivateRoute exact path="/register" component={Register} />
    <PrivateRoute exact path="/details/:id" component={Details} />
    <Route component={Login} />
  </Switch>
);

export default Routes;
