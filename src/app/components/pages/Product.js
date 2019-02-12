// Deepanshu
import React, { PureComponent } from 'react';
import { Row, Container, Col, Button, Input } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { Redirect } from 'react-router-dom'

class Product extends PureComponent {
    
    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.dispatchers.fetchProduct(this.props.match.params.id);
    }


    render() {

        let { Product, cartItems } = this.props;
        let { id, name, longDescription, price, imageUrl, ratings } = Product;
        let param = this.props.match.params.id;
        if (!Number.isInteger(param) && param <= 0 && Object.keys(Product).length === 0) {
            return (<Redirect to='/404' />);
        }


        if (Object.keys(Product).length !== 0) {

            let cartItem = cartItems.filter(cartItem => cartItem.id === this.props.Product.id)[0]
            const addProductToCart = (Product) => {

                if (cartItem && cartItem.quantity) {
                    this.props.dispatchers.removeAllFromCart(cartItem);
                }
                let qty = Number.parseInt(document.getElementById('qty').value);
                console.log(qty, 'selected qty')
                this.props.dispatchers.addToCart(Product, qty);
            }
            return (
                <Container className='Prodpage'>
                    <Row>
                        <Col>
                            <h2>{name} Spec</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <img src={imageUrl} alt={name} />
                        </Col>
                        <Col md='6'>
                            <h4>{name}</h4>
                            <span>{price}</span>
                            <div>
                                <StarRatings
                                    rating={ratings.avgRating}
                                    starRatedColor="#777"
                                    starDimension="14px"
                                    numberOfStars={5}
                                    name={name}
                                />
                            </div>
                        </Col>
                        <Col md='3'>
                            <Row>
                                <Col md='6'>
                                    <Input type='number' id='qty' min={1} defaultValue={1}></Input>
                                </Col>
                                <Col md='6'>
                                    <Button onClick={() => addProductToCart(Product)}>{(cartItem && cartItem.quantity) ? `+${cartItem.quantity} Added` : '+Cart'}</Button>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <Row>
                        <Col md='10'>
                            <h2>
                                Description
                    </h2>

                            <span>{longDescription}</span>
                        </Col>
                    </Row>

                </Container>
            );
        }

        return (<div></div>)
            ;
    }
}

export default Product;