import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { linkStyle } from '../helpers';

export class Card extends Component {
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
               <h4 className="title">{this.props.title}</h4>
               {this.props.title === 'Household:' ? (
                  <span>{this.props.name}</span>
               ) : null}
               {this.props.lineBreak ? <hr /> : null}
               <p className="category">{this.props.category}</p>
            </div>
            <div
               className={
                  'content' +
                  (this.props.ctTableFullWidth ? ' table-full-width' : '') +
                  (this.props.ctTableResponsive ? ' table-responsive' : '') +
                  (this.props.ctTableUpgrade ? ' table-upgrade' : '')
               }
            >
               {this.props.content}
            </div>
            {this.props.footer ? (
               <div className="footer">
                  <hr />
                  <div className="stats">
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
