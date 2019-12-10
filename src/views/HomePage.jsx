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
		console.log('Homepage props:', this.props.householdID);
		return (
			<div className="content">
				<Container fluid>
					{this.props.household.map((prop, key) => {
						return (
							<Row>
								<Col>
									<Card
										title="Household:"
										name={prop.title}
										lineBreak
										content={
											<div>
												<Row>
													<Col lg={3} sm={6}>
														<StatsCard
															statsText="Members"
															statsValue={prop.members.length}
															link="myhouses"
															linkText="See All Members"
															footer
														/>
													</Col>
													<Col lg={3} sm={6}>
														<StatsCard
															statsText="Open Chores"
															statsValue={prop.chores.length}
															link="mychores"
															linkText="See All Chores"
															footer
														/>
													</Col>
													<Col lg={3} sm={6}>
														<StatsCard
															statsText="Completed Chores"
															statsValue={prop.chores.length}
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
						);
					})}
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
											<Chores />
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
