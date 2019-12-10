import React, { Component } from 'react';
import {
   Col,
   Container,
   FormControl,
   FormGroup,
   FormLabel,
   Row,
} from 'react-bootstrap';

import { states } from '../helpers';
import person from '../person';
import logo from '../assets/img/logo.png';

import LinkedButton from '../components/LinkedButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import HomePage from '../views/HomePage';
import UserCard from '../components/UserCard';

class Signup extends Component {
   constructor(props) {
      super(props);
      this.state = {
         confirmPass: '',
         firstName: '',
         lastName: '',
         password: '',
         personID: {},
         phoneNum: '',
         title: '',
         username: '',
      };

      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
         this
      );
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.createUser = this.createUser.bind(this);
   }

   handleFirstNameChange(event) {
      this.setState({ firstName: event.target.value });
   }
   handleLastNameChange(event) {
      this.setState({ lastName: event.target.value });
   }
   handlePhoneNumChange(event) {
      this.setState({ phoneNum: event.target.value });
   }
   handlePasswordChange(event) {
      this.setState({ password: event.target.value });
   }
   handleConfirmPasswordChange(event) {
      this.setState({ confirmPass: event.target.value });
   }
   handleUsernameChange(event) {
      this.setState({ username: event.target.value });
   }

   createUser() {
      console.log('RUNNNNNNNNNNNNNN');
      fetch('http://localhost:3001/api/person', {
         method: 'post',
         body: JSON.stringify([
            {
               phoneNum: this.state.phoneNum,
               firstName: this.state.firstName,
               lastName: this.state.lastName,
            },
         ]),
         headers: {
            'Content-Type': 'application/json',
            Origin: 'http://localhost:3001',
         },
      })
         .then(res => res.json())
         .then(status => {
            if (status.success === false) {
               console.log('MISSION FAILED');
               console.log(status.error);
            } else {
               console.log('MISSION SUCCESS');

               this.setState({ personID: status.id });
            }
         });
   }

   validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
   }

   render() {
      return (
         <div id="signup" className="signup">
            <div className="logo">
               <div className="simple-text logo-mini">
                  <div className="logo-img">
                     <img src={logo} alt="logo_image" />
                  </div>
               </div>
               <h2 className="simple-text logo-normal">HouseKeeper</h2>
            </div>
            <div className="content">
               <Container fluid>
                  <Row>
                     <Col md={{ span: 5, offset: 3 }}>
                        <Card
                           title="Sign Up"
                           lineBreak
                           content={
                              <form>
                                 <FormInputs
                                    cols={['col-md-6', 'col-md-6']}
                                    properties={[
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'First Name',
                                          placeholder: 'First Name',
                                          required: true,
                                          size: 'sm',
                                          type: 'text',
                                          value: this.state.firstName,
                                          onChange: this.handleFirstNameChange,
                                       },
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Last Name',
                                          placeholder: 'Last Name',
                                          required: true,
                                          size: 'sm',
                                          type: 'text',
                                          value: this.state.lastName,
                                          onChange: this.handleLastNameChange,
                                       },
                                    ]}
                                 />
                                 <FormInputs
                                    cols={['col-md-6', 'col-md-6']}
                                    properties={[
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Username',
                                          placeholder: 'Username',
                                          required: true,
                                          size: 'sm',
                                          type: 'username',
                                          value: this.state.username,
                                          onChange: this.handleUsernameChange,
                                       },
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Phone Number',
                                          placeholder: '(XXX) XXX-XXX',
                                          required: true,
                                          size: 'sm',
                                          type: 'phoneNum',
                                          value: this.state.phoneNum,
                                          onChange: this.handlePhoneNumChange,
                                       },
                                    ]}
                                 />
                                 <FormInputs
                                    cols={['col-md-6', 'col-md-6']}
                                    properties={[
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Password',
                                          placeholder: 'Password',
                                          required: true,
                                          size: 'sm',
                                          type: 'password',
                                          value: this.state.password,
                                          onChange: this.handlePasswordChange,
                                       },
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Confirm Password',
                                          placeholder: 'Confirm Password',
                                          required: true,
                                          size: 'sm',
                                          type: 'password',
                                          value: this.state.confirmPass,
                                          onChange: this
                                             .handleConfirmPasswordChange,
                                       },
                                    ]}
                                 />
                                 <LinkedButton
                                    pathname="/newHousehold"
                                    household={this.state}
                                    onClick={this.createUser}
                                    buttonText="Create New Household"
                                    block
                                 />
                                 <div className="clearfix"> or </div>
                                 <LinkedButton
                                    pathname="/join"
                                    household={this.state}
                                    onClick={this.createUser}
                                    buttonText="Join Existing Household"
                                    block
                                 />
                                 <div className="clearfix" />
                              </form>
                           }
                        />
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}

export default Signup;
