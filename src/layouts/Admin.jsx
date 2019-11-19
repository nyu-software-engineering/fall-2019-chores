import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

import routes from '../routes.js';

export default class Admin extends Component {
   constructor(props) {
      super(props);
      this.state = {
         _notificationSystem: null,
         fixedClasses: 'dropdown show-dropdown open',
      };
   }
   getRoutes = routes => {
      return routes.map((prop, key) => {
         if (prop.layout === '/admin') {
            return (
               <Route
                  path={prop.layout + prop.path}
                  render={props => (
                     <prop.component
                        {...props}
                        handleClick={this.handleNotificationClick}
                     />
                  )}
                  key={key}
               />
            );
         } else {
            return null;
         }
      });
   };
   handleFixedClick = () => {
      if (this.state.fixedClasses === 'dropdown') {
         this.setState({ fixedClasses: 'dropdown show-dropdown open' });
      } else {
         this.setState({ fixedClasses: 'dropdown' });
      }
   };
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
