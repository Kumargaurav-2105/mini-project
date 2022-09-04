import React, { useState } from 'react'
import { Navbar, NavItem } from 'reactstrap'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import '../signup.css'
function AdminLogin() {
    const navigate=useNavigate()
    const [loginUserInfo, setLoginUserInfo] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        setLoginUserInfo(data)
        console.log(data)
        axios.post('http://localhost:3001/signin',data)
        .then((res)=>{
            console.log(res)
            console.log(res.data.msg)
            console.log(res.data.accesstoken)
            localStorage.setItem('accesstoken',res.data.accesstoken)
            if(res.data.status){
                localStorage.setItem('login',true)
            }
            res.data.msg==='authenticated'?navigate('/'):navigate('/login')
            if(res.data.msg==='authenticated'){
                navigate('/')
            }
            else{}
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div className='heading'>
            <Navbar style={{ marginLeft: "25%", marginRight: "25%" }} dark>
                <NavItem>
                    <h1>Admin Login</h1>
                </NavItem>
            </Navbar>
            <Form onSubmit={handleSubmit(onSubmit)} className='box' style={{ marginLeft: "25%", marginRight: "25%", marginBottom: "0%", border: "2px solid black", borderRadius: "5px", backgroundColor: "wheat" }}>
                <div style={{ margin: "2rem" }}>
                    <Form.Group>
                        <Form.Label style={{ color: "black" }}>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder='Enter Email' {...register("email", {
                            required: "Email is Required...",
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email must be valid",
                            },
                        })} />
                        <p style={{color: "red"}}>{errors.email?.message}</p>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{ color: "black" }}>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder='Enter password' {...register("password", {
                            required: "Password is Required...",
                            pattern: {
                                value:
                                    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                message:
                                    "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                            },
                        })} />
                        <p style={{color: "red"}}>{errors.password?.message}</p>
                    </Form.Group>
                    <Button type='submit' className='btn-success'>Submit</Button>
                </div>
            </Form>
            <Link to='/' className='btn-success'>Home</Link>
        </div>
    )
}

export default AdminLogin