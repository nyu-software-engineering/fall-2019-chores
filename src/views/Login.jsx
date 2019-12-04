import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';

export default class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      // this.sendData = this.sendData.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      fetch('/api/household', {
         method: 'POST',
         body: JSON.stringify(),
      });
   }

   render() {
      return (
         <div id="signup" className="signup">
            <div className="logo">
               <div className="simple-text logo-mini">
                  <div className="logo-img">
                     <img src={logo} alt="logo_image" />
                  </div>
               </div>
               <h2 className="simple-text logo-normal">HouseKeeper</h2>
            </div>
            <div className="content">
               <Container fluid>
                  <Row>
                     <Col md={{ span: 5, offset: 4 }}>
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
                                 <Link to="/home">
                                    <Button
                                       block
                                       size="sm"
                                       type="submit"
                                       to="/home"
                                       variant="success"
                                    >
                                       Login
                                    </Button>
                                 </Link>
                                 <div className="clearfix" />
                              </form>
                           }
                           footer
                           preText="New to HouseKeeper? "
                           link="signup"
                           linkText="Create an Account"
                           // path="/app/home"
                           // name="Create an Account"
                        />
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}
