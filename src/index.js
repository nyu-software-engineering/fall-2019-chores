import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss?v=1.3.0';

import Admin from './layouts/Admin.jsx';
import Login from './views/Login.jsx';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route path="/admin" render={props => <Admin {...props} />} />
         <Redirect from="/" to="/admin/dashboard" />
      </Switch>
   </BrowserRouter>,
   document.getElementById('base')
);
