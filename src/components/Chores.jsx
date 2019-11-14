import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Checkbox from './CustomCheckbox.jsx';
import Button from './CustomButton.jsx';

export class Chores extends Component {
   handleCheckbox = event => {
      const target = event.target;
      console.log(event.target);
      this.setState({
         [target.name]: target.checked,
      });
   };
   render() {
      const edit = <Tooltip id="edit_tooltip">Edit Chore</Tooltip>;
      const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
      const chore_label = [
         'Empty all garbages"',
         'Sweep kitchen floor',
         'Clean toilet',
         'Change hallway lightbulbs',
         'Scrub glass pan',
      ];
      var chores = [];
      var number;
      for (var i = 0; i < chore_label.length; i++) {
         number = 'checkbox' + i;
         chores.push(
            <tr key={i}>
               <td>
                  <Checkbox
                     number={number}
                     isChecked={i === 1 || i === 2 ? true : false}
                  />
               </td>
               <td>{chore_label[i]}</td>
               <td className="td-actions text-right">
                  <OverlayTrigger placement="top" overlay={edit}>
                     <Button variant="info" simple type="button">
                        <i className="fa fa-edit" />
                     </Button>
                  </OverlayTrigger>

                  <OverlayTrigger placement="top" overlay={remove}>
                     <Button variant="danger" simple type="button">
                        <i className="fa fa-times" />
                     </Button>
                  </OverlayTrigger>
               </td>
            </tr>
         );
      }
      return <tbody>{chores}</tbody>;
   }
}

export default Chores;
