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

class CreateHousehold extends Component {
	constructor(props) {
		super(props);
		this.state = {
			householdID: {},
			personID: {},
			title: '',
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.createHousehold = this.createHousehold.bind(this);
	}

	handleTitleChange(event) {
		this.setState({ title: event.target.value });
	}

	async createHousehold() {
		await fetch('http://localhost:3001/api/household/', {
			method: 'post',
			body: JSON.stringify({
				title: this.title,
			}),
			headers: {
				'Content-Type': 'application/json',
				Origin: 'http://localhost:3001',
			},
		})
			.then(res => res.json())
			.then(status => {
				if (status.success === false) {
					//show failure page
				} else {
					this.state.householdID = status.id;
					fetch('/api/person', {
						method: 'put',
						body: JSON.stringify([
							{
								id: this.state.personID,
							},
							{
								id: this.state.householdID,
							},
						]),
						headers: {
							'Content-Type': 'application/json',
						},
					})
						.then(res => res.json())
						.then(status => {
							if (status.success === false) {
								console.log('MISSION FAILED');
								console.log(status.error);
							} else {
								console.log('MISSION SUCCESS');
								this.state.personID = status.id;
							}
						});
				}
			});
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	render() {
		const household = { ...this.props.location.household, ...this.state };

		return (
			<div id="signup" className="signup">
				<div className="logo">
					<div className="simple-text logo-mini">
						<div className="logo-img">
							<img src={logo} alt="logo_image" />
						</div>
					</div>
					<div className="simple-text logo-normal">HouseKeeper</div>
				</div>
				<div className="content">
					<Container fluid>
						<Row>
							<Col md={{ span: 5, offset: 3 }}>
								<Card
									title="Create Household"
									lineBreak
									content={
										<form>
											<FormInputs
												cols={['col-md-12']}
												properties={[
													{
														as: 'input',
														bsPrefix: 'form-control',
														label: 'Household Name',
														placeholder: 'Name Your Household',
														required: true,
														size: 'sm',
														type: 'text',
														value: this.state.title,
														onChange: this.handleTitleChange,
													},
												]}
											/>
											<Link
												to={{
													pathname: '/home',
													householdID: this.state.householdID,
													personID: this.state.personID,
												}}
											>
												<Button
													block
													size="md"
													type="submit"
													variant="success"
													onClick={this.createHousehold}
												>
													Create Household
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

export default withRouter(CreateHousehold);
