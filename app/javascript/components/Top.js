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
                <Navbar className="navbar navbar-expand-md navbar-collapse-xs navbar-dark bg-primary sticky-nav">
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
                        <NavLink href="/contactus/">Contact Us</NavLink>
                    </NavItem>
					<NavItem>
                        <NavLink href="/aboutus">About Us</NavLink>
                    </NavItem>
					<NavItem>
                        <NavLink href="/newvendor">New Vendor</NavLink>
                    </NavItem>
                    </Nav>
                    <Button className="btn bg-white text-secondary" href={sign_out_route}><strong>Sign Out</strong></Button>
                </Collapse>
                </Navbar>
                }
                {!signed_in &&
                    <Navbar className="navbar navbar-expand-md navbar-collapse-xs navbar-dark bg-primary">
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
                            <NavLink href="/aboutus">About Us</NavLink>
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