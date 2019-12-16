import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import homeRoutes from '../routes';
import households from '../household';

import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         fixedClasses: 'dropdown show-dropdown open',
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

      return routes.map((prop, key) => {
         if (prop.layout === '/app') {
            return (
               <Route
                  path={prop.path}
                  render={props => <prop.component {...newProps} />}
                  key={key}
                  methods={{
                     getDataFromDB: this.getDataFromDB,
                     putDataToDB: this.putDataToDB,
                     deleteFromDB: this.deleteFromDB,
                     updateDB: this.updateDB,
                  }}
               />
            );
         } else {
            return null;
         }
      });
   };

   componentDidMount() {
      this.getDataFromDB();
      // if (!this.state.intervalIsSet) {
      //    let interval = setInterval(this.getDataFromDB, 1000);
      //    this.setState({ intervalIsSet: interval });
      // }
   }

   componentWillUnmount() {
      if (this.state.intervalIsSet) {
         clearInterval(this.state.intervalIsSet);
         this.setState({ intervalIsSet: null });
      }
   }

   componentDidUpdate(e) {
      if (
         window.innerWidth < 993 &&
         e.history.location.pathname !== e.location.pathname &&
         document.documentElement.className.indexOf('nav-open') !== -1
      ) {
         document.documentElement.classList.toggle('nav-open');
      }
      if (e.history.action === 'PUSH') {
         document.documentElement.scrollTop = 0;
         document.scrollingElement.scrollTop = 0;
         this.refs.mainPanel.scrollTop = 0;
      }
   }

   getDataFromDB = () => {
      fetch('http://localhost:3001/api/household')
         .then(data => data.json())
         .then(res => this.setState({ households: res.data }));
   };

   // onChange={e => this.setState({ message: e.target.value })}
   // onClick={() => this.putDataToDB(this.state.message)}
   putDataToDB = message => {
      let currentIds = this.state.data.map(data => data.id);
      let idToBeAdded = 0;
      while (currentIds.includes(idToBeAdded)) {
         ++idToBeAdded;
      }

      axios.post('http://localhost:3001/api/household', {
         id: idToBeAdded,
      });
   };

   // onChange={e => this.setState({ idToDelete: e.target.value })}
   // onClick={() => this.deleteFromDB(this.state.idToDelete)}
   deleteFromDB = idTodelete => {
      parseInt(idTodelete);
      let objIdToDelete = null;
      this.state.data.forEach(dat => {
         if (dat.id == idTodelete) {
            objIdToDelete = dat._id;
         }
      });

      axios.delete('http://localhost:3001/api/household', {
         households: {
            id: objIdToDelete,
         },
      });
   };

   // onChange={e => this.setState({ idToUpdate: e.target.value })}
   // onChange={e => this.setState({ updateToApply: e.target.value })}
   // onClick={() => this.updateDB(this.state.idToUpdate,this.state.updateToApply)}
   updateDB = (idToUpdate, updateToApply) => {
      let objIdToUpdate = null;
      parseInt(idToUpdate);
      this.state.data.forEach(dat => {
         if (dat.id == idToUpdate) {
            objIdToUpdate = dat._id;
         }
      });

      axios.post('http://localhost:3001/api/household', {
         id: objIdToUpdate,
         update: { message: updateToApply },
      });
   };

   render() {
      return (
         <div className="wrapper">
            <Sidebar routes={homeRoutes} />
            <div id="main-panel" className="main-panel" ref="mainPanel">
               <Switch>{this.getRoutes(homeRoutes)}</Switch>
               <Footer />
            </div>
         </div>
      );
   }
}
