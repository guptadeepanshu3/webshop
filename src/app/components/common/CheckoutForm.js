// Sowmiya
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Row, Container, Col, Button } from 'reactstrap';
function CheckoutForm(props) {
    const { handleSubmit, placeOrder } = props

    return <Container className='checkoutform'>
        <Row>
            <Col sm='12'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="order[name]">Name </label><br />
                <Field name="order[name]" component="input" type="text" required />
            </div>
            <div>
                <label htmlFor="order[address]">Address </label><br />
                <Field name="order[address]" component="input" type="text" required/>
            </div>
            <div>
                <label htmlFor="order[city]">City </label><br />
                <Field name="order[city]" component="input" type="text" required />
            </div>
            <div>
                <label htmlFor="order[state]">State </label><br />
                <Field name="order[state]" component="input" type="text" required />
            </div>
            <div>
                <label htmlFor="order[pincode]">PinCode </label><br />
                <Field name="order[pincode]" component="input" type="text" required/>
            </div>

            <div>
                <Button className='placeorder' type="submit" disabled={!placeOrder}>Place order</Button>
            </div>
        </form>
        </Col>
        </Row>
    </Container>
}


export default reduxForm({
    form: 'checkout'
})(CheckoutForm);