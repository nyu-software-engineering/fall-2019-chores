import React, { Component } from 'react';
import Toggle from 'react-toggle';

import FormInputs from './FormInputs';
import Button from './CustomButton';

class PluginPopup extends Component {
   constructor(props) {
      super(props);
      this.state = {
         classes: 'dropdown show-dropdown open',
      };
   }

   render() {
      return (
         <div className="fixed-plugin">
            <div id="fixedPluginClasses" className={this.props.fixedClasses}>
               {/* <div onClick={() => this.props.handleFixedClick()}> */}
               {/*    <i className="fa fa-cog fa-2x" /> */}
               {/* </div> */}
               <ul className="dropdown-menu">
                  <li className="header-title">{this.props.header}</li>
                  <li className="adjustments-line">
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
                                 value: this.state.username,
                                 onChange: this.handleUsernameChange,
                              },
                           ]}
                        />
                     </form>
                  </li>
                  <li className="button-container">
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
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

export default PluginPopup;
