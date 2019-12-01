import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Household from '../household';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import DropdownTable from '../components/DropdownTable';
import FormInputs from '../components/FormInputs';
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
      return (
         <div className="content">
            <Container fluid>
               {/* {this.props.houses.map((prop, key) => { */}
               {/*    return ( */}
               <Row>
                  <Col>
                     <Card
                        title="Household:"
                        name={prop.name}
                        lineBreak
                        content={
                           <div>
                              <Row>
                                 <Col>
                                    <DropdownTable
                                       title="Members"
                                       categories={memberCategories}
                                       total={prop.members.length}
                                    />
                                 </Col>
                              </Row>
                              <Row>
                                 <Col>
                                    <DropdownTable
                                       title="Open Chores"
                                       categories={openCategories}
                                       total={prop.chores.length}
                                    />
                                 </Col>
                              </Row>
                              <Row>
                                 <Col>
                                    <DropdownTable
                                       title="Completed Chores"
                                       categories={closedCategories}
                                       total={prop.chores.length}
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
