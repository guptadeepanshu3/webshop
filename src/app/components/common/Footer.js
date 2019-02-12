// Karthik

import React, { Component } from 'react';
import {
    Container, Row, Col
} from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col><p className="footer">Copyrights@2019, Webshop</p></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;