import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/CustomButton';

export default class LinkedButton extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <Link
            to={{
               pathname: this.props.pathname,
               props: {...this.props}
            }}
         >
            <Button
               type="submit"
               varient="success"
               onClick={this.props.onClick}
               size="md"
               {...this.props}
            >
               {this.props.buttonText}
            </Button>
         </Link>
      );
   }
}
