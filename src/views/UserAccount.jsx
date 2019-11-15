/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';
import {
   Container,
   Row,
   Col,
   FormGroup,
   FormLabel,
   FormControl,
} from 'react-bootstrap';

import { Card } from '../components/Card.jsx';
import { FormInputs } from '../components/FormInputs.jsx';
import { UserCard } from '../components/UserCard.jsx';
import Button from '../components/CustomButton.jsx';

export default class UserAccount extends Component {
   render() {
      const states = [
         'AL',
         'AK',
         'AZ',
         'AR',
         'CA',
         'CO',
         'CT',
         'DE',
         'DC',
         'FL',
         'GA',
         'HI',
         'ID',
         'IL',
         'IN',
         'IA',
         'KS',
         'KY',
         'LA',
         'ME',
         'MD',
         'MA',
         'MI',
         'MN',
         'MS',
         'MO',
         'MT',
         'NE',
         'NV',
         'NH',
         'NJ',
         'NM',
         'NY',
         'NC',
         'ND',
         'OH',
         'OK',
         'OR',
         'PA',
         'RI',
         'SC',
         'SD',
         'TN',
         'TX',
         'UT',
         'VT',
         'VA',
         'WA',
         'WV',
         'WI',
         'WY',
      ];
      return (
         <div className="content">
            <Container fluid>
               <Row>
                  <Card
                     title="My Account"
                     lineBreak
                     content={
                        <form>
                           <FormInputs
                              ncols={['col-md-4', 'col-md-8']}
                              properties={[
                                 {
                                    label: 'Username',
                                    type: 'text',
                                    bsClass: 'form-control',
                                    placeholder: 'Username',
                                    defaultValue: 'Mert123',
                                    required: true,
                                 },
                                 {
                                    label: 'Email Address',
                                    type: 'email',
                                    bsClass: 'form-control',
                                    placeholder: 'Email',
                                    required: true,
                                 },
                              ]}
                           />
                           <FormInputs
                              ncols={['col-md-6', 'col-md-6']}
                              properties={[
                                 {
                                    label: 'First Name',
                                    type: 'text',
                                    bsClass: 'form-control',
                                    placeholder: 'First Name',
                                    defaultValue: 'Mert',
                                    required: true,
                                 },
                                 {
                                    label: 'Last Name',
                                    type: 'text',
                                    bsClass: 'form-control',
                                    placeholder: 'Last Name',
                                    defaultValue: 'Alev',
                                    required: true,
                                 },
                              ]}
                           />
                           <FormInputs
                              ncols={['col-md-12']}
                              properties={[
                                 {
                                    label: 'Street Address',
                                    type: 'text',
                                    bsClass: 'form-control',
                                    placeholder: 'Street Adress',
                                    defaultValue: '123 E. 12th Street, Apt 4D',
                                    required: true,
                                 },
                              ]}
                           />
                           <FormInputs
                              ncols={[
                                 'col-md-4',
                                 'col-md-2',
                                 'col-md-3',
                                 'col-md-3',
                              ]}
                              properties={[
                                 {
                                    label: 'City',
                                    type: 'text',
                                    bsClass: 'form-control',
                                    placeholder: 'City',
                                    defaultValue: 'New York',
                                    required: true,
                                 },
                                 {
                                    label: 'State',
                                    type: 'text',
                                    as: 'select',
                                    options: { states },
                                    bsClass: 'form-control',
                                    placeholder: 'State',
                                    defaultValue: 'NY',
                                 },
                                 {
                                    label: 'Country',
                                    type: 'text',
                                    bsClass: 'form-control',
                                    placeholder: 'Country',
                                    defaultValue: 'USA',
                                    required: true,
                                 },
                                 {
                                    label: 'Postal Code',
                                    type: 'number',
                                    bsClass: 'form-control',
                                    placeholder: 'Zip Code',
                                    required: true,
                                 },
                              ]}
                           />

                           <Row>
                              <Col md={12}>
                                 <FormGroup controlId="formControlsTextarea">
                                    <FormLabel>About Me</FormLabel>
                                    <FormControl
                                       rows="5"
                                       componentClass="textarea"
                                       bsClass="form-control"
                                       placeholder="Enter any info you want housemates to know about you"
                                       defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                                    />
                                 </FormGroup>
                              </Col>
                           </Row>
                           <Button pullRight fill type="submit">
                              Save
                           </Button>
                           <div className="clearfix" />
                        </form>
                     }
                  />
               </Row>
            </Container>
         </div>
      );
   }
}
