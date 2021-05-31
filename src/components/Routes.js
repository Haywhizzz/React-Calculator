import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/calculator/App';
import Nav from '../components/navbar/Navbar';
import Home from '../components/home/Home';
import Quote from '../components/quote/Quote';

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
