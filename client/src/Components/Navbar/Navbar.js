import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router} from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      
        <MDBNavbar color="unique-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Seller's Remorse</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink to="/login">LogIn</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/register">Register</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/sale">Sale</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Catagory</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    
                  <MDBDropdownItem href="/Electronics">Electronics</MDBDropdownItem>
                    <MDBDropdownItem href="/Automotive">automotive</MDBDropdownItem>
                    <MDBDropdownItem href="/Clothing">clothing</MDBDropdownItem>
                    <MDBDropdownItem href="/Household">household</MDBDropdownItem>
                    <MDBDropdownItem href="/Pets">pets</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      
    );
  }
}

export default Navbar