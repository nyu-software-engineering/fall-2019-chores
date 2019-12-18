import React from 'react';
import useForm from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';

import { request, LS } from '../utils';
import logo from '../assets/img/logo.png';

import Button from '../components/CustomButton';
import Card from '../components/Card';
import FormInputs from '../components/FormInputs';
import LinkedButton from '../components/LinkedButton';

function Login({ history }) {
   const { register, handleSubmit } = useForm();
   const onSubmit = async data => {
      const { response, error } = await request.post(
         'http://localhost:3001/auth/login',
         data
      );
      if (error) {
         alert(error.message);
      } else {
         LS.save('auth', response.token);
         history.push('/home');
      }
   };

   return (
      <div id="login" className="login">
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
                  <Col md={{ span: 5, offset: 3 }}>
                     <Card
                        title="Login"
                        lineBreak
                        content={
                           <form onSubmit={handleSubmit(onSubmit)}>
                              <FormInputs
                                 cols={['col-md-12']}
                                 properties={[
                                    {
                                       as: 'input',
                                       bsPrefix: 'form-control',
                                       label: 'Username',
                                       name: 'username',
                                       placeholder: 'Enter username',
                                       ref: { register },
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
                                       name: 'password',
                                       placeholder: 'Enter password',
                                       ref: { register },
                                       required: true,
                                       size: 'sm',
                                       type: 'password',
                                    },
                                 ]}
                              />
                              <LinkedButton
                                 pathname="/home"
                                 buttonText="Login"
                                 block
                              />
                              <div className="clearfix" />
                           </form>
                        }
                        footer
                        preText="New to HouseKeeper? "
                        link="signup"
                        linkText="Create an Account"
                     />
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   );
}

export default Login;
