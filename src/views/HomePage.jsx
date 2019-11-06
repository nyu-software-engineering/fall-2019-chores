import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Card } from '../components/Card.jsx';
import { StatsCard } from '../components/StatsCard.jsx';
import { Chores } from '../components/Chores.jsx';

class HomePage extends Component {
   render() {
      return (
         <div className="content">
            <Container fluid>
               <Row>
                  <Col lg={3} sm={6}>
                     <StatsCard statsText="Open Chores" statsValue="5" />
                  </Col>
                  <Col lg={3} sm={6}>
                     <StatsCard statsText="Completed Chores" statsValue="12" />
                  </Col>
                  <Col lg={3} sm={6}>
                     <StatsCard statsText="Total Households" statsValue="3" />
                  </Col>
                  <Col lg={3} sm={6}>
                     <StatsCard
                        statsText="Next Due Date"
                        statsValue="11/7/19"
                     />
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                     <Card id="chartHours" title="Calendar" />
                  </Col>

                  <Col md={6}>
                     <Card
                        title="Chores"
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

export default HomePage;
