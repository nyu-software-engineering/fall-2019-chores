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

import Button from '../components/CustomButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import HomePage from '../views/HomePage';
import UserCard from '../components/UserCard';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			phoneNum: '',
			password: '',
			title: '',
			formErrors: {Name: 'A', Phone: 'B', Password: 'C', Title: 'D'},
			fnameValid: false,
			lnameValid: false,
			numValid: false,
			passwordValid: false,
			titleValid: false,
			formValid: false,
		};

		// this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.sendData = this.sendData.bind(this);
	}

	// handleFirstNameChange(event) {
	//    this.setState({ firstName: event.target.value });
	// }

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
							}
						});
				}
			});
	}

	handleUserInput = (e) => {
		console.log("handling user input here");
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value},
					  () => { this.validateField(name, value) });
	}
	
	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let titleValid = this.state.titleValid;
		let passwordValid = this.state.passwordValid;
		let numValid = this.state.numValid;
		let fnameValid = this.state.fnameValid;
		let lnameValid = this.state.lnameValid;
	
		switch(fieldName) {
		  	case 'title':
				titleValid = value.length >= 8;
				fieldValidationErrors.Title = titleValid ? '' : ' is invalid';
				break;
		  	case 'password':
				passwordValid = value.length >= 6;
				fieldValidationErrors.Password = passwordValid ? '': ' is too short';
				break;
		  	case 'number':
				numValid = value.length == 10 && value.charAt(0) != '0' && value.match(/^[2-9]\d{2}-\d{3}-\d{4}$/);
				fieldValidationErrors.Phone = numValid ? '': ' is invalid';
				break;
		  	case 'fname':
				fnameValid = value.length >= 3;
				fieldValidationErrors.Name = fnameValid ? '': ' is too short';
				break;
			case 'lname':
				lnameValid = value.length >= 3;
				fieldValidationErrors.Name = lnameValid ? '': ' is too short';
				break;
		  	default:
				break;
		}
		this.setState({formErrors: fieldValidationErrors,
						numValid: numValid,
						passwordValid: passwordValid,
						fnameValid: fnameValid,
						lnameValid: lnameValid,
						titleValid: titleValid
					  }, this.validateForm);
	}
	
	validateForm() {
		this.setState({formValid: this.state.numValid && this.state.passwordValid && this.state.nameValid && this.state.titleValid});
	}
	
	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	}

	//validateForm() {
	//	return this.state.email.length > 0 && this.state.password.length > 0;
	//}

	render() {
		return (
			<div id="signup" className="signup">
				<div className="header">
					<h4>HouseKeeper</h4>
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
												<p style={{fontSize:'sm'}, {color:'red'}} key={i}>{fieldName}: {this.state.formErrors[fieldName]}</p>
												)        
											} else {
												return '';
											}
											})}
										</div>
									}
								/>
							</Col>
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
														//value: '{ this.state.firstName }',
														onChange: <this.handleUserInput/>,
													},
													{
														as: 'input',
														bsPrefix: 'form-control',
														label: 'Last Name',
														placeholder: 'Last Name',
														required: true,
														size: 'sm',
														type: 'text',
														//value: {state.lastName },
														onChange: <this.handleUserInput/>,
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
													},
													{
														as: 'input',
														bsPrefix: 'form-control',
														label: 'Phone Number',
														placeholder: 'XXX-XXX-XXX',
														required: true,
														size: 'sm',
														type: 'phoneNum',
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
													},
													{
														as: 'input',
														bsPrefix: 'form-control',
														label: 'Confirm Password',
														placeholder: 'Confirm Password',
														required: true,
														size: 'sm',
														type: 'password',
													},
												]}
											/>
											<Link to="/home">
												<Button
													block
													size="md"
													type="submit"
													disabled={!this.state.formValid}
													//disabled={!this.validateForm()}
													variant="success"
												>
													Sign Up
												</Button>
											</Link>
											<div className="clearfix" />
										</form>
									}
									//ADD ADMIN BUTTON
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
