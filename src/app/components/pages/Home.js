// Home Page
// Deepanshu
import React, { Component } from 'react';
import Carousel from '../home/Carousel'
import { Row, Container, Col } from 'reactstrap';
import TopProducts from "../../containers/TopProducts";

class Home extends Component {
    render() {
        return (

            <Container>
                <Row>
                    <Col md='12'>
                        <Carousel ride="carousel" />
                    </Col>
                </Row>
                <Row>
                    <TopProducts />
                </Row>
            </Container>

        );
    }
}

export default Home;