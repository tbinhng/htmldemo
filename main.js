import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.jsx';
import Admin from './Admin/Admin.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/admin" component={Admin}>
    </Route>
  </Router>
  ), document.getElementById('app')
);
