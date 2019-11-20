import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class StatsCard extends Component {
   render() {
      const linkStyle = {
         color: '#80c81e',
         fontSize: '14px',
         listStyleType: 'none',
      };
      return (
         <div className="card card-stats">
            <div className="content">
               <Row>
                  <Col xs={6}>
                     <div className="icon-big text-center icon-warning" />
                  </Col>
                  <Col xs={10}>
                     <div className="numbers">
                        <p>{this.props.statsText}</p>
                        {this.props.statsValue}
                     </div>
                  </Col>
               </Row>
               {this.props.footer ? (
                  <div className="footer">
                     <hr />
                     <div className="stats">
                        <li>
                           <Link to={this.props.link} style={linkStyle}>
                              {this.props.linkText}
                           </Link>
                        </li>
                     </div>
                  </div>
               ) : null}
            </div>
         </div>
      );
   }
}

export default StatsCard;
