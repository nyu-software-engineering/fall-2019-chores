import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import PluginPopup from './PluginPopup';
import Button from './CustomButton';

class ActionButton extends Component {
   constructor(props) {
      super(props);
      this.state = {
         fixedClasses: 'dropdown show-dropdown open',
         showPlugin: false,
         remove: false,
      };

      // this.handleFixedClick = this.handleFixedClick.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
   }

   // handleFixedClick = () => {
   //    if (this.state.fixedClasses === 'dropdown') {
   //       this.setState({ fixedClasses: 'dropdown show-dropdown open' });
   //    } else {
   //       this.setState({ fixedClasses: 'dropdown' });
   //    }
   // };

   handleButtonClick = () => {
      this.setState({ showPlugin: true });
   };

   handleRemove = () => {
      this.setState({ remove: true });
   };

   render() {
      const tooltip = (
         <Tooltip id={this.props.tool}>{this.props.tooltext}</Tooltip>
      );
      return (
         <OverlayTrigger placement={this.props.placement} overlay={tooltip}>
            <Button
               variant={this.props.varient}
               simple
               type="button"
               onClick={
                  this.props.remove ? this.handleRemove : this.handleButtonClick
               }
               {...this.props}
            >
               {this.state.showPlugin ? (
                  <PluginPopup
                     handleFixedClick={this.handleFixedClick}
                     fixedClasses={this.state.fixedClasses}
                     mini={this.state['mini']}
                     header={this.props.tooltext}
                  />
               ) : null}
               <i className={this.props.icon} />
            </Button>
         </OverlayTrigger>
      );
   }
}

export default ActionButton;
