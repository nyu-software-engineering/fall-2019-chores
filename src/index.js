import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss?v=1.3.0';

import App from './layouts/App.jsx';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route path="/home" render={props => <App {...props} />} />
         <Route path="/login" render={props => <Login {...props} />} />{' '}
         <Route path="/signup" render={props => <Signup {...props} />} />
      </Switch>
   </BrowserRouter>,
   document.getElementById('base')
);
