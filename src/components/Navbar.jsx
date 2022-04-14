import React, { Component } from 'react'
import './Navbar.css'
import {
    Navbar, NavbarBrand
} from 'reactstrap'



 class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md"  light>
            <NavbarBrand href="/">
            Prueba Técnica 
            </NavbarBrand>
            
        </Navbar>
      </div>
    )
  }
}

export default NavBar