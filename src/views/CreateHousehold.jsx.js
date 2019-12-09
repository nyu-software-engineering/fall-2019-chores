import React, { Component } from 'react';
import {
   Col,
   Container,
   FormControl,
   FormGroup,
   FormLabel,
   Row,
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { states } from '../helpers';
import person from '../person';
import logo from '../assets/img/logo.png';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import HomePage from '../views/HomePage';
import UserCard from '../components/UserCard';

class CreateHousehold extends Component {
   constructor(props) {
      super(props);
      this.state = {
         firstName: '',
         lastName: '',
         phoneNum: '',
         password: '',
         title: '',
      };

      // this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.sendData = this.sendData.bind(this);
   }

   // handleFirstNameChange(event) {
   //    this.setState({ firstName: event.target.value });
   // }

   async sendData() {
      fetch('/api/household/', {
         method: 'post',
         body: JSON.stringify({
            title: this.title,
         }),
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then(res => res.json())
         .then(status => {
            if (status.success === false) {
               //show failure page
            } else {
               fetch('/api/person', {
                  method: 'post',
                  body: JSON.stringify([
                     {
                        phoneNum: this.phoneNum,
                        firstName: this.firstName,
                        lastName: this.lastName,
                     },
                     {
                        id: status.id,
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
                                          // value: { this.state.firstName },
                                          // onChange: {this.handleFirstNameChange}
                                       },
                                    ]}
                                 />
                                 <Link to="/home">
                                    <Button
                                       block
                                       size="md"
                                       type="submit"
                                       // disabled={!this.validateForm()}
                                       variant="success"
                                    >
                                       Create Household
                                    </Button>
                                 </Link>
                                 <div className="clearfix" />
                              </form>
                           }
                           //ADD ADMIN BUTTON
                        />
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}

export default withRouter(CreateHousehold);
