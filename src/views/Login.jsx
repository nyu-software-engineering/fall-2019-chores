import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import logo from '../assets/img/logo.png';

import LinkedButton from '../components/LinkedButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import { withRouter } from 'react-router-dom';

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

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      // this.sendData = this.sendData.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      fetch('/api/member', {
         method: 'POST',
         body: JSON.stringify(),
      });
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
                        {this.state.formValid == false ? (
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
                                 <LinkedButton
                                    pathname="/home"
                                    user={this.state}
                                    buttonText="Login"
                                    block
                                 />
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

export default withRouter(Login);
