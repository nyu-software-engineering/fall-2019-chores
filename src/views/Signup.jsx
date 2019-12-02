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
			title: ''
		};

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.routeChange = this.routeChange.bind(this);
		this.sendData = this.sendData.bind(this);
	}

	// handleFirstNameChange(event) {
	// 	this.setState({ firstName: event.target.value });
	// }

	async sendData() {
		await fetch('/api/household/', {
			method: 'post',
			body: JSON.stringify({
				title: this.title
			}),
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(res => res.json())
		.then(status => {
			if(status.success === false) {
				//show failure page
			} else {
				await fetch('/api/person', {
					method: 'post',
					body: JSON.stringify([{
						phoneNum: this.phoneNum,
						firstName: this.firstName,
						lastName: this.lastName,
					}, {
						id: status.id
					}]),
					headers: {
						'Content-Type': 'application/json',
					}
				})
				.then(res => res.json())
				.then(status => {
					if(status.success === false) {
						//show failure page
					} else {
						//show success page
					}
				});
			}
		});

		
	}

	routeChange() {
		let path = `/home`;
		this.props.history.push(path);
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

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
														// value: { this.state.firstName },
														// onChange: {this.handleFirstNameChange}
													},
													{
														as: 'input',
														bsPrefix: 'form-control',
														label: 'Last Name',
														placeholder: 'Last Name',
														required: true,
														size: 'sm',
														type: 'text',
													},
												]}
											/>
											<FormInputs
												cols={['col-md-12']}
												properties={[
													{
														as: 'input',
														bsPrefix: 'form-control',
														label: 'Email Address',
														placeholder: 'Email',
														required: true,
														size: 'sm',
														type: 'email',
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
											<Button
												block
												onClick={this.routeChange}
												size="md"
												type="submit"
												// disabled={!this.validateForm()}
												variant="success"
											>
												Sign Up
											</Button>
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
