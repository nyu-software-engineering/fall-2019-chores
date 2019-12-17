import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Household from '../household';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import DropdownTable from '../components/DropdownTable';
import StatsCard from '../components/StatsCard';
import UserCard from '../components/UserCard';

const memberCategories = ['ID', 'Name', 'Rating'];
const openCategories = [
   'ID',
   'Title',
   'Created By',
   'Date Created',
   'Date Due',
   'Edit',
   'Remove',
];
const closedCategories = [
   'ID',
   'Title',
   'Created By',
   'Date Created',
   'Date Completed',
];

export default class HousesList extends Component {
   render() {
      const household = this.props.location.household;
      return (
         <div className="content">
            <Container fluid>
               {/* {household.map((prop, key) => { */}
               {/*    return ( */}
               <Row>
                  <Col>
                     <Card
                        title="Household:"
                        name={household.title}
                        lineBreak
                        content={
                           <div>
                              <Row>
                                 <Col>
                                    <DropdownTable
                                       title="Members"
                                       categories={memberCategories}
                                       total={household.members.length}
                                    />
                                 </Col>
                              </Row>
                              <Row>
                                 <Col>
                                    <DropdownTable
                                       title="Open Chores"
                                       categories={openCategories}
                                       // total={household.chores.length}
                                    />
                                 </Col>
                              </Row>
                              <Row>
                                 <Col>
                                    <DropdownTable
                                       title="Completed Chores"
                                       categories={closedCategories}
                                       // total={household.chores.length}
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
            </Container>
         </div>
      );
   }
}
