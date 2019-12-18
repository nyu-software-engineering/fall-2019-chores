import React, { Component } from 'react';

import ActionButton from './ActionButton';
import Checkbox from './CustomCheckbox';

export class Chores extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isChecked: false,
         remove: false,
         edit: false,
      };
   }

   handleCheckbox = event => {
      const target = event.target;
      this.setState({
         [target.name]: target.checked,
      });
   };

   render() {
      const household = this.props[0].chores;
      console.log('chores', household);
      var chores = [];

      {
         household.map((chore, key) => {
            var number = 'checkbox' + key;
            return chores.push(
               <tr key={key}>
                  <td>
                     <Checkbox
                        number={number}
                        isChecked={this.handleCheckbox}
                     />
                  </td>
                  <td>{chore.title}</td>
                  {/* <span>{chore.due}</span> */}
                  <td className="td-actions text-right">
                     <ActionButton
                        icon="fa fa-edit"
                        placement="top"
                        tool="edit_tooltip"
                        tooltext="Edit Chore"
                        variant="info"
                        editChore={this.edit}
                     />
                     <ActionButton
                        icon="fa fa-times"
                        placement="top"
                        tool="remove_tooltip"
                        tooltext="Remove Chore"
                        variant="danger"
                        removeChore={this.remove}
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
