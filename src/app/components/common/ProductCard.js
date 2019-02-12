// Deepanshu

import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
    let { name, id, ratings, shortDescription, imageUrl } = props.product;
    let { addToCart, cartItem } = props;
    let avgRating = ratings.avgRating;
    let totalReviews = ratings.totalReviews;
    console.log(addToCart, 'product card props');
    const buyNow = () => {
        addToCart(props.product)
        props.history.push('/checkout')
    }
    return (
        <div>
            <Card>
                <Link to={`/products/${id}`}>
                    <CardImg top width="100%" src={imageUrl} alt={name} />
                </Link>
                <CardBody>
                    <Link to={`/products/${id}`}>
                        <CardTitle>{name}</CardTitle>
                    </Link>
                    <CardSubtitle>
                        <StarRatings
                            rating={avgRating}
                            starRatedColor="#777"
                            starDimension="14px"
                            numberOfStars={5}
                            name={name}
                        />
                    </CardSubtitle>
                    <CardText><span id=''>{totalReviews} rated</span> <br />
                        <span id=''>{shortDescription}</span>
                    </CardText>
                    <Button onClick={buyNow}>Buy Now</Button>
                    <Button onClick={() => addToCart(props.product)}>{(cartItem && cartItem.quantity) ? `+${cartItem.quantity} Added` : '+Cart'}</Button>
                </CardBody>
            </Card>
        </div>
    );
};
ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    cartItem: PropTypes.object,
    addToCart: PropTypes.func.isRequired
}
export default withRouter(ProductCard);