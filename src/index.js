import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss?v=1.3.0';

import Login from './views/Login.jsx';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route path="/app" render={props => <Login {...props} />} />
         <Redirect from="/" to="/app/login" />
      </Switch>
   </BrowserRouter>,
   document.getElementById('base')
);
