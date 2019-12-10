import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import household from '../household';

import Calendar from '../components/Calendar';
import Card from '../components/Card';
import Chores from '../components/Chores';
import StatsCard from '../components/StatsCard';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	render() {
		const household = this.props.location.household;
		console.log('homepage props:', this.props);
		return (
			<div className="content">
				<Container fluid>
					{/* {this.props.household.map((prop, key) => { */}
					{/* return ( */}
					<Row>
						<Col>
							<Card
								title="Household:"
								name={household.title}
								lineBreak
								content={
									<div>
										<Row>
											<Col lg={3} sm={6}>
												<StatsCard
													statsText="Members"
													// statsValue={household.members.length}
													link="myhouses"
													linkText="See All Members"
													footer
												/>
											</Col>
											<Col lg={3} sm={6}>
												<StatsCard
													statsText="Open Chores"
													// statsValue={household.chores.length}
													link="mychores"
													linkText="See All Chores"
													footer
												/>
											</Col>
											<Col lg={3} sm={6}>
												<StatsCard
													statsText="Completed Chores"
													// statsValue={household.chores.length}
													link="mychores"
													linkText="See All Chores"
													footer
												/>
											</Col>
										</Row>
									</div>
								}
							/>
						</Col>
					</Row>
					{/*    ); */}
					{/* })} */}
					<Row>
						<Col md={7}>
							<Card
								title="Calendar"
								lineBreak
								content={
									<div>
										<Calendar
											calendarType="US"
											defaultDate={new Date()}
											defaultView="month"
											onChange={date => this.setState({ date })}
											value={this.state.date}
										/>
									</div>
								}
							/>
						</Col>
						<Col md={5}>
							<Card
								title="Chores"
								lineBreak
								content={
									<div className="table-full-width">
										<table className="table">
											{/* <Chores {...this.props} /> */}
										</table>
									</div>
								}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
