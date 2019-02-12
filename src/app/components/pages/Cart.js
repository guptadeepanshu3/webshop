// Sowmiya

import React from 'react';
import { Row, Container, Col, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function sort(items) {
    return items.sort((a, b) => a.id - b.id)
}
function totalAmountPerProduct(price, quantity) {
    return Number.parseFloat(price) * Number.parseFloat(quantity);
}
function totalCart(cartItems) {
    let total = {
        totalAmount: 0,
        totalQty: 0
    }
    cartItems.map(item => {
        total.totalAmount = (total.totalAmount + totalAmountPerProduct(item.price, item.quantity));
        total.totalQty = (total.totalQty + item.quantity);
    });
    return total;
}

function Cart(props) {
    console.log(props.cartItems, "cart")
    let total = totalCart(props.cartItems);

    if ((props.cartItems.length <= 0)) {
        return (<Container className='cart'>
            <Row>
                <Col sm='6'>
                    <div>Your Shopping cart is empty!!!</div>
                </Col>
            </Row>
        </Container>)
    }
    let {dispatchers} = props;
    return (

        <Container className='cart'>
            <Row>
                <Col>
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Change Qty.</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sort(props.cartItems).map(item => <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{totalAmountPerProduct(item.price, item.quantity)}</td>
                                    <td>
                                        <button
                                            onClick={() => dispatchers.addToCart(item)}
                                        >+</button>
                                        <button
                                            onClick={() => dispatchers.removeFromCart(item)}
                                        >-</button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => dispatchers.removeAllFromCart(item)}
                                        >
                                            Remove
                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row className='cartcheck'>
                <Col sm='2'>
                    <div>QTY.</div>
                    <div>{total.totalQty}</div>

                </Col>
                <Col sm="2">
                    <div>Total</div>
                    <div>{total.totalAmount}</div>
                </Col>
            </Row>
            {props.checkout ? <div></div> : <Row>
                <Col sm='3'>
                    <Button className='checkoutbtn' onClick={() => props.history.push('/checkout')}>Checkout</Button>
                </Col>
            </Row>}


        </Container>
    )
}
Cart.propTypes = {
    checkout: PropTypes.bool
}
export default withRouter(Cart);