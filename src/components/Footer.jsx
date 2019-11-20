import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Footer extends Component {
   render() {
      return (
         <footer className="footer">
            <Container fluid>
               <nav className="pull-left">
                  <ul>
                     <li>
                        <a href="#">Home</a>
                     </li>
                     <li>
                        <a href="#">Our Team</a>
                     </li>
                     <li>
                        <a href="#">Support</a>
                     </li>
                     <li>
                        <a href="#">Careers</a>
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
