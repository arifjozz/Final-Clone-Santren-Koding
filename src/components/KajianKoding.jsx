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

export default class KajianKoding extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <div my='3' style={{backgroundColor: '#fafafa',boxSizing : 'border-box', borderTop: '1px solid #e7e7e7'}}>
        <h2  my="5" style={{ textAlign: 'center', borderTop: '4px solid #e7e7e7',borderColor :'#e7e7e7'  }}>Daftar Kajian Koding Rutin</h2>
        <br />
        <Container>
          <Row>
            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle style={{ textAlign: 'left' }}>
                    Kajian Koding #3
                  </CardTitle>
                  {/* <CardSubtitle>Kajian Koding #3</CardSubtitle> */}
                  <CardText style={{ textAlign: 'left' }}>
                    ReactJS dan Firebase Auth/Hosting
                  </CardText>
                  <Row>
                    <div className="col-5">
                      <a className="text-secondary small">by Santren Koding</a>
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

            <Col sm="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle style={{ textAlign: 'left' }}>
                    Kajian Koding #2
                  </CardTitle>
                  {/* <CardSubtitle style={{ textAlign: 'left' }}>
                    Card subtitle
                  </CardSubtitle> */}
                  <CardText style={{ textAlign: 'left' }}>
                    html, css, bootstrap dasar
                  </CardText>
                  <Row>
                    <div className="col-5">
                      <a className="text-secondary small">by Santren Koding</a>
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
                    Kajian Koding #1
                  </CardTitle>
                  {/* <CardSubtitle style={{ textAlign: 'left' }}>
                    Card subtitle
                  </CardSubtitle> */}
                  <CardText style={{ textAlign: 'left' }}>
                    Belajar Laravel Dasar
                  </CardText>
                  <Row>
                    <div className="col-5">
                      <a className="text-secondary small">by Santren Koding</a>
                    </div>
                    <div clasName="col-7 text-right">
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
</div>
    )
  }
}
