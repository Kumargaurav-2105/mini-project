import React from 'react'
import {Button, Form, FormGroup, Label, Input, FormText, Nav, Navbar, NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../signup.css'
function UserLogin() {
  return (
    <div className='heading'>
        <Navbar style={{marginLeft: "25%", marginRight: "25%"}} dark>
            <NavItem>
                <h1>User Login</h1>
            </NavItem>
        </Navbar>
        <Form className='box' style={{marginLeft: "25%", marginRight: "25%", marginBottom: "0%", border: "2px solid black", borderRadius:"5px",  backgroundColor: "wheat" }}>
            <div style={{margin: "2rem"}}>
            <FormGroup>
                <Label style={{color:"black"}}>Email</Label>
                <Input type='text' name='email' placeholder='Enter Email'/>
            </FormGroup>
            <FormGroup>
                <Label style={{color:"black"}}>Password</Label>
                <Input type='password' name='password' placeholder='Enter password'/>
            </FormGroup>
            <Link to='/'><Button type='submit' className='btn-success'>Submit</Button></Link>
            </div>
        </Form>
    </div>
  )
}

export default UserLogin