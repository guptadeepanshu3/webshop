// Sowmiya

import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';
import axios from 'axios';
import config from '../../../config'

class OrderConfirmation extends Component {
    state = {
        order: {
            "id": '',
            "userId": '',
            "userDetails": {
                "name": "",
                "address": "",
                "city": "",
                "state": "",
                "pincode": ""
            },
            "products": [
                {
                    "id": '',
                    "qty": ''
                }
            ],
            "amountPaid": ''
        }
    }


    componentDidMount() {
        axios.get(`${config.ORDERS}?id=${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    order: res.data[0],
                })
                console.log(this.state, 'confirmation state')
            })
    }
    render() {
        const { id, userDetails } = this.state.order;
        const { name } = userDetails;
        return (
            <Container>
                <Row>
                    <Col sm='6'>
                        <h2>Order Summary</h2>
                        <div>Your order has been successfully placed. Your order details :</div>
                        <div>Order id: {id}</div>
                        <div>Deliver To: {name}</div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OrderConfirmation;