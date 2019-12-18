import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import routes from '../routes';

import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         households: [],
         id: 0,
         message: null,
         intervalIsSet: false,
         idToDelete: null,
         idToUpdate: null,
         objectToUpdate: null,
      };
   }

   getRoutes = routes => {
      const newProps = {
         props: this.props,
         // household: this.props.location.household,
         // user: this.props.location.user,
         household: {
            householdID: { id: 1 },
            title: 'pizza',
            members: [],
            chores: [
               {
                  completed: Date,
                  created: Date,
                  criteria: 'All garbages are emptied',
                  due: Date,
                  late: false,
                  title: 'Garbage',
               },
            ],
         },
         user: {
            password: 'pizzaman123',
            personID: { id: 1 },
            phoneNum: '8479177991',
            title: 'pizza',
            username: 'rma12345',
            lastName: 'Auerbach',
            confirmPass: 'pizzaman123',
            firstName: 'Rena',
         },
      };

      console.log('app.js props:', newProps);

      return routes.map((prop, key) => {
         if (prop.layout === '/app') {
            return (
               <Route
                  path={prop.path}
                  render={props => <prop.component {...newProps} />}
                  key={key}
                  // methods={{
                  //    getDataFromDB: this.getDataFromDB,
                  //    putDataToDB: this.putDataToDB,
                  //    deleteFromDB: this.deleteFromDB,
                  //    updateDB: this.updateDB,
                  // }}
               />
            );
         } else {
            return null;
         }
      });
   };

   render() {
      return (
         <div className="wrapper">
            <Sidebar {...this.props} routes={routes} />
            <div id="main-panel" className="main-panel" ref="mainPanel">
               <Switch>{this.getRoutes(routes)}</Switch>
               <Footer />
            </div>
         </div>
      );
   }
}
