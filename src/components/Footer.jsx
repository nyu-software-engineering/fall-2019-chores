import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
   render() {
      return (
         <footer className="footer">
            <Container fluid>
               <nav className="pull-left">
                  <ul>
                     <li>
                        <Link to="/home">Home</Link>
                     </li>

                     <li>
                        <Link to="/myaccount">Home</Link>
                     </li>
                     <li>
                        <Link to="/settings">Settings</Link>
                     </li>
                     <li>
                        <Link to="/login">Logout</Link>
                     </li>
                  </ul>
               </nav>
               <p className="copyright pull-right">
                  &copy; {new Date().getFullYear()} HouseKeeper Inc.
               </p>
            </Container>
         </footer>
      );
   }
}

export default Footer;
