import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashBoard from '../pages/DashBoard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={DashBoard} />
  </Switch>
);

export default Routes;
