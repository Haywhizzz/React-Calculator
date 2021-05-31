import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../calculator/App';
import Nav from '../navbar/Navbar';
import Home from '../home/Home';
import Quote from '../quote/Quote';

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
