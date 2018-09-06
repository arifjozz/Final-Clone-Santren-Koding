import React, { Component } from 'react';
import Navbar from './Navbar';
export default class Tentang extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div class="SantrenKilat-body">
          <br/>
          <br/>
          <br/>
          <br/>
         <center> <h3 className="my-1">Tentang Santren Koding <br/>
          <br/>
          </h3></center>
          <div id="pelatihan" class="container">
          <div class="row">
          <div class="col-12">
          <center><img height="1000px" className="my-1" src="http://i63.tinypic.com/2i7qt14.jpg" alt="Card image cap"/></center>
          </div></div><br/><br/>
          </div>
    
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
