import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class StatsCard extends Component {
   render() {
      const linkStyle = {
         color: '#7ea71f',
         fontSize: '14px',
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
                        <a href={this.props.link} style={linkStyle}>
                           {this.props.linkText}
                        </a>
                     </div>
                  </div>
               ) : null}
            </div>
         </div>
      );
   }
}

export default StatsCard;
