import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

import Card from '../components/Card';
import Chores from '../components/Chores';

export default class ChoresList extends Component {
   render() {
      const household = this.props.location.household;

      const categories = [
         'ID',
         'Title',
         'Created By',
         'Date Created',
         'Date Due',
         'Edit',
         'Remove',
      ];

      return (
         <div className="content">
            <Container fluid>
               {/* {household.map((prop, key) => { */}
               {/*    return ( */}
               <Row>
                  <Col md={12}>
                     <Card
                        title="Household: "
                        name={household.title}
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
               {/*    ); */}
               {/* })} */}
            </Container>
         </div>
      );
   }
}
