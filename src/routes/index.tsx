import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import DashBoard from '../pages/DashBoard';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Memorial from '../pages/Memorial';
import Construction from '../pages/Construction';

const Routes: React.FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact component={DashBoard} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/memorial" exact component={Memorial} />
      <Route path="/construction" exact component={Construction} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
