import React, { useEffect, useState } from 'react'
import { NavItem, Navbar, Nav, NavbarBrand, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.css'
function NavbarComp() {
  const navigate = useNavigate();
  const [login, setlogin] = useState(false)
  useEffect(() => {
    setlogin(localStorage.getItem('login'))
  })
  //let login=localStorage.getItem('login')
  const items = useSelector((state) => state.cart)
  const handlelogin = () => {
    navigate('/login')
  }
  const handlelogout = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('accesstoken')
    navigate('/login')
  }
  return (
    <div>
      <Navbar color='dark' dark>
        <Link style={{textDecoration:"none"}} to='/'><NavbarBrand className='navbrand'>Happy Shop</NavbarBrand></Link>
        <Nav className='d-flex' dark>
          <NavItem style={{ color: "white" }}>
            <Link to='/payment'><img src='https://cdn-icons-png.flaticon.com/128/891/891407.png' style={{ width: "50px", marginLeft: "3px" }} /></Link><span className='cartcount'>{items.length}</span>
            {
              login ? <Button onClick={handlelogout} className='btn btn-danger navbtn'>Logout</Button> : <Button onClick={handlelogin} className='btn btn-success navbtn'>Login</Button>
            }
            <Link to='signup' className='btn btn-success navbtn'>Signup</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavbarComp