// Deepanshu
import React, { Component } from 'react';
import CategoryCard from '../categories/CategoryCard';
import { Row, Container, Col } from 'reactstrap';
class Categories extends Component {
    componentDidMount() {
        this.props.dispatchers.fetchCategories();
    }
    render() {
        let { Categories } = this.props;
        return (
            <Container>
                <h2>Categories</h2>
                <Row>
                    {
                        Categories.map((category, i) => (
                            <Col sm="3" key={category.id}>
                                <CategoryCard name={category.name} imageUrl={category.imageUrl} id={category.id} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default Categories;