import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import { request } from '../utils';
import Card from '../components/Card';
import DropdownTable from '../components/DropdownTable';

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

export default function HousesList() {
   const [households, setHousehold] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const { response } = await request.get(
               'http://localhost:3001/api/households'
            );
            setHousehold(response);
         } catch (error) {
            alert(error);
         }
      };
      fetchData();
   }, ['households']);

   const demoData = [''];

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
                                          total={household.chores.length}
                                       />
                                    </Col>
                                 </Row>
                                 <Row>
                                    <Col>
                                       <DropdownTable
                                          title="Completed Chores"
                                          categories={closedCategories}
                                          total={household.chores.length}
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
         </Container>
      </div>
   );
}
