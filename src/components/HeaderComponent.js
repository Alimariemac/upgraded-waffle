import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, NavLink } from 'reactstrap';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            isNavOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav(){
        console.log("toggle")
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <Navbar color="light"  expand="md">
                {/* add expand code here */}
                <NavbarToggler onClick={this.toggleNav}/>
                <Collapse isOpen= {this.state.isNavOpen} navbar>
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink className="nav-link" to="home">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="messages">
                                Messages
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header