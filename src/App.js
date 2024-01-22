// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import DashboardComponent from './DashboardComponent';
import PrivateRoute from './Authorization/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginComponent} />
        <PrivateRoute path="/dashboard" component={DashboardComponent} requiredRoles={['admin']} />
      </Switch>
    </Router>
  );
}

export default App;
