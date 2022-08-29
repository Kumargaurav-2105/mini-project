import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './signup.css'
function Login() {
  return (
    <div className='heading1'>
      <h1>Login</h1>
      <div>
        <div></div>
        <div>
          <Link to='/adminlogin' className='btn btn-danger' style={{margintop:"0.5rem", width:'20rem'}}> Admin </Link><br/>
          <Link to='/userlogin' className='btn btn-danger' style={{marginTop:"0.5rem", width:'20rem'}}> User </Link>
        </div>
      </div>
    </div>
  )
}

export default Login