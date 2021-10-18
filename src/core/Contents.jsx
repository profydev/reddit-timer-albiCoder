import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '../screens/Home';
import Search from '../screens/Search';

const Contents = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/search" component={Search} />
    </Switch>
  </Router>
);

export default Contents;
