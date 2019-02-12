// Deepanshu
import React, { Component } from 'react';
import Loader from 'react-loader';
import { Row, Container, Col } from 'reactstrap';
import ProductCard from '../common/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class ProductList extends Component {

    componentDidMount() {
        console.log('all product did mount')
        this.props.dispatchers.fetchAllProducts();
    }
    searchProductWithKeyword = (event) => {
        console.log('on change input called')
        this.props.dispatchers.searchProduct(event.target.value)
    }
    render() {
        const { filteredProducts, loaded, cartItems} = this.props;
        let {addToCart} = this.props.dispatchers;
        return (
            <Container className='Prodpage'>
                <Loader loaded={loaded}></Loader>
                <Row>
                    <Col className="search" sm='3'>
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                        <input type='text' placeholder='Search...' onChange={this.searchProductWithKeyword} />
                    </Col>
                </Row>
                <Row>

                    {
                        filteredProducts.map((product, i) => (
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

export default ProductList;