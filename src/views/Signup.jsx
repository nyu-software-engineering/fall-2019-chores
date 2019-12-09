import React, { Component } from 'react';
import {
   Col,
   Container,
   FormControl,
   FormGroup,
   FormLabel,
   Row,
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { states } from '../helpers';
import person from '../person';
import logo from '../assets/img/logo.png';

import Button from '../components/CustomButton';
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
         householdID: {},
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
      this.sendData = this.sendData.bind(this);
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

   async sendData() {
      fetch('/api/household/', {
         method: 'post',
         body: JSON.stringify({
            title: this.title,
         }),
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then(res => res.json())
         .then(status => {
            if (status.success === false) {
               //show failure page
            } else {
               this.setState({ householdID: status.id });

               fetch('/api/person', {
                  method: 'post',
                  body: JSON.stringify([
                     {
                        phoneNum: this.phoneNum,
                        firstName: this.firstName,
                        lastName: this.lastName,
                     },
                     {
                        id: status.id,
                     },
                  ]),
                  headers: {
                     'Content-Type': 'application/json',
                  },
               })
                  .then(res => res.json())
                  .then(status => {
                     if (status.success === false) {
                        //show failure page
                     } else {
                        //show success page

                        this.setState({ personID: status.id });
                     }
                  });
            }
         });
   }

   validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
   }

   render() {
      console.log('household:', this.state);
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
                                 <Link
                                    to={{
                                       pathname: '/newhousehold',
                                       household: this.state,
                                    }}
                                 >
                                    <Button
                                       block
                                       size="md"
                                       type="submit"
                                       variant="success"
                                    >
                                       Create New Household
                                    </Button>
                                 </Link>
                                 <div className="clearfix"> or </div>
                                 <Link
                                    to={{
                                       pathname: '/join',
                                       household: this.state,
                                    }}
                                 >
                                    <Button
                                       block
                                       size="md"
                                       type="submit"
                                       variant="success"
                                    >
                                       Join Existing Household
                                    </Button>
                                 </Link>
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

export default withRouter(Signup);
