import React, { useState } from 'react'
import { FormText, Nav, Navbar, NavItem } from 'reactstrap'
import { Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './signup.css'
function Signup() {
    const [userInfo, setUserInfo] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        setUserInfo(data)
    }
    return (
        <div>
            <Navbar style={{ marginLeft: "25%", marginRight: "25%" }} dark>
                <NavItem className='heading'>
                    <h1>SIGNUP</h1>
                </NavItem>
            </Navbar>
            <Form onSubmit={handleSubmit(onSubmit)} className='box' style={{}}>
                <div style={{ margin: "2rem" }}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder='Enter Email' {...register("email", {
                            required: "Email is Required...",
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email must be valid",
                            },
                        })} />
                        <p style={{ color: "red" }}>{errors.email?.message}</p>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder='Enter password' {...register("password", {
                            required: "Password is Required...",
                            pattern: {
                                value:
                                    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                message:
                                    "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                            },
                        })} />
                        <p style={{ color: "red" }}>{errors.password?.message}</p>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' name='name' placeholder='Enter your name' {...register("name", {
                            required: "Username is Required...",
                            minLength: {
                                value: 4,
                                message: "Username must be atleast 4 characters long...",
                            },
                            maxLength: {
                                value: 10,
                                message: "Username must be atmost 10 characters long...",
                            },
                        })} />
                        <p style={{ color: "red" }}>{errors.name?.message}</p>
                    </Form.Group>
                    <Button type='submit' className='btn-success'>Submit</Button>
                </div>
            </Form>
        </div>
    )
}

export default Signup