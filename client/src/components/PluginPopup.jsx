import React, { Component } from 'react';

import Button from './CustomButton';
import FormInputs from './FormInputs';

class PluginPopup extends Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {
            title: '',
            status: 0,
            late: false,
            due: Date,
            criteria: [],
            created: Date.now,
         },
      };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
      let formData = Object.assign({}, this.state.formData);
      formData[e.target.title] = e.target.value;
      this.setState({ formData });
      this.setState({ fixedClasses: 'dropdown' });
   }

   render() {
      const today = new Date();
      return (
         <div className="fixed-plugin">
            <div id="fixedPluginClasses" className={this.props.fixedClasses}>
               <ul className="dropdown-menu">
                  <li className="header-title">{this.props.header}</li>
                  <li className="adjustments-line">
                     {/* <li> */}
                     <form>
                        <FormInputs
                           cols={['col-md-12']}
                           properties={[
                              {
                                 as: 'input',
                                 bsPrefix: 'form-control',
                                 label: 'title',
                                 placeholder: 'Enter chore title',
                                 required: true,
                                 size: 'sm',
                                 type: 'text',
                                 onChange: this.handleChange,
                              },
                           ]}
                        />
                        <FormInputs
                           cols={['col-md-12']}
                           properties={[
                              {
                                 as: 'input',
                                 bsPrefix: 'form-control',
                                 label: 'Assigned To',
                                 placeholder:
                                    'Select member responsible for this chore',
                                 required: true,
                                 size: 'sm',
                                 type: 'text',
                                 onChange: this.handleChange,
                              },
                           ]}
                        />
                        <FormInputs
                           cols={['col-md-6', 'col-md-6']}
                           properties={[
                              {
                                 as: 'input',
                                 bsPrefix: 'form-control',
                                 label: 'Date Created',
                                 required: true,
                                 size: 'sm',
                                 type: 'date',
                                 defaultValue: { today },
                                 onChange: this.handleChange,
                                 disabled: true,
                              },
                              {
                                 as: 'input',
                                 bsPrefix: 'form-control',
                                 label: 'Date Due',
                                 placeholder: 'dd/mm/yyyy',
                                 required: true,
                                 size: 'sm',
                                 type: 'date',
                                 onChange: this.handleChange,
                              },
                           ]}
                        />
                        <FormInputs
                           cols={['col-md-12']}
                           properties={[
                              {
                                 as: 'textarea',
                                 bsPrefix: 'form-control',
                                 label: 'Criteria',
                                 placeholder:
                                    'Criteria for chore to be completed',
                                 required: true,
                                 size: 'sm',
                                 type: 'text',
                                 onChange: this.handleChange,
                              },
                           ]}
                        />
                        <div className="button-container">
                           <div className="save">
                              <Button
                                 block
                                 size="sm"
                                 type="submit"
                                 onClick={this.handleChange}
                                 variant="success"
                                 disabled={!this.state.buttonValid}
                              >
                                 Save
                              </Button>
                           </div>
                           <div className="cancel">
                              <Button
                                 block
                                 size="sm"
                                 type="button"
                                 onClick={this.props.handleFixedClick}
                                 variant="info"
                              >
                                 Cancel
                              </Button>
                           </div>
                        </div>
                     </form>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

export default PluginPopup;
