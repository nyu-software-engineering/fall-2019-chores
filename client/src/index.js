import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss?v=1.3.0';

import App from './layouts/App.jsx';
import Login from './views/Login.jsx';
import Signup from './views/Signup.jsx';
import CreateHousehold from './views/CreateHousehold.jsx';
import JoinHousehold from './views/JoinHousehold.jsx';
import HousesList from './views/HousesList';
import ChoresList from './views/ChoresList';
import UpdateAccount from './views/UpdateAccount';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route path="/home" render={props => <App {...props} />} />
         <Route path="/login" render={props => <Login {...props} />} />
         <Route path="/signup" render={props => <Signup {...props} />} />
         <Route
            path="/newhousehold"
            render={props => <CreateHousehold {...props} />}
         />
         <Route path="/join" render={props => <JoinHousehold {...props} />} />
         <Route path="/myhouses" render={props => <HousesList {...props} />} />
         <Route path="/mychores" render={props => <ChoresList {...props} />} />
         <Route
            path="/myaccount"
            render={props => <UpdateAccount {...props} />}
         />
         <Redirect from="/" to="/login" />
      </Switch>
   </BrowserRouter>,
   document.getElementById('base')
);
