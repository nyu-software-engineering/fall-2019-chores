import React, { Component } from 'react';
import {
   Col,
   Container,
   FormControl,
   FormGroup,
   FormLabel,
   Row,
} from 'react-bootstrap';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import StatsCard from '../components/StatsCard';
import UserCard from '../components/UserCard';

function routeChange() {
   let path = `/home`;
   this.props.history.push(path);
}

function LoginCard({ ...props }) {
   return (
      <div id="login" className="login">
         <div className="header">
            <h2>HouseKeeper</h2>
         </div>
         <div className="content">
            <Container fluid>
               <Row>
                  <Col xs={6} md={{ span: 4, offset: 5 }}>
                     <Card
                        title="Login"
                        lineBreak
                        content={
                           <form>
                              <FormInputs
                                 cols={['col-md-12']}
                                 properties={[
                                    {
                                       as: 'input',
                                       bsPrefix: 'form-control',
                                       label: 'Username',
                                       placeholder: 'Username',
                                       required: true,
                                       size: 'sm',
                                       type: 'text',
                                    },
                                 ]}
                              />
                              <FormInputs
                                 cols={['col-md-12']}
                                 properties={[
                                    {
                                       as: 'input',
                                       bsPrefix: 'form-control',
                                       label: 'Password',
                                       placeholder: 'Password',
                                       required: true,
                                       size: 'sm',
                                       type: 'password',
                                    },
                                 ]}
                              />
                              <Button
                                 block
                                 // onClick={this.routeChange}
                                 size="sm"
                                 type="submit"
                                 // disabled={!this.validateForm()}
                                 variant="success"
                              >
                                 Login
                              </Button>
                              <div className="clearfix" />
                           </form>
                        }
                        footer
                        link="mychores"
                        linkText="See All Chores"
                     />
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
}

export default class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         date: new Date(),
      };
   }

   onChange = date => this.setState({ date });

   render() {
      return <LoginCard />;
   }
}
