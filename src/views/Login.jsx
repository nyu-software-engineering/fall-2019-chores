import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import { withRouter } from 'react-router-dom';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
         numValid: false,
			formValid: false,
			formErrors: {Phone: ''},
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
      // this.sendData = this.sendData.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      fetch('/api/household', {
         method: 'POST',
         body: JSON.stringify(),
      });
   }

   handlePasswordChange(event) {
      this.setState({ password: event.target.value });
   }
   handleUsernameChange(event) {
      this.setState({ username: event.target.value });
      this.validateField('number', event.target.value);
   }

   validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let numValid = this.state.numValid;

		switch(fieldName) {
		  	case 'number':
				numValid = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
				fieldValidationErrors.Phone = numValid ? '': ' Phone number is invalid';
				break;
		  	default:
				break;
		}
		this.setState({formErrors: fieldValidationErrors,
						numValid: numValid,
					  }, this.validateForm);
	}
	
	validateForm() {
		this.setState({formValid: this.state.numValid
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
                     <Card
									title=""
									lineBreak
									content={
										<div className='formErrors'>
											{Object.keys(this.state.formErrors).map((fieldName, i) => {
											if(this.state.formErrors[fieldName].length > 0){
												return (
												<p style={{fontSize:'sm'}, {color:'red'}} key={i}>{this.state.formErrors[fieldName]}</p>
												)        
											} else {
												return '';
											}
											})}
										</div>
									}
								/>
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

export default withRouter(Login);