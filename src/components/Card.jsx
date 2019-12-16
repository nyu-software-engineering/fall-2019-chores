import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { linkStyle } from '../helpers';
import ActionButton from './ActionButton';

class Card extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <div className={'card' + (this.props.plain ? ' card-plain' : '')}>
            <div
               className={'header' + (this.props.hCenter ? ' text-center' : '')}
            >
               {this.props.title === 'Household:' ? (
                  <h4 className="title">
                     {this.props.title} <span>{this.props.name}</span>
                  </h4>
               ) : (
                  <h4 className="title">
                     {this.props.title}
                     {this.props.title === 'Chores' ? (
                        <span>
                           <ActionButton
                              icon="fa fa-plus"
                              placement="right"
                              tool="add_tooltip"
                              tooltext="Add Chore"
                              variant="success"
                           />
                        </span>
                     ) : null}
                  </h4>
               )}
               {this.props.lineBreak ? <hr /> : null}
               <p className="category">{this.props.category}</p>
            </div>
            <div
               className={
                  'content' +
                  (this.props.ctTableFullWidth ? ' table-full-width' : '') +
                  (this.props.ctTableResponsive ? ' table-responsive' : '')
               }
            >
               {this.props.content}
            </div>
            {this.props.footer ? (
               <div className="footer">
                  <hr />
                  <div className="stats">
                     {this.props.preText}
                     <Link to={this.props.link} style={linkStyle}>
                        {this.props.linkText}
                     </Link>
                  </div>
               </div>
            ) : null}
         </div>
      );
   }
}

export default Card;
