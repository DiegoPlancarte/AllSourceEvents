import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from 'images/ASE_Logo_Lrg.png'

class Top extends React.Component {

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

  render () {
    const { sign_in_route, signed_in, sign_out_route, new_user_registration_path} = this.props
    return(
      <React.Fragment>
        {signed_in &&
          <Navbar className="navbar navbar-expand-lg navbar-collapse-md navbar-dark bg-primary sticky-nav mb-4">
            <NavbarBrand href="/">
              <img 
                id="imageSrc" 
                src={Logo} 
                className="img-fluid" 
                width="40"
                height="40"
                alt="Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag="a" href="/dashboard">My Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/allvendors">All Vendors</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag="a" href="/myvendors">My Listings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag="a" href="/newvendor">Create Vendor</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag="a" href="/account">Account</NavLink>
                </NavItem>
              </Nav>
                <Button className="btn bg-white text-secondary" href={sign_out_route}><strong>Sign Out</strong></Button>
            </Collapse>
          </Navbar>
        }
        {!signed_in &&
          <Navbar className="navbar navbar-expand-lg navbar-collapse-md navbar-dark bg-primary mb-4">
            <NavbarBrand href="/">
              <img 
                id="imageSrc" 
                src={Logo} 
                className="img-fluid" 
                width="40"
                height="40"
                alt="Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/allvendors">All Vendors</NavLink>
              </NavItem>
              </Nav>
              <Button className="btn bg-white text-secondary" href={new_user_registration_path}><strong>Sign Up</strong></Button> &nbsp;
              <Button className="btn bg-white text-secondary" href={sign_in_route}><strong>Sign In</strong></Button>
            </Collapse>
          </Navbar>
        }
      </React.Fragment>
    )
  }
}

export default Top;