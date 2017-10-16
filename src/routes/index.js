import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Whiteboard from '../pages/Whiteboard';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/whiteboards" component={Whiteboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
