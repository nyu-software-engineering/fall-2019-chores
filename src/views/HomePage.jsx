import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Calendar from '../components/Calendar.jsx';
import Card from '../components/Card.jsx';
import StatsCard from '../components/StatsCard.jsx';
import Chores from '../components/Chores.jsx';

export default class HomePage extends Component {
   state = {
      date: new Date(),
   };

   onChange = date => this.setState({ date });

   render() {
      return (
         <div className="content">
            <Container fluid>
               <Row>
                  <Col>
                     <Card
                        title="Household:"
                        householdId="1234"
                        lineBreak
                        content={
                           <div>
                              <Row>
                                 <Col lg={3} sm={6}>
                                    <StatsCard
                                       statsText="Members"
                                       statsValue="3"
                                       link=""
                                       linkText="See All Members"
                                       footer
                                    />
                                 </Col>
                                 <Col lg={3} sm={6}>
                                    <StatsCard
                                       statsText="Open Chores"
                                       statsValue="12"
                                       link=""
                                       linkText="See All Chores"
                                       footer
                                    />
                                 </Col>
                                 <Col lg={3} sm={6}>
                                    <StatsCard
                                       statsText="Completed Chores"
                                       statsValue="3"
                                       link=""
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
                                 onChange={this.onChange}
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
