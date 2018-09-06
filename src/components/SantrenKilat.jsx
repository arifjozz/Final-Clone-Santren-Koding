import React, { Component } from 'react';
import Navbar from './Navbar';
import { Button } from 'reactstrap';
// import { Row, Col } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import {
  Card,
  // Button,
  CardImg,
  CardTitle,
  CardText,
  // CardDeck,
  // CardSubtitle,
  CardBody
} from 'reactstrap';
import { Container } from 'reactstrap';

export default class SantrenKilat extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <div my='3' style={{backgroundColor: '#fafafa',boxSizing : 'border-box', borderTop: '1px solid #e7e7e7'}}>
         <br />
          <h3 style={{ textAlign: 'center' }}>Daftar Santren Kilat Koding</h3>
          <br />
          <Container>
            <Row>
              <Col sm="4">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle style={{ textAlign: 'left' }}>
                      Santren Kilat #1 (Coming Soon)
                    </CardTitle>
                    {/* <CardSubtitle>Kajian Koding #3</CardSubtitle> */}
                    <CardText style={{ textAlign: 'left' }}>
                      4 Hari Intensif Laravel
                    </CardText>
                    <Row>
                      <div className="col-5">
                        <a className="text-secondary small">
                          by Santren Koding
                        </a>
                      </div>
                      <div className="col-7 text-right">
                        <span
                          textAlign="right"
                          color="red"
                          className="small"
                          style={{ marginRight: '15px', color: 'red' }}>
                          Kuota Terbatas
                        </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
            <div
              style={{
                display: 'block',
                height: '60px',
                width: '100%',
                backgroundColor: 'rgb(250, 250, 250)'
              }}
            />
            <div
              style={{
                borderTop: '1px solid rgb(231, 231, 231)',
                textAlign: 'center',
                padding: '20px',
                left: '0px',
                bottom: '0px',
                height: '60px',
                width: '100%',
                color: 'rgb(108, 117, 125)'
              }}>
              <div className="container">
                <div className="row">
                  <div align="left" className="col-12">
                    Copyright © Santren Koding 2018. All rights reserved.
                  </div>
                  <div className="col-12" />
                </div>
              </div>
            </div>
         </div>
     
  </div>

    )
  }
}
