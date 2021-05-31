import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './Navbar';
import Home from './Home';
import Quote from './Quote';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/calculator" exact component={App} />
      <Route path="/quote" exact component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
