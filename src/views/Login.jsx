import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sessionData from '../actions/sessionData';

import logo from '../assets/img/logo.png';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
         numValid: true,
         formValid: true,
         buttonValid: false,
         formErrors: { Phone: '' },
      };

      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      // this.sendData = this.sendData.bind(this);
   }

   onSubmit() {
      const { username } = this.state.username;
      const { login } = this.props.actions;
      login(username);
   }

   handlePasswordChange(event) {
      this.setState({ password: event.target.value });
      this.validateForm();
   }
   handleUsernameChange(event) {
      this.setState({ username: event.target.value });
      this.validateField('number', event.target.value);
   }

   validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let numValid = this.state.numValid;

      switch (fieldName) {
         case 'number':
            if (
               value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
            ) {
               numValid = true;
            } else {
               numValid = false;
            }
            fieldValidationErrors.Phone = numValid
               ? ''
               : ' Phone number is invalid';
            break;
         default:
            break;
      }
      this.setState(
         { formErrors: fieldValidationErrors, numValid: numValid },
         this.validateForm
      );
   }

   validateForm() {
      this.setState({ formValid: this.state.numValid });
      this.setState({
         buttonValid:
            this.state.numValid &&
            this.state.username.length > 0 &&
            this.state.password.length > 0,
      });
   }

   render() {
      return (
         <div id="login" className="login">
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
                        {this.state.formValid === false ? (
                           <Card
                              title="Errors"
                              lineBreak
                              content={
                                 <div className="formErrors">
                                    {Object.keys(this.state.formErrors).map(
                                       (fieldName, i) => {
                                          if (
                                             this.state.formErrors[fieldName]
                                                .length > 0
                                          ) {
                                             return (
                                                <p key={i}>
                                                   {
                                                      this.state.formErrors[
                                                         fieldName
                                                      ]
                                                   }
                                                </p>
                                             );
                                          }
                                       }
                                    )}
                                 </div>
                              }
                           />
                        ) : null}
                        <Card
                           title="Login"
                           lineBreak
                           content={
                              <form>
                                 <FormInputs
                                    cols={['col-md-12']}
                                    properties={[
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Username',
                                          placeholder: 'Username',
                                          required: true,
                                          size: 'sm',
                                          type: 'text',
                                          value: this.state.username,
                                          onChange: this.handleUsernameChange,
                                       },
                                    ]}
                                 />
                                 <FormInputs
                                    cols={['col-md-12']}
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
                                    ]}
                                 />
                                 <Link
                                    to={{
                                       pathname: '/home',
                                       household: this.state,
                                    }}
                                 >
                                    <Button
                                       block
                                       size="sm"
                                       type="submit"
                                       to="/home"
                                       variant="success"
                                       disabled={!this.state.buttonValid}
                                    >
                                       Login
                                    </Button>
                                 </Link>
                                 <div className="clearfix" />
                              </form>
                           }
                           footer
                           preText="New to HouseKeeper? "
                           link="signup"
                           linkText="Create an Account"
                        />
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}

export default Login;
