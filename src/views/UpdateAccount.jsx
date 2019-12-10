import React, { Component } from 'react';
import {
   Col,
   Container,
   FormControl,
   FormGroup,
   FormLabel,
   Row,
} from 'react-bootstrap';

import { states } from '../helpers';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import UserCard from '../components/UserCard';

export default class UpdateAccount extends Component {
   render() {
      const household = this.props.location.household;

      return (
         <div className="content">
            <Container fluid>
               <Row>
                  <Col md={8}>
                     <Card
                        title="My Account"
                        lineBreak
                        content={
                           <form>
                              <FormInputs
                                 cols={['col-md-4', 'col-md-8']}
                                 properties={[
                                    {
                                       label: 'Username',
                                       type: 'text',
                                       bsPrefix: 'form-control',
                                       placeholder: 'Username',
                                       defaultValue: 'Mert123',
                                       disabled: true,
                                    },
                                    {
                                       label: 'Email Address',
                                       type: 'email',
                                       bsPrefix: 'form-control',
                                       placeholder: 'Email',
                                       required: true,
                                    },
                                 ]}
                              />
                              <FormInputs
                                 cols={['col-md-6', 'col-md-6']}
                                 properties={[
                                    {
                                       label: 'First Name',
                                       type: 'text',
                                       bsPrefix: 'form-control',
                                       placeholder: 'First Name',
                                       defaultValue: 'Mert',
                                       required: true,
                                    },
                                    {
                                       label: 'Last Name',
                                       type: 'text',
                                       bsPrefix: 'form-control',
                                       placeholder: 'Last Name',
                                       defaultValue: 'Alev',
                                       required: true,
                                    },
                                 ]}
                              />
                              <FormInputs
                                 cols={['col-md-12']}
                                 properties={[
                                    {
                                       label: 'Street Address',
                                       type: 'text',
                                       bsPrefix: 'form-control',
                                       placeholder: 'Street Adress',
                                       defaultValue:
                                          '123 E. 12th Street, Apt 4D',
                                       required: true,
                                    },
                                 ]}
                              />
                              <FormInputs
                                 cols={[
                                    'col-md-4',
                                    'col-md-2',
                                    'col-md-3',
                                    'col-md-3',
                                 ]}
                                 properties={[
                                    {
                                       label: 'City',
                                       type: 'text',
                                       bsPrefix: 'form-control',
                                       placeholder: 'City',
                                       defaultValue: 'New York',
                                       required: true,
                                    },
                                    {
                                       label: 'State',
                                       type: 'text',
                                       as: 'select',
                                       options: { states },
                                       bsPrefix: 'form-control',
                                       placeholder: 'State',
                                       defaultValue: 'NY',
                                    },
                                    {
                                       label: 'Country',
                                       type: 'text',
                                       bsPrefix: 'form-control',
                                       placeholder: 'Country',
                                       defaultValue: 'USA',
                                       required: true,
                                    },
                                    {
                                       label: 'Postal Code',
                                       type: 'number',
                                       bsPrefix: 'form-control',
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
                                          as="textarea"
                                          bsPrefix="form-control"
                                          placeholder="Enter any info you want housemates to know about you"
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
                  </Col>
                  <Col md={4}>
                     <UserCard
                        bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                        // avatar={avatar}
                        name="Mike Andrew"
                        userName=""
                        description={
                           <span>
                              "Lamborghini Mercy
                              <br />
                              Your chick she so thirsty
                              <br />
                              I'm in that two seat Lambo"
                           </span>
                        }
                        rating={<div>{/* <Rating/> */}</div>}
                     />
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
}
