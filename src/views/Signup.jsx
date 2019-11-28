import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const divstyle = {
    backgroundColor: '#898C8B',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    webkitFontSmoothing: 'antialiased',
    fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
    fontWeight: '400',
    width: '100%',
    height: '100%'
};
const h1style = {
    color: 'black',
    align: 'center',
    fontWeight: '300',
    margin: '30px 0 15px',
    fontSize: '52px'
};
const buttonstyle = {
    backgroundColor: '#12C13D',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px',
    marginRight: '15px',
    marginLeft: '15px'
};
const inputstyle = {
    width: '60%',
    padding: '15px',
    margin: '5px 0 22px 0',
    display: 'inline-block',
    border: 'none',
    background: '#f1f1f1'
};
const focusstyle = {
    backgroundColor: '#ddd',
    outline: 'none'
};


export default class Login extends Component {
   state = {
      date: new Date(),
   };

   onChange = date => this.setState({ date });

   render() {
      return (
        <div className="content" style={divstyle}>
            <form action="action_page.php">
            <div align="center">
            <br />
            <h1 style={h1style}>Sign-up</h1>
            <p style={{color: '#0F6C25', fontSize:'24px'}}>Please fill in this form to create an account.</p>
        
            <label for="email"><b></b></label>
            <input style={inputstyle} type="text" placeholder="Enter Email" name="email" required />
            <br /><br />
            <label for="household"><b></b></label>
            <input style={inputstyle} type="text" placeholder="Enter Household Name" name="household" required />
            <br /><br />
                
            <label for="psw"><b></b></label>
            <input style={inputstyle} type="password" placeholder="Enter Password" name="psw" required />
            <br /><br />
            <label for="psw-repeat"><b></b></label>
            <input style={inputstyle} type="password" placeholder="Repeat Password" name="psw-repeat" required />
            <br /><br />

            <label>Admin
                <input type="checkbox" checked="checked" name="remember" style={{marginBottom: "15px", marginRight: "10px", marginLeft: "5px"}} value="Admin" />
            </label>
            <label style={{marginLeft: "30px"}}>No Admin
                <input type="checkbox" name="remember" style={{marginBottom: "15px",  marginRight: "10px", marginLeft: "5px"}} value="No Admin" />
            </label>
            <br /><br />
            <div class="clearfix">
                <button class="button" style={buttonstyle}>Cancel</button>
                <button type="submit" class="button" style={buttonstyle}>Sign Up</button>
            <br /><br />
            </div>
            </div>
            </form>
        </div>
      );
   }
}
