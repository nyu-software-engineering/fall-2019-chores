import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss?v=1.3.0';

import App from './layouts/App.jsx';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import CreateHousehold from './views/CreateHousehold.jsx';
import ListHousehold from './views/HousesList';
import ListChores from './views/ChoresList';
import JoinHousehold from './views/JoinHousehold.jsx';
import UserAcount from './views/UpdateAccount';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         {/* <ProtectedRoute path="/home" component={App} /> */}
         <Route path="/login" component={Login} />
         <Route path="/signup" component={Signup} />
         {/* <ProtectedRoute path="/myhouses" component={ListHousehold} /> */}
         {/* <ProtectedRoute path="/mychores" component={ListChores} /> */}
         {/* <ProtectedRoute path="/myaccount" component={UserAcount} /> */}
         <Route path="/newhousehold" component={CreateHousehold} />
         <Route path="/join" render={props => <JoinHousehold {...props} />} />
      </Switch>
   </BrowserRouter>,
   document.getElementById('base')
);
