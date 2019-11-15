import React, { Component } from 'react';
import SideBar from './SideBar';
import Content from './Content';

class App extends Component {
   render() {
      return (
         <div>
            <SideBar />
            <Content />
         </div>
      );
   }
}

export default App;
