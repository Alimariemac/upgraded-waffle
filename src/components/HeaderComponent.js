import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, NavLink } from 'reactstrap'
import {Link} from 'react-router-dom'

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
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/messages">
                                Messages
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header