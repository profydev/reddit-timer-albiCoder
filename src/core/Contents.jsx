/* eslint-disable linebreak-style */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../screens/Home';
import Search from '../screens/Search';

const Contents = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/search" component={Search} />
  </Switch>
);

export default Contents;
