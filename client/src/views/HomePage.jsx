import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { request } from '../utils';

import Calendar from '../components/Calendar';
import Card from '../components/Card';
import Chores from '../components/Chores';
import StatsCard from '../components/StatsCard';

export default function HomePage() {
   // const [households, setHousehold] = useState([]);
   // useEffect(() => {
   //    const fetchData = async () => {
   //       try {
   //          const { response } = await request.get(
   //             'http://localhost:3001/api/households'
   //          );
   //          setHousehold(response);
   //       } catch (error) {
   //          alert(error);
   //       }
   //    };
   //    fetchData();
   // }, ['households']);

   const completed = new Date('December 5, 2019');
   const due = new Date('December 31, 2019');
   const today = new Date();
   const households = [
      {
         chores: [
            {
               completed: completed,
               created: today,
               due: due,
               late: due > today ? true : false,
               title: 'Garbage',
            },
            {
               completed: completed,
               created: today,
               due: due,
               late: due > today ? true : false,
               title: 'Sweeping',
            },
         ],
         createdOn: new Date(),
         members: ['Rena', 'Mert', 'Eugene', 'Bella'],
         title: 'Peanut Butter House',
      },
   ];

   return (
      <div className="content">
         <Container fluid>
            {households.map((household, key) => {
               return (
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
                                          statsValue={household.members.length}
                                          linkData={household}
                                          link="myhouses"
                                          linkText="See All Members"
                                          footer
                                       />
                                    </Col>
                                    <Col lg={3} sm={6}>
                                       <StatsCard
                                          statsText="Open Chores"
                                          statsValue={household.chores.length}
                                          linkData={household}
                                          link="mychores"
                                          linkText="See All Chores"
                                          footer
                                       />
                                    </Col>
                                    <Col lg={3} sm={6}>
                                       <StatsCard
                                          statsText="Completed Chores"
                                          statsValue={household.chores.length}
                                          link="mychores"
                                          linkData={household}
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
                              <Chores {...households} />
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
