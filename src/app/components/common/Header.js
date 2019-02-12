// Karthik

import React, { Component } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link, withRouter, Redirect, NavLink as Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedOut } from '../../state/actions'


class Header extends Component {
    constructor(props) {
        super(props);


        this.state = {
            isOpen: false,
            isLoggedOut: false,
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    loggedOut = () => {
        console.log("asdsdf", this.props);
        this.setState({ isLoggedOut: true })
        localStorage.clear();
        this.props.loggedOut()
        document.location.href = '/'
    }
    render() {
        return (
            <div>

                <Container>
                    <NavbarBrand href="/">WebShop</NavbarBrand>
                    <Navbar color="dark" dark expand="md">

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-left" navbar>
                                <NavItem>
                                    <Navlink to="/" className="nav-link">Home</Navlink>
                                </NavItem>
                                <NavItem>
                                    <Navlink to="/categories" className="nav-link">Categories</Navlink>
                                </NavItem>
                                <NavItem>
                                    <Navlink to="/products" className="nav-link" >Products</Navlink>
                                </NavItem>
                                <NavItem>
                                    <Navlink to="/cart" className="nav-link" >Cart</Navlink>
                                </NavItem>
                                <NavItem>
                                    <Navlink to="/checkout" className="nav-link" >Checkout</Navlink>
                                </NavItem>
                            </Nav>
                            {
                                this.props.loginDetails.isAuthenticatedUser ? <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Navlink to="/" className="nav-link" onClick={this.loggedOut}>Logout</Navlink>
                                    </NavItem>
                                </Nav> :
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <Navlink to="/login" className="nav-link">login</Navlink>
                                        </NavItem>
                                    </Nav>
                            }
                        </Collapse>
                    </Navbar>
                </Container>

            </div>
        );
    }
}

export default connect(state => ({ loginDetails: state.loginReducer }), { loggedOut })(withRouter(Header));