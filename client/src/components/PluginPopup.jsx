import React, { Component } from 'react';

import Button from './CustomButton';
import FormInputs from './FormInputs';

class PluginPopup extends Component {
   constructor(props) {
      super(props);
      this.state = {
         classes: 'dropdown show-dropdown open',
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
   }

   handleClick = () => {
      if (this.state.fixedClasses === 'dropdown') {
         this.setState({ classes: 'dropdown show-dropdown open' });
      } else {
         this.setState({ classes: 'dropdown' });
      }
   };

   render() {
      const today = new Date().today;
      return (
         <div className="fixed-plugin">
            <div id="fixedPluginClasses" className={this.props.fixedClasses}>
               <ul className="dropdown-menu">
                  <li className="header-title">
                     {this.props.header}
                     {/* <span> */}
                     {/*    <Button */}
                     {/*       variant="danger" */}
                     {/*       simple */}
                     {/*       type="button" */}
                     {/*       onClick={this.handleClick} */}
                     {/*    > */}
                     {/*       <i className="fa fa-times" /> */}
                     {/*    </Button> */}
                     {/* </span> */}
                  </li>
                  <li className="adjustments-line">
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
                                 placeholder: 'dd/mm/yyyy',
                                 required: true,
                                 size: 'sm',
                                 type: 'date',
                                 defaultValue: { today },
                                 onChange: this.handleChange,
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
                        <li className="button-container">
                           <Button
                              block
                              size="sm"
                              type="submit"
                              onClick={}
                              variant="success"
                              disabled={!this.state.buttonValid}
                           >
                              Save
                           </Button>
                           <Button
                              block
                              size="sm"
                              type="button"
                              onClick={}
                              variant="info"
                           >
                              Cancel
                           </Button>
                        </li>
                     </form>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

export default PluginPopup;
