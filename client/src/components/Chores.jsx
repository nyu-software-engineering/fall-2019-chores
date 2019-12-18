import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Checkbox from './CustomCheckbox';
import Button from './CustomButton';

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
      const household = this.props.location.household;

      const edit = <Tooltip id="edit_tooltip">Edit Chore</Tooltip>;
      const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
      var chores = [];

      {
         household.chores.map((prop, key) => {
            return chores.push(
               <tr key={key}>
                  <td>
                     <Checkbox
                        number={key}
                        isChecked={key === 1 || key === 2 ? true : false}
                     />
                  </td>
                  <td>{prop.title}</td>
                  <td className="td-actions text-right">
                     <OverlayTrigger placement="top" overlay={edit}>
                        <Button
                           variant="info"
                           simple
                           type="button"
                           onClick={() =>
                              this.updateDB(
                                 this.state.idToUpdate,
                                 this.state.updateToApply
                              )
                           }
                        >
                           <i className="fa fa-edit" />
                        </Button>
                     </OverlayTrigger>
                     <OverlayTrigger placement="top" overlay={remove}>
                        <Button
                           variant="danger"
                           simple
                           type="button"
                           onClick={() =>
                              this.deleteFromDB(this.state.idToDelete)
                           }
                        >
                           <i className="fa fa-times" />
                        </Button>
                     </OverlayTrigger>
                  </td>
               </tr>
            );
         });
      }
      return <tbody>{chores}</tbody>;
   }
}

export default Chores;
