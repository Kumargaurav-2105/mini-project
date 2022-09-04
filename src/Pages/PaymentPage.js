import React, { useState } from 'react'
import './Paymentpage.css'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/CartSlice'
import * as ReactBootstrap from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function PaymentPage() {
    const item = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const [totalprice, settotalprice] = useState(0)
    const setprice = (ip, iq) => {
        settotalprice(ip * iq)
    }
    const handleRemove=(id)=>{
        dispatch(remove(id))
      }
    const renderItem = (item, index) => {
        // setprice(item.price*item.quantity)
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>1</td>
                <td><Button className='btn-success' onClick={() => { settotalprice(item.price + totalprice) }}>ADD</Button>
                    <Button className='btn-danger' style={{ marginLeft: "0.5rem" }} onClick={() => { settotalprice(totalprice - item.price ) }}>REMOVE</Button></td>
                <td><Button onClick={()=>handleRemove(item.id)}>Remove this item</Button></td>
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
                            <th>Add this item</th>
                            <th>Remove from cart</th>
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