import React, { useState } from 'react'
import './Paymentpage.css'
import * as ReactBootstrap from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function PaymentPage() {
    const [totalprice, settotalprice] = useState(0)
    const item = [
        { name: "T-shirt", price: 200, quantity: 3 },
        { name: "T-shirt", price: 200, quantity: 1 },
        { name: "T-shirt", price: 200, quantity: 2 },
        { name: "T-shirt", price: 200, quantity: 1 },
        { name: "T-shirt", price: 200, quantity: 4 },
        { name: "T-shirt", price: 200, quantity: 1 },
        { name: "T-shirt", price: 200, quantity: 6 }
    ]
    const setprice = (ip, iq) => {
        settotalprice(ip * iq)
    }
    const renderItem = (item, index) => {
        // setprice(item.price*item.quantity)
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td><Button className='btn-success' onClick={() => { settotalprice(item.price * item.quantity + totalprice) }}>ADD</Button>
                    <Button className='btn-danger' style={{ marginLeft: "0.5rem" }} onClick={() => { settotalprice(totalprice - (item.price * item.quantity)) }}>REMOVE</Button></td>
            </tr>
        )
    }
    return (
        <div>
            <h1 className='itemsHeader'>ITEMS ADDED TO CART</h1>
            <div className='tablestyle'>
                <ReactBootstrap.Table striped variant='dark' hover>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Item Quantity</th>
                            <th>Total Item Price</th>
                            <th>Add this item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map(renderItem)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><strong>Total Price</strong></td>
                            {
                                totalprice > 0 ? <td>{totalprice}</td> : <td>0</td>
                            }
                            <td><Link to='/' className='btn btn-warning'><b>Buy It!</b></Link></td>
                        </tr>
                    </tfoot>
                </ReactBootstrap.Table>
            </div>
        </div>
    )
}

export default PaymentPage