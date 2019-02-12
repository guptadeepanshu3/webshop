// Deepanshu

import React, { Component } from 'react';
import { Row, Container, Col } from 'reactstrap';
import Loader from 'react-loader';
import ProductCard from '../common/ProductCard'

class Category extends Component {
    componentDidMount() {
        let categoryName = this.props.match.params.name
        console.log("category mounted")
        this.props.dispatchers.fetchCategoryProducts(categoryName);
    }
    render() {
        let { loaded, categoryProducts, cartItems} = this.props;
        let {addToCart} = this.props.dispatchers; 
        return (
            <Container className='Prodpage'>
                <h2>Products in {this.props.match.params.name} </h2>
                <Row>
                    <Loader loaded={loaded}></Loader>
                    {categoryProducts.map((product, i) => (
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

export default Category;