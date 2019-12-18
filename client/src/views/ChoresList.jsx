import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

import { request } from '../utils';

import Card from '../components/Card';

export default function ChoresList() {
   const categories = [
      'ID',
      'Title',
      'Created By',
      'Date Created',
      'Date Due',
      'Edit',
      'Remove',
   ];

   const [chores, setChores] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const { response } = await request.get(
               'http://localhost:3001/api/chores'
            );
            setChores(response);
         } catch (error) {
            alert(error);
         }
      };
      fetchData();
   }, ['chores']);

   return (
      <div className="content">
         <Container fluid>
            {chores.map((chore, key) => {
               return (
                  <Row key={chore.title}>
                     <Col md={12}>
                        <Card
                           title="Household: "
                           name={chores.title}
                           ctTableFullWidth
                           ctTableResponsive
                           content={
                              <Table striped hover>
                                 <thead>
                                    <tr>
                                       {categories.map((prop, key) => {
                                          return <th key={key}>{prop}</th>;
                                       })}
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {/* {prop.chores.map((prop, key) => { */}
                                    {/*    return ( */}
                                    {/*       <tr key={key}> */}
                                    {/*          {prop.map((prop, key) => { */}
                                    {/*             return <td key={key}>{prop}</td>; */}
                                    {/*          })} */}
                                    {/*       </tr> */}
                                    {/*    ); */}
                                    {/* })} */}
                                 </tbody>
                              </Table>
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
