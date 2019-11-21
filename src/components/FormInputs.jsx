import React, { Component } from 'react';
import { FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

function FieldGroup({ label, ...props }) {
   return (
      <FormGroup>
         <FormLabel>{label}</FormLabel>
         <FormControl {...props} />
      </FormGroup>
   );
}

export class FormInputs extends Component {
   render() {
      this.props.cols.map((prop, key) => {
         return (
            <Row>
               <div key={key} className={props.cols[key]}>
                  <FieldGroup {...props.properties[key]} />
               </div>
            </Row>
         );
      });
   }
}

export default FormInputs;
