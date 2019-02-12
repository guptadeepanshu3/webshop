// Deepanshu
import React, { Component } from 'react';
import ProductCard from '../common/ProductCard';
import { Row, Container, Col } from 'reactstrap';
class TopProducts extends Component {
    componentDidMount() {
        console.log('top product did mount')
        this.props.dispatchers.fetchTopProducts(4);
    }
    render() {
        
        let { topProducts,cartItems} = this.props;
        let {addToCart} = this.props.dispatchers;
        
        return (
            <Container>
                <h2> Top Products </h2>
                <Row>
                    {
                        topProducts.map((product, i) => (
                            <Col sm="3" key={product.id}>
                              <ProductCard product={product}
                                    cartItem={cartItems.filter(cartItem => cartItem.id === product.id)[0]}
                                    addToCart={addToCart}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default TopProducts;