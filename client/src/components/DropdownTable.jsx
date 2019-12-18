import React, { Component, useState } from 'react';
import {
   Container,
   Col,
   Dropdown,
   FormControl,
   Row,
   Table,
} from 'react-bootstrap';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a
      href=""
      ref={ref}
      onClick={e => {
         e.preventDefault();
         onClick(e);
      }}
   >
      {children}
      &#x25bc;
   </a>
));

const CustomMenu = React.forwardRef(
   ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
         <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
         >
            <ul className="list-unstyled">
               {React.Children.toArray(children).filter(
                  child =>
                     !value ||
                     child.props.children.toLowerCase().startsWith(value)
               )}
            </ul>
         </div>
      );
   }
);

export default class DropdownTable extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
               {this.props.title}: {this.props.total}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
               <Table striped bordered hover size="sm">
                  <thead>
                     <tr>
                        {this.props.categories.map((prop, key) => {
                           return <th key={key}>{prop}</th>;
                        })}
                     </tr>
                  </thead>
                  <tbody>
                     {/* {this.props.chores.map((prop, key) => { */}
                     {/*    return ( */}
                     {/*       <tr key={key}> */}
                     {/*          {prop.map((prop, key) => { */}
                     {/*             return <td key={key}>{prop}</td>; */}
                     {/*          })} */}
                     {/*       </tr> */}
                     {/*    ); */}
                     {/* })} */}
                  </tbody>
               </Table>
               <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
      );
   }
}
