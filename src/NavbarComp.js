import React from 'react'
import {NavItem, Navbar, Nav, NavbarBrand, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import './navbar.css'
function NavbarComp() {
  return (
    <div>
        <Navbar color='dark' dark>
            <NavbarBrand className='navbrand'>Happy Shop</NavbarBrand>
            <Nav className='d-flex' dark>
                <NavItem style={{color: "white"}}>
                    <Link to='/menswear' className=' navbtn menubg'> Mens Wear</Link>
                    <Link to='/ladieswear' className='navbtn menubg'> Ladies Wear</Link>
                    <Link to='/kidswear' className='navbtn menubg'> Kids Wear</Link>
                    <Link to='/payment'><img src='https://cdn-icons-png.flaticon.com/128/891/891407.png' style={{width: "50px", marginLeft:"3px"}}/></Link><span className='cartcount'>0</span>
                    <Link to='/login' className='btn btn-success navbtn'>Login</Link>
                    <Link to='signup' className='btn btn-success navbtn'>Signup</Link>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  )
}

export default NavbarComp