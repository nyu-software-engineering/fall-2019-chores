import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useForm from 'react-hook-form';

import { request } from '../utils';
import logo from '../assets/img/logo.png';

import LinkedButton from '../components/LinkedButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';

function Signup({ history }) {
	const { register, handleSubmit } = useForm();
	const onSubmit = async data => {
		const { response, error } = await request.post(
			'http://localhost:3001/auth/signup',
			data
		);
		if (error) {
			console.log('error', error);
		} else {
			console.log('response', response);
			history.push('/login');
		}
	};
	// createUser() {
	// 	fetch('http://localhost:3001/api/person', {
	// 		method: 'post',
	// 		body: JSON.stringify([
	// 			{
	// 				phoneNum: this.state.phoneNum,
	// 				firstName: this.state.firstName,
	// 				lastName: this.state.lastName,
	// 			},
	// 		]),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Origin: 'http://localhost:3001',
	// 		},
	// 	})
	// 		.then(res => res.json())
	// 		.then(status => {
	// 			if (status.success === false) {
	// 				console.log('MISSION FAILED');
	// 				console.log(status.error);
	// 			} else {
	// 				console.log('MISSION SUCCESS');
	// 				this.setState({ personID: status.id });
	// 			}
	// 		});
	// }

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
									<form onSubmit={handleSubmit(onSubmit)}>
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
													ref: { register },
												},
												{
													as: 'input',
													bsPrefix: 'form-control',
													label: 'Last Name',
													placeholder: 'Last Name',
													required: true,
													size: 'sm',
													type: 'text',
													ref: { register },
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
													ref: { register },
													type: 'username',
												},
												{
													as: 'input',
													bsPrefix: 'form-control',
													label: 'Phone Number',
													placeholder: 'XXX-XXX-XXX',
													required: true,
													size: 'sm',
													ref: { register },
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
													ref: { register },
												},
												{
													as: 'input',
													bsPrefix: 'form-control',
													label: 'Confirm Password',
													placeholder: 'Confirm Password',
													required: true,
													size: 'sm',
													type: 'password',
													ref: { register },
												},
											]}
										/>
										<LinkedButton
											pathname="/newHousehold"
											onClick={this.createUser}
											buttonText="Create New Household"
											block
										/>
										<div className="clearfix"> or </div>
										<LinkedButton
											pathname="/join"
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

export default Signup;
