import React, { Component } from "react";
import Search from '../Search/Search'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
// import { BrowserRouter as Router} from 'react-router-dom';

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
                <MDBNavLink to="/sell">Sell</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Category</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    
                  <MDBDropdownItem href="/Electronics">Electronics</MDBDropdownItem>
                    <MDBDropdownItem href="/Automotive">Automotive</MDBDropdownItem>
                    <MDBDropdownItem href="/Clothing">Clothing</MDBDropdownItem>
                    <MDBDropdownItem href="/Household">Household</MDBDropdownItem>
                    <MDBDropdownItem href="/Pets">Pets</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Search />
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      
    );
  }
}

export default Navbar