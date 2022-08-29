import { Button } from 'reactstrap'
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import './rootpage.css'
import Mensweardata from './Data/Mensweardata'
import Kidsweardata from './Data/KidsWear'
import {
    Link
} from 'react-router-dom'
import NavbarComp from '../NavbarComp'
import Footers from '../Footers'
function RootPage() {
    const [productType, setProductType] = useState(Kidsweardata)

    return (
        <div style={{paddingBottom:'0%'}}>
            <h1 className='shoplogo'>Happy Buying</h1>
            <NavbarComp />
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
                    <h4>OFFER ENDING SOON</h4>
                </div>
            </div>

            <h2>Cards</h2>
            <div className='cardblockstyle'>
                {
                    productType.map((item) => (
                        <Card className='cardstyle' >
                            <Card.Img variant='top' src={item.src} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <h6>Ratings: 5/5</h6>
                                <Card.Text>
                                    This is the card text.<br />
                                    <b>{item.name}</b>
                                </Card.Text>
                                <Button className='btn-warning'>Add to Cart</Button>
                                <Link to='/payment' className='btn btn-success' style={{ marginLeft: '0.5rem' }}>Buy Now</Link>
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