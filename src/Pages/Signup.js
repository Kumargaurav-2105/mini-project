import React from 'react'
import {Button, Form, FormGroup, Label, Input, FormText, Nav, Navbar, NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import './signup.css'
function Signup() {
  return (
    <div>
        <Navbar style={{marginLeft: "25%", marginRight: "25%"}} dark>
            <NavItem className='heading'>
                <h1>SIGNUP</h1>
            </NavItem>
        </Navbar>
        <Form className='box' style={{}}>
            <div style={{margin: "2rem"}}>
            <FormGroup>
                <Label>Email</Label>
                <Input type='text' name='email' placeholder='Enter Email'/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type='password' name='password' placeholder='Enter password'/>
            </FormGroup>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' name='username' placeholder='Enter your name'/>
            </FormGroup>
            <FormGroup>
                <Label>Age</Label>
                <Input type='number' name='age' placeholder='Enter Your Age'/>
            </FormGroup>
            <Link to='/'><Button type='submit' className='btn-success'>Submit</Button></Link>
            </div>
        </Form>
    </div>
  )
}

export default Signup