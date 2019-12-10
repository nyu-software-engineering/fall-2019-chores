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

class JoinHousehold extends Component {
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
      const household = { ...this.props.location.household, ...this.state };

      return (
         <div id="signup" className="signup">
            <div className="logo">
               <div className="simple-text logo-mini">
                  <div className="logo-img">
                     <img src={logo} alt="logo_image" />
                  </div>
               </div>
               <div className="simple-text logo-normal">HouseKeeper</div>
            </div>
            <div className="content">
               <Container fluid>
                  <Row>
                     <Col md={{ span: 5, offset: 3 }}>
                        <Card
                           title="Join Household"
                           lineBreak
                           content={
                              <form>
                                 <FormInputs
                                    cols={['col-md-12']}
                                    properties={[
                                       {
                                          as: 'input',
                                          bsPrefix: 'form-control',
                                          label: 'Enter Household ID',
                                          placeholder: 'ID',
                                          required: true,
                                          size: 'sm',
                                          type: 'text',
                                          value: this.state.title,
                                          onChange: this.handleTitleChange,
                                       },
                                    ]}
                                 />
                                 <Link
                                    to={{
                                       pathname: '/home',
                                       household: this.state,
                                    }}
                                 >
                                    <Button
                                       block
                                       size="md"
                                       type="submit"
                                       variant="success"
                                    >
                                       Join Household
                                    </Button>
                                 </Link>
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

export default withRouter(JoinHousehold);
