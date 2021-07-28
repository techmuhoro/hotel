import React from 'react';
import home from './pages/home';
import error from './pages/error';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={home} />
        <Route component={error} />
      </Switch>
    </Router>
  );
};

export default App;
