import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { linkStyle } from '../helpers';

export default class StatsCard extends Component {
   render() {
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
                        {this.props.preText}
                        <Link to={this.props.link} style={linkStyle}>
                           {this.props.linkText}
                        </Link>
                     </div>
                  </div>
               ) : null}
            </div>
         </div>
      );
   }
}
