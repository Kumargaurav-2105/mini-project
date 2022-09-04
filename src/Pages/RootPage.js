import { Button } from 'reactstrap'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import './rootpage.css'
import Mensweardata from './Data/Mensweardata'
import Kidsweardata from './Data/KidsWear'
import { setProducts, setStatus } from '../store/ProductSlice'
import { add } from '../store/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
    Link, useNavigate
} from 'react-router-dom'

import Footers from '../Footers'
function RootPage() {
    const navigate=useNavigate();
    const [productType, setProductType] = useState(Kidsweardata)
    const dispatch = useDispatch()
    const {data:items, status}=useSelector((state)=>state.product)
    // useEffect(()=>{
    //     console.log(Mensweardata)
    //     dispatch(setProducts(Mensweardata))
    // },[])
    const [disable,setdisable]=useState(false)
    const handleClickAdd=(data)=>{
        dispatch(setProducts(data))
    }
    const addToCart=(id)=>{
        dispatch(add(id))

    }
    useEffect(()=>{
       
    })
    const handlecart=(obj)=>{
        let login=localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
        else{
            addToCart(obj) 
        }
    }
    const handlebuy=(obj)=>{
        let login=localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
        else{
            addToCart(obj)
            navigate('/payment') 
        }
    }
    return (
        <div style={{ paddingBottom: '0%', marginBottom:'0%' }}>
            <div style={{ display: 'flex', padding: '0.5rem', color: 'brown' }}>
                <h4>Categoreis:</h4>
                <Button onClick={()=>{handleClickAdd(Mensweardata)}} className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Mens Wear</Button>
                <Button onClick={()=>{handleClickAdd(Kidsweardata)}} className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                <Button disabled className='btn btn-warning' style={{marginLeft:'0.5rem'}}>Kids Wear</Button>
                
            </div>
            <div className='fullcrousel'>
                <div style={{ flex: "1000rem" }}>
                    <Carousel className='crouselimg'>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src='https://th.bing.com/th/id/OIP.3eF4N1IoUhnz2dl40C7fqAHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                                alt='First Slide'
                            />
                            <Carousel.Caption style={{ color: "blue" }}>
                                <h3>One</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src='https://th.bing.com/th/id/OIP.3eF4N1IoUhnz2dl40C7fqAHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                                alt='First Slide'
                            />
                            <Carousel.Caption style={{ color: "blue" }}>
                                <h3>Two</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className='d-block w-100'
                                src='https://th.bing.com/th/id/OIP.3eF4N1IoUhnz2dl40C7fqAHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
                                alt='First Slide'
                            />
                            <Carousel.Caption style={{ color: "blue" }}>
                                <h3>Three</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='crousel2'>
                    <h4 style={{fontSize:"50px", width:"300px"}}>OFFER ENDING SOON</h4>
                </div>
            </div>

            <h2>Cards</h2>
            <div className='cardblockstyle'>
                {
                    items.map((item) => (
                        <Card className='cardstyle' key={item.id} >
                            <Card.Img variant='top' src={item.src} />
                            <Card.Body style={{marginBottom:"0%"}}>
                                <Card.Title>Card Title</Card.Title>
                                <h6>Ratings: 5/5</h6>
                                <Card.Text>
                                    This is the card text.<br />
                                    <b>{item.name}</b><br/>
                                    <b>Price:{item.price}</b>
                                </Card.Text>
                                <Button onClick={()=>{handlecart(item)}} className='btn-warning'>Add to Cart</Button>
                                <Button onClick={()=>{handlebuy(item)}} className='btn btn-success' style={{ marginLeft: '0.5rem' }}>Buy Now</Button>
                                {/* <Button className='btn-warning'>Update</Button>
                                <Button className='btn-success' style={{ marginLeft: '0.5rem' }}>Delete</Button> */}
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
            <Footers />
        </div>
    )
}

export default RootPage