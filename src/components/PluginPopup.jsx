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
      if (this.state.classes === 'dropdown') {
         this.setState({ classes: 'dropdown show-dropdown open' });
      } else {
         this.setState({ classes: 'dropdown' });
      }
   };

   render() {
      return (
         <div className="fixed-plugin">
            <div id="fixedPluginClasses" className={this.props.fixedClasses}>
               <ul className="dropdown-menu">
                  <li className="header-title">
                     {this.props.header}{' '}
                     <span>
                        <Button
                           variant="danger"
                           simple
                           type="button"
                           onClick={this.handleClick}
                        >
                           <i className="fa fa-times" />
                        </Button>
                     </span>
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
                                 label: 'title',
                                 placeholder: 'Enter chore title',
                                 required: true,
                                 size: 'sm',
                                 type: 'text',
                                 onChange: this.handleChange,
                              },
                           ]}
                        />
                        <Button
                           block
                           size="sm"
                           type="submit"
                           // onClick={}
                           variant="success"
                           disabled={!this.state.buttonValid}
                        >
                           Save
                        </Button>
                     </form>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

export default PluginPopup;
