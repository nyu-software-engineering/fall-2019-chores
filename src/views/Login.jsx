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
			phoneNum: '',
			password: '',
			householdID: '',
			personID: '',
			numValid: true,
			formValid: true,
			buttonValid: false,
			formErrors: { phoneNumErr: '' },
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
		// this.sendData = this.sendData.bind(this);
	}

	handleSubmit() {
		fetch('http://localhost:3001/api/login', {
			method: 'post',
			body: JSON.stringify([
				{
					phoneNum: this.state.phoneNum,
					password: this.state.password,
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
					console.log(status.error);
				} else {
					console.log('LOGIN SUCCESS');
					this.setState({
						personID: status.personID,
						householdID: status.householdID,
					});
				}
			});
	}

	handlePasswordChange(event) {
		this.setState({ password: event.target.value });
		this.validateForm();
	}
	handlePhoneNumberChange(event) {
		this.setState({ phoneNum: event.target.value });
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

				fieldValidationErrors.phone = numValid
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
				this.state.phoneNum.length > 0 &&
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
														label: 'Phone Number',
														placeholder: 'Phone Number',
														required: true,
														size: 'sm',
														type: 'text',
														value: this.state.phoneNum,
														onChange: this
															.handlePhoneNumberChange,
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
												householdID={this.state.householdID}
												personID={this.state.personID}
												buttonText="Login"
												onClick={this.handleSubmit}
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
