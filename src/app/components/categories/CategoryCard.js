// Deepanshu
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryCard = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.imageUrl} alt={props.name} />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>
                    </CardText>
                    <Button onClick={() => props.history.push(`/categories/${props.name}`)}>More</Button>
                </CardBody>
            </Card>
        </div>
    );
};

CategoryCard.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number.isRequired
};
export default withRouter(CategoryCard);