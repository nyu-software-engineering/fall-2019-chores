import React, { Component } from 'react';
import { Form, FormGroup, FormLabel, Row } from 'react-bootstrap';

function FieldGroup({ label, ...props }) {
   return (
      <FormGroup>
         <FormLabel>{label}</FormLabel>
         <Form.Control {...props} />
      </FormGroup>
   );
}

export class FormInputs extends Component {
   render() {
      var row = [];
      for (var i = 0; i < this.props.cols.length; i++) {
         row.push(
            <div key={i} className={this.props.cols[i]}>
               <FieldGroup {...this.props.properties[i]} />
            </div>
         );
      }
      return <Row>{row}</Row>;
   }
}

export default FormInputs;
