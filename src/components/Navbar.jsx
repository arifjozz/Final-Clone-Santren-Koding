import React from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" style={divStyle}>
          <NavbarBrand href="/">
            <img
              src="http://i63.tinypic.com/oid9xu.png"
              height="50px"
              alt="logo"
            />&nbsp;&nbsp; Santren Koding
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link style={{textDecoration : 'none' }} to="/" activeStyle={{ color: 'red' }} activeClassName="active"><NavLink >Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/kajiankoding" style={{textDecoration : 'none' }} activeStyle={{ color: 'red' }} activeClassName="active"><NavLink >Kajian Koding</NavLink></Link>
              </NavItem>
              <NavItem>
               <Link to="/santrenkilat" style={{textDecoration : 'none' }}  activeStyle={{ color: 'red' }} activeClassName="active"> <NavLink >Santren Kilat</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/mondok" style={{textDecoration : 'none' }} ><NavLink >Mondok</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/about"><NavLink >
                  Tentang Kami
                </NavLink></Link>
              </NavItem>
              <NavItem>
               <Link to="/login"> <Button outline color="primary">
                  Login/Signup
                </Button></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
var divStyle = {
  position: 'fixed',
  width: '100%',
  zIndex: '100'
};
