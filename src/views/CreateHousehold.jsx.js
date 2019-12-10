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
import person from '../person';
import logo from '../assets/img/logo.png';

import LinkedButton from '../components/LinkedButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import HomePage from '../views/HomePage';
import UserCard from '../components/UserCard';

class CreateHousehold extends Component {
   constructor(props) {
      super(props);
      this.state = {
         householdID: {},
         personID: {},
         title: '',
      };

      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.sendData = this.sendData.bind(this);
   }

   handleTitleChange(event) {
      this.setState({ title: event.target.value });
   }

   async sendData() {
      fetch('http://localhost:3001/api/household/', {
         method: 'post',
         body: JSON.stringify({
            title: this.title,
         }),
         headers: {
            'Content-Type': 'application/json',
            Origin: 'http://localhost:3001',
         },
      })
         .then(res => res.json())
         .then(status => {
            if (status.success === false) {
               //show failure page
            } else {
               this.setState({ householdID: status.id });
               fetch('/api/person', {
                  method: 'put',
                  body: JSON.stringify([
                     {
                        id: this.state.personID,
                     },
                     {
                        id: this.state.householdID,
                     },
                  ]),
                  headers: {
                     'Content-Type': 'application/json',
                  },
               })
                  .then(res => res.json())
                  .then(status => {
                     if (status.success === false) {
                        //show failure page
                     } else {
                        //show success page
                     }
                  });
            }
         });
   }

   validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
   }

   render() {
      console.log('create house:', this.props.location.household);

      return (
         <div id="signup" className="signup">
            <div className="logo">
               <img src={logo} alt="logo" />
               <h2>HouseKeeper</h2>
            </div>
            <div className="content">
               <Container fluid>
                  <Row>
                     <Col md={{ span: 5, offset: 3 }}>
                        <Card
                           title="Create Household"
                           lineBreak
                           content={
                              <form>
                                 <FormInputs
                                    cols={['col-md-12']}
                                    properties={[
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Household Name',
                                          placeholder: 'Name Your Household',
                                          required: true,
                                          size: 'sm',
                                          type: 'text',
                                          value: this.state.title,
                                          onChange: this.handleTitleChange,
                                       },
                                    ]}
                                 />
                                 <LinkedButton
                                    pathname="/home"
                                    household={this.state}
                                    buttonText="Create Household"
                                    block
                                 />
                                 <div className="clearfix" />
                              </form>
                           }
                        />
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}

export default CreateHousehold;
