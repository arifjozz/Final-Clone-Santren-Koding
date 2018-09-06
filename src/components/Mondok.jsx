import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../App.css'
import Navbar from './Navbar'
export default class Mondok extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <br/>
          <br/>
          <br/>
          
        <Jumbotron fluid className="Jumbotron my-1"  >
        <Container fluid >
        <center><img src="http://i65.tinypic.com/9ldboy.png" style={{justifyContent: 'center', verticalAlign: 'middle'}} alt="santren" /></center>
        <center><h1 className="display-3">Mondok by Santren Koding </h1></center>
        <center><p className="lead">Kegiatan Belajar Intensif 3 tahun Programming dan Qur'an</p></center>
        <br/>
        <center><a href="https://s.id/daftarmondok" className="btn btn-success btn-lg">Daftar Sekarang!</a> 
        </center>
        </Container>
        </Jumbotron>
        <Container>
          <br/>
          
          <center> <h2 className='my-1'>KABAR GEMBIRA 
            <br/>UNTUK KAMU YANG PASSION DIBIDANG IT</h2></center>
            <center><p className="des my-2">Santren Koding saat ini sedang membuka pendaftaran santri baru.<br/>Bidang keahlian yang dibuka adalah Mobile Development dan Web Development dengan jenjang 3 tahun lama masa pembelajaran dan live project.
            
        <br/>
      
        <br/>
        
      </p>
      </center>
      </Container>

        <div className="container my-3">
        <div className="row">
        <div span="6" style={{left: '128px'}} className="col-6">
        <img height="400px" src="http://i67.tinypic.com/2m2gkyp.png"  alt="Santren" />
        </div>
        <div span="6" className="fasilitas col-6">
        <h4>Fasilitas</h4><i className="anticon anticon-check"></i>GRATIS BIAYA PENDIDIKAN
        <br/>
        <i className="anticon anticon-check"></i>GRATIS UANG MAKAN DAN ASRAMA
        <br/><i className="anticon anticon-check"></i>TEMPAT BELAJAR YANG NYAMAN<br/>
        <i className="anticon anticon-check"></i>RIHLAH 2 BULAN SEKALI
        <br/>
        <h4>
            <br/>Persyaratan
            </h4>
            <i className="anticon anticon-check"></i>MUSLIM
            <br/>
            <i className="anticon anticon-check">
            </i>LAKI-LAKI (USIA MAKS 23TH)<br/><i className="anticon anticon-check"></i>MENGINAP/TINGGAL DI ASRAMA<br/><i className="anticon anticon-check"></i>BUKAN YANG MENGHALALKAN ROKOK<br/><i className="anticon anticon-check"></i>BERSUNGGUH-SUNGGUH<br/><i className="anticon anticon-check"></i>MEMPUNYAI LAPTOP
            <br/><i className="anticon anticon-check"></i>WAJIB HOBI NGODING<br/><i className="anticon anticon-check"></i>SIAP BELAJAR 16 JAM/HARI<br/><h4><br/>Periode</h4><i className="anticon anticon-check"></i>PERIODE 1: Pendaftaran Tutup 18 Maret 2018<br/><i className="anticon anticon-check"></i>PERIODE 2: Pendaftaran Tutup 31 Mei 2018<br/><i className="anticon anticon-check"></i>PERIODE 3: Pendaftaran Tutup 1 Juli 2018<br/><i className="anticon anticon-check"></i>Muslimah (Untuk Perempuan): Coming soon...<br/>
        </div></div></div>
        
        <div className="container"><br/><br/>
       <center> <a href="https://s.id/daftarmondok" className="btn btn-success btn-lg">Daftar Sekarang!</a>
       </center>
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
