// Sowmiya
import React, { Component } from 'react';
import Cart from '../../containers/Cart';
import { Row, Container, Col } from 'reactstrap';
import CheckoutForm from '../common/CheckoutForm';
import { connect } from 'react-redux';
import Axios from 'axios';
import config from '../../../config'

class Checkout extends Component {
    
    submitOrder = (values) => {
        let orderId = Math.floor(100 * Math.random());
        let { name, address, city, state, pincode } = values.order
        let cart = this.props.cartItems;
        Axios.post(config.ORDERS, {

            "id": orderId,
            "userId": 1,
            "userDetails": {
                "name": name,
                "address": address,
                "city": city,
                "state": state,
                "pincode": pincode
            },
            "products": [
                cart.map(item => ({
                    id: item.id,
                    qty: item.quantity
                }))
            ],
            "amountPaid": 38000
        }
        ).then(() => {
            console.log('order successful');
            document.location.href = `/orderconfirmation/${orderId}`
        })
        .catch((err) =>{
            console.log(err);
        })
    }
    render() {
        let {cartItems} = this.props;
        let placeOrder = true;
        if(cartItems.length < 1){
            placeOrder = false
        }
        return (
            <Container className='checkout'>
                <Row>
                    <Col sm='8'>
                        <Cart checkout={true} />
                    </Col>
                    
                    <Col sm='4'>
                        <CheckoutForm onSubmit={(values) => this.submitOrder(values)} placeOrder={placeOrder}/>
                    </Col>

                </Row>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    console.log(state, 'mapStateToProps');
    return {
        cartItems: state.cartReducer.cartItems,
    }
}
export default connect(mapStateToProps)(Checkout);