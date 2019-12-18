import React, { Component } from 'react';

import ActionButton from './ActionButton';
import Checkbox from './CustomCheckbox';

export class Chores extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: 0,
         message: null,
         intervalIsSet: false,
         idToDelete: null,
         idToUpdate: null,
         objectToUpdate: null,
      };
   }

   handleCheckbox = event => {
      const target = event.target;
      this.setState({
         [target.name]: target.checked,
      });
   };

   render() {
      const household = this.props.household;
      var chores = [];

      {
         household.chores.map((prop, key) => {
            var number = 'checkbox' + key;
            return chores.push(
               <tr key={key}>
                  <td>
                     <Checkbox
                        number={number}
                        isChecked={this.handleCheckbox}
                     />
                  </td>
                  <td>{prop.title}</td>
                  <span>{prop.due}</span>
                  <td className="td-actions text-right">
                     <ActionButton
                        icon="fa fa-edit"
                        placement="top"
                        tool="edit_tooltip"
                        tooltext="Edit Chore"
                        variant="info"
                     />
                     <ActionButton
                        icon="fa fa-times"
                        placement="top"
                        remove
                        tool="remove_tooltip"
                        tooltext="Remove Chore"
                        variant="danger"
                     />
                  </td>
               </tr>
            );
         });
      }
      return <tbody>{chores}</tbody>;
   }
}

export default Chores;
